import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        const response = await fetch('http://127.0.0.1:8000/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (response.ok) {
        localStorage.setItem('token', data.access);
        setMessage("Login successful!");
        window.location.href = '/upload';
        } else {
        setMessage(data.error || "Invalid credentials");
        }
    };

    return (
        <div className="flex h-screen">
            {/* Left Side - Login Form */}
            <div className="w-1.5/4 flex flex-col justify-center items-center bg-gray-100 p-8">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-center mb-4 text-black">Login</h2>

                    <input
                        type="text"
                        className="border rounded p-2 w-full mb-3 text-black"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        className="border rounded p-2 w-full mb-3 text-black"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                        onClick={handleLogin}
                    >
                        Login
                    </button>

                    {message && <p className="mt-3 text-center text-black">{message}</p>}

                    <p className="text-center mt-3 text-black">
                        Don&apos;t have an account? <a href="/register" className="text-blue-500 hover:underline">Register here</a>
                    </p>
                </div>
            </div>

            {/* Right Side - Info Section */}
            <div className="w-2.5/4 flex flex-col justify-center items-center bg-gray-900 text-white p-10">
                <h1 className="text-4xl font-bold mb-4">AI Resume Analyzer</h1>
                <p className="text-lg text-center mb-6">
                    Enhance your resume with AI-powered analysis. Get insights and 
                    recommendations to stand out in the job market.
                </p>
                <img src="src/assets/images/resume-ai-image.png" alt="AI Resume Analysis" className="w-80 h-auto mb-4 rounded-lg" />

                <h2 className="text-2xl font-semibold mb-2">What A Few Changes in Your Resume Can Do</h2>
                <p className="text-md text-center">
                    Small improvements in your resume structure, keywords, and formatting 
                    can increase your chances of landing your dream job. Let AI help you 
                    optimize your career path!
                </p>
            </div>
        </div>
    );
};

export default Login;
