import {useRouter} from 'next/router';

function Teacher(props) {
  const alternativeImage = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg';
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id)
  }

  return (
    <li className='flex flex-col items-center m-10'>
        <div className='border-solid border-black'>
            <img className='rounded-full object-cover h-72 w-72' src={props.image || alternativeImage} alt={props.nameSurname} />
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl font-bold border-b-4 border-gray-300'>{props.nameSurname}</h1>
            <h3>Area: {props.branch}</h3>
            <h3>Location: {props.city}</h3>
            <div className='mt-3 px-4  py-2 rounded-full bg-[#0b4961] text-white'>
              <button onClick={showDetailsHandler}>Show Details</button>
            </div>
            
        </div>
    </li>
  )
}

export default Teacher