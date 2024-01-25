import Link from "next/link";

import classes from "./event-item.module.css";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const readableDate = new Date(date).toLocaleDateString("es-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const exploreLink = `/event/${id}`;

  const formattedAddress = location.replace(", ", "\n");
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
