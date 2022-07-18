import React from 'react';
import './App.css';

class WelcomeComponent extends React.Component {
  render() {
    return (
      // We can empty tags to satisfy react's requirement of having root element
      // And also avoid having multiple unnecessary <div> tags
      // Empty tags are called as react fragements
      <>
        <h1>Welcome to React!!</h1>
      </>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      // It is better to write React.Fragement tag than empty tags     
      <React.Fragment>
        <WelcomeComponent />
        <WelcomeComponent />
        <WelcomeComponent />
      </React.Fragment>
    );
  }
}