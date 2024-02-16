import { getArticles } from '@/api/blog';
import { ArticlesListSection } from '@/containers/BlogPage/articles-list-section';
import { BlogHeroSection } from '@/containers/BlogPage/blog-hero-section';

interface IArticlesPage {
  searchParams: {
    page: string;
  };
}

export default async function Articles({ searchParams }: IArticlesPage) {
  const initialPage = Number(searchParams.page) || 1;

  const data = await getArticles({ page: initialPage });

  return (
    <div className='container px-6 pt-48'>
      <BlogHeroSection />

      <ArticlesListSection data={data.data} total={Number(data.total)} />
    </div>
  );
}
