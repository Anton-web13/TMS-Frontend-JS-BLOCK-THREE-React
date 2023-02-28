import { Component } from "react";
import Layout from "../componens/Layout";

class CounterCountainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            countValue: 0,
        }
    }

    handleIncrement = () => {
        if (this.state.countValue < 5) {
            this.setState((previousState) => {
                const incrementedValue = previousState.countValue + 1;

                return {
                    countValue: incrementedValue,
                }
            })
        }
    }

    handleReset = () => {
        this.setState({countValue: 0})
    }

    render() {
        console.log(this.state.isBlocked);
        return <Layout
            counterValue={this.state.countValue}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
        />
    }
}

export default CounterCountainer;