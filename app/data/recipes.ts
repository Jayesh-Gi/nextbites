
export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella",
      "Fresh basil"
    ],
    steps: [
      "Prepare the pizza dough.",
      "Spread tomato sauce over the dough.",
      "Add mozzarella cheese.",
      "Bake until the crust is golden.",
      "Add fresh basil and serve."
    ]
  },
  {
    id: "burger",
    title: "Cheese Burger",
    emoji: "🍔",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "American",
    ingredients: [
      "Burger bun",
      "Cheese slice",
      "Veggie patty",
      "Lettuce",
      "Tomato"
    ],
    steps: [
      "Prepare the veggie patty.",
      "Cook the patty.",
      "Place cheese on the patty.",
      "Add lettuce and tomato.",
      "Assemble the burger and serve."
    ]
  },
  {
    id: "pasta",
    title: "Creamy Pasta",
    emoji: "🍝",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "Italian",
    ingredients: [
      "Pasta",
      "Cream",
      "Garlic",
      "Butter",
      "Cheese"
    ],
    steps: [
      "Boil the pasta.",
      "Heat butter and garlic in a pan.",
      "Add cream and cheese.",
      "Mix in the cooked pasta.",
      "Serve hot."
    ]
  },
  {
    id: "sushi",
    title: "Sushi Rolls",
    emoji: "🍣",
    minutes: 45,
    difficulty: "Hard",
    cuisine: "Japanese",
    ingredients: [
      "Sushi rice",
      "Nori sheets",
      "Cucumber",
      "Avocado",
      "Rice vinegar"
    ],
    steps: [
      "Prepare the sushi rice.",
      "Place a nori sheet on a mat.",
      "Spread rice over the nori.",
      "Add cucumber and avocado.",
      "Roll carefully and slice."
    ]
  }
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
