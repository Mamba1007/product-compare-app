import React from "react";
import { useCompare } from "../contexts/CompareContext";
import { highlightDiffs } from "../utils/compareUtils";
import { useNavigate } from "react-router-dom";

export const CompareView = () => {
  const { selected } = useCompare();
  const navigate = useNavigate();

  if (selected.length < 2) {
    return (
      <div className="p-4 text-center">
        <p className="mb-4">Please select at least 2 products to compare.</p>
        <button
          onClick={() => navigate("/")}
          className="px-3 py-1 rounded bg-blue-500 text-white"
        >
          Back to products
        </button>
      </div>
    );
  }

  const diffs = highlightDiffs(selected);
  const featureKeys = Object.keys(selected[0].features);

  return (
    <div>
      <button
        onClick={() => navigate("/")}
        className="mb-4 px-3 py-1 rounded bg-gray-500 text-white"
      >
        ← Back
      </button>

      <div className="overflow-x-auto border rounded shadow bg-white dark:bg-gray-800">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Feature</th>
              {selected.map((p) => (
                <th key={p.id} className="border px-4 py-2">
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureKeys.map((key) => (
              <tr key={key}>
                <td className="border px-4 py-2 font-semibold">{key}</td>
                {selected.map((p) => (
                  <td
                    key={p.id}
                    className={`border px-4 py-2 ${
                      diffs[key] ? "bg-yellow-100 dark:bg-yellow-800" : ""
                    }`}
                  >
                    {p.features[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
