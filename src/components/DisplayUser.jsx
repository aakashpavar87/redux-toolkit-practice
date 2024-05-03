import { useDispatch, useSelector } from "react-redux";
import { removeUser, updateUser } from "../store/slices/UserSlice";
import fakeNameGenerator from "../api";

function DisplayUser() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const deleteOneUser = (id) => {
    dispatch(removeUser(id));
  };

  const updateMyUser = (name, id) => {
    dispatch(updateUser({ id, name }));
  };

  return (
    <div className="container font-aakash">
      <div className="w-[60%] mx-auto my-6 ">
        <ul className="my-10 flex flex-col justify-center items-center">
          {users.length === 0 && (
            <li className="p-4 font-bold w-full border-b-2 flex justify-between items-center">
              <span>Dummy User Click On add user to add users</span>{" "}
              <button className="btn p-3 rounded-lg font-semibold bg-amber-200 text-gray-800">
                Delete
              </button>{" "}
            </li>
          )}
          {users.map((user, id) => (
            <li
              className="p-4 font-bold w-full border-b-2 flex justify-between items-center"
              key={id}
            >
              <span>{user}</span>{" "}
              <div>
                <button
                  className="btn p-3 rounded-lg font-semibold bg-green-400 text-white"
                  onClick={() => updateMyUser(fakeNameGenerator(), id)}
                >
                  Update
                </button>{" "}
                <button
                  className="btn p-3 rounded-lg font-semibold bg-amber-200 text-gray-800"
                  onClick={() => deleteOneUser(id)}
                >
                  Delete
                </button>{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DisplayUser;
