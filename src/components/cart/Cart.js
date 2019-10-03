import React, {Component} from 'react';
import Title from '../Title';
import CartColumn from './CartColumn';
import EmptyCart from './EmprtyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList'
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        return (

            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        console.log('cart component', cart)
                        if (cart.length > 0) {
                            return (
                                <>
                                    <Title name={'your'} title={'Cart'}/>
                                    <CartColumn/>
                                    <CartList value={value}/>
                                    <CartTotals value={value} history={this.props.history}/>
                                </>
                            );
                        } else {
                            return <EmptyCart/>
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}