import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import TeacherDetail from "../components/TeacherDetail";
import { MongoClient, ObjectId } from "mongodb";

function teacherDetails(props) {
  return (
    <div>
      <Head>
        <title>{props.teacherData.nameSurname}</title>
        <meta name="description" content={props.teacherData.about} />
      </Head>

      <Header />
      <Nav />
      <TeacherDetail teacherData={props.teacherData} />
      <Footer />
    </div>
  );
}

export default teacherDetails;

export async function getServerSideProps(context) {
  // fetch data for a single teacher
  const MONGODB_CONNECT_KEY = process.env.MONGODB_CONNECT_KEY;
  const teacherId = context.params.teacherId;

  const client = await MongoClient.connect(`${MONGODB_CONNECT_KEY}`);
  const db = client.db();
  const teachersCollection = db.collection("teachers");
  const singleTeacher = await teachersCollection.findOne({
    _id: ObjectId(teacherId),
  });
  client.close();

  //   console.log(singleTeacher)

  return {
    props: {
      teacherData: {
        id: singleTeacher._id.toString(),
        nameSurname: singleTeacher.nameSurname,
        age: singleTeacher.age,
        city: singleTeacher.city,
        country: singleTeacher.country,
        branch: singleTeacher.branch,
        telephone: singleTeacher.telephone,
        image: singleTeacher.image,
        about: singleTeacher.about,
      },
    },
  };
}
