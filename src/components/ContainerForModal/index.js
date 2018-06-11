import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

const modal = document.getElementById('modal-form');

class ContainerForModal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    const {el, onPressEsc} = this;
    modal.appendChild(el);
    document.addEventListener('keydown', onPressEsc);
  }

  componentWillUnmount() {
    const {el, onPressEsc} = this;
    modal.removeChild(el);
    document.removeEventListener('keydown', onPressEsc, false);
  }

  onPressEsc = (event) => {
    const {
      props: {
        checkModalState,
        checkModalImgState,
      }
    } = this;
    if (event.keyCode === 27) {
      checkModalState();
      checkModalImgState();
    }
  };

  render() {
    const {
      el,
      props: {
        children,
      }
    } = this;

    return ReactDOM.createPortal(
      children,
      el,
    );
  }}

const mapState = state => ({});
const mapDispatch = ({modalState: {checkModalState}, modalStateImg: {checkModalImgState}}) => ({
  checkModalState: () => checkModalState(null),
  checkModalImgState: () => checkModalImgState(null),
});

export default connect(mapState, mapDispatch)(ContainerForModal);
