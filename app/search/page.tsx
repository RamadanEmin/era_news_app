/* eslint-disable no-undef */
import NewsList from '@/components/NewsList';
import fetchNews from '@/lib/fetchNews';

type Props = {
    searchParams?: { term: string }
}

async function SearcPage({ searchParams }: Props) {
    const news: NewsResponse = await fetchNews(
        'general',
        searchParams?.term,
        true
    );

    return (
        <div>
            <h1 className='headerTitle'>Search Results for: {searchParams?.term}</h1>
            <NewsList news={news} />
        </div>
    );
};

export default SearcPage;