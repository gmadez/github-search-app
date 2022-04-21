import { LoaderFunction, redirect } from '@remix-run/node';
import { useLoaderData, useTransition } from '@remix-run/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ListItem } from '~/components/ListItem';
import { NoResults } from '~/components/NoResults';
import { SearchResult } from '../types';

export const loader: LoaderFunction = async ({ params, request }: any) => {
  try {
    const url = new URL(request.url);
    const search = new URLSearchParams(url.search);
    const query = params.searchQuery;
    const type = search.get('type') ?? 'user';
    const res = await axios.get(`https://api.github.com/search/users?q=${query}+type:${type}`);
    // await sleep(2000);
    return { searchTerm: query, type: type, items: res.data.items };
  } catch (err) {
    console.error(err);
    redirect('/index');
    return {};
  }
};

export default function Search() {
  const { searchTerm, type, items }  = useLoaderData();
  const transition = useTransition();
  const isRequesting = transition.state === 'submitting';
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (type === 'org') setTitle('Organization Results') 
    else setTitle('User Results');
  }, [type])

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="w-full md:w-5/6 bg-white rounded-lg items-center px-8 pb-10">
        <h2 className="text-2xl text-gray-700 mt-4 mb-2">{`${title}`}</h2>
        <h2>{isRequesting && ('Is Requesting')}</h2>
        {
          items && items.length > 0 && (
            <ul>
              {items.map((item: SearchResult) => (
                <ListItem key={item.id} image={item.avatar_url} label={item.login} type={item.type} url={item.html_url} />
              ))}
            </ul>
          )
        }
        {
          items.length === 0 && (
            <NoResults searchTerm={searchTerm} />
          )
        }
      </div>
    </div>
  );
}
