function TeacherDetail({ teacherData }) {
  console.log(`your data is ${teacherData}`);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl border-b-4 p-10 mb-10 text-center ">{teacherData.nameSurname}</h1>
      <div className="info-container image-container flex flex-col items-center space-y-8 w-full xl:flex-row xl:justify-center">
        <img src={teacherData.image} alt={teacherData.nameSurname} className="scale-200 m-16 xl:mr-10 "/>
        <div className="info-container flex flex-col justify-center items-center space-y-4 w-8/12  xl:w-4/12 xl:items-start xl:ml-32">
          <div className="flex space-x-2">
            <h4 className="font-bold">Age:</h4>
            <h4>{teacherData.age}</h4>
          </div>
          <div className="flex space-x-2">
            <h4 className="font-bold">Expert Area:</h4>
            <h4>{teacherData.branch}</h4>
          </div>
          <div className="flex space-x-2">
            <h4 className="font-bold">Location:</h4>
            <h4>
              {teacherData.city}, {teacherData.country}
            </h4>
          </div>
          <div className="flex space-x-2">
            <h4 className="font-bold">Contact:</h4>
            <h4>{teacherData.telephone}</h4>
          </div>
          <div className="flex w-full">
            <h4>{teacherData.about}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDetail;
