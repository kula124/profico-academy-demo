import { RecipeProps } from "@/components/Recipe";
import { useCallback, useEffect, useState } from "react";

const URL =
  "https://my-json-server.typicode.com/kula124/json-placeholder/recipes";

const useRecipes = (page: number, perPage: number) => {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchRecipes = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${URL}?_page=${page}&_limit=${perPage}`);
      if (!response.ok) {
        throw new Error("Something went wrong while fetching recipes");
      }
      const data = await response.json();

      setRecipes(
        data.map((recipe: RecipeProps, index: number) => ({
          ...recipe,
          image: `https://source.unsplash.com/600x400/?${recipe.name}&sig=${index}`,
        }))
      );
    } catch (error) {
      if (!(error instanceof Error)) {
        throw error;
      }

      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [page, perPage]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return { recipes, isLoading, error };
};

export default useRecipes;
