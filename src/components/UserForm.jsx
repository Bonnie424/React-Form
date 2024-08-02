import SubmitButton from "./SubmitButton"
import SubmittedData from "./SubmittedData";
import "./componentStyle/UserForm.css";
import {useState} from "react";

export default function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
    setSubmittedEmail(email);
  };
  return (
    <>
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="user-name">Name:</label>
        <input
          type="text"
          id="user-name"
          name="name"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        </div>
        <div className="form-group">
        <label for="user-email">Email:</label>
        <input
          type="email"
          id="user-email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        </div>
        <SubmitButton />
      </form>
      </div>
      <SubmittedData name={submittedName} email={submittedEmail}/>
      </>
  )
}