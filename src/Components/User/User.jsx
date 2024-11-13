import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id,name,email,phone} = user;
    const useStyle = {
        border:'2px solid yellow',
        padding:'10px',
        borderRadius: '20px'
    }
    return (
        <div style={useStyle}>
            <div>
            <h3>{name}</h3>
            <p>{email}</p>
            <span>{phone}</span>
            </div>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}><button>show details</button></Link>
        </div>
    );
};

export default User;