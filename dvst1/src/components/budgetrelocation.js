import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="number" placeholder="Hotel Cost " name="Hotel Cost " ref={register} />
      <input type="number" placeholder="New Rental Deposit" name="New Rental Deposit" ref={register} />
      <input type="number" placeholder="Utility Connection Fee" name="Utility Connection Fee" ref={register} />
      <input type="number" placeholder="Storage Unit" name="Storage Unit" ref={register} />
      <input type="number" placeholder="New Monthly Rent" name="New Monthly Rent" ref={register} />
      <input type="number" placeholder="Car Rental Cost" name="Car Rental Cost" ref={register} />
      <input type="number" placeholder="Cell Phone Disconnection Fee " name="Cell Phone Disconnection Fee " ref={register} />
      <input type="number" placeholder="Cell Phone Connection Fee " name="Cell Phone Connection Fee " ref={register} />
      <input type="number" placeholder="Moving Truck Rental " name="Moving Truck Rental " ref={register} />
      <input type="number" placeholder="Mental Health Treatment" name="Mental Health Treatment" ref={register} />
      <input type="number" placeholder="Other Expenses" name="Other Expenses" ref={register} />
      <input type="text" placeholder="Other Description" name="Other Description" ref={register} />

      <input type="submit" />
    </form>
  );
}