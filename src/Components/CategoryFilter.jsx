import React from 'react';

export default function CategoryFilter({ categories, selected, onSelect }) {
    return (
        <div className="flex flex-wrap gap-1.5">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => onSelect(cat)}
                    className={`px-4 py-1.5 text-sm border transition ${selected === cat
                            ? 'bg-[#1e1a16] text-white border-[#1e1a16]'
                            : 'border-[#d4cdc0] hover:border-[#1e1a16]'
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}