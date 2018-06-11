import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import List from '../List';
import ModalForm from '../ModalForm';
import ContainerForModal from '../ContainerForModal';
import Filter from '../Filter';

import './index.css';

const App = ({modalState, checkModalState}) => {
  return (
    <Fragment>
      <header className="header">
        <div className="logo"/>
        <h1 className="title">Картинки</h1>
      </header>
      <div className="container">
        <Filter/>
        <button className="btn-new" onClick={checkModalState}>Новая картинка</button>
        <List/>
      </div>
      {modalState &&
      <ContainerForModal>
        <ModalForm/>
      </ContainerForModal>
      }
    </Fragment>
  );
};

const mapState = state => ({
  modalState: state.modalState,
});
const mapDispatch = ({
                       modalState: {checkModalState},
                     }) => ({
  checkModalState: () => checkModalState('new'),
});

export default connect(mapState, mapDispatch)(App);
