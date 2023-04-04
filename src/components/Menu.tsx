import React from 'react'
import { useAppSelector } from '../hooks/redux.hooks';
import { useNavigate } from 'react-router-dom';

export const Menu = () => {

  const {posts} = useAppSelector(state => state.user)
  const navigate = useNavigate()
  const recomendedPosts = posts.slice(0,4)

  return (
    <div className="menu">
        <h1>Otros Posts Que Te Pueden Gustar</h1>
        {
            recomendedPosts.map((post) => (
                <div className="post" key={post._id}>
                    <img src={post.image} alt="imagen" />
                    <h2>{post.title}</h2>
                    <button onClick={() => navigate(`/post/${post._id}`)} >Leer mas</button>
                </div>
            ))
        }
    </div>
  )
}

