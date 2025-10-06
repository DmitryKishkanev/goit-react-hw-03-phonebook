import { Formik, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
// import { Component } from 'react';
// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
// import { Form } from 'components/ContactForm/ContactForm.styled';
import { FormContainer } from 'components/ContactForm/ContactForm.styled';

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   static propTypes = {
//     handleAddContact: PropTypes.func.isRequired,
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleAddContact = e => {
//     e.preventDefault();

//     const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{2,}(?:[ '-][a-zA-Zа-яА-ЯёЁ]+)*$/u;
//     const phoneRegex = /^\+?[0-9\s\-()]{7,}$/;

//     const name = this.state.name.trim();
//     const number = this.state.number.trim();

//     // Валидация имени
//     if (!nameRegex.test(name)) {
//       alert(
//         "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
//       );
//       this.setState({
//         name: '',
//       });
//       return;
//     }
//     // Валидация номера
//     if (!phoneRegex.test(number)) {
//       alert(
//         'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
//       );
//       this.setState({
//         number: '',
//       });
//       return;
//     }

//     const contact = {
//       id: nanoid(),
//       name: this.state.name,
//       number: this.state.number,
//     };

//     this.props.handleAddContact(contact);
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <>
//         <Form onSubmit={this.handleAddContact}>
//           <label>
//             <span>Name</span>
//             <input
//               value={this.state.name}
//               onChange={this.handleChange}
//               type="text"
//               name="name"
//               required
//             />
//           </label>

//           <label>
//             <span>Number</span>
//             <input
//               value={this.state.number}
//               onChange={this.handleChange}
//               type="tel"
//               name="number"
//               required
//             />
//           </label>

//           <button type="submit" className="phonebook__button">
//             Добавить
//           </button>
//         </Form>
//       </>
//     );
//   }
// }

// export default ContactForm;

const schema = object({
  name: string().required(),
  number: string().min(7).max(9).required(),
});

const initialValue = {
  name: '',
  number: '',
};

const ContactForm = ({ handleAddContact }) => {
  const onSubmit = (values, { resetForm }) => {
    const contact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    handleAddContact(contact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <FormContainer>
        <label>
          <span>Name</span>
          <Field type="text" name="name" required />
          <ErrorMessage name="name" />
        </label>

        <label>
          <span>Number</span>
          <Field type="tel" name="number" required />
          <ErrorMessage name="number" />
        </label>

        <button type="submit" className="phonebook__button">
          Добавить
        </button>
      </FormContainer>
    </Formik>
  );
};

export default ContactForm;
