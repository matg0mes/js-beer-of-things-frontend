import React, { useContext, useEffect } from 'react'

//Context
import MyContext from '../context/MyContext';

import {
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react';

export default function MenuSidebar() {
  const { visible, setVisible } = useContext(MyContext);

  useEffect(() => {
    setTimeout( () => setVisible(true), 3000);
  },[]);

  return (
      <Grid columns={1}>
        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='push'
              icon='labeled'
              inverted
              onHide={() => setVisible(false)}
              vertical
              visible={visible}
              width='thin'
            >
              <Menu.Item as='a'>
                <Icon name='home' />
                Home
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='gamepad' />
                Games
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='camera' />
                Channels
              </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher>
              <Segment basic>
                <Header as='h3'>Application Content</Header>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
  )
}