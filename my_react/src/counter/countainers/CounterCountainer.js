import { Component } from "react";
import CounterView from "../componens/CounterView";
import {logDOM} from "@testing-library/react";

class CounterCountainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            countValue: 0,
            // multiplied: 0,
        }
    }

    // handleIncrement = () => {
    //     this.setState({
    //         countValue: this.state.countValue + 1,
    //         multiplied: this.state.countValue * 10
    //     })
    // }

    handleIncrement = () => {
        this.setState((previousState) => {
            const incrementedValue = previousState.countValue + 1;
            // const multiplied = incrementedValue * 10;

            return {
                countValue: incrementedValue,
                // multiplied,
            }
        })
    }

    // handleIncrement = () => {
    //     this.setState({countValue: this.state.countValue + 1});
    //     this.setState({countValue: this.state.countValue + 2});
    //     this.setState((prevState) => ({countValue: prevState.countValue + 2}));
    // }

    handleReset = () => {
        this.setState({countValue: 0})
    }

    render() {
        return <CounterView
            x={"I LOVE REACT"}
            counterValue={this.state.countValue}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
        />
    }
}

export default CounterCountainer;