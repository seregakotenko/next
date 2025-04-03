import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    absolute: 'absolute Article',
  },
};

type PageType = {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: 'en' | 'fr' }>;
};

export default async function NewsArticle({ params, searchParams }: PageType) {
  const { articleId } = await params;
  const { lang = 'en' } = await searchParams;

  return (
    <div className="">
      <h1>NewsArticle</h1>
      Reading in lang {lang}
      <ul>
        <Link href={`/articles/${articleId}?lang=en`}>Read in Eng</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>Read in French</Link>
      </ul>
    </div>
  );
}
