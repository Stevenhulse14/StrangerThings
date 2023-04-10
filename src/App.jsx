import "./App.css";
import { useState, useEffect } from "react";
import Register from "./components/Register";
import { fetchMe } from "./api/auth";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  console.log(user, "User data");

  useEffect(() => {
    const getMe = async () => {
      const { data } = await fetchMe(token);
      setUser(data);
    };
    if (token) {
      getMe();
    }
  }, [token]);
  return (
    <div className="App">
      <h1>{user?.username}</h1>
      <Register setToken={setToken} />
    </div>
  );
}

export default App;
