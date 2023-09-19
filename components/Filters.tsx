"use client";
import { useState } from "react";
import { links } from "../links/links";
import { formUrlQuery } from "@/sanity/utils";
import {useSearchParams,useRouter} from 'next/navigation'
const Filters = () => {
  const [active, setActive] = useState("");
  const searchParams  = useSearchParams();
  const router = useRouter();
  const handleFilter = (link: string) => {
    let newUrl='';
    if(active === link) {
      setActive('');
      newUrl = formUrlQuery({
      params:searchParams .toString(),
      keysToRemove: ['category'],
      value:null
    })
  }else{
    setActive(link);
    newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'category',
      value: link.toLowerCase(),
    })
  }
    router.push(newUrl,{scroll:false})
  };
  
  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-3xl">
      {links.map((link) => (
        <button
          className={`${
            active === link ? "gradient_blue-purple" : ""
          } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
          onClick={() => handleFilter(link)}
          key={link}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filters;
