
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="main">
      <h1>Recipe Not Found 😕</h1>
      <p>Sorry, the recipe you are looking for does not exist.</p>
      <Link href="/">Go back home</Link>
    </main>
  );
}
