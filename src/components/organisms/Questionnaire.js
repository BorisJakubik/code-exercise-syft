import React, { PureComponent } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { FirstQuestion, SecondQuestion, ThirdQuestion } from '../molecules';
import { Answers } from '../atoms';
import { systemIdToString, hardwareIdToString } from '../../utils';
import { STEPS } from '../../mock/mockDataSteps';

export class Questionnaire extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            price: '',
            date: '',
            system: '',
            subSystem: '',
            hardware: '',
        }
    }

    handleNext = (value, step) => {
        this.updateData(value, step);
        this.setState(() => ({ active: this.state.active + 1 }))
    }

    handlePrevious = (value, step) => {
        this.updateData(value, step);
        this.setState(() => ({ active: this.state.active - 1 }))
    }

    updateData = (value, step) => {
        switch (step) {
            case 0:
                this.setState(() => ({
                    system: value.system,
                    subSystem: value.subSystem,
                }));
                break;
            case 1:
                this.setState(() => ({
                    hardware: value.hardware,
                }));
                break;
            case 2:
                this.setState(() => ({
                    price: value.price,
                    date: value.date,
                }));
                break;
            default:
                break;
        }
    }

    render() {
        const {
            active,
            price,
            date,
            system,
            subSystem,
            hardware,
        } = this.state;

        return (
            <>
                <Stepper activeStep={active}>
                    {STEPS.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {active === 0 && <FirstQuestion
                    handleNext={this.handleNext}
                    system={system}
                    subSystem={subSystem}
                />}
                {active === 1 && <SecondQuestion
                    handleNext={this.handleNext}
                    handlePrevious={this.handlePrevious}
                    hardware={hardware}
                />
                }
                {active === 2 && <ThirdQuestion
                    handleNext={this.handleNext}
                    handlePrevious={this.handlePrevious}
                    date={date}
                    price={price}
                />
                }
                {active === 3 && <Answers
                    date={date}
                    price={price}
                    system={systemIdToString(system)}
                    subSystem={subSystem}
                    hardware={hardwareIdToString(hardware)}
                />}
            </>
        );
    }
}