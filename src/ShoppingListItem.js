import React from 'react';

const ShoppingListItem = (props) => {
    return (
        <div className='flex-column'>
            <div className='flex-row'>
                <input type='checkbox' checked={props.completed} onChange={() => props.updateCompleted(props.uId)}></input>
                <span>{props.itemName}</span>
                <div className='quantity'>
                    <button onClick={() => props.updateQuantity(-1, props.uId)}><i className="fa-solid fa-angle-left"></i></button>
                    <span>{props.quantity}</span>
                    <button onClick={() => props.updateQuantity(1, props.uId)}><i className="fa-solid fa-angle-right"></i></button>
                </div>
            </div>
        </div>
    );
}

export default ShoppingListItem;