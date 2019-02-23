import React, { Component } from "react";
import { Box, Button } from "grommet";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <Box>
        <Link to="/">
          <Button label="Home" />
        </Link>
        <Link to="/portfolio">
          <Button label="Portfolio" />
        </Link>
        <Link to="/random">
          <Button label="Random" />
        </Link>
      </Box>
    );
  }
}

export default Sidebar;
