import React, {useEffect, useState } from "react";
import UserService from '../services/userService'
export default function UserList() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        let userService = new UserService;
        userService.getUsers().then((result)=> setUsers(result.data.data))
    }, [])


    return (
        <div>
            
        </div>
    )
}
