// Libraries
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { darken } from 'polished'
// import { navigate } from 'gatsby'

// Encode request body to match the content-type
const encodeBody = data => Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join('&')

// Form
const Form = () => {

  // Create some states
  const [formSuccess, setFormSuccess] = useState(false)
  const [missingInputs, setMissingInputs] = useState([])
  const [formData, setFormData] = useState({
    type: '',
    message: '',
    name: '',
    email: '',
    phone: ''
  })

  // Check for empty fields
  const validateForm = data => {
    const invalidInputs = []

    if (data.type === '') { invalidInputs.push('type') }
    if (data.message === '') { invalidInputs.push('message') }
    if (data.name === '') { invalidInputs.push('name') }
    if (data.email === '' || !(/^.+@.+\..+$/.test(data.email)) ) { invalidInputs.push('email') }

    if (invalidInputs.length === 0) {
      return true
    } else {
      setMissingInputs(invalidInputs)
      return false
    }
  }

  // Update state on input change
  const handleInputChange = e => setFormData({...formData, [e.target.name]: e.target.value })

  // Submit form to Netlify backend
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target

    if (validateForm(formData)) {
      fetch('/', {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeBody({
          'form-name': form.getAttribute('name'), ...formData
        })
      }).then(() => {
        setMissingInputs([])
        setFormSuccess(true)
        // setFormData({
        //   type: '',
        //   message: '',
        //   name: '',
        //   email: '',
        //   phone: ''
        // })
      }).catch(error => alert(error))
    }
  }

  return (
    <>
      <Card
        id="contact"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="winnie-pooh"
        onSubmit={handleSubmit}>

        <HiddenInput name="winnie-pooh" />
        <input type="hidden" name="form-name" value="contact" />

        <Column>
          <Fieldset>
            <Label isHighlighted={missingInputs.includes('type')}>Soovin</Label>
            <Select
              required
              id="type"
              name="type"
              onChange={handleInputChange}>
              <Option value='' disabled selected>Vali..</Option>
              <Option value='hindamine'>Garaaži hinnata</Option>
              <Option value='müük'>Garaaži müüa</Option>
              <Option value='ost'>Garaaži osta</Option>
              <Option value='rent'>Garaaži rentida</Option>
            </Select>
          </Fieldset>

          <TextAreaFieldset>
            <Label isHighlighted={missingInputs.includes('message')}>Lühikirjeldus</Label>
            <TextArea
              id="message"
              name="message"
              onChange={handleInputChange}
              placeholder="Paari sõnaga garaažist..." />
          </TextAreaFieldset>
        </Column>
        <Column>
          <Fieldset>
            <Label isHighlighted={missingInputs.includes('name')}>Nimi</Label>
            <TextInput
              name="name"
              onChange={handleInputChange}
              placeholder="Mihkel Mutter" />
          </Fieldset>

          <Fieldset>
            <Label isHighlighted={missingInputs.includes('email')}>Email</Label>
            <TextInput
              name="email"
              onChange={handleInputChange}
              placeholder="mihkel@mutter.ee" />
          </Fieldset>

          <Fieldset>
            <Label>Telefon</Label>
            <TextInput
              name="phone"
              onChange={handleInputChange}
              placeholder="55 555 555" />
          </Fieldset>

          <Button type="submit">Saada sõnum</Button>
        </Column>
      </Card>

      { formSuccess && <FormSuccess>Aitäh ühendust võtmast! Vastan esimesel võimalusel. 👋</FormSuccess> }
    </>
  )
}

// Styles
const Card = styled.form`
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

const HiddenInput = styled.input`
  display: none;
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
  color: ${p => p.isHighlighted ? p.theme.yellow600 : p.theme.gray700};
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

  &:invalid { color: ${p => p.theme.gray500}; }
`

const Option = styled.option``

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

const FormSuccess = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 16px;
  font-weight: bold;
  text-align: center;
  background-color: ${p => p.theme.yellow400};
  color: ${p => p.theme.gray800};
`

export default Form