import Teacher from "./Teacher";
import Header from "./Header";
import Nav from "./Nav";

function TeachersList(props) {
  return (
    <div>


      <div>
      <ul className="px-5 m-16 place-content-center grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {props.teachers.map((teacher) => (
          <Teacher
            key={teacher.id}
            id={teacher.id}
            nameSurname={teacher.nameSurname}
            age={teacher.age}
            city={teacher.city}
            country={teacher.country}
            branch={teacher.branch}
            telephone={teacher.telephone}
            image={teacher.image}
            about={teacher.about}
          />
        ))}
      </ul>
    </div>



    </div>
    
  );
}

export default TeachersList;
