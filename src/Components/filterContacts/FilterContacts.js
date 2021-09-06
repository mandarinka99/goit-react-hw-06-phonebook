import s from "./FilterContactForm.module.css";
import { useDispatch } from "react-redux";
import {filterChange} from '../../redux/contacts/contacts-actions';

const FilterContacts = () => {
  const dispatch = useDispatch();
  const onHandleChange = e => {
    const { value } = e.target;
    dispatch(filterChange(value));
  };
  return (
    <div>
      <form className={s.form} onSubmit={e => e.preventDefault()}>
        <label className={s.label}>
          Find contacts by name
          <input
          className={s.input}
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={onHandleChange}
          />
        </label>
      </form>
    </div>
  );
}

export default FilterContacts;