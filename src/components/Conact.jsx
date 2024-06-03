
import  { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j1no95u",
        "template_v52mnce",
        form.current,
        "eEq1jmXRMWlT5AXYs"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label className="text-white">Name</label>
        <input className="text-white"type="text" name="user_name" />
        <label className="text-white" >Email</label>
        <input className="text-white"type="email" name="user_email" />
        <label className="text-white">Message</label>
        <textarea className="text-white"name="message" />
        <input className="font-bold text-black"type="submit" value="SEND" />
      </form>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid #F5D10D;

      &:focus {
        border: 2px solid #F5D10D;
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid #F5D10D;

      &:focus {
        border: 2px solid #F5D10D;
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #F5D10D;
      {'' /* color: white; */}
      text-weight: bold;
      border: none;
    }
  }
`;
