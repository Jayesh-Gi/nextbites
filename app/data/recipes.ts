
export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  {
    id: "pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian"
  },
  {
    id: "burger",
    title: "Cheese Burger",
    emoji: "🍔",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "American"
  },
  {
    id: "pasta",
    title: "Creamy Pasta",
    emoji: "🍝",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "Italian"
  },
  {
    id: "sushi",
    title: "Sushi Rolls",
    emoji: "🍣",
    minutes: 45,
    difficulty: "Hard",
    cuisine: "Japanese"
  }
];
