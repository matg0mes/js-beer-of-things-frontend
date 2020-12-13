import React from "react";
import { Container, Grid, Segment } from "semantic-ui-react";
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
    <Grid columns="equal" divided>
      <Grid.Row>
        <Grid.Column>
          <Segment size="mini">{Charts(PieConfig)}</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment size="mini">{Charts(DoughnutConfig)}</Segment>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Segment size="mini">{Charts(PolarConfig)}</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment size="mini">{Charts(RadarConfig)}</Segment>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Segment size="mini">{Charts(LineConfig)}</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
