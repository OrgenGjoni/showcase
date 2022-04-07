import React from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";

interface ResultsStatusProps {
  showPoint: number;
  resLength: number;
}
const ResultsStatus: React.FC<ResultsStatusProps> = ({
  showPoint,
  resLength,
}) => {
  const NoResMsg = () => (
    <li>
      <span>
        No results matching <HiOutlineEmojiSad />{" "}
      </span>{" "}
    </li>
  );
  const ShowAllMsg = () => (
    <li>
      <span>Show all results</span>{" "}
    </li>
  );
  return (
    <>
      {resLength > showPoint && <ShowAllMsg />}
      {resLength < 1 && <NoResMsg />}
    </>
  );
};

export default ResultsStatus;
