import React, { FC, useState } from 'react'
import { GetInputValues, CreateUser } from '../API\'s/API';

const Form: FC = () => {

  const [userForm, setUserForm] = useState({
    name: '',
    mail: '',
    city: '',
    status: false
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = event.target;
    setUserForm((prevstate) => {
      return{
        ...prevstate,
        [name]: value
      };
    });
  };

  const handleSubmit2 = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    var data = CreateUser(userForm)
    console.log(userForm);
    console.log(data);

  }

  const [namefield, setName] = useState('');
  const [mailfield, setMail] = useState('');
  const [cityfield, setCity] = useState('');
  const [statusfield, setStatus] = useState(true);
  // const UserValue = {
  //   name: String,
  //   mail: String,
  //   city: String,
  //   status: Boolean
  // };

  // const [submittedValues, setSubmittedValues] = useState<{name: string; mail: string, city: string, status: boolean} | null>(null);

  // const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(event.target.value);
  // };

  // const handleMailInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
  //   setMail(event.target.value);
  // };

  // const handleCityInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
  //   setCity(event.target.value);
  // };

  // const handleStatusInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setStatus(event.target.checked);
  // };

  // const handleSubmit = () => {
  //   if (namefield.trim() !== '' && mailfield.trim() !== '' && cityfield.trim() !== '') {
  //     setSubmittedValues({name: namefield, mail: mailfield, city: cityfield, status: statusfield});
  //     //GetInputValues(namefield, mailfield, cityfield, statusfield);
  //     var data = CreateUser(namefield, mailfield, cityfield, statusfield);
  //     console.log(data)
  //     setName("")
  //     setCity("")
  //     setMail("")
  //     setStatus(true);
  //   }
  // };
  return <>
    <form className='m-2' onSubmit={handleSubmit2}>
      <h3 className='text-start mb-3'>Create an account</h3>
      <div className="row mb-3">
        <label htmlFor="inputName" className="col-sm-2 col-div-label text-start">Name</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" name='name' value={userForm.name} id="inputName" onChange={handleOnChange} ></input>
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputMail" className="col-sm-2 col-form-label text-start">Mail ID</label>
        <div className="col-sm-10">
          <input type="email" className="form-control" name='mail' value={userForm.mail} id="inputMail" onChange={handleOnChange}></input>
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputCity" className="col-sm-2 col-form-label text-start">City</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" name='city' value={userForm.city} id="inputCity" onChange={handleOnChange}></input>
        </div>
      </div>
      <div className="form-check d-flex justify-content-end">
        <input className="form-check-input" type="checkbox" name= 'status' checked={userForm.status} id="inputStatus" onChange={handleOnChange}></input>
        <label className="form-check-label mx-1" htmlFor="flexCheckChecked">
          isActive
        </label>
      </div>
      <button type="submit" className="btn btn-primary" >Create Account</button>
    </form>
  </>
}

export default Form