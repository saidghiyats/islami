import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-0 py-8 border-t border-secondary-200/50">
      <div className="container text-center text-default-700">
        © {new Date().getFullYear()} •{" "}
        <Link href={"/"} className="text-transparent bg-clip-text bg-gradient">
          Muslim
        </Link>
      </div>
    </footer>
  );
}
