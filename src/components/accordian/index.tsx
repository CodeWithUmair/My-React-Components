//single selection
//multiple selection

import React from "react";
import { useState } from "react";
import data from "./data";
import "./styles.css";

type DataItem = {
  id: number | string;
  question: string;
  answer: string;
};

export default function Accordian() {
  const [selected, setSelected] = useState<number | null>(null);
  const [enableMultiSelection, setEnableMultiSelection] =
    useState<boolean>(false);
  const [multiple, setMultiple] = useState<number[]>([]);

  function handleSingleSelection(getCurrentId: number) {
    setSelected((prevSelected) =>
      getCurrentId === prevSelected ? null : getCurrentId
    );
  }

  function handleMultiSelection(getCurrentId: number) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple);
  }

  console.log(selected, multiple);
  return (
    <div className="acc-wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection ? (
          <p>Enabled Multi Selection ✅</p>
        ) : (
          <p> Enable Multi Selection</p>
        )}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem: DataItem) => (
            <div className="item rounded" key={dataItem.id as string}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id as number)
                    : () => handleSingleSelection(dataItem.id as number)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id as number) !== -1 && (
                    <div className="acc-content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content">{dataItem.answer}</div>
                  )}
              {/* {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
}
