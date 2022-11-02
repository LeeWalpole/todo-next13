import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>Awesome Next Todo</p>
      <div className="padding-top: 3em">
        <Link href="/todos">View Todos</Link>
      </div>
    </div>
  );
}
