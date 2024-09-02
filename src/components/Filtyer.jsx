import styled from "styled-components";

const FilterContainer = styled.div`
    display: flex;
    margin: 25px 0 0 50px;
    align-items: center;
    gap: 15px;
`;
const FilterClue = styled.p`
    font-size: 22px;
`;
const FilterInput = styled.input`
    border-radius: 10px;
    width: 220px;
    height: 40px;
    padding: 10px;
`;

export default ({ changeFilter }) => <>
    <FilterContainer>
        <FilterClue>Фільтр по імені</FilterClue>
        <FilterInput name="filter" onInput={(e) => changeFilter(e.target.value)} />
    </FilterContainer>
</>