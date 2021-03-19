import React, { useState } from 'react';
import { TutorialCollection } from '../api/TutorialCollecion';
 
export const AddTutorialForm = () => {
  const [tutorialName, setTutorialName] = useState("");
  const [tutorialUrl, setTutorialUrl] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (tutorialName.length === 0 || tutorialUrl.length === 0)
         return;

    TutorialCollection.insert({
      name: tutorialName.trim(),
      url: tutorialUrl.trim(),
      createdAt: new Date(),
      score: 0, 
    });
    // Empty form after adding tutorial
    setTutorialName("");
    setTutorialUrl("");
  };
 
  return (
    <form>
      <input
        type="text"
        placeholder="Enter name of the tutorial"
        value={tutorialName}
        onChange={(e) => setTutorialName(e.target.value)}
      />
    <input
        type="text"
        placeholder="Enter url of the tutorial"
        value={tutorialUrl}
        onChange={(e) => setTutorialUrl(e.target.value)}
      />
      <button class="btn waves-effect waves-light" type="submit" onClick={handleSubmit}>Add tutorial <i class="mdi-content-send right"></i></button>
    </form>
  );
};