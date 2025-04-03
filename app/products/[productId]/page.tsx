import { Metadata } from 'next';

type PageType = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({ params }: PageType): Promise<Metadata> => {
  const id = (await params).productId;
  // Call to the catalog API
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    });
  });

  return {
    title: `Product ${title}`,
  };
};

export default async function PDP({ params }: PageType) {
  const productId = (await params).productId;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Product Details {productId}
    </div>
  );
}
