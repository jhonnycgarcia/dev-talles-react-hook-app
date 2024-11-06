import PropTypes from "prop-types";

export const PokemonCard = ({ id, name, sprites = []}) => {
  return (
    <section
        style={{ height: 200 }}

    >
        <h2 className="text-capitalize">
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
    </section>
  )
}

PokemonCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sprites: PropTypes.arrayOf(PropTypes.string).isRequired,
}
