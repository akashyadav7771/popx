import { Link } from "react-router-dom";

 function Welcome() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      
      <div className="bg-white p-6 rounded-lg w-80 shadow">
        
        <h2 className="text-xl font-bold mb-2">
          Welcome to PopX
        </h2>

        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet
        </p>

        <Link to="/register">
          <button className="w-full bg-purple-600 text-white p-2 rounded mb-2">
            Create Account
          </button>
        </Link>

        <Link to="/login">
          <button className="w-full bg-purple-200 p-2 rounded">
            Already Registered? Login
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Welcome;