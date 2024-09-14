import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import User from "./User";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [users,setUsers] = useState([])
  const {count} = useLoaderData();
  const userPerPage = 10;
  const numberOfPages = Math.ceil(count/userPerPage);

  // const pages = []
  // for(let i=0;i<numberOfPages;i++){
  //   pages.push(i)
  // }
  // console.log(pages)

  const pages = [...Array(numberOfPages).keys()]
  console.log(pages)



  useEffect(()=>{
    fetch("http://localhost:5000/users")
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return (
    <div className="w-full border-2">
      <div className="border-2 rounded p-2 m-10 flex items-center justify-around">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered max-w-xs"
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered max-w-xs"
        />
        <input
          type="date"
          placeholder="Date"
          className="input input-bordered max-w-xs"
        />
        <input
          type="text"
          placeholder="Phone"
          className="input input-bordered max-w-xs"
        />
        <button className="text-2xl">
          <IoSearchOutline />
        </button>
      </div>
      <div className="overflow-x-auto m-10">
        <table className="table border-2">
          {/* head */}
          <thead>
            <tr className="border-1">
              <th>Photo</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date of birth</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user=><User key={user._id} user={user} users={users} setUsers={setUsers}></User>)
            }
            
          </tbody>
        </table>
        <div className="bg-gray mt-8 right-4">
        {
          pages.map(page=><button key={page} className="mr-2 px-4 py-2 rounded text-white bg-slate-800">{page}</button>)
        }
      </div>
      </div>
      
    </div>
  );
};

export default Home;
