import React from "react";
import "./results_status.scss";
import { HiOutlineEmojiSad } from "react-icons/hi";

interface ResultsStatusProps {
  showPoint: number;
  resLength: number;
  showAllAction: () => void;
}
const ResultsStatus: React.FC<ResultsStatusProps> = ({
  showPoint,
  resLength,
  showAllAction,
}) => {
  const NoResMsg = () => (
    <li className="results-status">
      <span>
        No results matching{" "}
        <HiOutlineEmojiSad className="results-status__icon" />{" "}
      </span>{" "}
    </li>
  );
  const ShowAllMsg = () => (
    <li className="results-status" onClick={showAllAction}>
      <span className="results-status__more">Show all results</span>{" "}
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
