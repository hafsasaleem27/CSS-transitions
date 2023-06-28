import React, { Component } from "react";
import ReactDOM from "react-dom";

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
  }

  showModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        {/* <Modal show={this.state.isModalOpen} closed={this.closeModal} /> */}
        {/* <Backdrop show={this.state.isModalOpen} closed={this.closeModal} /> */}
        {ReactDOM.createPortal(
          <Modal show={this.state.isModalOpen} closed={this.closeModal} />,
          document.getElementById("modal-root")
        )}
        {ReactDOM.createPortal(
          <Backdrop show={this.state.isModalOpen} closed={this.closeModal} />,
          document.getElementById("backdrop-root")
        )}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
