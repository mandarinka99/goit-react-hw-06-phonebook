import React, { Component } from "react";
import s from "./CreateContactForm.module.css";
import { connect } from "react-redux";
import {createContact} from "../../redux/contacts/contacts-actions";

class CreateContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const find = this.props.contacts.find(
      (contact) => contact.name.toLowerCase() === this.state.name.toLowerCase()
    );
    if (find) return alert(`${this.state.name} is already in contacts`);
    this.props.createContactDispatch(this.state.name, this.state.number);
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className={s.formWrapper}>
        <form onSubmit={this.onSubmit} className={s.form}>
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
              onChange={this.onHandleChange}
            />
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
          <button type="submit" className={s.button}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createContactDispatch: (name, number) => dispatch(createContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateContactForm);
