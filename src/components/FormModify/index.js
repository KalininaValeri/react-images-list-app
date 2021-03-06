import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

import { categories } from '../../helpers/const';

import './index.css';

class FormModify extends Component {
  state = {
    id: null,
    name: '',
    fileName: 'Изображение',
    file: null,
    autor: '',
    category: 1,
    caption: '',
    formInvalid: false,
  };

  componentWillMount() {
    const {
      props: {
        modalState,
        items,
      },
    } = this;

    if (modalState !== 'new') {
      const item = items.find(_item => modalState === _item.id);
      this.setState({
        id: item.id,
        name: item.name,
        fileName: item.name,
        file: item.file,
        autor: item.autor,
        category: item.category,
        caption: item.caption,
      });
    }
  }

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
        name, file, autor, category, caption, id,
      },
      props: {
        add,
        checkModalState,
        edit,
      },
    } = this;

    if (!name || !file || !autor || !caption) {
      this.setState({
        formInvalid: true,
      });
      return false;
    }

    if (!id) {
      add({
        id: v4(),
        name,
        autor,
        file,
        caption,
        category,
      });
    }

    if (id) {
      edit({
        id,
        name,
        autor,
        file,
        caption,
        category,
      });
    }

    checkModalState();
  };
  onChangeName = event => {
    this.setState({
      name: event.target.value,
      formInvalid: false,
    });
  };
  onChangeAutor = event => {
    this.setState({
      autor: event.target.value,
      formInvalid: false,
    });
  };
  onChangeCategory = event => {
    this.setState({
      category: event.target.value,
      formInvalid: false,
    });
  };
  onChangeCaption = event => {
    this.setState({
      caption: event.target.value,
      formInvalid: false,
    });
  };
  onChangeFile = event => {
    if (!event) {
      return;
    }

    const {
      target: {
        files,
      },
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
        },
      )
      .catch(error => {
        alert(error); // Error: Not Found
      });
  };

  render() {
    const {
      onClickSubmit,
      onChangeName,
      onChangeAutor,
      onChangeFile,
      onChangeCategory,
      onChangeCaption,
      props: {
        checkModalState,
        modalState,
      },
      state: {
        name,
        fileName,
        formInvalid,
        autor,
        category,
        caption,
      },
    } = this;

    return (
      <form className="form" onSubmit={onClickSubmit}>
        <div className="form__title">{modalState === 'new' ? 'Создать новое' : 'Редактировать'} изображение</div>
        <input
          type="text"
          className="form__name"
          placeholder="Название"
          onChange={onChangeName}
          value={name}
        />
        <input
          type="text"
          className="form__name"
          placeholder="Автор"
          onChange={onChangeAutor}
          value={autor}
        />
        <select
          className="form__name"
          onChange={onChangeCategory}
          value={category}
        >
          {categories.map(_category => <option value={_category.id} key={_category.id}>{_category.name}</option>)}
        </select>
        <label htmlFor="formFile" className="form__label">{fileName}</label>
        <input
          id="formFile"
          type="file"
          className="form__file"
          onChange={onChangeFile}
        />
        <textarea
          className="form__name from__textarea"
          placeholder="Описание..."
          onChange={onChangeCaption}
          value={caption}
        />

        <div className="btn-group">
          <button type="button" className="form__btn from__close" onClick={checkModalState}>Закрыть</button>
          <button type="submit" onClick={onClickSubmit} className="form__btn form__add">Сохранить</button>
        </div>
        {formInvalid && <div className="form__invalid">Заполните все поля формы</div>}
      </form>

    );
  }
}

const mapState = state => ({
  modalState: state.modalState,
  items: state.items,
});
const mapDispatch = ({modalState: {checkModalState}, items: {add, edit}}) => ({
  checkModalState: () => checkModalState(false),
  add: object => add(object),
  edit: object => edit(object),
});

export default connect(mapState, mapDispatch)(FormModify);
