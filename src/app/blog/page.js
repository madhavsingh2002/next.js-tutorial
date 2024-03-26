import Link from "next/link";

export const metadata = {
    title:{
        absolute: "Blog"
    }
  };
export default function Blog(){
    return(
        <>
     <h1>My Blog</h1>
     <Link href="/">Home</Link>
     </>
    )
}