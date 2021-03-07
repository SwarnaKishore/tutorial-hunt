import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TutorialCollection } from '../api/TutorialCollecion';

export const TutorialList = () => {
  const tutorials = useTracker(() => {
    return TutorialCollection.find().fetch();
  });

  return (
    <div>
      <ul>{tutorials.map(
        item => <li>{item.name}</li>
      )}</ul>
    </div>
  );
};
