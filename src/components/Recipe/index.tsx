"use client";

import React from "react";

export interface RecipeProps {
  name: string;
  description: string;
  steps: string[];
  image: string;
}

const Recipe: React.FC<RecipeProps> = ({ name, steps, description, image }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        {/* Recipe Image */}
        <div className="md:w-1/2">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover md:w-72"
          />
        </div>
        {/* Recipe Details */}
        <div className="p-8 md:w-1/2">
          <h2 className="text-2xl text-gray-900 font-semibold mb-4">{name}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <h3 className="text-lg font-semibold mb-2">Instructions:</h3>
          <ul className="list-disc pl-6">
            {steps.map((step, index) => (
              <li key={index}>
                <p className="text-gray-900 pt-1">‧ {step}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
