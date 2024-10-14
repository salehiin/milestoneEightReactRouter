

const ReusableForm = ({formTitle, handleSubmit, submitBtnText = 'Submit', children}) =>{

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }

    // const handleSubmit = e =>{
    //     e.preventDefault();

    // }

    return (
        <div>
            {children}
            {/* <h1>{formTitle}</h1> */}
            {/* <form onSubmit={handleSubmit}> */}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" id=""/>
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;