import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TutorialCollection } from '../api/TutorialCollecion';

export const TutorialList = () => {
  const tutorials = useTracker(() => {
    // sort by newest added tutorials first
    return TutorialCollection.find({},{sort: {createdAt: -1}}).fetch();
  });

  return (
    <div>
      <ul>{tutorials.map(
        item => <li>
                    <div>{item.name} </div>
                    <div>{item.url} </div>
                </li>
      )}</ul>
    </div>
  );
};
