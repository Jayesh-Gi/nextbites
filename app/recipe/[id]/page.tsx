
import { notFound } from "next/navigation";
import { getRecipe } from "../../data/recipes";

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="main">
      <h1>
        {recipe.emoji} {recipe.title}
      </h1>

      <p>
        ⏱ {recipe.minutes} min | {recipe.difficulty} | {recipe.cuisine}
      </p>

      <h2>Ingredients</h2>

      <ul>
        {recipe.ingredients.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Steps</h2>

      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </main>
  );
}
