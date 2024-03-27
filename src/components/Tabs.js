import React, { useState } from "react";
import "./style.css";
import ReactBrackets from "./ReactBrackets";
import ReactTournamentsBrackets from "./ReactTournamentsBrackets";

function Tabs() {
  const [tab, setTab] = useState(0);
  return (
    <>
      <div className="tabs-container">
        <div className="tabs">
          <button
            className={tab === 0 ? `active` : ""}
            onClick={() => setTab(0)}
          >
            React Brackets
          </button>
          <button
            className={tab === 1 ? `active` : ""}
            onClick={() => setTab(1)}
          >
            React Tournaments Brackets
          </button>
        </div>
      </div>
      {tab === 0 ? <ReactBrackets /> : <ReactTournamentsBrackets />}
    </>
  );
}

export default Tabs;
