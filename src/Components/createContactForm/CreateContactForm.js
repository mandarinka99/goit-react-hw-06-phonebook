import React, { Component } from "react";
import s from "./CreateContactForm.module.css";
import PropTypes from "prop-types";

class CreateContactForm extends Component {

  state = {
    name: '',
    number: ''
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.number, this.state.name);
    this.setState({
      name: '',
      number: ''
    })
  }

  render() {
    const {name, number} = this.state;

    return (
      <div className={s.formWrapper}>
      <form onSubmit={this.onSubmit}
      className={s.form}>
        <label className={s.label}>
          Name
          <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        onChange={this.onHandleChange}/>
        </label>
        <label className={s.label}>
          Phone
          <input
          className={s.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.onHandleChange}
          />
  
        </label>
        <button type="submit"
        className={s.button}>
          Add contact
        </button>
      </form>
      </div>
    );
  }
  
}

CreateContactForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default CreateContactForm;