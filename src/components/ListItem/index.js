import React from 'react';
import { connect } from 'react-redux';
import './index.css';

const ListItem = ({item}) => {
        return (
            <li className="images-item">
                <section className="card">
                    <div className="card__header">
                        <div className="card__name">{item.name}</div>
                        <div className="card__btn-remove">Delete</div>
                    </div>
                    <div className="card__img-wrap">
                        <img src={item.file} alt="" className="card__img"/>
                        <div className="card__hover">
                            <div className="card__remove-mobile">Delete</div>
                        </div>
                    </div>
                </section>
            </li>
        )
};

const mapState = state => ({});
const mapDispatch = ({}) => ({});

export default connect(mapState, mapDispatch)(ListItem);
