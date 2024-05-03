import "./App.css";
import AddNewUser from "./components/AddNewUser";
import DeleteAllUsers from "./components/DeleteAllUsers";
import DisplayUser from "./components/DisplayUser";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <AddNewUser />
      <DisplayUser />
      <DeleteAllUsers />
    </>
  );
}

export default App;
