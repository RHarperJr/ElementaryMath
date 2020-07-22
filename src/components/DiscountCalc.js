import React, {Component} from 'react';


class DiscountCalc extends Component {

    state = {
        price: 0, discount: 1, finalValue: 2, savings: 3
    }

    updatePrice = (e) => {
        e.preventDefault();
        var inputPrice = e.target.value;
        if (inputPrice < 0 || isNaN(inputPrice)) {
            console.log("WARNING: Negative price");
            this.setState({price: "ERROR; invalid number"});
        } else {
            this.setState({price: inputPrice});
        }
    }

    updateDiscount = (e) => {
        e.preventDefault();
        var inputDiscount = e.target.value;
        if (inputDiscount < 0 || inputDiscount > 100 || isNaN(inputDiscount)) {// || !Number.isInteger(inputDiscount)) {
            console.log("WARNING: invalid percentage. Needs to be a number between 0 and 100");
            this.setState({discount: "ERROR; invalid percentage"});
        } else {
            this.setState({discount: inputDiscount});
        }
    }

    calculatePrice = () => {
        var disc_decimal = this.state.discount / 100;
        var savings_calc = this.state.price * disc_decimal;
        var finalPrice = this.state.price - savings_calc;
        this.setState({finalValue: finalPrice, savings: savings_calc});
    }

    render() {
        return (<div>
            <div>
                Enter the original price:
                <p>
                    <input type="number" onChange={this.updatePrice} />
                </p>
                originalPrice = {this.state.price}
            </div>
            
            <div>
                Enter the discount percent: 
                <p>
                    <input type="number" min={0} onChange={this.updateDiscount} />
                </p>
                discount = {this.state.discount}
            </div>

            <div>
                <button onClick={this.calculatePrice}> Calculate </button>
                <p>
                    finalprice = {this.state.finalValue}
                </p>
                <p>
                    savings = {this.state.savings}
                </p>
            </div>

        </div>)
    }
}

export default DiscountCalc;