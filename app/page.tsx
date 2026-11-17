
"use client";

import { useState } from "react";
import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || recipe.cuisine === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="main">
      <h1>Find Your Next Bite 🍽️</h1>
      <p>Discover delicious recipes for every mood.</p>

      <input
        type="text"
        placeholder="🔍 Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "450px",
          padding: "14px",
          marginBottom: "20px",
          border: "1px solid #cbd5e1",
          borderRadius: "10px",
        }}
      />

      <div style={{ display: "flex", gap: "10px", marginBottom: "30px", flexWrap: "wrap" }}>
        {["All", "Italian", "American", "Japanese"].map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            style={{
              padding: "10px 20px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              background: category === item ? "#2563eb" : "#e2e8f0",
              color: category === item ? "white" : "#1e293b",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid" id="recipes">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p>No recipes found!</p>
        )}
      </div>
    </main>
  );
}
