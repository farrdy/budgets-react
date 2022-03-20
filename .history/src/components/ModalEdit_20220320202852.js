import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

function ModalEdit({isOpen}) {
  return (
    <Modal open={isOpen}>

        <Modal.Header>Edit Entry</Modal.Header>
        <Modal.Content>
            <Modal.Description>
                Something Else
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button>Close</Button>
        </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit