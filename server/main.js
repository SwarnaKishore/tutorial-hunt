import { Meteor } from 'meteor/meteor';
import { TutorialCollection } from '../imports/api/TutorialCollecion';
import { TutorialCategoryCollection } from '../imports/api/TutorialCategoryCollection';


function insertTutorialCategory(item) {
  TutorialCategoryCollection.insert({id: item.id, name: item.name, count: item.count});
}

// const insertTutorial = (name) => TutorialCollection.insert({ name: name });

Meteor.startup(() => {
  if (TutorialCategoryCollection.find().count() === 0) {
    [
      {id : 'AndroidDevelopment', name: 'Android development', count: 0},
      {id : 'Angular', name: 'Angular', count: 0},
      {id : 'Backbone', name: 'Backbone', count: 0},
      {id : 'Bootstrap', name: 'Bootstrap', count: 0},
      {id : 'C', name: 'C Language', count: 0},
      {id : 'CPlusPlus', name: 'C++', count: 0},
      {id : 'CSharp', name: 'C#', count: 0},
      {id : 'Django', name: 'Django', count: 0},
      {id : 'EmberJs', name: 'EmberJs', count: 0},
      {id : 'Express', name: 'Express Js', count: 0},
      {id : 'Git', name: 'Git', count: 0},
      {id : 'Go', name: 'Go', count: 0},
      {id : 'Hadoop', name: 'Hadoop', count: 0},
      {id : 'HTMLandCSS', name: 'HTML & CSS', count: 0},
      {id : 'SCSS', name: 'SCSS', count: 0},
      {id : 'iOSAndSwift', name: 'iOS and Swift', count: 0},
      {id : 'Java', name: 'Java', count: 0},
      {id : 'Javascript', name: 'Javascript', count: 0},
      {id : 'Jquery', name: 'Jquery', count: 0},
      {id : 'MaterialDesign', name: 'MaterialDesign', count: 0},
      {id : 'MEAN', name: 'MEAN', count: 0},
      {id : 'Meteor', name: 'Meteor', count: 0},
      {id : 'SQL', name: 'SQL', count: 0},
      {id : 'NodeJs', name: 'NodeJs', count: 0},
      {id : 'Perl', name: 'Perl', count: 0},
      {id : 'PHP', name: 'PHP', count: 0},
      {id : 'Polymer', name: 'Polymer', count: 0},
      {id : 'Python', name: 'Python', count: 0},
      {id : 'React', name: 'React', count: 0},
      {id : 'React Native', name: 'React Native', count: 0},
      {id : 'RubyOnRails', name: 'Ruby On Rails', count: 0},
      {id : 'Ruby', name: 'Ruby', count: 0},
      {id : 'Wordpress', name: 'Wordpress', count: 0},
    ].forEach(insertTutorialCategory)
  }
});
