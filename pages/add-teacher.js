import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import NewTeacherForm from "../components/NewTeacherForm";
import Capitalize from '../components/Capitalize';

function NewTeacherPage() {
  const router = useRouter();

  async function addTeacherHandler(enteredTeacherData) {

    const newTeacherData = {
      name: Capitalize(enteredTeacherData.name),
      surname: Capitalize(enteredTeacherData.surname),
      nameSurname: Capitalize(enteredTeacherData.name)+' '+Capitalize(enteredTeacherData.surname),
      age: enteredTeacherData.age,
      image: enteredTeacherData.image,
      city: Capitalize(enteredTeacherData.city),
      country: Capitalize(enteredTeacherData.country),
      branch: Capitalize(enteredTeacherData.branch),
      telephone:enteredTeacherData.telephone,
      about: enteredTeacherData.about
    };

    const response = await fetch('/api/new-teacher', {
      method: 'POST',
      body: JSON.stringify(newTeacherData),
      header: {
        'Content-Type': 'application/json' // headers are added to make it clear that wae are sending json data by adding 'Content-Type' and setting it 'application/json'
      }
    })

    const data = await response.json();

    router.push('/') // to turn back to home page.
  }





  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta name="description" content="Add yourself as a teacher! " />
      </Head>

      <Header />
      <Nav />
      <NewTeacherForm onAddTeacher={addTeacherHandler}/>
      <Footer />
    </Fragment>
  );
}

export default NewTeacherPage;
