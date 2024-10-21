import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./Counter";

const API = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);

  const getUserAll = () => {
    axios
      .get(API)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserAll();
  }, []);

  return (
    <div className="App">
      {users.map((user) => (
        <ListGroup key={user.id}>
          <ListGroup.Item className="bg-dark text-light mt-2">
            {user.name}
          </ListGroup.Item>
        </ListGroup>
      ))}

      <Counter />
    </div>
  );
}

export default App;
