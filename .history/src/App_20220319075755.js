import {Container, Header } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import { useState } from 'react';

function App() {

 const [entries, setEntries]=useState(initialEntries)
  return (
    <Container>
      <MainHeader />
      <DisplayBalance title="Your Balance" Value="28,955.00" Color="black" size="small" />
      <DisplayBalances/>    
      <Header as='h3'>History</Header>   
      {entries.map((entry)=>
      <EntryLine 
        Description={entry.Description}
       Value={entry.value} 
       isExpense={entry.isExpense}/>
      )}     
      
     
      <Header as='h3'>
        Add New Transaction
      </Header>
      <NewEntryForm />
    </Container>
  );
}

export default App;

var initialEntries=[
  {
    Description:'Work Income',
    Value:"50000" ,
    isExpense:false
  },
  {
    Description:'Electricity',
    Value:"600" ,
    isExpense:true
  },
  {
    Description:'Grossary',
    Value:"2000" ,
    isExpense:true
  },
  {
    Description:'Transportation',
    Value:"3500" ,
    isExpense:true
  }
]


