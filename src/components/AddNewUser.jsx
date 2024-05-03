import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import fakeUserGenerator from "../api";

function AddNewUser() {
  const dispatch = useDispatch();
  const addNewUser = (name) => {
    dispatch(addUser(name));
  };
  return (
    <div className="container font-aakash">
      <div className="flex w-[60%] mx-auto my-6  justify-between">
        <h3 className="text-3xl">List Of Users</h3>
        <button
          className="p-4 rounded-lg bg-cyan-600 text-gray-200 hover:bg-cyan-300 hover:text-gray-900 transition-all"
          onClick={() => {
            addNewUser(fakeUserGenerator());
          }}
        >
          Add Users
        </button>
      </div>
    </div>
  );
}

export default AddNewUser;
