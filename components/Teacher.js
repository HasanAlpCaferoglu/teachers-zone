import { useRouter } from "next/router";

function Teacher(props) {
  const alternativeImage =
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg";
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <li className="flex flex-col items-center my-10">
      <div className="border-solid border-black">
        <img
          className="rounded-full object-cover h-36 w-36 sm:h-40 sm:w-40 lg:h-44 lg:w-44  xl:h-48 xl:w-48  "
          src={props.image || alternativeImage}
          alt={props.nameSurname}
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold border-b-4 border-gray-300 sm:text-2xl">
          {props.nameSurname}
        </h1>
        <h3>Area: {props.branch}</h3>
        <h3>Location: {props.city}</h3>
        <div className="mt-3 px-2 py-1 text-sm rounded-full bg-[#0b4961] text-white lg:px-3 lg:py-2 xl:text-md">
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </div>
    </li>
  );
}

export default Teacher;
