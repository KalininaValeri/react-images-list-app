import React, {Component} from 'react';
import {connect} from 'react-redux';

import './index.css';

class ModalForm extends Component {
    render() {
        return (
            <div className="modal-wrap">
                <section className="modal-bg"/>
                <section className="modal">
                    <div className="modal__container">
                        <form className="form">
                            <div className="form__title">New image</div>
                            <input type="text" className="form__name" placeholder="Title"/>
                            <label htmlFor="formFile" className="form__label" />
                            <input id="formFile" type="file" className="form__file"/>
                            <div className="btn-group">
                                <button className="form__btn from__close">Close</button>
                                <button className="form__btn form__add">Add</button>
                            </div>

                        </form>
                    </div>
                </section>

            </div>
        )
    }
}

const mapState = state => ({});
const mapDispatch = ({}) => ({});

export default connect(mapState, mapDispatch)(ModalForm);
