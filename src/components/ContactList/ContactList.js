import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';
import { ContactBox } from 'components/ContactList/ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactBox>
      <ContactItem contacts={contacts} handleDeleteContact={onDeleteContact} />
    </ContactBox>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
