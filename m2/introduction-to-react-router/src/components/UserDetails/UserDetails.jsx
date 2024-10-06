import { useLoaderData } from "react-router-dom";



const UserDetails = () => {

    const user = useLoaderData();
    const{ id, name, email, phone, website } = user;
    return (
      <div>
            <h2>Details About User: {name}</h2>
            <p>Website: {website}</p>
      </div>
    );
  };
  
  export default UserDetails;