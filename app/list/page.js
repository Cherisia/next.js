'use client'

import {useState} from "react";

export default function List() {
    let items = ['토마토', '파스타', '코코넛'];
    let [count, setCount] = useState(0);
    return (
        <div>
            <h2>Products</h2>
            {
                items.map((item, i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/portfolio-${i + 1}.jpg`} className="food-img" alt="이미지"/>
                            <h4>{item} $40</h4>
                            <span> {count} </span>
                            <button onClick={() => {
                                setCount(count + 1);
                            }}>+
                            </button>
                            <button onClick={() => {
                                setCount(count - 1);
                            }}>-
                            </button>
                        </div>
                    );
                })
            }
        </div>
    );
};