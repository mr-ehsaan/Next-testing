import { getArticles } from '@/api/blog';
import Article from '@/components/Article';

export const RelatedPostsSection = async () => {
  const { data } = await getArticles({ page: 1, limit: 3 });

  return data.map((itm, i) => (
    <Article key={itm.id} data={itm} animationDelay={i / 20} />
  ));
};
