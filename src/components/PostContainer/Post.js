import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();

    return (
        <div>
            <div>title: {title}</div>
            <button onClick={()=>navigate(`post-details/${id}`, {state: post})}>Details</button>
        </div>
    );
};

export {Post};