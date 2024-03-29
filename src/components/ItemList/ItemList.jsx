import Item from "../Item/Item"

const ItemList = ({products}) => {
    return (
        <div className="flex flex-row justify-evenly items-center">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList