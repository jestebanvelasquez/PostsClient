import React from 'react'
import { Post } from '../components/Post';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hooks';
import { useEffect } from 'react';
import { blogApi } from '../axios/getApi';
import { PostResponse } from '../Interface/Post.interface';
import { setPosts } from '../state/slices/user.slice';

export const Home = () => {

  const dispatch = useAppDispatch()

  const getAllPost = async () => {
    try {
        const {data} = await blogApi.get<PostResponse>('/post/all')
        return dispatch(setPosts(data.data))
    } catch (error) {
        console.log(error)
    }
}
const { posts } = useAppSelector(state => state.user)

  useEffect(() => {
    getAllPost()
  }, [])



  return (
    <div className="home">
      <div className="posts">
        
        {posts && posts.map(({ desc, _id, image, title }) => (
          <div key={_id}>
            <Post desc={desc} image={image} title={title} _id={_id}  />
          </div>
        ))}
      </div>
    </div>
  )
}

