import Link from "next/link";
export default function Home() {
  return (
  <>  
    <Link href="/blog">Blog</Link> <br/>
    <Link href="/products">Products </Link>
    <h1>Home Page</h1>
    </>
  );
}
