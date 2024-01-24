import React from "react";
import EventItem from "../event-item";

const EvnetList = ({ items }) => {
  return (
    <ui>
      {items.map((item) => {
        <EventItem key={item.id} event={item} />;
      })}
    </ui>
  );
};

export default EvnetList;
