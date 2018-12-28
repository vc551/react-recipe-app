import React, { Component } from 'react';
import './RecipeApp.css';
import Recipe from './Recipe';

class RecipeApp extends Component {
  render() {
    return (
      <div className="RecipeApp">
        <Recipe 
          title="Pasta" 
          ingredients={['flour','water']}
          instructions="Mix Ingredients"
          img="pasta.jpg"
        />
      </div>
    );
  }
}

export default RecipeApp;
