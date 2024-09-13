import { useEffect, useState } from "react";
import Employee from "./Employee";

const Employees = () => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/users")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
  return (
    <div className="overflow-x-auto  border-2 m-4 w-full">
      <table className="table border-2 m-10 p-10">
        <thead>
          <tr className="border-1">
            <th>Photo</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date of birth</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user=><Employee key={user._id} user={user}></Employee>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
