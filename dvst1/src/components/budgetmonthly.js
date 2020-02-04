import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="number" placeholder="Food Expenses" name="Food Expenses" ref={register({required: true})} />
      <input type="number" placeholder="Transportation" name="Transportation" ref={register} />
      <input type="number" placeholder="Health Insurance" name="Health Insurance" ref={register} />
      <input type="number" placeholder="Car Insurance" name="Car Insurance" ref={register} />
      <input type="number" placeholder="Car Payment" name="Car Payment" ref={register} />
      <input type="number" placeholder="Personal Loans" name="Personal Loans" ref={register} />
      <input type="number" placeholder="Other Expenses" name="Other Expenses" ref={register} />
      <input type="text" placeholder="Other Description" name="Other Description" ref={register} />

      <input type="submit expenses" />
    </form>
  );
}