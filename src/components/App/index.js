import React, {Fragment} from 'react';
import { connect } from 'react-redux';

import ListItem from '../ListItem';
import ModalForm from '../ModalForm';
import ContainerForModal from '../ContainerForModal';

import './index.css';

const App = ({modalState, checkModalState, items}) => {
    return (
        <Fragment>
            <header className="header">
                <div className="logo"/>
                <h1 className="title">Images</h1>
            </header>
            <div className="container">
                <button className="btn-new" onClick={checkModalState}>New</button>
                <ul className="images-list">
                    {
                        items.length ? items.map(item => <ListItem key={item.id} item={item} />) : ''
                    }
                </ul>
            </div>
            {modalState &&
            <ContainerForModal>
            <ModalForm/>
            </ContainerForModal>
            }
        </Fragment>
    )
};

const mapState = state => ({
    modalState: state.modalState,
    items: state.items,
});
const mapDispatch = ({
                         modalState: {checkModalState}
                     }) => ({
    checkModalState: () => checkModalState('new'),
});

export default connect(mapState, mapDispatch)(App);
