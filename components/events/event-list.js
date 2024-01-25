import classes from "./event-list.module.css";
import EventItem from "./event-item";

const EvnetList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((event) => {
        return (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        );
      })}
    </ul>
  );
};

export default EvnetList;
