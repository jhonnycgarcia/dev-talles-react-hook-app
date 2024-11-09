import PropTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ id, name, sprites = []}) => {

    const titleTag = useRef();
    const [boxSise, setBoxSise] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        // console.log('titleTag', titleTag.current.getBoundingClientRect());
        const { width, height } = titleTag.current.getBoundingClientRect();
        setBoxSise({ width, height });
    }, [name])

  return (
    <section
        style={{ height: 200 }}

    >
        <h2 
            ref={titleTag} 
            className="text-capitalize"
        >
            #{id} - {name}
        </h2>
        {/* Imagenes */}
        <div>
            {
                sprites.map((sprite, index) => (
                    <img
                        key={index}
                        src={sprite}
                        alt={name}
                        className="img-fluid"
                    />
                ))
            }
        </div>

        <code>
            {JSON.stringify(boxSise)}
        </code>
    </section>
  )
}

PokemonCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sprites: PropTypes.arrayOf(PropTypes.string).isRequired,
}
