import React, { useContext, useEffect, useState } from "react";

import history from "../services/history";
import CreateSectors from "./CreateSectors";
import { Grid, Segment, Button, Header, Icon } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { getSectors } from "../services/sectors";

export default function Sector() {
  const [sectors, setSectors] = useState([]);
  const [openCreate, setOpenCreate] = useState(false);

  const { factory } = useParams();

  const renderSectors = async () => {
    const { data } = await getSectors(factory);
    console.log(data);
    setSectors(data);
  };

  console.log(sectors);

  useEffect(() => {
    renderSectors();
  }, [openCreate, factory]);

  return (
    <Grid columns={3} className="main-container">
      <Grid.Row>
        <Grid.Column>
          <Segment style={{ textAlign: "center" }}>
            <Button onClick={() => setOpenCreate(true)} className="button-add">
              +
            </Button>
          </Segment>
        </Grid.Column>
        {sectors.map((sector) => (
          <Grid.Column>
            <Segment
              padded="very"
              style={{
                height: "140px",
                color: "#fff",
                fontSize: "18px",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => history.push(`/sector/${sector.id}/devices`)}
            >
              {sector.nome}
            </Segment>
          </Grid.Column>
        ))}
      </Grid.Row>
      <CreateSectors
        open={openCreate}
        setOpen={setOpenCreate}
        factory={factory}
      />
    </Grid>
  );
}
