"use client";
import { Cart } from "./components/cart";
import { Search } from "./components/Search";
import { useState } from "react";

type Item = {
  title: string;
  description: string;
  src?: string;
};

export default function Home() {
  const data: Item[] = Array.from({ length: 6 }, (_, index) => ({
    title: `Title ${index + 1}`,
    description: `Description ${index + 1}`,
  }));

  const [dataSearch, setDataSearch] = useState<Item[]>(data);
  const searchCart = (value: string) => {
    const result = data.filter((param) => param.title.includes(value));
    setDataSearch(result);
  };

  return (
    <>
      <Search onClick={ searchCart }/>
      <div className="mt-10 md:px-16">
        <div className="justify-center p- 9">
          <div className="grid justify-center gap-8 sm:grid-cols-2 md:grid-cols-3">
            {dataSearch.map((result, key) => (
              <Cart
                title={result.title}
                key={key}
                description={result.description}
                src={result.src}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
