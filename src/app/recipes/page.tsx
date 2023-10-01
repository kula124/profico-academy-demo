"use client";
import Pagination from "@/components/Pagination";
import Recipe from "@/components/Recipe";
import useRecipes from "@/hooks/useRecipes";
import React from "react";
import { NumberParam, useQueryParams } from "use-query-params";

const App = () => {
  const [pagination, setPagination] = useQueryParams({
    page: NumberParam,
    perPage: NumberParam,
  });

  const { recipes, isLoading, error } = useRecipes(
    pagination.page || 1,
    pagination.perPage || 5
  );

  console.log({ pagination });

  return (
    <div className="bg-gray-800">
      <section className="mx-auto gap-4 flex flex-col">
        <Pagination {...pagination} setPagination={setPagination} />
        {!isLoading ? (
          recipes.map((recipe, index) => <Recipe key={index} {...recipe} />)
        ) : (
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
