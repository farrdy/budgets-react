import React from "react";
import { Button, Modal } from "semantic-ui-react";
import NewEntryForm from "./NewEntryForm";

function ModalEdit({
  isOpen,
  setIsOpen,
  editEntry,
  Description,
  Value,
  setDescription,
  setValue,
  isExpense,
  setIsExpense,
}) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        {/* <Modal.Description>
                Something Else
            </Modal.Description> */}
        <NewEntryForm
          description={Description}
          value={Value}
          setDescription={setDescription}
          setValue={setValue}
          isExpense={isExpense}
          setIsExpense={setIsExpense}
          editEntry={editEntry}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
        <Button onClick={() => setIsOpen(false)} primary>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
