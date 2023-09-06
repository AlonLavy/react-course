import "./Footer.css";

function Footer(): JSX.Element {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <div className="Footer">
      <p>{`All Rights Reserved Alon Lavy ${year} ©`}</p>
    </div>
  );
}

export default Footer;
