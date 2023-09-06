import css from "./WhoAreWe.module.css";

function WhoAreWe(): JSX.Element {
  return (
    <div className="WhoAreWe">
      <p className={css.NiceText}>Hello</p>
      <p className={css.NiceText2}>We are open 24/7</p>
    </div>
  );
}

export default WhoAreWe;
