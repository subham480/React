import UserClass from "./UserClass";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us Page</h1>
      <h2>
        This is Contact Page. Please find Inofrmation of contact person below
      </h2>
      <UserClass name="Subham" location="New Delhi" email="subham@gmail.com" />
    </div>
  );
};

export default Contact;
