"use client"; // Indicates this component is a client component

import React, { useState } from 'react';

// Define types for form data and errors
interface FormData {
  wallet_address: string;
}

interface FormErrors {
  wallet_address?: string;
}

const CreateUserForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    wallet_address: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.wallet_address) {
      newErrors.wallet_address = 'Wallet address is required';
    } else if (!/^0x[a-fA-F0-9]{40}$/.test(formData.wallet_address)) {
      newErrors.wallet_address = 'Invalid wallet address format';
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form Data: ', formData);
      // Reset form
      const response = await fetch('http://localhost:3000/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ wallet_address: formData.wallet_address }), // Send the wallet address in the body
      });

      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      const data = await response.json();
      console.log(data);
      setFormData({ wallet_address: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 w-full max-w-md mx-auto">
      <div>
        <label htmlFor="wallet_address">Wallet Address</label>
        <input
          type="text"
          id="wallet_address"
          name="wallet_address"
          value={formData.wallet_address}
          onChange={handleChange}
          placeholder="Enter your wallet address"
        />
        {errors.wallet_address && <span style={{ color: 'red' }}>{errors.wallet_address}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateUserForm;
