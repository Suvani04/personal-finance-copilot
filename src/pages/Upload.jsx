import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

const Upload = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError("");
  };

  const handleUpload = async () => {
    if (!file) return setError("Please select a PDF file!");
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("pdf", file);
      const res = await api.post("/ai/parse-pdf", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const transactions = res.data.transactions;
      for (const t of transactions) {
        await api.post("/transactions", t);
      }
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <nav className="bg-white px-12 py-4 flex items-center justify-between">
        <h1 className="text-blue-600 font-semibold text-2xl">Trackfi.ai</h1>
        <ul className="flex gap-8 list-none">
          <li><a href="/dashboard" className="text-gray-500 text-sm">Dashboard</a></li>
          <li><a href="/upload" className="text-blue-600 text-sm font-semibold">Upload</a></li>
          <li><a href="/budget" className="text-gray-500 text-sm">Budget</a></li>
          <li><a href="#" className="text-gray-500 text-sm">Insights</a></li>
        </ul>
        <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">S</div>
      </nav>

      <div className="max-w-2xl mx-auto py-6 px-6">
        <div className="text-center mb-1">
          <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-2">Upload Bank Statement</h1>
          <p className="text-gray-500 text-base p-4">Upload your PDF statement and let AI analyze your spending patterns automatically!</p>
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-md">
          <div
            onClick={() => fileInputRef.current.click()}
            className="border-2 border-dashed border-gray-300 rounded-2xl p-14 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5 text-3xl">
              <img src="https://icons.veryicon.com/png/o/file-type/file-type-icon/pdf-icon-1.png" alt=""/>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Drag & Drop your PDF here</h3>
            <p className="text-gray-400 text-sm mb-6">Upload your bank statement to get started</p>
            {file && <p className="text-green-600 text-sm font-medium mb-3">✅ {file.name}</p>}
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
            <button className="border-2 border-blue-600 text-blue-600 px-7 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
              Browse File
            </button>
            <input ref={fileInputRef} type="file" accept=".pdf" onChange={handleFileChange} className="hidden"/>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mt-5 flex gap-3">
            <span className="text-lg">💡</span>
            <p className="text-xs text-orange-800 leading-relaxed">
              <strong>Privacy First!</strong> Your bank statement is processed securely. We never store your PDF — only the transaction data is saved.
            </p>
          </div>

          <div className="mt-7 text-center">
            <p className="text-gray-500 text-xs mb-3">✅ Supported Banks</p>
            <div className="flex gap-2 justify-center flex-wrap">
              {['SBI','HDFC','PNB','Axis','Kotak'].map(bank => (
                <span key={bank} className="bg-gray-100 border border-gray-200 rounded-full px-4 py-1 text-xs text-gray-600 font-medium">🟢 {bank}</span>
              ))}
            </div>
          </div>

          <hr className="my-7 border-gray-200"/>

          <button onClick={handleUpload} disabled={loading}
            className="w-full bg-blue-600 text-white py-4 rounded-xl text-base font-semibold hover:bg-blue-700 transition-all duration-200 disabled:opacity-60">
            {loading ? "Analyzing... please wait ⏳" : "📊 Upload & Analyze"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;