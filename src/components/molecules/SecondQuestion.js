import React, { PureComponent } from 'react';

export class SecondQuestion extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            checked: '',
            other: '',
        }
    }

    componentDidMount() {
        this.setState({
            checked: this.props.hardware || '',
        });
    }
    

    onChangeText = (event) => {
        this.setState({
            checked: '',
            other: event.target.value,
        })
    }

    handleRadio = (event) => {
        this.setState({
            checked: Number(event.currentTarget.value),
            other: '',
        })
    }

    handleNextStep = () => {
        const { checked, other } = this.state;
        this.props.handleNext({ hardware: checked !== '' ? checked : other }, 1);
    }

    handlePreviousStep = () => {
        const { checked, other } = this.state;
        this.props.handlePrevious({ hardware: checked !== '' ? checked : other }, 1);
    }

    render() {
        const { checked, other } = this.state;

        return (
            <>
                <label>
                    What is your favorite computer hardware brand?
                </label>
                <br/>
                <input type="radio" value={0} onChange={this.handleRadio} checked={checked === 0}/>Apple<br/>
                <input type="radio" value={1} onChange={this.handleRadio} checked={checked === 1}/>ASUS<br/>
                <input type="radio" value={2} onChange={this.handleRadio} checked={checked === 2}/>Lenovo<br/>
                <input type="radio" value={3} onChange={this.handleRadio} checked={checked === 3}/>Razer<br/>
                Other​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​: <input type="text" name="other_reason" onChange={this.onChangeText} value={other}/><br/>
                <button onClick={this.handlePreviousStep}>Previous</button>
                <button onClick={this.handleNextStep}>Next</button>
            </>
        );
    }
}