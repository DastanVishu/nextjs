import React, {useEffect, useState} from 'react';
import TopMenu from './TopMenu';
const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=> {
        getServerSideProps()
    },[])

    async function getServerSideProps() {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await data.json();
        setPosts(posts)
    }

    return (
        <>
            <TopMenu />
            <table>
                <tr>
                    <th>User</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
                {posts.map((user, index) => (
                    <tr>
                        <td>{user.userId}</td>
                        <td>{user.title}</td>
                        <td>{user.body}</td>
                    </tr>
                ))}
            </table>
        </>
    );
}
export default Posts;