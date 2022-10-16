import React from 'react';
import { useForm } from 'react-hook-form';
import * as userService from '../../services/user-service';

function UserForm() {
  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm( {mode: 'onTouched'});
  const handleCreateUserSubmit = (data) => {
    console.log(data);
    userService.createUser(data)
    .then(user => console.log('Everything is ok!', user))
    .catch( error => {
      if(error.response?.data?.errors) {
        const { errors } = error.response.data;
        Object.keys(error.response.data.errors)
        .forEach((error) => {
          setError(error, { type: 'custom', message: errors[error].message})
        })
      } 
    })
  }

  return (
<form onSubmit={handleSubmit (handleCreateUserSubmit)}>

    <div className="input-group mb-1">
      <span className="input-group-text"><i className= 'fa fa-tag fa-fw'></i></span>
      <input type="text" className={`form-control ${errors.category ? 'is-invalid' : '' }`} placeholder="Category"
      {...register('category', { 
        required: "The category is required",
        maxLength: {value: 15, message: "The category must be less than 15 characters"}
      })} />
      {errors.category && (<div className="invalid-feedback">{errors.category.message}</div>)}
    </div>
    



    <div className='d-grid mt-2'>
      <button className='btn btn-success' type='submit' disabled={!isValid}> Register </button>
    </div>
</form>
  )
}
export default UserForm