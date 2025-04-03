'use client';

import { useRouter } from 'next/navigation';

export default function OrderProduct() {
  const router = useRouter();
  const handleOrderPlaceButtonClick = () => {
    console.log('handleOrderPlaceButtonClick'); // todo
    router.push('/');
  };
  return (
    <div className="">
      <h1>OrderProduct</h1>
      <button className="" onClick={handleOrderPlaceButtonClick}>
        Place order
      </button>
    </div>
  );
}
