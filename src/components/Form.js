// Libraries
import React from 'react'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

// Form
const Form = () => (
  <Card>
    <Column>
      <Fieldset>
        <Label>Soovin</Label>
        <Select>
          <option>Garaaži müüa</option>
          <option>Garaaži osta</option>
          <option>Garaaži rentida</option>
        </Select>
      </Fieldset>

      <TextAreaFieldset>
        <Label>Lühikirjeldus</Label>
        <TextArea placeholder="Paari sõnaga garaazist..." />
      </TextAreaFieldset>
    </Column>
    <Column>
      <Fieldset>
        <Label>Nimi</Label>
        <TextInput placeholder="Mihkel Mutter" />
      </Fieldset>

      <Fieldset>
        <Label>Email</Label>
        <TextInput placeholder="mihkel@mutter.ee" />
      </Fieldset>

      <Fieldset>
        <Label>Telefon</Label>
        <TextInput placeholder="55 555 555" />
      </Fieldset>

      <Button>Saada sõnum</Button>
    </Column>
  </Card>
)

// Styles
const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 700px;
  padding: 32px;
  background-color: ${p => p.theme.white};
  box-shadow: ${p => p.theme.cardShadow};

  @media screen and (min-width: 450px) {
    flex-direction: row;
  }
`

const Column = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  & + & { margin-top: 24px; }

  @media screen and (min-width: 450px) {
    width: 50%;

    & + & { margin-top: 0; }
    &:first-child { margin-right: 12px; }
    &:last-child { margin-left: 12px; }
  }
`

const Fieldset = styled.div``

const Label = styled.label`
  display: block;
  margin-left: 14px;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${p => p.theme.gray700};
`

const InputStyles = css`
  display: block;
  width: 100%;
  padding: 14px;
  font-size: 20px;
  line-height: 20px;
  font-family: ${p => p.theme.mainFont};
  color: ${p => p.theme.gray800};
  background-color: ${p => p.theme.white};
  box-shadow: 0 0 0 1px ${p => p.theme.gray400};
  border: none;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px ${p => p.theme.yellow500};
  }

  &::placeholder {
    color: ${p => p.theme.gray500};
  }
`

const Select = styled.select`
  ${InputStyles}
  margin-bottom: 24px;
  appearance: none;
  border-radius: 0;
  background-image: url('/dropdown.svg');
  background-repeat: no-repeat;
  background-position: center right 16px;

  &::-ms-expand {
    display: none; /* hide the default arrow in ie10 and ie11 */
  }
`

const TextInput = styled.input`
  ${InputStyles}
  height: 48px;
  margin-bottom: 24px;
  line-height: 20px;
  outline: none;
`

const TextAreaFieldset = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const TextArea = styled.textarea`
  ${InputStyles}
  flex: auto;
  resize: none;
  height: 200px;

  @media screen and (min-width: 450px) {
    height: auto;
    flex: 1;
  }
`

const Button = styled.button`
  cursor: pointer;
  transition: background-color 100ms ease;
  border: none;
  outline: none;
  height: 48px;
  padding: 14px;
  line-height: 16px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: ${p => p.theme.yellow400};

  &:hover {
    background-color: ${p => darken(0.1, p.theme.yellow400)};
  }
`

export default Form