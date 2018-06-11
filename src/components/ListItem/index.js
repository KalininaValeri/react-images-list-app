import MaterialIcon from 'material-icons-react';
import React from 'react';
import { connect } from 'react-redux';

import {categories} from '../../helpers/const';

import './index.css';

const ListItem = ({item, removeItem, checkModalState, checkModalImgState}) => {
  return (
    <li
      className="images-item"
      >
      <section className="card">
        <div className="card__header" onDoubleClick={() => checkModalState(item.id)}>
          <div className="card__name">{item.name}</div>
          <div
            className="card__btn-remove"
            onClick={() => removeItem(item.id)}
          >
            <MaterialIcon icon="clear" size={20} color="#bb4f50"/>
          </div>
        </div>
        <div className="card__img-wrap">
          <img
            src={item.file}
            alt={item.name}
            className="card__img"
            onClick={() => checkModalImgState(item.file)}
          />
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
          <b>Автор:</b> {item.autor}<br/>
          <b>Категория:</b> {categories.find(_category => item.category === _category.id).name}<br/>
          <b>Описание:</b> {item.caption}
        </div>
      </section>
    </li>
  );
};

const mapState = state => ({});
const mapDispatch = ({items: {remove}, modalState: {checkModalState}, modalStateImg: {checkModalImgState}}) => ({
  removeItem: id => remove(id),
  checkModalState: id => checkModalState(id),
  checkModalImgState: str => checkModalImgState(str),
});

export default connect(mapState, mapDispatch)(ListItem);
