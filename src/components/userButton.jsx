import React, { useState } from "react";
import Button from "@mui/material/Button";
export const FollowButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      {isClicked ? "Unfollow" : "Follow"}
    </Button>
  );
};

export const AddButton = () => {
  const [buttonText, setButtonText] = useState("Add Friend");

  const handleClick = () => {
    setButtonText("Request Sent");
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      {buttonText}
    </Button>
  );
};
