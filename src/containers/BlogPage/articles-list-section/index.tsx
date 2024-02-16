'use client';

import Article from '@/components/Article';
import { Pagination } from '@/components/Pagination';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const ArticlesListSection = ({
  data,
  total,
}: {
  data: IArticle[];
  total: number;
}) => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const p = useSearchParams();
  const qPage = Number(p.get('page') || 1);

  const onPageChangeHandle = async (page: number) => {
    setLoading(true);
    router.push(`?page=${page}`);
  };

  useEffect(() => {
    setLoading(false);
  }, [qPage]);

  return (
    <section className='relative mb-48 mt-24'>
      <div
        className='[200px_minmax(284_1fr)] grid grid-cols-[repeat(auto-fill,minmax(284px,1fr))]
          gap-12'
      >
        {data.map((artcile, i) => (
          <Article key={artcile.id} data={artcile} animationDelay={i / 20} />
        ))}
      </div>

      <Pagination
        className='mt-24'
        total={total}
        onPageChange={onPageChangeHandle}
        isLoading={isLoading}
        initialPage={qPage}
      />
    </section>
  );
};
