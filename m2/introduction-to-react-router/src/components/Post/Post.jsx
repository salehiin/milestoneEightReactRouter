import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {id, title, body} = post;
    const postStyle = {
        border: '2px solid yellow',
        // margin: '10px',
        padding: '10px',
        borderRadius: '10px'
    }

    return (
      <div style={postStyle}>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
      </div>
    );
  };
  
  export default Post;