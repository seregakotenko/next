import { notFound } from 'next/navigation';

type PageType = {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
};

export default async function Review({ params }: PageType) {
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Review {reviewId} for product {productId}
    </div>
  );
}
