"use client";
import Pagination from "@/components/Pagination";
import Recipe, { RecipeProps } from "@/components/Recipe";
import React, { useEffect, useState } from "react";
import { NumberParam, useQueryParams } from "use-query-params";

const URL =
  "https://my-json-server.typicode.com/kula124/json-placeholder/recipes";

const App = () => {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);
  const [pagination, setPagination] = useQueryParams({
    page: NumberParam,
    perPage: NumberParam,
  });

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!pagination || !pagination.page || !pagination.perPage) return;

      const { page, perPage } = pagination;
      const response = await fetch(`${URL}?_page=${page}&_limit=${perPage}`);
      const data = (await response.json()) as Omit<RecipeProps, "image">[];

      // append images
      const recipesWithImages = data.map((recipe, index) => ({
        ...recipe,
        image: `https://source.unsplash.com/600x400/?${
          recipe.name.split(" ")[0]
        }&sig=${index}`,
      }));

      setRecipes(recipesWithImages);
    };
    fetchRecipes();
  }, [pagination]);

  console.log({ pagination });

  return (
    <div className="bg-gray-800">
      <section className="mx-auto gap-4 flex flex-col">
        <Pagination {...pagination} setPagination={setPagination} />
        {recipes.map((recipe, index) => (
          <Recipe key={index} {...recipe} />
        ))}
      </section>
    </div>
  );
};

export default App;
