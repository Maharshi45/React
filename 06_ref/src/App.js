import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.refName = React.createRef();
  }

  retrieve() {
    let name = this.refName.current.value;
    alert("Name is " + name);
    // This gives the focus to input field
    this.refName.current.focus();
  }

  render() {
    return (
      <div>
        <h2>Ref Demo</h2>
        <label>Name: </label>
        <input type="text" defaultValue="test" ref={this.refName} />
        <div>
          <button onClick={() => {this.retrieve()}}>Click</button>
        </div>
      </div>
    );
  }
}

export default App;
