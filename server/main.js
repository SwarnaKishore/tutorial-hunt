import { Meteor } from 'meteor/meteor';
import { TutorialCollection } from '../imports/api/TutorialCollecion';

// function insertLink({ title, url }) {
//   LinksCollection.insert({title, url, createdAt: new Date()});
// }

// const insertTutorial = name => TutorialCollection.insert({ name: name });

Meteor.startup(() => {
  // if (TutorialCollection.find().count() === 0) {
  //   [
  //     'First Task',
  //     'Second Task',
  //     'Third Task',
  //     'Fourth Task',
  //     'Fifth Task',
  //     'Sixth Task',
  //     'Seventh Task'
  //   ].forEach(insertTutorial)
  // }
});
