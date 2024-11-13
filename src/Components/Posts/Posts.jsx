import { useLoaderData } from "react-router-dom";
import Post from "../post/Post";
import './Posts.css'

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts)
    return (
        <div>
            <h2>Posts:{posts.length}</h2>
            <div className="post">
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;