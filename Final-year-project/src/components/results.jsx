import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const predictedImage = location.state?.predictedImage;

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-900">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-beige-300">Prediction Result</h1>
        {predictedImage ? (
          <div className="mt-4">
            <img
              src={predictedImage}
              alt="Predicted"
              className="mx-auto max-w-full h-auto"
            />
          </div>
        ) : (
          <p className="text-beige-300 mt-4">No image available</p>
        )}
        <button
          onClick={() => navigate("/")}
          className="mt-4 text-white bg-blue-500 border border-blue-500 px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default ResultPage;
