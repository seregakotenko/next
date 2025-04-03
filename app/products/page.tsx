import Link from 'next/link';

export default function Products() {
  const id = 100;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Products:
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products/1">Product 1</Link>
        </li>
        <li>
          <Link href="/products/2">Product 2</Link>
        </li>
        <li>
          <Link href="/products/3">Product 3</Link>
        </li>
        <li>
          {/*  replace - clean history */}
          <Link href={`/products/${id}`} replace>
            Product {id}
          </Link>
        </li>
      </ul>
    </div>
  );
}
