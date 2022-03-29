import React from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

function NewEntryForm({addEntry,description,value,setDescription,setValue,isExpense,setIsExpense}) {

    return (

        <Form unstackable >
           <EntryForm 
           description={description}
            value={value}
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
            <ButtonSaveOrCancel addEntry={addEntry}  Description={description} Value={value} isExpense={isExpense}/>

        </Form>

    );
}

export default NewEntryForm;