import { Grid, Container, Header, Segment, Icon, } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';

import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance'

function App() {
  return (
    <Container>
      <MainHeader />
      <DisplayBalance title="Your Balance" Value="28,955.00" Color="black" size="small" />

    
      <Header as='h3'>History</Header>
      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$10,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='green'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something else</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$10,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something else</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$10,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as='h3'>
        Add New Transaction
      </Header>
      <NewEntryForm />
    </Container>
  );
}

export default App;


