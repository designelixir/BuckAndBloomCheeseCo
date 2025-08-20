"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mpwlgjkk");
  if (state.succeeded) {
      return <p>Thanks for contacting us! We'll get in touch with you within 3-5 business days.</p>;
  }
  return (
    <form onSubmit={handleSubmit} style={{marginTop: '50px'}}>
        <div className='flex-center-start flex-column'>
      <label htmlFor="name">
        Your Name:
      </label>
      <input
        id="name"
        type="name" 
        name="name"
      />
      </div>
        <div className='flex-center-start flex-column'>
      <label htmlFor="email">
        Your Email Address:
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      </div>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <div className='flex-center-start flex-column'>
       <label htmlFor="message">
        Message:
      </label>
      <textarea
        id="message"
        name="message"
      />
      </div>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <div className='flex-center-center'>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

