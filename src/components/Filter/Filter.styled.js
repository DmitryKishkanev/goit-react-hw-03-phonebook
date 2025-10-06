import styled from '@emotion/styled';

const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: 315px;
  margin-bottom: 30px;

  span {
    margin-bottom: 10px;

    font-weight: 400;
    font-size: 22px;
    line-height: 1.19;
    letter-spacing: 0.03em;
    color: black;
  }

  input {
    width: 220px;
    height: 33px;
    padding: 3px;

    border-radius: 4px;
    background-color: white;

    outline: none;
    cursor: pointer;

    color: black;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }
`;

export { FilterLabel };
