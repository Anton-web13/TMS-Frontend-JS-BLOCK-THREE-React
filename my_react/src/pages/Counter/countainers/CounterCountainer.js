import { Component } from "react";
import Layout from "../componens/Layout";

class CounterCountainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            countValue: 0,
            isBlocked: false,
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
        // console.log(prevState)
        // if (this.state.countValue === 5 && prevState.countValue !== this.state.countValue) {
        // if (this.state.countValue === 5 && this.state.isBlocked !== true) {
        //     this.setState({isBlocked: true})
        // }
        // console.log("Did Update");

        // if (this.state.countValue % 2 === 0) {
        //     alert('Some date fetching...')
        // }
    }

    componentWillUnmount() {
        // clearInterval(this.interval)
        console.log("Unmounted")
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

        // const user = {
        //     name: "Alex",
        //
        //     address: {
        //         city: "Minsk"
        //     }
        // }
        console.log(this.state.isBlocked);
        return <Layout
            counterValue={this.state.countValue}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            // someValue={user}
        />
    }
}

export default CounterCountainer;