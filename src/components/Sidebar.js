import React, { useContext, useEffect, useState } from "react";

//Context
import MyContext from "../context/MyContext";

import CreateFactory from "./CreateFactory";
import { Grid, Image, Menu, Segment, Sidebar, Button } from "semantic-ui-react";
import { getFactories } from "../services/factory";

export default function MenuSidebar({ children }) {
  const [openCreate, setOpenCreate] = useState(false);
  const [factories, setFactories] = useState([]);
  const { visible, setVisible } = useContext(MyContext);
  const [activeFactory, setActiveFactory] = useState({});

  const handleFactories = async () => {
    const { data } = await getFactories();
    setFactories(data);
    console.log(data);
  };

  const handleInitialize = () => {
    const [firstFactory] = factories;
    setActiveFactory(firstFactory);
  };

  useEffect(() => {
    setVisible(true);
    handleFactories();
    handleInitialize();
  }, []);

  useEffect(() => {
    handleFactories();
  }, [openCreate]);

  return (
    <Grid columns={1} className={"sidebar-own"}>
      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            icon="labeled"
            inverted
            vertical
            visible={visible}
            width="thin"
          >
            {factories.map((factory) => (
              <Menu.Item
                as="a"
                active={activeFactory && activeFactory.id === factory.id}
              >
                <Image
                  onClick={() => setActiveFactory(factory)}
                  src="https://firebasestorage.googleapis.com/v0/b/beer-of-things-b8f92.appspot.com/o/general%2F867bb2ba36487ac42bf3e96325f359e4.png?alt=media&token=5b52bf9f-6ad5-441e-895e-0947ebfa14a1"
                  size="medium"
                  circular
                />

                {factory.nome}
              </Menu.Item>
            ))}

            <Menu.Item as={Button} className="button-add-space">
              <Button
                onClick={() => setOpenCreate(true)}
                className="button-add"
              >
                +
              </Button>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>{children}</Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
      <CreateFactory
        open={openCreate}
        setOpen={setOpenCreate}
        setActiveFactory={setActiveFactory}
      />
    </Grid>
  );
}
