import React from 'react';
import {connect} from 'react-redux';

import './index.css';

const ModalImg = ({checkModalImgState, modalStateImg}) => {
  return (
    <div className="modal-wrap modal-wrap-img">
      <section className="modal-bg" onClick={checkModalImgState}/>
      <section className="modal-img">
        <div className="modal__container">
          <img src={modalStateImg} alt=""/>
        </div>
      </section>
    </div>
  )
};

const mapState = state => ({
  items: state.items,
  modalStateImg: state.modalStateImg,
});
const mapDispatch = ({modalStateImg: {checkModalImgState}}) => ({
  checkModalImgState: () => checkModalImgState(null),
});

export default connect(mapState, mapDispatch)(ModalImg);
