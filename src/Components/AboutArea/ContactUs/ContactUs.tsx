import useTitle from "../../../Utils/UseTitle";
import "./ContactUs.css";

function ContactUs(): JSX.Element {
  useTitle("Northwind | Contact");
  return (
    <div className="ContactUs">
      <p>Contact us!</p>
    </div>
  );
}

export default ContactUs;
