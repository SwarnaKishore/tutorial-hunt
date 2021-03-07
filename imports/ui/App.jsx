import React from 'react';
import { TutorialList } from './TutorialList';
import { AddTutorialForm } from './AddTutorialForm';
import { NavBar } from './NavBar';

export const App = () => (
  <div>
    <NavBar/>
    <AddTutorialForm/>
    <TutorialList/>
  </div>
);
