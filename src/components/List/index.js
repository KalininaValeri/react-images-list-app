import React from 'react';
import { connect } from 'react-redux';

import ListItem from '../ListItem';

import './index.css';

const List = ({items, filterByName, filterByCategory}) => {
  if (!items.length) {
    return false;
  }

  const filtersItemsByCategory = filterByCategory ? items.filter(item => item.category === parseInt(filterByCategory)) : items;
  const filtersItems = filtersItemsByCategory.filter(item => item.name.toLowerCase().indexOf(filterByName.toLowerCase()) >=0 );

  return (
        <ul className="images-list">
          {
            filtersItems.length ? filtersItems.map(item => <ListItem key={item.id} item={item} />) : ''
          }
        </ul>
  )
};

const mapState = state => ({
  items: state.items,
  filterByName: state.filterByName,
  filterByCategory: state.filterByCategory,
});
const mapDispatch = ({
                       modalState: {checkModalState}
                     }) => ({
  checkModalState: () => checkModalState('new'),
});

export default connect(mapState, mapDispatch)(List);
