import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'absolute Title Blog',
  },
};

export default async function Blog() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <div className="">Blog</div>;
}
