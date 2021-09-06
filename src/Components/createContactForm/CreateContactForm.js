
import s from "./CreateContactForm.module.css";
import { useSelector, useDispatch} from "react-redux";
import {createContact} from "../../redux/contacts/contacts-actions";
import { useState } from "react";

const initialState = {
  name: '',
  number: ''
};

const CreateContactForm = ({onChange}) => {
  const [contact, setContact] = useState({...initialState});
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setContact({...contact, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const find = contacts.find(
      (newContact) => newContact.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (find) return alert(`${contact.name} is already in contacts`);
    dispatch(createContact(contact.name, contact.number));
    setContact({
      name: "",
      number: "",
    });
  };

  return (
    <div className={s.formWrapper}>
    <form onSubmit={onSubmit}
    className={s.form}>
      <label className={s.label}>
        Name
        <input
        className={s.input}
        type="text"
        name="name"
        value={contact.name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      onChange={onHandleChange}/>
      </label>
      <label className={s.label}>
        Phone
        <input
        className={s.input}
          type="tel"
          name="number"
          value={contact.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={onHandleChange}
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

export default CreateContactForm;