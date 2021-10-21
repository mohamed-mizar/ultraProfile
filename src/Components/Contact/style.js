import styled from 'styled-components';

export const ContactSection = styled.div`
  padding: 50px 0;
  text-align: center;
`

export const DropTitle = styled.div`
  font-size: 60px;
  margin-bottom: 30px;
`

export const Span = styled.span`
  font-weight: normal;
`

export const Form = styled.form`
  width: 70%;
  margin: auto;
`

  export const Input = styled.input`
  box-sizing: border-box;
  outline: 0;
  padding: 5px;
  margin-bottom: 10px;
  width: 49%;
  width : ${props => props.className === 'sub' ? "100%" : ''};
  width : ${props => props.type === 'submit' ? "60%" : ''};
  background : ${props => props.type === 'submit' ? "#fff" : ''};
  border : ${props => props.type === 'submit' ? "1px solid #ccc" : ''};
  color : ${props => props.type === 'submit' ? "#888" : ''};
  cursor : ${props => props.type === 'submit' ? "pointer" : ''};
  float: ${props => props.type === 'text' ? "left" : ""};
`

export const FormInput = styled.div`
  overflow: hidden;
  
  
`

// .drop form .form-input input {
//   width: 49%;
// }

// .drop form .form-input input[type=text] {
//   float: left
// }

// .drop form .form-input input[type=email] {
//   float: right
// }

// .drop form input.sub {
//   width: 100%;
// }

export const Textarea = styled.textarea`
  width: 100%;
  outline: 0;
  background: #ccc;
`

// .drop form input[type=submit] {
//   width: 60%;
//   background: #fff;
//   border: 1px solid #ccc;
//   color: #888;
//   cursor: pointer
// }