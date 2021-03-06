import React, { Fragment, useState } from 'react';
import {  Grid, Icon, Segment } from 'semantic-ui-react';
import ModalEdit from './ModalEdit';

const EntryLine = ({id, Description, Value, isExpense=false, deleteEntry}) => {
const [isOpen, setIsOpen] = useState(false)
    return (
      <Fragment>    
      <Segment color={isExpense? 'red':'green'}>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>{Description}</Grid.Column>
            <Grid.Column width={3} textAlign='right'>{Value}</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered  onClick={()=>setIsOpen(true)}/>
              <Icon name='trash' bordered onClick={()=>deleteEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen}/>
      </Fragment>

    );
};

export default EntryLine;