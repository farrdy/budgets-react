import React from 'react';
import { Button } from 'semantic-ui-react';

function ButtonSaveOrCancel({addEntry, description, value}) {
    return (
        <Button.Group style={{ marginTop: 30 }}>
            <Button>Cancel</Button>
            <Button.Or></Button.Or>
            <Button primary onClick={()=>addEntry(description, value)}>Ok</Button>
        </Button.Group>
    );
}

export default ButtonSaveOrCancel;