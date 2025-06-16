import React from 'react';

function ElementsLayoutCard({ layout }) {
  if (!layout || !layout.icon || !layout.label) {
    return null; // Optional fallback if layout is missing
  }

  const Icon = layout.icon;

  return (
    <div className="flex flex-col items-center justify-center border border-dashed rounded-xl p-3 group hover:shadow-md hover:border-primary cursor-pointer">
      <Icon className="p-2 h-8 w-8 bg-gray-100 group-hover:text-blue-500 group-hover:bg-purple-100 rounded-full" />
      <h2 className="text-sm mt-2">{layout.label}</h2>
    </div>
  );
}

export default ElementsLayoutCard;
