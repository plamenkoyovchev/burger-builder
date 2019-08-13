import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => {
            return (
                <li key={key}>
                    <span style={{ textTransform: 'capitalize' }}>{key}:</span>
                    {props.ingredients[key]}
                </li>
            );
        });

    return (
        <Aux>
            <h3>Your order</h3>
            <p>Burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout ?</p>
            <div style={{ textAlign: 'center' }}>
                <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
            </div>
        </Aux >
    );
};

export default orderSummary;