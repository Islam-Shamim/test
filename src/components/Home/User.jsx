import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PropTypes from 'prop-types';

const User = ({user}) => {
    const {first_name,last_name,email,phone_number,photo,date_of_birth} = user
    return (
        <tr className="border-1">
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={photo}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>
                <h2 className="font-bold">{first_name} {last_name}</h2>
              </td>
              <td>{email}</td>
              <td>{phone_number}</td>
              <td>{date_of_birth}</td>
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
    );
};
User.propTypes = {
    user: PropTypes.object
  };
export default User;