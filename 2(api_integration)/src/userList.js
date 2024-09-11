import React, { useState, useEffect } from "react";
import toast from 'react-hot-toast'


const UserList = () => {
  const [users, setUsers] = useState([]);

  // To Fetch data from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        toast.error(error.message);
      } 
    };

    fetchUsers();
  }, []);


  //To Display the list of users
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;