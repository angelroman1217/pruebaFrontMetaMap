import { useEffect, useState } from "react";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import ModalAdd from "./components/ModalAdd";
import ModalUser from "./components/ModalUser";
import { getAllUser, searchUser, addUser } from "./api"

function App() {
  const [all, setAll] = useState();
  const fetchApi = async () => {
    const data = await getAllUser();
    setAll(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="bdd">
      <div className="lft">
          <ModalAdd/>
        </div>
        <br></br>
      <div className="App table-responsive">
        <table className="table table-bordered table-sm table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>name</th>
              <th>email</th>
              <th>role</th>
              <th>hub</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {!all
              ? "Cargando..."
              : all.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.role}</td>
                      <td>{data.hub}</td>
                      <td>
                        <ModalUser />
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
