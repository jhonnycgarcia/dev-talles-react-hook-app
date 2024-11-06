import PropTypes from "prop-types";
import { memo } from "react";

export const Small = memo( ({ value = 0 }) => {
    console.log('Small rendered');
    return (
        <small>{value}</small>
    )
})

Small.propTypes = {
    value: PropTypes.number.isRequired,
}
