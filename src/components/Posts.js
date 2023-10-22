import {useEffect, useState} from "react";
import axios from "axios";

import style from './Posts.module.css';
import {Post} from "./Post"
import {PostDetails} from "./PostDetails";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null)


    const click = (post) => {
         setPostDetails(post)
     }


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(({data})=>setPosts(data))
    }, []);
    return (
        <div>
            <div className={style.Posts}>
                {posts.map(post => <Post key={post.id} post={post} click={click} />)}
            </div>
            {
                postDetails && <PostDetails postDetails={postDetails}/>
            }
        </div>
    );
};

export {Posts};