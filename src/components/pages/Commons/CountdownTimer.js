import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import styles from "./CountdownTimer.module.css";
import dotenv from 'dotenv'

dotenv.config()

const Countdown = (props) => {
  //current Date
  let now = new Date().getTime();
  //Event start Date
  let startDate = props.startDate;
  //Event End Date
  let endDate = props.endDate;
  //Time before start
  let remaining = startDate - now;
  //Time beforeEnd
  let remainingToEnd = endDate - now;
  //hook + updating function
  const [time, setTime] = React.useState(now);

  const updateTime = () => {
    let newTime = new Date().getTime();
    setTime(newTime);
  };
  var tick = setTimeout(updateTime, 1000);
  //Event Opening Control
  const [isOpen, setIsOpen] = React.useState(false);
  const [isClosed, setIsClosed] = React.useState(false)

  //Event Launched hook
  React.useEffect(() => {
    if (remaining <= 0) {
      setIsOpen(true);
      clearTimeout(tick);
    }
    if(remainingToEnd<=0){
      setIsClosed(true)
      clearTimeout(tick);
    }
  }, [time, remaining, tick]);

  // Calculating the days, hours, minutes and seconds left

  //START
  var days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remaining % (1000 * 60)) / 1000);

  //END
  var daysEnd = Math.floor(remainingToEnd / (1000 * 60 * 60 * 24));
  var hoursEnd = Math.floor(
    (remainingToEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutesEnd = Math.floor(
    (remainingToEnd % (1000 * 60 * 60)) / (1000 * 60)
  );
  var secondsEnd = Math.floor((remainingToEnd % (1000 * 60)) / 1000);

  return (
    <div>
      {isOpen ? (!isClosed &&
        <Link to={`${props.main}/Events/${props.event.id}`}>
          <Button variant="primary">Go to event</Button>
        </Link>
      ) : (
        `Starts: ${new Date(props.event.start_date).toUTCString()}`
      )}
      <br />
      <br />
      {!isOpen && (
        <p>
          time until start
          <br />
          <span className={styles.span}>
            {" "}
            {`${days}d ${hours}h ${minutes}m ${seconds}s`}
          </span>
        </p>
      )}
      {!isClosed? (isOpen &&
        <p>
          time until end <br />
          <span className={styles.span}>
            {`${daysEnd}d ${hoursEnd}h ${minutesEnd}m ${secondsEnd}s`}
          </span>
        </p>
      ):'Event Closed'}
    </div>
  );
};

export default Countdown;
