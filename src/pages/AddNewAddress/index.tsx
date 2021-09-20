import React, { Component, useState } from 'react';
import "./style.scss"
import { Steps, Button, message } from 'antd';

const { Step } = Steps;
const steps = [
    {
        title: 'First',
        content: 'StepForm1',
    },
    {
        title: 'Second',
        content: 'StepForm2',
    },
    {
        title: 'Last',
        content: 'StepForm3',
    },
];

const App = () => {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <>
            <Steps
                type="navigation"
                size="small"
                current={current}
                className="site-navigation-steps"
            >
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Submit
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
};


class AddNewAddress extends Component {


    render() {
        return (
            <div>
                <App />
            </div>
        );
    }
}

export default AddNewAddress;