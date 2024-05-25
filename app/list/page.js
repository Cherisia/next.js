'use client'

import {useState} from "react";

export default function List() {
    let [items, setItems] = useState([
        {'name': '파스타', 'count': 0},
        {'name': '피자', 'count': 0},
        {'name': '치킨', 'count': 0}
    ]);
    return (
        <div>
            <h2>Products</h2>
            {
                items.map((item, i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/portfolio-${i + 1}.jpg`} className="food-img" alt="이미지"/>
                            <h4>{item.name} $40</h4>
                            <span> {item.count} </span>
                            <button onClick={() => {
                                let copyItems = [...items];
                                copyItems[i].count++;
                                setItems(copyItems);
                            }}>+
                            </button>
                            <button onClick={() => {
                                let copyItems = [...items];
                                copyItems[i].count--;
                                setItems(copyItems);
                            }}>-
                            </button>
                        </div>
                    );
                })
            }
        </div>
    );
};