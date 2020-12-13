import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Charts from "./Charts";

import {
  PieConfig,
  DoughnutConfig,
  PolarConfig,
  RadarConfig,
  LineConfig,
} from "../data/mock";

export default function Home() {
  return (
    <Container className={"main-container"}>
      <Grid>
        <Grid.Row stretched>
          <Grid.Column width={7}>{Charts(PieConfig)}</Grid.Column>

          <Grid.Column width={7}>{Charts(DoughnutConfig)}</Grid.Column>
        </Grid.Row>

        <Grid.Row stretched>
          <Grid.Column width={7}>{Charts(PolarConfig)}</Grid.Column>

          <Grid.Column width={7}>{Charts(RadarConfig)}</Grid.Column>
        </Grid.Row>

        <Grid.Row stretched>
          <Grid.Column width={14}>{Charts(LineConfig)}</Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
