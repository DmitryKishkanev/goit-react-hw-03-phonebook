import PropTypes from 'prop-types';
import { ContactEl } from 'components/ContactItem/ContactItem.styled';

const ContactItem = ({ contacts, handleDeleteContact }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <ContactEl key={id}>
          <div>
            <p>
              {name}: {number}
            </p>

            <button onClick={() => handleDeleteContact(id)}>Delete</button>
          </div>
        </ContactEl>
      ))}
    </>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
