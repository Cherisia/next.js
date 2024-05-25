import {age, name} from './data.js';
import Hello from "./hello";

export default function Cart() {
    let items = ['pasta', 'pizza'];
    return (
        <div>
            <Hello/>
            <Btn color="red"/>
            <Btn color="blue"/>
            <h4 className="title">Cart</h4>
            <CartItem item={items[0]}/>
            <CartItem item={items[1]}/>
        </div>
    )
}

function CartItem(props) {
    return (
        <div className="cart-item">
            <p>{props.item}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}

function Btn(props){
    return <button style={{ background : props.color }}>버튼</button>
}