import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="p-10">
        <h1>Dashboard</h1>
        <Link href={"/admin"}>Admin Panel</Link>
    </main>
  );
}