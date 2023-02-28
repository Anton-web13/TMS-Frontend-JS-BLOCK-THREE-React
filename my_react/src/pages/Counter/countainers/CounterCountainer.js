import { Component } from "react";
import Layout from "../componens/Layout";

class CounterCountainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            countValue: 0,
        }

        console.log("Constructor");
    }

    // interval = null;

    componentDidMount() {
        // this.interval = setInterval(() => {
        //     this.handleIncrement();
        // }, 2000)

        console.log("Did Mount");
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log("Should Component Update, true")
    //     return true;
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Did Update");
    }

    componentWillUnmount() {
        // clearInterval(this.interval)
        console.log("Unmounted")
    }

    handleIncrement = () => {
        this.setState((previousState) => {
            const incrementedValue = previousState.countValue + 1;

            return {
                countValue: incrementedValue,
            }
        })
    }

    handleReset = () => {
        this.setState({countValue: 0})
    }

    render() {
        console.log("Render");
        return <Layout
            counterValue={this.state.countValue}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
        />
    }
}

export default CounterCountainer;