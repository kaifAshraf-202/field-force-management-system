import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import toast from "react-hot-toast";


const Login = () => {

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

const handleSubmit = async (e) => {
  console.log("Submitting login form with:", { username, password }); // Debugging statement  

  e.preventDefault();

  try {

    const response = await loginUser({

      username: username,
      password,

    });
    console.log(response);

    login(
      response.access,
      response.user
    );

    toast.success(
      "Login successful"
    );

    navigate("/");

  } catch (error) {

    console.error(error);

    toast.error(
      "Invalid credentials"
    );

  }

};

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>

            <label>username</label>

            <input
              type="text"
              className="w-full border rounded-lg p-3 mt-1"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

          </div>

          <div>

            <label>Password</label>

            <input
              type="password"
              className="w-full border rounded-lg p-3 mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>

          <button
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

      </div>

    </div>

  );
};

export default Login;  