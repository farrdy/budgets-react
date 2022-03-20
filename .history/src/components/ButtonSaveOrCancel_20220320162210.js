import React from 'react';
import { Button } from 'semantic-ui-react';

function ButtonSaveOrCancel({addEntry, Description, Value, isExpense}) {
    return (
        <Button.Group style={{ marginTop: 30 }}>
            <Button>Cancel</Button>
            <Button.Or></Button.Or>
            <Button primary onClick={()=>addEntry(Description, Value, isExpense)}>Ok</Button>
        </Button.Group>
    );
}

export default ButtonSaveOrCancel;