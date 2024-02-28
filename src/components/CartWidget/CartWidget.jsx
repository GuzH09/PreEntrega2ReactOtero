import cart from './assets/shoppingcart.svg';

const CartWidget = () => {
    return (
        <div className='flex flex-row items-center'>
            <p className='font-bold text-white'>0</p>
            <img src={cart} alt="cart-widget" />
        </div>
    )
}

export default CartWidget