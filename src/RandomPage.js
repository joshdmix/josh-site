import React, { Component } from "react";
import { Grommet, Box, Heading } from "grommet";
import { grommet } from "grommet/themes";

class RandomPage extends Component {
  render() {
    return (
      <Grommet theme={grommet}>
        <Box>
          <Heading>Random</Heading>
        </Box>
      </Grommet>
    );
  }
}

export default RandomPage;
