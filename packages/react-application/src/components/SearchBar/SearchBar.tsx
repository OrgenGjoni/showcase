import React, {
  useState,
  useRef,
  useEffect,
  HTMLAttributes,
  HtmlHTMLAttributes,
} from "react";
import "./search_bar.scss";
import { user } from "../../types/user.type";
import SearchResultItem from "./SearchResultItem/SearchResultItem";
import ResultsStatus from "./ResultsStatus/ResultsStatus";
import { GoSearch } from "react-icons/go";

interface SearchBarProps {
  results: user[] | null;
  action: () => void;
  maxToShow: number;
  inputProps?: React.HTMLAttributes<HTMLInputElement>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  results,
  action,
  maxToShow,
  inputProps,
}) => {
  const [matches, setMatches] = useState<user[] | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [totalMatchLen, setTotalMatchLen] = useState<number>(0);
  const searchBarRef = useRef<null | HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (results !== null) {
      const regexp = new RegExp(`${e.target.value}`, "i");
      const match = results.filter((el: user) => el.username.match(regexp));
      setTotalMatchLen(match.length);
      setMatches(e.target.value.length > 0 ? match.slice(0, maxToShow) : null);
    }
  };

  const handleFocus = () => {
    setOpen(true);
  };

  const verifyTarget = (e: MouseEvent) => {
    if (!searchBarRef.current?.contains(e.target as any)) {
      setOpen(false);
    }
  };

  const handleAction = () => {
    action();
    setOpen(false);
  };

  const renderList = (): React.ReactElement<HTMLLIElement>[] | null => {
    if (matches) {
      return matches.map((el: user, idx: number) => (
        <SearchResultItem user={el} key={idx} onClick={handleAction} />
      ));
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("click", verifyTarget);

      return () => {
        document.removeEventListener("click", verifyTarget);
      };
    }
  });

  return (
    <div className="search-bar" onFocus={handleFocus} ref={searchBarRef}>
      <GoSearch className="search-bar__search-icon" />
      <input
        {...inputProps}
        type="text"
        className="search-bar__input"
        onChange={handleChange}
      />
      <ul
        className={`search-bar__results${
          open ? (!!renderList() ? "" : "--hidden") : "--hidden"
        }`}
      >
        {renderList()}
        <ResultsStatus
          resLength={totalMatchLen}
          showPoint={maxToShow}
          showAllAction={() => {
            console.log("Clicked show all");
          }}
        />
      </ul>
    </div>
  );
};

export default SearchBar;
