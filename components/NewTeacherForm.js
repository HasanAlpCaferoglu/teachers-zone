import { useRef } from "react";

function NewTeacherForm(props) {
  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const ageInputRef = useRef();
  const imageInputRef = useRef();
  const cityInputRef = useRef();
  const countryInputRef = useRef();
  const branchInputRef = useRef();
  const telephoneInputRef = useRef();
  const aboutInputRef = useRef();
  

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredSurname = surnameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;
    const enteredBranch = branchInputRef.current.value;
    const enteredTelephone = telephoneInputRef.current.value;
    const enteredAbout = aboutInputRef.current.value;

    const teacherData = {
      name: enteredName,
      surname: enteredSurname,
      age: enteredAge,
      image: enteredImage,
      city: enteredCity,
      country: enteredCountry,
      branch: enteredBranch,
      telephone: enteredTelephone,
      about: enteredAbout,
    };

    props.onAddTeacher(teacherData);
  }

  return (
    <div className="flex flex-col items-center w-auto scroll">
      <div className="m-10">
        <h1 className="text-5xl border-b-4 p-10 text-center">
          IT IS TIME TO SHOW YOUR SELF TO THE WORD!
        </h1>
      </div>

      <form
        className="flex flex-col content-around text-xl space-y-10"
        onSubmit={submitHandler}
      >
        <div className="flex justify-between items-center">
          <label htmlFor="name">Name</label>
          <input
            className="rounded-lg w-96 border-solid bg-gray-300 h-8"
            type="text"
            required
            id="name"
            ref={nameInputRef}
            placeholder="Enter your name..."
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="surname">Surname</label>
          <input
            className="rounded-lg w-96 bg-gray-300 h-8"
            type="text"
            required
            id="surname"
            ref={surnameInputRef}
            placeholder="Enter your surname..."
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="age">Age</label>
          <input
            className="rounded-lg w-96 bg-gray-300 h-8"
            type="text"
            required
            id="age"
            ref={ageInputRef}
            placeholder="Enter your age..."
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="city">City</label>
          <input
            className="rounded-lg w-96 bg-gray-300 h-8"
            type="text"
            required
            id="city"
            ref={cityInputRef}
            placeholder="Enter which city you live..."
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="country">Country</label>
          <input
            className="rounded-lg w-96 bg-gray-300 h-8"
            type="text"
            required
            id="country"
            ref={countryInputRef}
            placeholder="Enter which country you live..."
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="branch">Branch</label>
          <input
            className="rounded-lg w-96 bg-gray-300 h-8"
            type="text"
            required
            id="branch"
            ref={branchInputRef}
            placeholder="Enter your expert area..."
          />
        </div>
        <div className="flex justify-between items-center space-x-10">
          <label htmlFor="telephone">Telephone</label>
          <input
            className="rounded-lg w-96 bg-gray-300 h-8"
            type="text"
            required
            id="telephone"
            ref={telephoneInputRef}
            placeholder="Enter your telephone number..."
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="image">Picture</label>
          <input
            className="rounded-lg w-96 bg-gray-300 h-8"
            type="url"
            id="image"
            ref={imageInputRef}
            placeholder="Enter your image url..."
          />
        </div>
        <div className="flex justify-between items-center h-auto">
          <label htmlFor="about">About</label>
          <textarea
            className="rounded-lg w-96 bg-gray-300 h-52"
            rows="4" 
            cols="50"
            id="about"
            name="about"
            ref={aboutInputRef}
            placeholder="Tell us about yourself..."
          ></textarea>
        </div>
        <div className="flex self-center mb-16">
          <button className="bg-orange-500 p-4 rounded-full text-white transition duration-100 transform hover:scale-125">Add Yourself</button>
        </div>
      </form>
    </div>
  );
}

export default NewTeacherForm;
