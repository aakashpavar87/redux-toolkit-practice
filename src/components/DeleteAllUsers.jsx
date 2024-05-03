import { useDispatch } from "react-redux";
import { deleteAllUsers } from "../store/actions";

function DeleteAllUsers() {
  const dispatch = useDispatch();
  const removeAllUsers = () => dispatch(deleteAllUsers());
  return (
    <div className="container font-aakash">
      <div className="w-[60%] mx-auto my-6 flex justify-end items-center">
        <button
          className="p-2 rounded-lg font-semibold bg-red-200 text-gray-500 hover:bg-red-800 hover:text-gray-100 hover:font-bold"
          onClick={removeAllUsers}
        >
          Delete All Users
        </button>
      </div>
    </div>
  );
}

export default DeleteAllUsers;
