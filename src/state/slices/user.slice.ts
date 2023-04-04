import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserApi } from '../../Interface/apiUser';
import { PostInterface, PostResponse } from '../../Interface/Post.interface';

interface UserState {
    userInfo: UserApi;
    posts: PostInterface[]
    postsFilter:PostInterface[]
    post:PostInterface
}

const initialState : UserState = {
    userInfo: {
            _id:'',
            username: '',
            email: '',
            password: '',
            image:'',
    },
    posts:[],
    postsFilter:[],
    post:{
        userId:    '',
        title:     '',
        desc:      '',
        image:     '',
        publish:   '',
        cat:       '',
        avaliable: false,
        _id:       '',
        createdAt: '',
        updatedAt: '',
        __v:       0
    }
}

 const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser: (state, action) => {
            state.userInfo = action.payload
        },
        setPosts: (state, action) => {
            state.posts = action.payload
            state.postsFilter = action.payload
        },
        setPostId:(state,action) => {
            state.post = action.payload
        },
        setCategory:(state, action) => {
            if (action.payload !== 'alls'){
                const filterBy = [...state.postsFilter] 
                state.posts = filterBy.filter(( post) => post.cat === action.payload)
            }
            else {
                state.posts = state.postsFilter
            }
        }

    }

})


export const { setUser, setPosts, setPostId, setCategory } = userSlice.actions
export default userSlice.reducer;