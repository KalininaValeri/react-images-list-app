import React, {Component} from 'react';
import {connect} from 'react-redux';
import { v4 } from 'uuid';

import './index.css';

class FormModify extends Component {
  state = {
    name: '',
    fileName: 'File',
    file: null,
    formInvalid: false,
  };
  getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  onClickSubmit = event => {
    event.preventDefault();
    const {
      state: {
        name, file,
      },
      props: {
        add,
        checkModalState,
      }
    } = this;

    if (!name || !file) {
      this.setState({
        formInvalid: true,
      });
    }

    add({
      id: v4(),
      name,
      file,
    });
    checkModalState();
  };
  onChangeName = event => {
    this.setState({
      name: event.target.value,
    });
  };
  onChangeFile = event => {
    if (!event) {
      return;
    }

    const {
      target: {
        files,
      }
    } = event;

    const file = files[0];

    this.setState({
      fileName: file.name,
    });

    this.getBase64(file)
      .then(
        data => {
          this.setState({
            file: data,
            fileInvalid: false,
            fileError: '',
          });
        }
      )
      .catch(error => {
        alert(error); // Error: Not Found
      });
  };

  render() {
    const {
      onClickSubmit,
      onChangeName,
      onChangeFile,
      props: {
        checkModalState,
      },
      state: {
        name,
        fileName,
        formInvalid,
      }
    } = this;

    return (
            <form className="form" onSubmit={onClickSubmit}>
              <div className="form__title">New image</div>
              <input
                type="text"
                className="form__name"
                placeholder="Title"
                onChange={onChangeName}
                value={name}
              />
              <label htmlFor="formFile" className="form__label">{fileName}</label>
              <input
                id="formFile"
                type="file"
                className="form__file"
                onChange={onChangeFile}
              />
              <div className="btn-group">
                <button type="button" className="form__btn from__close" onClick={checkModalState}>Close</button>
                <button type="submit" onClick={onClickSubmit} className="form__btn form__add">Add</button>
              </div>
              {formInvalid && <div className="form__invalid">Заполните все поля формы</div>}
            </form>

    )
  }
}

const mapState = state => ({});
const mapDispatch = ({modalState: {checkModalState}, items: {add}}) => ({
  checkModalState: () => checkModalState(false),
  add: object => add(object),
});

export default connect(mapState, mapDispatch)(FormModify);
