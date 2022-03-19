import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

const DisplayBalances = () => {
    return (
        <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title="Income" Value="50,555.00" Color="green" />
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance title="Expenses" Value="21,600.00" Color="red" /></Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
};

export default DisplayBalances;