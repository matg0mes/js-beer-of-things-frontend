import React, { useState } from "react";

import { Button, Header, Icon, Modal, Form } from "semantic-ui-react";
import { createFactory } from "../services/factory";

export default function CreateFactory({ open, setOpen, setActiveFactory }) {
  const initialFactory = {
    regiao: "",
    nome: "",
  };

  const [newFactory, setNewFactory] = useState(initialFactory);

  const handleInput = ({ target: { value, id } }) =>
    setNewFactory({ ...newFactory, [id]: value });

  const handleCreateFactory = async () => {
    const { data } = await createFactory(newFactory);

    setNewFactory(initialFactory);
    setActiveFactory(data);
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
        <Icon name="factory" />
        Criar nova Fábrica
      </Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label className="label-own">Nome da Fábrica</label>
            <input
              id="nome"
              placeholder="Last Name"
              className="inputter"
              onChange={handleInput}
            />
          </Form.Field>
          <Form.Field>
            <label className="label-own">Região</label>
            <input
              id="regiao"
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
