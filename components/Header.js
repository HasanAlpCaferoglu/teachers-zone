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
      <div className="cursor-pointer flex flex-col m-3 font-Anton text-4xl text-[#c4c6c9] xl:text-6xl xl:flex-row xl:m-7">
        <Link href="/">TEACHERS</Link>
        <p href="/" className="hidden xl:block">
          -
        </p>
        <Link href="/">ZONE</Link>
      </div>
      <form onSubmit={searchSubmitHandler} className="flex cursor-pointer">
        <input
          type="search"
          name="searchForm"
          onChange={(e) => {
            router.push(`/?searchForm=${e.target.value}`)
          }} // set the value of state searchQuery anytime the user types in the searchbox
          placeholder="Search for..."
          className="rounded-full px-2 xl:px-14 xl:py-3"
        />
        <SearchIcon className="h-7 ml-2 text-[#c4c6c9] xl:h-11" />
      </form>
      <div className="cursor-pointer h-full text-xl mr-5 bg-orange-500 rounded-full px-5 py-2 text-white font-bold transition duration-100 transform hover:animate-bounce xl:px-16">
        <button onClick={() => router.push("/add-teacher")}>
          I am a teacher
        </button>
      </div>
    </div>
  );
}

export default Header;
