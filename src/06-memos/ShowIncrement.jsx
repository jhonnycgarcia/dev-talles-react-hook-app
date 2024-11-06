import PropTypes from "prop-types";
import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
    console.log('ShowIncrement rendered');
    return (
        <button
            className="btn btn-primary mt-2"
            onClick={() => increment()}
        >
            ShowIncrement
        </button>
    )
})

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired,
}
