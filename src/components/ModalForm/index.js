import React from 'react';
import {connect} from 'react-redux';
import { v4 } from 'uuid';

import FormModify from '../FormModify';

import './index.css';

const ModalForm = ({checkModalState}) => {
        return (
            <div className="modal-wrap">
                <section className="modal-bg" onClick={checkModalState}/>
                <section className="modal">
                    <div className="modal__container">
                      <FormModify/>
                    </div>
                </section>
            </div>
        )
    };

const mapState = state => ({});
const mapDispatch = ({modalState: {checkModalState}}) => ({
    checkModalState: () => checkModalState(false),
});

export default connect(mapState, mapDispatch)(ModalForm);
