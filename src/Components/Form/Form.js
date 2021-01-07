import React, { useState, useEffect } from 'react';
import { generate } from 'shortid';
import './Form.css';

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    setId(generate());
  }, [name, number]);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ id, name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="phone"
          name="name"
          value={name}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Number
        <input
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
        ></input>
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
