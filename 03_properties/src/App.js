import React from 'react';

// Class component
/* class OSComponent extends React.Component {
  render() {
    let i = 7;
    return (
      // this.props.os is the property of OSComponent
      // and this.props.children is value between start and end tag of OSComponent(eg. Microsoft)
      // We can also pass any JS expression
      <>
        <h1>Operating System: {this.props.os} {i}</h1>
        <h3>Developed by {this.props.children}</h3>
      </>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <OSComponent os="Ubuntu">
          <div>
            Canonical
          </div>
        </OSComponent>
        <OSComponent os="Windows">Microsoft</OSComponent>
        <OSComponent os="Mac">Apple</OSComponent>
      </React.Fragment>
    );
  }
} */

// Functional component with ES6 and destructuring of prop object
const OSComponent = ({os, children}) => (
  <>
    <h1>Operating System: {os}</h1>
    <h3>Developed by {children}</h3>
  </>
);

export default function App() {
  return (
    <React.Fragment>
      <OSComponent os="Ubuntu">
        <div>
          Canonical
        </div>
      </OSComponent>
      <OSComponent os="Windows">Microsoft</OSComponent>
      <OSComponent os="Mac">Apple</OSComponent>
    </React.Fragment>
  );
}