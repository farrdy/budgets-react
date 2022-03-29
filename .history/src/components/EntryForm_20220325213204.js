import React, { Fragment } from "react";
import { Form } from "semantic-ui-react";

export default function EntryForm({
  description,
  setDescription,
  setValue,
  value,
}) {
  return (
    <Fragment>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="Smart Watch"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          icon="dollar"
          width={4}
          label="Value"
          iconPosition="left"
          placeholder="100.00"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>
    </Fragment>
  );
}
