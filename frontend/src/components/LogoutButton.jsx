const LogoutButton = () => {
    const handleLogout = () => {
      localStorage.removeItem('token');  // Clear the token
      window.location.href = '/login';   // Redirect to login page
    };
    
        return (
        <button
            onClick={handleLogout}
            className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
        >
            Logout
        </button>
        );
    };
    
    export default LogoutButton;  