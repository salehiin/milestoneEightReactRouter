import useInputState from "../hooks/useInputState";


const HookForm = () =>{

    const [name, handleNameChange] = useInputState('Rojoni hooked booked');

    const handleSubmit = e =>{
        console.log('form data', name)
        e.preventDefault();

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name" id=""/>
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;