import styled from '@emotion/styled';
import { Form } from 'formik';

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 500px;
//   height: 260px;
//   padding: 15px;
//   margin-bottom: 35px;

//   border-radius: 4px;

//   background-color: #d4f2ff;
//   box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
//     1px 4px 6px rgba(0, 0, 0, 0.16);

//   label {
//     display: flex;
//     flex-direction: column;
//     width: 270px;
//     margin-bottom: 30px;
//   }

//   span {
//     margin-bottom: 5px;

//     font-weight: 400;
//     font-size: 18px;
//     line-height: 1.19;
//     letter-spacing: 0.03em;
//   }

//   input {
//     height: 33px;
//     padding: 3px;

//     border-radius: 4px;
//     background-color: white;

//     outline: none;
//     cursor: pointer;

//     font-weight: 400;
//     font-size: 18px;
//     line-height: 1.19;
//     letter-spacing: 0.03em;
//     color: black;
//   }

//   button {
//     width: 150px;
//   }
// `;

// export { Form };

const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 260px;
  padding: 15px;
  margin-bottom: 35px;

  border-radius: 4px;

  background-color: #d4f2ff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  label {
    display: flex;
    flex-direction: column;
    width: 270px;
    margin-bottom: 30px;
  }

  span {
    margin-bottom: 5px;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }

  input {
    height: 33px;
    padding: 3px;

    border-radius: 4px;
    background-color: white;

    outline: none;
    cursor: pointer;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    letter-spacing: 0.03em;
    color: black;
  }

  button {
    width: 150px;
  }
`;

export { FormContainer };
