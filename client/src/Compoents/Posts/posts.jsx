// import react from 'react'

// import post from './Post/Post'
// // import Posts from './posts';

// const Posts = () => {
//     return (
//         // <>
//         // {/* <h1>Post</h1> */}
//         // <Posts/>
//         // <Posts/>
        
//         // </>
//         <Post/>
//     )
// }


// export default Posts

import React from 'react'; // <-- 1. Capital 'R' for React convention
// import Post from '../Post/Post'; // <-- 2. Capital 'P' and corrected path '../' to go up one level

const Posts = () => {
    return (
        <>
            {/* 3. Render the individual <Post /> component, not <Posts /> */}
            <h1>Posts</h1>
            {/* <Post />
            <Post /> */}
        </>
    );
}

export default Posts;