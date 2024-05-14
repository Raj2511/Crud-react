import {FC} from 'react'
import Form from './Components/Form'
import Grid from './Components/Grid'

const Home: FC = () =>{
    return <>
    <div className="container-fluid text-center">
  <div className="row align-items-start m-2">
    <div className="col-md-4 border">
      <Form/>
    </div>
    <div className="col-md-8 border">
      <Grid/>
    </div>
  </div>
</div>
    </>
}

export default Home