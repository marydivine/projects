import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function ImageUpload() {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null); // State for image preview
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    } else {
      console.error("File input reference is null");
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl); // Set the preview image URL
    }
  };

  const handlePredict = () => {
    console.log("Predict button clicked");
    // Navigate to a new page, e.g., "/result"
    navigate("/result");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-900">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-beige-300">Upload Image</h1>
        <p className="text-beige-300 mt-2">
          Upload a picture of the plant and get immediate results!
        </p>
        <div className="mt-6 border-2 border-dashed border-gray-400 rounded-lg p-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-gray-300 rounded-full flex items-center justify-center">
              {/* Cloud icon SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 8a4 4 0 117.917 1.106 3 3 0 01-.584 5.778H6a3 3 0 01-1-.18l-.485-.206a4.003 4.003 0 01-.48-7.497l.965-.001zM13 11a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm-2-3a1 1 0 00-1-1H8a1 1 0 000 2h2a1 1 0 001-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-400 mt-4">Drag & drop or</p>
            <button
              onClick={handleClick}
              className="text-beige-300 border border-gray-400 px-4 py-2 rounded mt-2"
            >
              Browse your files
            </button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange} // Call when file is selected
            />
            {/* Image preview */}
            {preview && (
              <div className="mt-4">
                <img
                  src={preview}
                  alt="Preview"
                  className="mx-auto max-w-full h-auto"
                />
              </div>
            )}
            {/* Predict button */}
            {preview && (
              <button
                onClick={handlePredict}
                className="mt-4 text-white bg-blue-500 border border-blue-500 px-4 py-2 rounded"
              >
                Predict
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
