import { memo } from "react";
import "./Greetings.css";

interface GreetingsProps {
  hour: number;
}

const Greetings = (props: GreetingsProps): JSX.Element => {
  const getGreeting = () => {
    if (props.hour >= 6 && props.hour < 12) return "Good Morning!";
    if (props.hour >= 12 && props.hour < 18) return "Good Afternoon!";
    if (props.hour >= 18 && props.hour < 23) return "Good Evening!";
    return "Good Night!";
  };
  return (
    <div className="Greetings">
      <span>{getGreeting()}</span>
    </div>
  );
};

export default memo(Greetings, (_prevProps, nextProps) => {
  return nextProps.hour % 6 === 0;
});
