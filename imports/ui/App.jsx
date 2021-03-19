import React from 'react';
import { TutorialList } from './TutorialList';
import { AddTutorialForm } from './AddTutorialForm';
import { NavBar } from './NavBar';

export const App = () => (
  <div>
    <NavBar/>
    <div className="container">
      <div className="row">
        <h5 className="center tag-line">View and share the best and free tutorials at one place</h5>
      </div>
    </div>
    {/* <AddTutorialForm/> */}
    <TutorialList/>
  </div>
);
