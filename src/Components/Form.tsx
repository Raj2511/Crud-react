import { FC } from 'react'

const Form: FC = () => {
  return <>
    <form className='m-2'>
      <h3 className='text-start mb-3'>Create an account</h3>
      <div className="row mb-3">
        <label htmlFor="inputName" className="col-sm-2 col-form-label text-start">Name</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="inputName"></input>
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputMail" className="col-sm-2 col-form-label text-start">Mail ID</label>
        <div className="col-sm-10">
          <input type="email" className="form-control" id="inputMail"></input>
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputCity" className="col-sm-2 col-form-label text-start">City</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="inputCity"></input>
        </div>
      </div>
      <div className="form-check d-flex justify-content-end">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked></input>
        <label className="form-check-label mx-1" htmlFor="flexCheckChecked">
          isActive
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Create Account</button>
    </form>
  </>
}

export default Form