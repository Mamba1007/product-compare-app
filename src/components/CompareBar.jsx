import React from "react";
import { useCompare } from "../contexts/CompareContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const CompareBar = () => {
  const { selected, clearAll, removeItem } = useCompare();
  const location = useLocation();
  const navigate = useNavigate();

  if (selected.length === 0) return null;

  const isComparePage = location.pathname === "/compare";

  const handleRemove = (id) => {
    if (isComparePage && selected.length <= 2) {
      alert("At least 2 products are required for comparison.");
      return;
    }
    removeItem(id);
  };

  const handleClear = () => {
    if (isComparePage) {
      clearAll();
      navigate("/"); // ✅ redirect to products page
    } else {
      clearAll();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 
                bg-gray-200 dark:bg-gray-800 
                shadow-md p-3 flex items-center justify-between">
      <div className="flex space-x-2 overflow-x-auto">
        {selected.map((p) => (
          <div
            key={p.id}
            className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
          >
            <span>{p.name}</span>
            <button onClick={() => handleRemove(p.id)} className="text-red-500">
              ×
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {!isComparePage && selected.length >= 2 && selected.length <= 3 && (
          <Link
            to="/compare"
            className="px-3 py-1 rounded bg-blue-500 text-white"
          >
            Compare Now
          </Link>
        )}
        <button
          onClick={handleClear}
          className="px-3 py-1 rounded bg-red-500 text-white"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
