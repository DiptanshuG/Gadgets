import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";



const options = [
  {
    label: "African",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState([0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label ui pointing red basic label>Enter text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="select a language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};
export default Translate;
