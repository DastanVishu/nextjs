import React, {useEffect, useState} from 'react';
import TopMenu from './TopMenu'
export default function Home() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await data.json();
      setUsers(users);
    };
  
    useEffect(() => {
      getUsers();
    }, []);

  return (
    <>
      <TopMenu />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
