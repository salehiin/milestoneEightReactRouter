import { Link, useLoaderData } from "react-router-dom";



const User = ({user}) => {
    
    const{ id, name, email, phone } = user;
    const userStyle = {
        border: '2px solid yellow',
        // margin: '10px',
        padding: '10px',
        borderRadius: '10px'
    }

    

    return (
      <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`} >Show Details
                <button>Click Me</button>
            </Link>
      </div>
    );
  };
  
  export default User;