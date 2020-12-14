import React, { useState } from "react";

import { Button, Header, Icon, Modal, Form } from "semantic-ui-react";
import { createSector } from "../services/sectors";

export default function CreateSector({ open, setOpen, factory }) {
  const initialSector = {
    nome: "",
  };

  const [newSector, setNewSector] = useState(initialSector);

  const handleInput = ({ target: { value, id } }) =>
    setNewSector({ ...newSector, [id]: value });

  const handleCreateFactory = async () => {
    await createSector(factory, newSector);

    setNewSector(initialSector);
    setOpen(false);
  };

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
    >
      <Header icon>
        <Icon name="home" />
        Criar novo setor
      </Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label className="label-own">Nome da Setor</label>
            <input
              id="nome"
              placeholder="Last Name"
              className="inputter"
              onChange={handleInput}
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={() => setOpen(false)}>
          <Icon name="remove" /> Cancelar
        </Button>
        <Button color="green" inverted onClick={handleCreateFactory}>
          <Icon name="checkmark" /> Criar
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
