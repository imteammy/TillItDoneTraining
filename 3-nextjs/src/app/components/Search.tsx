import { useState } from "react";

export const Search = (props: { onClick: (value:string) => void} ) => {

  const [keyword, setKeyword] = useState<string>('');

  return (
    <div className="mx-24 mt-12 s:mx-9 md:mx-24 lg:mx-24">
      <div className="grid grid-cols-3 gap-x-4">
        <input onChange={(value)=> { setKeyword(value.target.value) }}
          className="p-3 col-span-2 border-2 rounded-2xl"
          type="text"
          placeholder="Search"
        />
        <button
          onClick={() => props.onClick(keyword)} className="border-0 rounded-2xl bg-purple-500 text-slate-100 hover:bg-purple-900 hover:cursor-pointer"
          type="submit"
        >
          Search
        </button>
      </div>
    </div>
  );
};
