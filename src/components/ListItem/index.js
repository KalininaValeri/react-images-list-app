import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import img1 from '../../img/pick1.jpg';

class ListItem extends Component {
    render() {
        return (
            <li className="images-item">
                <section className="card">
                    <div className="card__header">
                        <div className="card__name">Flower</div>
                        <div className="card__btn-remove">Delete</div>
                    </div>
                    <div className="card__img-wrap">
                        <img src={img1} alt="" className="card__img"/>
                        <div className="card__hover">
                            <div className="card__remove-mobile">Delete</div>
                        </div>
                    </div>
                </section>
            </li>
        )
    }
}

const mapState = state => ({});
const mapDispatch = ({}) => ({});

export default connect(mapState, mapDispatch)(ListItem);
