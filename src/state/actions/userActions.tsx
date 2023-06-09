import axios from "axios";
import {setPosts, setPostId, setUser, setCategory} from '../slices/user.slice';
import {  PostResponse } from '../../Interface/Post.interface';
import { UserApi, UserProfile } from '../../Interface/apiUser';



export const getUserId = (token:string) => async (dispatch:any) => {
    try {
        const { data } = await axios.get<UserProfile>(
            `https://postsapi-production-8963.up.railway.app/api/user/:id`,
            {
                headers:{ Authorization :`Bearer ${token}`}
            }
            
        );
        return dispatch(setUser(data.user));
    } catch (error) {
        console.log(error);
    }
};



export const getPostId = (id:string) => async (dispatch:any) => {
    try {
        const { data } = await axios.get<PostResponse>(
            `https://postsapi-production-8963.up.railway.app/api/post/${id}`,
            
        );
        return dispatch(setPostId(data.data));
    } catch (error) {
        console.log(error);
    }
};

export const filterCategory = (cat:string) => async (dispatch:any) => {
    try {
        
        return dispatch(setCategory(cat));
    } catch (error) {
        console.log(error);
    }
};