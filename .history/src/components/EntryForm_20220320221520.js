import React, { Fragment } from 'react'
import { Form } from 'semantic-ui-react'

export default function EntryForm() {
  return (
      <Fragment>
          <Form.Group>
    <Form.Input
        icon='tags'
        width={12}
        label='Description'
        placeholder='New Shiny Thing gjkfghjfk'
        value={Description}
        onChange={(event)=>setDescription(event.target.value)}
    />
    <Form.Input
        icon='dollar'
        width={4}
        label='Value'
        iconPosition='left'
        placeholder='100.00'
        value={Value}
        onChange={(event)=>setValue(event.target.value)}
    />
</Form.Group>

      </Fragment>
      )
}
