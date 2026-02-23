import { useState } from "react";
import "../../styling/middle.css";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendDataToServer(e) {
    e.preventDefault();
    const userInfo = {
      userEMail: email,
      userMessage: message,
    };

    const response = await fetch("/sendEmail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    if(!response.ok){
        console.error("failed");
        return;
      }

      const serverMessage = await response.json();

  }

 



  return (
    <form className="emailFields" onSubmit={sendDataToServer}>
      <label htmlFor="email">Email </label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="mess">Message: </label>
      <textarea
        id="mess"
        name="mess"
        rows="4"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}
