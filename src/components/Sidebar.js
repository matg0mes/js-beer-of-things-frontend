import React, { useContext, useEffect } from "react";

//Context
import MyContext from "../context/MyContext";

import {
  Grid,
  Image,
  Menu,
  Segment,
  Sidebar,
  SidebarPushable,
} from "semantic-ui-react";

export default function MenuSidebar({ children }) {
  const { visible, setVisible } = useContext(MyContext);

  console.log(children);
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            icon="labeled"
            inverted
            // onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as="a">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/beer-of-things-b8f92.appspot.com/o/general%2F867bb2ba36487ac42bf3e96325f359e4.png?alt=media&token=5b52bf9f-6ad5-441e-895e-0947ebfa14a1"
                size="small"
                circular
              />
              Fabrica Guarulhos
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>{children}</Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
}
