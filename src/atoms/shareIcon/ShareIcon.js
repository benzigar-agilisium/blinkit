import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export default function ShareIcon({ link = "", Icon = null }) {
  return (
    <Link target="_blank" to={link} className="text-white bg-black p-3 rounded-full text-xl mx-3">
      <Icon />
    </Link>
  );
}

ShareIcon.propTypes = {
  link: PropTypes.string,
  Icon: PropTypes.element,
};
