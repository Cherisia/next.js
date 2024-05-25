export default function List() {
    let items = ['토마토', '파스타', '코코넛'];
    return (
        <div>
            <h2>Products</h2>
            {
                items.map((item, i) => {
                    return (
                        <div className="food" key={i}>
                            <h4>{item} $40</h4>
                        </div>
                    );
                })
            }
        </div>
    );
};