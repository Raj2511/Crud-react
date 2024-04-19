import { FC, useState } from "react";
import Header from './Header';

const Form: FC = () => {
    const [namefield, setname] = useState('');

    const handleinput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setname(event.target.value);
    };

    return (
        <><div>
            <input type="text" name="namefield" value={namefield} placeholder="Enter your Name" onChange={handleinput} />
            </div>
            <div style={{ marginTop: '10px' }}>
            {namefield && <Header name={namefield}/>}
            </div>
        </>
    );
};

export default Form;
