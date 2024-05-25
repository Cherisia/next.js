import {age, name} from './data.js';
import Hello from "./hello";

export default function Cart() {
    console.log('age : ' + age);
    console.log('name : ' + name);
    return (
        <div>
            <Hello/>
            <h4 className="title">Cart</h4>
            <CartItem/>
        </div>
    )
}

function CartItem() {
    return (
        <div>
            <div className="cart-item">
                <p>상품명</p>
                <p>$40</p>
                <p>1개</p>
            </div>
            <div className="cart-item">
                <p>상품명</p>
                <p>$40</p>
                <p>1개</p>
            </div>
        </div>
    )
}