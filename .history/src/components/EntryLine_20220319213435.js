import React from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';

const EntryLine = ({id, Description, Value, isExpense=false, deleteEntry}) => {
    return (
        <Segment color={isExpense? 'red':'green'}>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>{Description}</Grid.Column>
            <Grid.Column width={3} textAlign='right'>{Value}</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered onClick={()=>deleteEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
};

export default EntryLine;