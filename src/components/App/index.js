import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import List from '../List';
import ModalForm from '../ModalForm';
import ModalImg from '../ModalImg';
import ContainerForModal from '../ContainerForModal';
import Filter from '../Filter';

import './index.css';

const App = ({modalState, checkModalState, modalStateImg}) => {
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
      {modalStateImg &&
      <ContainerForModal>
        <ModalImg/>
      </ContainerForModal>
      }
    </Fragment>
  );
};

const mapState = state => ({
  modalState: state.modalState,
  modalStateImg: state.modalStateImg,
});
const mapDispatch = ({
                       modalState: {checkModalState},
                     }) => ({
  checkModalState: () => checkModalState('new'),
});

export default connect(mapState, mapDispatch)(App);
