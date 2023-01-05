import propTypes from 'prop-types';
import s from './ContactList.module.css';

export const ContactList = ({ contacts, handleDeleteContact }) => (
  <div>
    <ul className={s.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id} className={s.contactList__item}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={s.contactList__btn}
            onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDeleteContact: propTypes.func.isRequired,
};