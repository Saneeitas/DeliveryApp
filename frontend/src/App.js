import {  Routes, Route } from "react-router-dom";

import RecordList from "./components/RecordList";
import AddRecord from "./components/AddRecord";
import EditRecord from "./components/EditRecord";
import Login from "./components/Login";
import AddUser from "./components/AddUser";

const App = () =>{
    return (
      <div>
        <Routes>
          <Route path="/records" element={<RecordList />}></Route>
          <Route path="/add-record" element={<AddRecord />}></Route>
          <Route path="/edit/:id" element={<EditRecord />}></Route>
          <Route path="/admin/login" element={<Login />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/admin/add-user" element={<AddUser />}></Route>
        </Routes>
      </div>
    );
};

export default App;
