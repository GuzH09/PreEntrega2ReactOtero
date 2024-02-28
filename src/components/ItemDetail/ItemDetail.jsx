import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <article className="items-center flex flex-col">
      <header>
        <h2 className="font-bold">
          {name}
        </h2>
      </header>
      <picture className="h-72 w-42 p-3">
        <img className="h-full" src={img} alt={name} />
      </picture>
      <section className="text-center">
        <p>
          Categoria: {category}
        </p>
        <p>
          Descripcion: {description}
        </p>
        <p>
          Precio: ${price}
        </p>
      </section>
      <footer className="py-3">
        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
      </footer>
    </article>
  )
}

export default ItemDetail