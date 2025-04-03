import { redirect } from 'next/navigation';
import { getRandomError } from '@/app/_lib/utils';

type PageType = {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
};

export default async function Review({ params }: PageType) {
  getRandomError();
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    // notFound();

    redirect(`/products`);
  }

  return (
    <div className="">
      Review {reviewId} for product {productId}
    </div>
  );
}
