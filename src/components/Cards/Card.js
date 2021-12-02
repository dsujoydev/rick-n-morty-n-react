import React from 'react'

const Card = ({results}) => {
    let display =results.map((items) => {
        let {id, name} = items;
        return (
            <div key={id}>
                {name}
            </div>
        );
    });

    return (
        <>
        {display} ;
        </>
    );
}

export default Card
