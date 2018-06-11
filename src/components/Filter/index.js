import React from 'react';
import { connect } from 'react-redux';

import {categories} from '../../helpers/const';

import './index.css';

const Filter = ({editFilterByName}) => {
  return (
    <section className="filter">
      <input
        type="text"
        className="form__name filter__input"
        placeholder="Поиск по названию..."
        onChange={event => editFilterByName(event.target.value)}
      />
      <select
        className="form__name filter__input"
      >
        {categories.map(_category => <option value={_category.id} key={_category.id}>{_category.name}</option>)}
      </select>
    </section>
  );
};

const mapState = state => ({});
const mapDispatch = ({filterByName: {editFilterByName}}) => ({
  editFilterByName: name => editFilterByName(name),
});

export default connect(mapState, mapDispatch)(Filter);
