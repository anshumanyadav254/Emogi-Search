import React, { useState, useEffect } from "react";
import EmojiList from "../emoji-list.json";
// import { DisplayEmoji } from './DisplayEmoji';

export const FilterEmoji = ({ getEmoji }) => {
  const [emojiData, setEmojiData] = useState([]);

  const filterEmoji = () => {
    const filteredEmoji = EmojiList.filter((emoji) => {
      if (emoji.keywords.includes(getEmoji)) {
        return emoji;
      }
    });
    console.log(filteredEmoji);
    setEmojiData(filteredEmoji);
  };

  useEffect(() => {
    filterEmoji();
  }, [getEmoji]);

  const checkemoji = () => {
    if (emojiData.length !== 0) {
      return (
        <ul className="emoji_list">
          {emojiData.map((icon) => {
            return (
              <li>
                {icon.symbol}
                <span>{icon.title}</span>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <h3>Fetching Data ...</h3>;
    }
  };

  return <div>{checkemoji()}</div>;
};
