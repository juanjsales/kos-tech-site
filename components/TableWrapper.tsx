import React from "react";

export const TableWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-[#0A0D1A]/60 border border-white/10 rounded-2xl overflow-visible backdrop-blur-md shadow-2xl rainbow-table">
    <div className="overflow-x-auto">{children}</div>
  </div>
);
