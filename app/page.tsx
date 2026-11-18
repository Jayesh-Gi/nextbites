
import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main className="main">
      <h1>Find Your Next Bite 🍽️</h1>

      <p>Discover delicious recipes for every mood.</p>

      <RecipeGrid recipes={recipes} />
    </main>
  );
}
