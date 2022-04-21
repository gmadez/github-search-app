import { ActionFunction, redirect } from '@remix-run/node';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const query = formData.get('query');
  const type = formData.get('type');
  if (query !== "" && type !== null && type === 'org') {
    return redirect(`/${query}?type=${type}`);
  }
  return redirect(`/${query}`);
};

export default function Search() {
  return (
    <div className="w-full md:w-1/3 bg-white rounded-lg items-center">
      <form action="/search" method="post" className="w-full px-8 pb-10" >
        <h2 className="text-3xl text-center text-gray-700 mt-4 mb-2">Explore Github!</h2>
        <div className="w-full mb-2">
          <input type='text' placeholder="Query" name="query"
            className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center" />
        </div>
        <div className="w-full mb-2">
          <input type="radio" id="user" name="type" value="user" /> User
        </div>
        <div className="w-full mb-2">
          <input type="radio" id="org" name="type" value="org" /> Organization
        </div>
        <button type="submit"
          className="w-full mt-6 py-2  rounded bg-blue-500 text-gray-100  focus:outline-none ">Search</button>
      </form>
    </div>
  );
}
