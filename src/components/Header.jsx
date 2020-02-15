import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light" style={styles.header}>
        <span className="navbar-brand mb-0 h1" style={styles.font}>
          Facebook
        </span>
      </nav>
    );
  }
}

export default Header;

const styles = {
  header: {
    backgroundColor: "#4A90E2"
  },
  font: {
    color: "#fff"
  }
};
