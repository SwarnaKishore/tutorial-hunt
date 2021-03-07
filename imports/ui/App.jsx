import React from 'react';
import { TutorialList } from './TutorialList';
import { AddTutorialForm } from './AddTutorialForm';

export const App = () => (
  <div>
  <h1>Tutorial Hunt</h1>
    <AddTutorialForm/>
    <TutorialList/>
  </div>
);
