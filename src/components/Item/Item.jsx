import { Link } from "react-router-dom"

const Item = ({id, name, img, price, stock}) => {

    return (
        <article className="text-center flex flex-col">
            <header>
                <h2 className="font-bold">
                    {name}
                </h2>
            </header>
            <picture className="h-56 w-60 p-3">
                <img className="h-full w-full object-contain" src={img} alt={name}/>
            </picture>
            <section>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="py-3">
                <Link className="rounded bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-600" to={`/item/${id}`}>Ver Detalle</Link>
            </footer>
        </article>
    )
}

export default Item