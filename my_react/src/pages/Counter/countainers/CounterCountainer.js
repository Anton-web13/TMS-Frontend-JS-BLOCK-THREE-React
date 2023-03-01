import { Component } from "react";
import Layout from "../componens/Layout";

class CounterCountainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            countValue: 0,
            isEven: true,
            countValueDescription: 'Чётное число',
        }
    }

    handleIncrement = () => {
        this.setState((state) => {
            const incrementedValue = state.countValue + 1;

            if (incrementedValue % 2 === 0) {
                state.isEven = true;
                state.countValueDescription = "Введено чётное число";
            } else {
                state.isEven = false;
                state.countValueDescription = "Введено нёчетное число";
            }

            return {
                countValue: incrementedValue,
                countValueDescription: state.countValueDescription,
                isEven: state.isEven,
            }
        })
    }

    handleDecrease  = () => {
        if (this.state.countValue >= 1) {
            this.setState((state) => {
                const incrementedValue = state.countValue - 1;

                if (incrementedValue % 2 === 0) {
                    state.isEven = true;
                    state.countValueDescription = "Введено чётное число";
                } else {
                    state.isEven = false;
                    state.countValueDescription = "Введено нёчетное число";
                }

                return {
                    countValue: incrementedValue,
                    countValueDescription: state.countValueDescription,
                    isEven: state.isEven,
                }
            })
        }
    }

    handleReset = () => {
        this.setState((state) => {
            state.isEven = true;
            state.countValue = 0;
            state.countValueDescription = "Чётное число";

            return {
                countValueDescription: state.countValueDescription,
                isEven: state.isEven,
            }
        })
    }

    render() {
        return <Layout
            counterValue={this.state.countValue}
            handleIncrement={this.handleIncrement}
            handleDecrease={this.handleDecrease}
            handleReset={this.handleReset}
            countValueDescription={this.state.countValueDescription}
            isEven={this.state.isEven}
        />
    }
}

export default CounterCountainer;