import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

import ListItem from '../ListItem';
import ModalForm from '../ModalForm';

import './index.css';

const App = ({modalState, checkModalState}) => {
    return (
        <Fragment>
            <header className="header">
                <div className="logo"/>
                <h1 className="title">Images</h1>
            </header>
            <div className="container">
                <button className="btn-new" onClick={checkModalState}>New</button>
                <ul className="images-list">
                    <ListItem />
                </ul>
            </div>
            {modalState && <ModalForm/>}
        </Fragment>
    )
};

const mapState = state => ({
    modalState: state.modalState,
});
const mapDispatch = ({
                         modalState: {checkModalState}
                     }) => ({
    checkModalState: () => checkModalState(true),
});

export default connect(mapState, mapDispatch)(App);
