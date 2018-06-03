import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

import ListItem from '../ListItem';
import ModalForm from '../ModalForm';

import './index.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <header className="header">
                    <div className="logo"/>
                    <h1 className="title">Images</h1>
                </header>
                <div className="container">
                    <button className="btn-new">New</button>
                    <ul className="images-list">
                        <ListItem />
                    </ul>
                </div>
                <ModalForm/>
            </Fragment>
        );
    }
}

const mapState = state => ({});
const mapDispatch = ({}) => ({});

export default connect(mapState, mapDispatch)(App);
