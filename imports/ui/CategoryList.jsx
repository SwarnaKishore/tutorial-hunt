import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TutorialCategoryCollection } from '../api/TutorialCategoryCollection';

export const CategoryList = () => {
  const categories = useTracker(() => {
    return TutorialCategoryCollection.find({}).fetch();
  });

  return (
        <div className="container" id="categoriesTab">
            <div className="col s12 m10 l6">
                <div className="collection">
                    {categories.map(
                        item => <a  className="collection-item">{item.name}<span className="tutorial-badge right">{item.count}</span></a>
                    )}
                </div>
            </div>
        </div>
  );
};




