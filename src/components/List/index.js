import MaterialIcon from 'material-icons-react';
import React, {Fragment} from 'react';
import { connect } from 'react-redux';

import ListItem from '../ListItem';

import './index.css';
import { categories } from '../../helpers/const';

const List = ({items, filterByName}) => {
  return (
        <ul className="images-list">
          {
            items.length ? items.map(item => <ListItem key={item.id} item={item} />) : ''
          }
        </ul>
  )
};

const mapState = state => ({
  items: state.items,
  filterByName: state.filterByName,
});
const mapDispatch = ({
                       modalState: {checkModalState}
                     }) => ({
  checkModalState: () => checkModalState('new'),
});

export default connect(mapState, mapDispatch)(List);
