import { getArticle } from '@/api/blog';
import { AnimatedBox } from '@/components/AnimatedBox';
import { ArticleFallback } from '@/components/Article/ArticleFallback';
import { ArticleSection } from '@/containers/BlogPostPage/article-section';
import { RelatedPostsSection } from '@/containers/BlogPostPage/related-posts-section';
import { Suspense } from 'react';

export default async function Article({ params }: { params: { id: string } }) {
  const data = await getArticle({ id: Number(params.id) });

  return (
    <div className='container px-6 pt-48'>
      <ArticleSection />

      <section className='my-48'>
        <h2 className='text-k-2xl sm:text-k-3xl mb-12 text-center font-source-serif font-semibold leading-tight'>
          What Else to Read?
        </h2>

        <div
          className='[200px_minmax(284_1fr)] grid grid-cols-[repeat(auto-fill,minmax(284px,1fr))]
            gap-12'
        >
          <Suspense
            fallback={Array.from({ length: 3 }, (_, i) => i + 1).map((itm) => (
              <ArticleFallback key={itm} />
            ))}
          >
            <RelatedPostsSection />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
