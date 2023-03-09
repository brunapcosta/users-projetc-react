import React from "react";

import { Button as But } from "./styles";

function Button({ children, ...props }) {
    return <But { ...props }> {children} </But>;
}

export default Button;