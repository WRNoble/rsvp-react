import React from "react";
import PropTypes from "prop-types";
import Guest from "./Guest";

const GuestList = (props) => (
  <ul>
    {props.guests.map((guests, index) => (
      <Guest
        handleConfirmation={() => props.toggleConfirmationAt(index)}
        key={index}
        name={guests.name}
        isConfirmed={guests.isConfirmed}
      />
    ))}
  </ul>
);

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
};
