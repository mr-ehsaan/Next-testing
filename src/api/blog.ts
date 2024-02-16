export const getArticles = async ({
  page = 1,
  limit = 9,
}: {
  page: number;
  limit?: number;
}): Promise<{
  total: number;
  data: IArticle[];
}> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );

  const totalCount: number =
    Math.ceil(Number(response.headers.get('X-Total-Count')) / limit) || 0;
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Cannot receive posts data');
  }

  return {
    total: totalCount,
    data,
  };
};

export const getArticle = async ({ id }: { id: number }): Promise<IArticle> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Cannot receive post data');
  }

  return data;
};
