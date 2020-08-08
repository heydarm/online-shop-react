import React from "react";
import { Link } from "react-router-dom";

export const LinkBehavior = React.forwardRef(({ linkTo, ...props }, ref) => (
  <Link ref={ref} to={linkTo} {...props} />
));
