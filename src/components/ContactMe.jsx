import { useState } from "react";

const ContactMe = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [cName, setCname] = useState("");
  const [cMail, setCmail] = useState("");
  const [cSubject, setCsubject] = useState("");
  const [cMessage, setCmessage] = useState("");

  const SubmitButton = () => {
    if (cName && cMail && cSubject && cMessage) {
      return (
        <button className="btn btn-primary w-100 py-3">Send Message</button>
      );
    } else {
      return (
        <button className="btn btn-primary w-100 py-3" disabled>
          Send Message
        </button>
      );
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(cName, cMail, cSubject, cMessage);

    var today = new Date();
    var date =
      today.getFullYear() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;

    const message = {
      custName: cName,
      custEmail: cMail,
      custSubject: cSubject,
      custMessage: cMessage,
      messageTime: dateTime,
    };

    try {
      const response = await fetch(
        "https://dwiky-cv-default-rtdb.asia-southeast1.firebasedatabase.app/message.json",
        {
          method: "POST",
          body: JSON.stringify(message),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        setError(true);
        throw new Error("Request Error");
      }
      const data = await response.json();
      setCname("");
      setCmail("");
      setCsubject("");
      setCmessage("");
      setSuccess(true);
      console.log(data);
    } catch (error) {
      console.log(error.message);
      setError(true);
    }
  };

  return (
    <section className="py-5 wow fadeInUp" data-wow-delay="0.1s" id="contact">
      <h1 className="title pb-3 mb-5">Contact Me</h1>
      <p className="mb-4">
        If you want to use my services or you're looking for employees and feel
        that my profile matches with what you're looking for, please do not
        hesitate to contact me via the form below. I will definitely receive
        your message and will reach you back.
      </p>
      <form onSubmit={submitHandler}>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control border-0 bg-secondary"
                value={cName}
                onChange={(e) => setCname(e.target.value)}
                placeholder="Your Name"
              />
              <label htmlFor="name">Your Name</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="email"
                className="form-control border-0 bg-secondary"
                value={cMail}
                onChange={(e) => setCmail(e.target.value)}
                placeholder="Your Email"
              />
              <label htmlFor="email">Your Email</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <input
                type="text"
                className="form-control border-0 bg-secondary"
                value={cSubject}
                onChange={(e) => setCsubject(e.target.value)}
                placeholder="Subject"
              />
              <label htmlFor="subject">Subject</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <textarea
                className="form-control border-0 bg-secondary"
                placeholder="Leave a message here"
                value={cMessage}
                onChange={(e) => setCmessage(e.target.value)}
                style={{ height: "175px" }}
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>
          </div>
          <div className="col-12">
            <SubmitButton />
            {success ? (
              <div
                className="alert alert-success text-center"
                onClick={() => setSuccess(false)}
              >
                <strong>Thank you for reaching me!</strong>
              </div>
            ) : null}
            {error ? (
              <div
                className="alert alert-danger text-center"
                onClick={() => setError(false)}
              >
                <strong>Sorry, I've encountered an error</strong>
              </div>
            ) : null}
            {/* <button className="btn btn-primary w-100 py-3" type="submit">
              Send Message
            </button> */}
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
