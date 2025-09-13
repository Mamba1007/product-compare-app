import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductGrid } from "./components/ProductGrid";
import { CompareView } from "./components/CompareView";
import { CompareBar } from "./components/CompareBar";
import { CompareProvider } from "./contexts/CompareContext";

const AppContent = () => {
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("darkMode") || "false")
  );


  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const toggleDark = () => {
    const val = !darkMode;
    setDarkMode(val);
    localStorage.setItem("darkMode", JSON.stringify(val));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 
                   shadow-md bg-gray-100 dark:bg-gray-800">
        <h1 className="text-xl font-bold">Product Compare</h1>
        <button
          onClick={toggleDark}
          className="px-3 py-1 rounded bg-gray-400 dark:bg-gray-700"
        >
          {darkMode ? "Light" : "Dark"} Mode
        </button>
      </header>

      <main className="pt-20 p-4 mb-20">
        <Routes>
          <Route path="/" element={<ProductGrid />} />
          <Route path="/compare" element={<CompareView />} />
        </Routes>
      </main>
      <CompareBar />
    </div>
  );
}

export const App = () => {
  return (
    <CompareProvider>
      <Router>
        <AppContent />
      </Router>
    </CompareProvider>
  );
}
