import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

function NewEntryForm(props) {
const [Description, setDescription] = useState('');
const [Value, setValue] = useState('');

    return (

        <Form unstackable >
            <Form.Group>
                <Form.Input
                    icon='tags'
                    width={12}
                    label='Description'
                    placeholder='New Shiny Thing gjkfghjfk'
                />
                <Form.Input
                    icon='dollar'
                    width={4}
                    label='Value'
                    iconPosition='left'
                    placeholder='100.00'
                />
            </Form.Group>
            <ButtonSaveOrCancel />

        </Form>

    );
}

export default NewEntryForm;