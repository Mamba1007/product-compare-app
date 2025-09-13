import React, { createContext, useContext, useState } from 'react';

const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [selected, setSelected] = useState(() => {
    try { return JSON.parse(localStorage.getItem('compareItems') || '[]'); }
    catch { return []; }
  });

  const toggleSelect = (product) => {
    setSelected((prev) => {
      let next;
      if (prev.find(p => p.id === product.id)) {
        next = prev.filter(p => p.id !== product.id);
      } else {
        if (prev.length >= 3) return prev; // max 3
        next = [...prev, product];
      }
      localStorage.setItem('compareItems', JSON.stringify(next));
      return next;
    });
  };

  const clearAll = () => {
    localStorage.removeItem('compareItems');
    setSelected([]);
  };

  const removeItem = (id) => {
    setSelected((prev) => {
      const next = prev.filter(p => p.id !== id);
      localStorage.setItem('compareItems', JSON.stringify(next));
      return next;
    });
  };

  return (
    <CompareContext.Provider value={{ selected, toggleSelect, clearAll, removeItem }}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  return useContext(CompareContext);
}
