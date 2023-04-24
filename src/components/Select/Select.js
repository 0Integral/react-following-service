import { SelectContainer, SelectStyled } from './Select.styled';

export const Select = ({ handleSelectChange }) => {
  return (
    <SelectContainer>
      <SelectStyled onChange={handleSelectChange}>
        <option value={'All'}>All</option>
        <option value={'Follow'}>Follow</option>
        <option value={'Following'}>Following</option>
      </SelectStyled>
    </SelectContainer>
  );
};
