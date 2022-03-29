import { Container, Header } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import { useEffect, useState } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [Description, setDescription] = useState("");
  const [Value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].Description = Description;
      newEntries[index].Value = Value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
  }, [isOpen]);

  useEffect(() => {
    let totalExpenses = 0;
    let totalIncomes = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        totalExpenses += Number(entry.Value);

        return totalExpenses;
      } else {
        totalIncomes += Number(entry.Value);

        return totalIncomes;
      }
    });
    setTotalExpense(totalExpenses);
    setTotalIncome(totalIncomes);
    setTotal(Number(totalIncome - totalExpense));
  }, [entries]);

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  function addEntry() {
    const result = entries.concat({
      id: entries.length + 1,
      Description: Description,
      Value: Value,
      isExpense: isExpense,
    });

    console.log(`result`, result);
    console.log(`entries`, entries);
    setEntries(result);
  }

  function resetEntry() {
    setDescription("");
    setValue("");
    setIsExpense(true);
  }

  function editEntry(id) {
    console.log(`Edit entry with id ${id}`);
    if (id) {
      const index = entries.findIndex((entr) => entr.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.Description);
      setValue(entry.Value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
      console.log(Description, Value);
    }
  }
  return (
    <Container>
      <MainHeader />
      <DisplayBalance
        title="Your Balance"
        Value={total}
        Color="black"
        size="small"
      />
      <DisplayBalances totalIncome={totalIncome} totalExpense={totalExpense} />
      <Header as="h3">History</Header>
      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        setIsOpen={setIsOpen}
        editEntry={editEntry}
      />
      <Header as="h3">Add New Transaction</Header>
      <NewEntryForm
        addEntry={addEntry}
        description={Description}
        value={Value}
        setDescription={setDescription}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        Description={Description}
        Value={Value}
        setDescription={Description}
        setValue={Value}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    Description: "Work Income",
    Value: 5000,
    isExpense: false,
  },
  {
    id: 2,
    Description: "Electricity",
    Value: 600,
    isExpense: true,
  },
  {
    id: 3,
    Description: "Grossary",
    Value: 200,
    isExpense: true,
  },
  {
    id: 4,
    Description: "Transportation",
    Value: 350,
    isExpense: true,
  },
];