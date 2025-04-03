import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      <h1>Welcome to home page</h1>
      <ol className="">
        <li className="mb-2">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="">
          <Link href="/products">Products</Link>
        </li>
        <li className="">
          <Link href="/articles/news?lang=en">News on Eng</Link>
        </li>
        <li className="">
          <Link href="/articles/news?lang=fr">News on French</Link>
        </li>
      </ol>
    </div>
  );
}
