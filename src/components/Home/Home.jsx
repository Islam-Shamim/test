import { FaEdit } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const Home = () => {
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
            {/* row 1 */}
            <tr className="border-1">
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>
                <h2 className="font-bold">Hart Hagerty</h2>
              </td>
              <td>Email</td>
              <td>Phone</td>
              <td>Date</td>
              <td >
                <div className="flex items-center">
                <button className="mr-4">
                  <FaEdit className="text-2xl" />
                </button>
                <button>
                  <MdDelete className="text-2xl" />
                </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
