import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, name, email, city } = post;
    const postStyle = {
        border:'2px solid magenta',
        padding:'5px',
        borderRadius: '20px'
    }
    const navigate = useNavigate();
    const handleNavigateBtn =() =>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <div>
            <h5>ID: {id}</h5>
            <h3>{name}</h3>
            <p>email: {email}</p>
            <span>{city}</span>
            </div>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}><button>Show Post Details</button></Link>
            <br />
            <br />
            <button onClick={handleNavigateBtn}>Navigate Button</button>
        </div>
    );
};

export default Post;