import React, { useState } from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

function NewEntryForm({addEntry}) {
const [Description, setDescription] = useState('');
const [Value, setValue] = useState('');
const [isExpense, setIsExpense] = useState(false)

    return (

        <Form unstackable >
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
            <Segment compact>
                <Checkbox toggle label='Is Expense ?'/>
            </Segment>
            <ButtonSaveOrCancel addEntry={addEntry}  Description={Description} Value={Value}/>

        </Form>

    );
}

export default NewEntryForm;