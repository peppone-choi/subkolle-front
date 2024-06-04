import React from 'react';

const SearchInput = () => {
  return (
    <form action="" className="relative">
      <input
        type="text"
        className="flex h-8 md:w-64 border-b-2 border-slate-800 md:border-0 md:p-4 md:rounded-md w-full md:bg-white md:bg-opacity-30 hover:bg-opacity-20 focus:bg-opacity-20 outline-none p-2"
        placeholder="검색"
      />
      <button
        type="submit"
        className="absolute z-10 top-1/2 right-2 -translate-y-1/2 sm:top-0 sm:translate-y-1/3 sm:right-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 md:fill-white fill-slate-600" viewBox="0 0 50 50">
          <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
        </svg>
      </button>
    </form>
  );
};

export default SearchInput;
