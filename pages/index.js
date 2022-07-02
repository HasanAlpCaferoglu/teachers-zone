import { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import TeachersList from "../components/TeachersList";
import { MongoClient } from "mongodb";
import Branches from "../components/Branches";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Teachers Zone</title>
        <meta name="description" content="Listing Teachers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <TeachersList teachers={props.teachers} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const MONGODB_CONNECT_KEY = process.env.MONGODB_CONNECT_KEY;
  const teacherBranch = context.query.teacherBranch;
  const searchQuery = context.query.searchForm;

  // fetching data from the internal API
  const client = await MongoClient.connect(`${MONGODB_CONNECT_KEY}`);
  const db = client.db(); // accessing to database
  const teachersCollection = db.collection("teachers");
  let teachers = await teachersCollection.find().toArray();

  client.close();

  if (teacherBranch === "Others") {
    teachers = teachers.filter(
      (teacher) => Branches.indexOf(teacher.branch) === -1
    );
  } else {
    if (teacherBranch === "All" || teacherBranch === undefined) {
    } else {
      teachers = teachers.filter((teacher) => teacher.branch === teacherBranch);
    }
  }

  // search items

  const searchParam = ["nameSurname", "city", "branch"]; // user can search for name surname and city

  if (searchQuery) {
    //console.log(`currently your search query is ${searchQuery}`);
    teachers = teachers.filter((teacher) => {
      return searchParam.some((param) => {
        return teacher[param]
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      });
    });
  }

  return {
    props: {
      teachers: teachers.map((teacher) => ({
        id: teacher._id.toString(),
        nameSurname: teacher.nameSurname,
        age: teacher.age,
        city: teacher.city,
        country: teacher.country,
        branch: teacher.branch,
        telephone: teacher.telephone,
        image: teacher.image,
        about: teacher.about,
      })),
    },
  };
}
