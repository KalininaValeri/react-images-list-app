import MaterialIcon, { colorPallet } from 'material-icons-react';
import React from 'react';
import { connect } from 'react-redux';

import {categories} from '../../helpers/const';

import './index.css';

const ListItem = ({item, removeItem}) => {
  return (
    <li
      className="images-item"
      onDoubleClick={() => console.log(item.id)}
      >
      <section className="card">
        <div className="card__header">
          <div className="card__name">{item.name}</div>
          <div
            className="card__btn-remove"
            onClick={() => removeItem(item.id)}
          >
            <MaterialIcon icon="clear" size={20} color="#bb4f50"/>
          </div>
        </div>
        <div className="card__img-wrap">
          <img src={item.file} alt="" className="card__img"/>
          <div className="card__hover">
            <div
              className="card__remove-mobile"
              onClick={() => removeItem(item.id)}
            >
              Edit
            </div>
            <div
              className="card__remove-mobile"
              onClick={() => removeItem(item.id)}
            >
              Delete
            </div>
          </div>
        </div>
        <div className="card__caption">
          <b>Author:</b> {item.autor}<br/>
          <b>Сategory:</b> {categories.find(_category => item.category === _category.id).name}<br/>
          <b>Сaption:</b> {item.caption}
        </div>
      </section>
    </li>
  );
};

const mapState = state => ({});
const mapDispatch = ({items: {remove}}) => ({
  removeItem: id => remove(id),
});

export default connect(mapState, mapDispatch)(ListItem);
