import PropTypes from 'prop-types';
import { FilterLabel } from 'components/Filter/Filter.styled';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <FilterLabel>
      <span>Find contacts by name </span>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
