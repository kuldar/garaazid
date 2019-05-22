// Libraries
import React, { useState } from 'react'
import styled from 'styled-components'

// Assets
import Check from '../svgs/check.svg'

// Filter
const Filter = ({ label, isActive }) => {
  const [active, setActive] = useState(isActive)
  return (
    <CheckboxGroup isActive={active} onClick={() => setActive(!active)}>
      <Checkbox isActive={active}>{active && <Check />}</Checkbox>
      <Label isActive={active}>{label}</Label>
    </CheckboxGroup>
  )
}

// Filters
const Filters = () => (
  <Container>
    <FilterGroup>
      <Filter label="Müüa" isActive />
      <Filter label="Rendile" isActive />
      <Filter label="Ostu soov" isActive />
      <Filter label="Üüri soov" isActive />
    </FilterGroup>
    <select>
      <option>Uuemand ees</option>
      <option>Odavamad ees</option>
      <option>Suuremad ees</option>
    </select>
  </Container>
)

// Styles
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
`

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.isActive ? p.theme.yellow500 : p.theme.gray300};
  height: 20px;
  width: 20px;
  margin-right: 8px;
`

const Label = styled.label`
  display: block;
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  color: ${p => p.isActive ? p.theme.gray900 : p.theme.gray500};
  cursor: pointer;
`

const CheckboxGroup = styled.div`
  display: flex;
  margin-right: 24px;
  cursor: pointer;

  &:hover {
    ${Checkbox} { background-color: ${p => p.isActive ? p.theme.yellow500 : p.theme.gray400};  }
    ${Label} { color: ${p => p.isActive ? p.theme.gray900 : p.theme.gray600};  }
  }
`

export default Filters