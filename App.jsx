import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    age:"",
    schudule:"",
    package:"",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    
    {
      id: 1,
      name: "First Name",
      type: "text",
      placeholder: "First Name",
      errorMessage:
        "first name should be 3-16 or _ characters and shouldn't include any special character!",
      label: "First Name",
      pattern: "^[A-Za-z0-9_]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "Last Name",
      type: "text",
      placeholder: "Last Name",
      errorMessage:
        "last name should be 3-16 characters and shouldn't include any special character!",
      label: "Last Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",

      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email/example@example.com",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 5,
      name: "Phone Number",
      type: "NUMBER",
      placeholder: "+91##########",
      errorMessage:
        "Username should be 10 characters and shouldn't include any special character!",
      label: "Phone Number",

      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 6,
      name: "Gender",
      type: "text",
      
      placeholder: "Male/Female",
      
      label: "Gender",

      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 7,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      
    },
    {
      id: 8,
      name: "Age",
      type: "Number",
      
      placeholder: "Age",
      errorMessage:
        "Age should be 18 to 65  characters and shouldn't include any special character!",
      label: "Age",

      pattern: "^[18-65]{2}$",
      required: true,
    },
    {
      id: 9,
      name: "Schedule Preference/nStart",
      type: "time",
      
      
      placeholder: "Time Slot",
      errorMessage:
        " Time should be 6AM to 7AM OR 7AM to 8AM OR 8AM to 9AM OR 5PM to 6PM ",
      label: "Schedule/Start",
     

      pattern: "^[5-9]{3,16}$",
      required: true,
    },
    {
      id: 99,
      name: "Schedule Preference/nStart",
      type: "time",
     
      
      placeholder: "Time Slot",
      
      errorMessage:
        " Time should be 6AM to 7AM OR 7AM to 8AM OR 8AM to 9AM OR 5PM to 6PM ",
      label: "Schedule/End",
     

      pattern: "^[5-9]{3,16}$",
      required: true,
    },
    {
      id: 88,
      name: "Session Packages",
      type: "Number",
      
      placeholder: "Per Month",
      errorMessage:
        "packages should be 500  ",
      label: "Session Packages",

      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 10,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 11,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
    
    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Online Yoga Class Register Form</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
