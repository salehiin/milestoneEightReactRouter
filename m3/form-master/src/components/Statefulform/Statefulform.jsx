import { useState } from "react";


const Statefulform = () =>{

    const [name, setName] = useState('Klanto');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be 6 characters or longer!')
        }
        else{
            setError('');
        }
        console.log(name, email, password);
       
    }

    const handleNameChange = e =>{
        // console.log(e.target.value);
        setName(e.target.value);
    }
    const handleEmailChange = e =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        // console.log(e.target.value);
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name}
                    onChange={handleNameChange}
                type="text" name="name" id=""/>
                <br />
                <input 
                    onChange={handleEmailChange}
                type="email" name="email" />
                <br />
                {/* <input type="text" name="phone" /> */}
                <br />
                <input 
                    onChange={handlePasswordChange}
                type="password" name="password" required/>
                <br />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default Statefulform;