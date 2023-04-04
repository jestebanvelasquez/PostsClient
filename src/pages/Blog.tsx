import edit from '../assets/edit.png'
import delet from '../assets/delete.png'
import { Link, useParams } from 'react-router-dom';
import { Menu } from '../components/Menu'
import { useEffect } from 'react';
import { getPostId, getUserId } from '../state/actions/userActions';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hooks';
import { formatText } from '../../utils/formatText';


export const Blog = () => {

    const params= useParams()
    const dispatch = useAppDispatch()
    const {auth:{accessToken}, user:{post, userInfo}} = useAppSelector(state => state)

    console.log(params.id)
    useEffect(() => {
        dispatch(getPostId(params.id!))
        dispatch(getUserId(accessToken!))
    },[params.id!])

    return (
        <div className='single'>
            <div className="content">
                <img src={post.image} alt="poster" />
                <div className="user">
                    <img src={userInfo.image || "https://res.cloudinary.com/esteban3232/image/upload/v1664950576/eventApp/y8bm5p1pg8ilunrv4njb.webp"} alt="" />
                    <div className="info">
                        <span>{userInfo.username}</span>
                        <p>publicado {post.publish}</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                        <img src={delet} alt="logo" />
                        </Link>
                        <img src={edit} alt="logo" />
                    </div>
                </div>
                <h1>{post.title}</h1>
                    <p>{formatText(post.desc)}</p>
            </div>
        <Menu/>
            </div>
    )
}
