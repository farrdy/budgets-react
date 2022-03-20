import React, { useState } from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

function NewEntryForm({addEntry}) {
const [Description, setDescription] = useState('');
const [Value, setValue] = useState('');
const [isExpense, setIsExpense] = useState(true)

    return (

        <Form unstackable >
           <EntryForm 
           description={Description}
        value={Value}
            setDescription={setDescription}
            setValue={setValue}
            isExpense={isExpense}
            setIsExpense={setIsExpense}
        />
            <Segment compact>
                <Checkbox 
                 toggle label='Is Expense ?'
                 checked={isExpense} 
                 onChange={()=>setIsExpense(oldState=>!oldState)}
                 />
            </Segment>
            <ButtonSaveOrCancel addEntry={addEntry}  Description={Description} Value={Value} isExpense={isExpense}/>

        </Form>

    );
}

export default NewEntryForm;