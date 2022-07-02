import { useRouter } from "next/router";
import Branches from "./Branches";

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex items-center justify-between px-8 py-3 text-xl whitespace-nowrap space-x-10 overflow-x-scroll scrollbar-hide bg-orange-500 xl:text-2xl xl:space-x-10 ">
        {Branches.map((branch) => (
          <h2
            key={Branches.indexOf(branch)}
            className="cursor-pointer transition duration-100 transform  capitalize font-bold text-[#0b4961] hover:scale-125 hover:text-white"
            onClick={() => router.push(`/?teacherBranch=${branch}`)}
          >
            {branch}
          </h2>
        ))}
      </div>
    </nav>
  );
}

export default Nav;

/*
burada hocalarin bulundugu arraye gerekli loop dondurulerek
alanlar bulunabilir. sadece unique degerleri ceviren bir fonk vardi arastir
*/
