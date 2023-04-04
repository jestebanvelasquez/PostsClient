import { Link, useNavigate } from 'react-router-dom';
import { PostInterface } from "../Interface/Post.interface"
import { formatText } from '../../utils/formatText';



export const Post = (post: PostInterface) => {
    const { desc, _id, title, image } = post

    const navigate = useNavigate()

    return (
        <div key={_id} className="post">
            <div className="image">
                <img src={image} alt="post image" />
            </div>
            <div className="content">
                <Link className="link" to={`/post/${_id}`}>
                    <p className="title">{title}</p>
                </Link>
                <p>{formatText(desc.slice(0, 500))}...</p>
                <button onClick={() => navigate(`/post/${_id}`)}  >Leer Más</button>
            </div>
        </div>
    )
}
