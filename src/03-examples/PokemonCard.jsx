
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
