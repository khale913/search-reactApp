import React, { useState } from "react";

const SearchBar = (props) => {
  const [inputTerm, setInputTerm] = useState("");
  //   console.log(inputTerm);

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(inputTerm);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>image search</label>
          <input
            type="text"
            value={inputTerm}
            onChange={(e) => setInputTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
