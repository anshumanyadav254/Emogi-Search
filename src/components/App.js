import React, { useState } from "react";
import "../styles.css";
import { FilterEmoji } from "./FilterEmoji";

function App() {
  const [searchEmoji, setEmoji] = useState("");

  const handleSearch = (event) => {
    setEmoji(event.target.value);
  };

  const checkSearchText = () => {
    if (searchEmoji !== "") {
      return <FilterEmoji getEmoji={searchEmoji}></FilterEmoji>;
    }
  };

  return (
    <div className="ui container">
      <h1>Search Your Emoji Here</h1>
      <div className="ui input">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search your emoji here..."
        />
      </div>
      {checkSearchText()}
    </div>
  );
}

export default App;
