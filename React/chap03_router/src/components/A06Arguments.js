
// npm i query-string
import React from 'react';
import qs from 'query-string'

const A04ArgsComponent = ( props ) => {

    const { location } = props;
    // console.log(location)
    // const query = location.search;
    const query = qs.parse(location.search);
    // console.log(query)

    const data = [
        { "id": 1, "name": "Apples", "category": "Fruit", "price": 1.20, "expiry": 10 },
        { "id": 2, "name": "Bananas", "category": "Fruit", "price": 2.42, "expiry": 7 },
        { "id": 3, "name": "Pears", "category": "Fruit", "price": 2.02, "expiry": 6 },
        { "id": 4, "name": "Tuna", "category": "Fish", "price": 20.45, "expiry": 3 },
        { "id": 5, "name": "Salmon", "category": "Fish", "price": 17.93, "expiry": 2 },
        { "id": 6, "name": "Trout", "category": "Fish", "price": 12.93, "expiry": 4 }
    ];
    // data[5] => { "id": 6, "name": "Trout", "category": "Fish", "price": 12.93, "expiry": 4 }
    const product = data[ Number(query.no) - 1 ]

    return (
        <div>
            <h5>Argument Component</h5>
            <div>This is Argument Component</div>
            <br />

            <div>
                pathname: {location.pathname}<br/>
                search: {location.search}<br/>
                hash: {location.hash}
            </div>
            <br />

            <div>
                Name: {query.name}<br/>
                Add: {query.add}<br/>
                No: {query.no} 
            </div>
            <br />

            <div>
                ID: {product.id}<br />
                Name: {product.name}
            </div>

        </div>
    )
}
export default A04ArgsComponent;