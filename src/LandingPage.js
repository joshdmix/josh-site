import React, { Component } from "react";
import { Grommet, Box, Heading } from "grommet";
import { grommet } from "grommet/themes";

class LandingPage extends Component {
  render() {
    return (
      <Grommet theme={grommet}>
        <Box>
          <Heading>Landing</Heading>
        </Box>
      </Grommet>
    );
  }
}

export default LandingPage;
