import {Container, Header } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from './components/DisplayBalances';
import { useState } from 'react';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';

function App() {

 const [entries, setEntries]=useState(initialEntries)
 
 function deleteEntry(id) {
  const result=entries.filter(entry=>entry.id!==id)
  setEntries(result);
}
function addEntry(Description, Value, isExpense){
  const result=  entries.concat({id: entries.length+1, 
     Description:Description,
     Value:Value,
     isExpense
    });

      console.log(`result`, result);
      console.log(`entries`, entries);
     setEntries(result);
}
  return (
    <Container>
      <MainHeader />
      <DisplayBalance title="Your Balance" Value="28,955.00" Color="black" size="small" />
      <DisplayBalances/>    
      <Header as='h3'>History</Header>   
      <EntryLines entries={entries} deleteEntry={deleteEntry}/>
      <Header as='h3'>
        Add New Transaction
      </Header>
      <NewEntryForm addEntry={addEntry} />`
      <ModalEdit/>`
    </Container>
    
  );
}

export default App;

var initialEntries=[
  {
    id:1,
    Description:'Work Income',
    Value:"50000" ,
    isExpense:false
  },
  {
    id:2,
    Description:'Electricity',
    Value:"600" ,
    isExpense:true
  },
  {
    id:3,
    Description:'Grossary',
    Value:"2000" ,
    isExpense:true
  },
  {
    id:4,
    Description:'Transportation',
    Value:"3500" ,
    isExpense:true
  }
]


