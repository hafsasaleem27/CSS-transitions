import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  };

  showModal = () => {
    this.setState({ isModalOpen: true });
  }

  closeModal = () => {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        {this.state.isModalOpen && <Modal closed={this.closeModal}/>}
        {this.state.isModalOpen && <Backdrop closed={this.closeModal}/>}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
