import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState("");

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (file) {
        setStatus("Uploading...");
        setTimeout(() => {
            setStatus("Upload successful!");
        }, 2000);
        } else {
        setStatus("Please select a file first.");
        }
    };

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
        navigate('/login');  // Redirect if no token found
        }
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-black">
            <h2 className="text-2xl font-semibold text-center mb-4">
            Upload Your Resume
            </h2>
            <input
            type="file"
            className="border rounded p-2 w-full"
            onChange={handleFileChange}
            />
            <button
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            onClick={handleUpload}
            >
            Upload
            </button>
            {status && <p className="mt-3 text-center text-gray-600">{status}</p>}
        </div>
        </div>
    );
};

export default UploadForm;
