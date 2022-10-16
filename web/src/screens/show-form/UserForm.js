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
      <input type="text" className={`form-control ${errors.name ? 'is-invalid' : '' }`} placeholder="name"
      {...register('name', { 
        required: "The name is required",
        maxLength: {value: 20, message: "The name must be less than 20 characters"}
      })} />
      {errors.name && (<div className="invalid-feedback">{errors.name.message}</div>)}
    </div>

    <div className="input-group mb-1">
      <span className="input-group-text"><i className= 'fa fa-tag fa-fw'></i></span>
      <input type="text" className={`form-control ${errors.city ? 'is-invalid' : '' }`} placeholder="city"
      {...register('city', { 
        required: "The city is required",
        maxLength: {value: 20, message: "The name of your city must be less than 20 characters"}
      })} />
      {errors.city && (<div className="invalid-feedback">{errors.city.message}</div>)}
    </div>
    

    <div className="input-group mb-1">
      <span className="input-group-text"><i className= 'fa fa-tag fa-fw'></i></span>
      <input type="text" className={`form-control ${errors.age ? 'is-invalid' : '' }`} placeholder="age"
      {...register('age', { 
        required: "The age is required",
        maxLength: {value: 2, message: "his website is only for humans :)"}
      })} />
      {errors.age && (<div className="invalid-feedback">{errors.age.message}</div>)}
    </div>

    <div className="input-group mb-1">
      <span className="input-group-text"><i className= 'fa fa-tag fa-fw'></i></span>
      <input type="text" className={`form-control ${errors.description ? 'is-invalid' : '' }`} placeholder="description"
      {...register('description', { 
        maxLength: {value: 500, message: "We don't want to read the bible"}
      })} />
      {errors.description && (<div className="invalid-feedback">{errors.description.message}</div>)}
    </div>
    
    <div className="input-group mb-1">
      <span className="input-group-text"><i className= 'fa fa-tag fa-fw'></i></span>
      <input type="text" className={`form-control ${errors.alterego ? 'is-invalid' : '' }`} placeholder="alterego"
      {...register('alterego', { 
        required: "The alterego is required",
        maxLength: {value: 20, message: "The name of your alterego must be less than 20 characters"}
      })} />
      {errors.alterego && (<div className="invalid-feedback">{errors.alterego.message}</div>)}
    </div>

    <div className="input-group mb-1">
      <span className="input-group-text"><i className= 'fa fa-tag fa-fw'></i></span>
      <input type="text" className={`form-control ${errors.repertoire ? 'is-invalid' : '' }`} placeholder="repertoire"
      {...register('repertoire', { 
        required: "Your music repertoire is required",
        maxLength: {value: 50, message: "Write here your most favorites only"}
      })} />
      {errors.repertoire && (<div className="invalid-feedback">{errors.repertoire.message}</div>)}
    </div>

    <div className="input-group mb-1">
      <span className="input-group-text"><i className= 'fa fa-tag fa-fw'></i></span>
      <input type="text" className={`form-control ${errors.band ? 'is-invalid' : '' }`} placeholder="band"
      {...register('band', { 
        required: "The name of your favourite band or singuer is required",
        maxLength: {value: 20, message: "only one!"}
      })} />
      {errors.band && (<div className="invalid-feedback">{errors.band.message}</div>)}
    </div>

    <div className="input-group mb-1">
      <span className="input-group-text"><i className= 'fa fa-tag fa-fw'></i></span>
      <input type="text" className={`form-control ${errors.song ? 'is-invalid' : '' }`} placeholder="song"
      {...register('song', { 
        required: "The name of your favourite song is required",
        maxLength: {value: 20, message: "only one!"}
      })} />
      {errors.song && (<div className="invalid-feedback">{errors.song.message}</div>)}
    </div>
    
    <div className="input-group mb-1">
      <span className="input-group-text"><i className= 'fa fa-tag fa-fw'></i></span>
      <input type="text" className={`form-control ${errors.book ? 'is-invalid' : '' }`} placeholder="book"
      {...register('book', { 
        required: "The name of your favourite book is required",
        maxLength: {value: 20, message: "only one!"}
      })} />
      {errors.book && (<div className="invalid-feedback">{errors.book.message}</div>)}
    </div>

    <div className="input-group mb-1">
      <span className="input-group-text"><i className= 'fa fa-tag fa-fw'></i></span>
      <input type="text" className={`form-control ${errors.ilustrator ? 'is-invalid' : '' }`} placeholder="ilustrator"
      {...register('ilustrator', { 
        required: "The name of your favourite ilustrator is required",
        maxLength: {value: 20, message: "only one!"}
      })} />
      {errors.ilustrator && (<div className="invalid-feedback">{errors.ilustrator.message}</div>)}
    </div>


    <div className="input-group mb-1">
      <span className="input-group-text"><i className= 'fa fa-tag fa-fw'></i></span>
      <input type="text" className={`form-control ${errors.picture ? 'is-invalid' : '' }`} placeholder="picture"
      {...register('picture')} />
      {errors.picture && (<div className="invalid-feedback">{errors.picture.message}</div>)}
    </div>
    

    <div className='d-grid mt-2'>
      <button className='btn-success' type='submit' disabled={!isValid}> Register </button>
    </div>
</form>
  )
}
export default UserForm