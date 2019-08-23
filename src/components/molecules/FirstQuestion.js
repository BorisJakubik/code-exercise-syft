import React, { PureComponent } from 'react';

export class FirstQuestion extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            checked: 0,
            subSystem: '',
        }
    }

    componentDidMount() {
        this.setState({
            checked: this.props.system || '',
            subSystem: this.props.subSystem || '',
        });
    }
    

    handleRadio = (event, value) => {
        this.setState({
            checked: Number(event.currentTarget.value),
            subSystem: '',
        });
    }

    handleChangedText = (event) => {
        this.setState({
            subSystem: event.target.value,
        });
    }

    handleNextStep = () => {
        const { checked, subSystem } = this.state;
        if(checked === 0 || checked === 1) {
            this.props.handleNext({ system: checked, subSystem: '' }, 0);
        }
        if(checked === 2) {
            this.props.handleNext({ system: checked, subSystem }, 0);
        }
    }

    render() {
        const {
            checked,
            subSystem,
        } = this.state;

        return (
            <>
                <label>
                    What is your favorite operating system?
                </label>
                <br/>
                <input
                    type="radio"
                    name="windows"
                    value={0}
                    onChange={this.handleRadio}
                    checked={checked === 0}
                />
                Windows
                <br/>
                <input
                    type="radio"
                    name="mac"
                    value={1}
                    onChange={this.handleRadio}
                    checked={checked === 1}
                />
                Mac OS X
                <br/>
                <input
                    type="radio"
                    name="linux"
                    value={2}
                    onChange={this.handleRadio}
                    checked={checked === 2}
                />
                Linux
                <input
                    type="text"
                    name="linuxType"
                    onChange={this.handleChangedText}
                    disabled={checked !== 2}
                    value={subSystem}
                />
                ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​<br/>
                <button onClick={this.handleNextStep}>Next</button>
            </>
        );
    }
}