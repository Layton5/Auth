import React, { useState } from "react";
import Button from "@mui/material/Button";
import { addFriend } from "../services/api";

export const FollowButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
  };

  return (
    <Button variant="contained" onClick={handleClick} size="small">
      {isClicked ? "Unfollow" : "Follow"}
    </Button>
  );
};

export const AddButton = (userId, type) => {
  const [buttonText, setButtonText] = useState("Add Friend");

  const handleClick = (userId, type) => {
    addFriend(userId, type);
    console.log(userId, type);

    // setIsClicked((prevIsClicked) => !prevIsClicked);
    // setButtonText("Request Sent");
  };

  return (
    <Button variant="contained" onClick={handleClick} size="small">
      {buttonText}
    </Button>
  );
};

export const RequestButton = () => {
  const [buttonState, setButtonState] = useState({
    isPrimary: true,
    text: "Add Friend",
  });

  const handleClick = () => {
    setButtonState((prevState) => ({
      isPrimary: !prevState.isPrimary,
      text: !prevState.isPrimary ? "Add Friend" : "Remove",
    }));
  };

  return (
    <Button
      variant="contained"
      size="small"
      sx={{
        backgroundColor: buttonState.isPrimary ? "blue" : "red",
      }}
      onClick={handleClick}
    >
      {buttonState.text}
    </Button>
  );
};
