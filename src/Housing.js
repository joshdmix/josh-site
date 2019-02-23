import React, { Component } from "react";
import { Grommet, Box, Heading } from "grommet";
import { grommet } from "grommet/themes";

class PortfolioPage extends Component {
  render() {
    return (
      <Grommet theme={grommet}>
        <Box>
          <Heading>Portfolio</Heading>
        </Box>
      </Grommet>
    );
  }
}

export default PortfolioPage;
