import { SearchIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

import Link from "next/link";

function Header() {
  const router = useRouter();

  function searchSubmitHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="mt-0 flex items-center justify-between h-auto bg-[#0b4961]">
      <div className="cursor-pointer flex flex-col m-3 font-Anton text-xl text-[#c4c6c9] md:2xl lg:text-4xl lg:flex-row lg:m-5">
        <Link href="/">TEACHERS</Link>
        <p href="/" className="hidden lg:block">
          -
        </p>
        <Link href="/">ZONE</Link>
      </div>
      <form onSubmit={searchSubmitHandler} className="flex cursor-pointer">
        <input
          type="search"
          name="searchForm"
          onChange={(e) => {
            router.push(`/?searchForm=${e.target.value}`);
          }} // set the value of state searchQuery anytime the user types in the searchbox
          placeholder="Search for..."
          className="rounded-full text-xs p-1 w-24 sm:text-base sm:w-32 md:w-40 lg:w-56 xl:pr-10 xl:py-1"
        />
        <SearchIcon className="h-5 ml-2 text-[#c4c6c9] xl:h-7" />
      </form>
      <div className="cursor-pointer h-full text-xs mr-5 bg-orange-500 rounded-full px-2 py-1 text-white font-bold transition duration-100 transform hover:animate-bounce sm:text-base xl:px-8 xl:text-lg">
        <button onClick={() => router.push("/add-teacher")}>
          I am a teacher
        </button>
      </div>
    </div>
  );
}

export default Header;
