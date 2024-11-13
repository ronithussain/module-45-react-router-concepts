import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const userId = useParams();

    const {id,name} = post;
    
    const postStyle ={
        border: '1px solid red',
        borderRadius: '50px'
    }
    console.log(userId)
    const navigate = useNavigate();
    const handleGoBack = ()=>{
        navigate(-1)
    }
    return (
        <div style={postStyle}>
            <h2>PostDetails: {id}</h2>
            <h5>{name}</h5>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;