import React, { PureComponent } from 'react';
import { PRICES } from '../../mock/mockDataPrices';

export class ThirdQuestion extends PureComponent {
    constructor(props){
        super(props);
        this.state = { date: '', price: '£500≤' };
    }

    componentDidMount() {
        this.setState({
            date: this.props.date,
            price: this.props.price || '£500≤',
        });
    }
    

    handleDate = (event) => {
        this.setState({ date: event.target.value });
    }

    handleDropDown = (event) => {
        this.setState({ price: event.target.value });
    }

    handleNextStep = () => {
        const { price, date } = this.state;
        this.props.handleNext({ price, date }, 2);
    }

    handlePreviousStep = () => {
        const { price, date } = this.state;
        this.props.handlePrevious({ price, date }, 2);
    }

    render() {
        const { date, price } = this.state;
        const disabled = !date; 
        return (
            <>
                <label>
                    When will you probably buy a new computer, and how much would you spend?
                </label>
                <br />
                <input type="date" onChange={this.handleDate} value={date} /><br/>
                <select onChange={this.handleDropDown} value={price} name="price">
                    {PRICES.map((priceValue) => (
                        <option key={priceValue} value={priceValue}>{priceValue}</option>
                    ))}
                </select>
                <button onClick={this.handlePreviousStep}>Previous</button>
                <button onClick={this.handleNextStep} disabled={disabled}>Finalize</button>
            </>
        );
    }
}