import s from "./ContactsList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-actions";

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  let newFilter = contacts;
  if (filter) {
    newFilter = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  
  return (
    <div>
      <ul className={s.list}>
        {newFilter.map((contact) => (
          <li className={s.item} key={contact.id}>
            {contact.name} {contact.number}{" "}
            <button
              className={s.button}
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;