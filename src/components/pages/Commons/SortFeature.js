import React from 'react';

const SortFeature=(props)=>{
    return(
        <div>
            <select onChange={props.changeHandler}>
                <option default value='name'>name</option>
                <option value='priceDesc'>price(high to low)</option>
                <option value='priceAsc'>price (low to high)</option>
                <option value='bbdAsc'>best before date(soonest)</option>
                <option value='bbdDesc'>best before date(latest)</option>
            </select>
        </div>
    )
}

export default SortFeature;