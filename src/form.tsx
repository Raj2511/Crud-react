import { FC, useState } from "react";
import Header from './Header';

const Form: FC = () => {
    const [namefield, setname] = useState('');
    const [submittedName, setSubmittedName] = useState<string | null>(null);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setname(event.target.value);
    };

    const handleSubmit = () => {
        if (namefield.trim() !== '') {
            setSubmittedName(namefield);
        }
    };

    return (
        <>
            <Header name={submittedName || ''} />
            <div style={{ margin: '10px 0' }}>
                <input 
                    type="text" 
                    name="namefield" 
                    value={namefield} 
                    placeholder="Enter your Name" 
                    onChange={handleInput} 
                    style={{ marginBottom: '10px' }} 
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    );
};

export default Form;
