import Link from 'next/link';
import { ArticleAnimationBox } from './ArticleAnimationBox';

const Article = ({
  data,
  animationDelay = 0.1,
}: {
  data: IArticle;
  animationDelay?: number;
}) => {
  return (
    <ArticleAnimationBox animationDelay={animationDelay}>
      <Link
        href={`/articles/${data.id}`}
        className='flex flex-col rounded-xl outline-none ring-purple ring-offset-2
          focus-visible:ring-2'
      >
        <div className='mb-6 aspect-video rounded-xl bg-dark' />

        <p className='text-k-xl mb-4 font-semibold'>{data.title}</p>
        <p className='text-k-sm'>{data.body}</p>
      </Link>
    </ArticleAnimationBox>
  );
};

export default Article;
