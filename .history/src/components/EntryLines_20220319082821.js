import React from 'react';
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';

const EntryLines = ({entries}) => {
    return (
      <Container>
      {entries.map((entry)=>
      <EntryLine 
      key={entry.id}
        Description={entry.Description}
        Value={entry.Value} 
        isExpense={entry.isExpense}
       />
      )}           
      </Container>
    );
};

export default EntryLines;