import {Component} from 'react';
import Layout from "../components/Layout";

class ConditionalRenderingContainer extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //
    //     }
    // }

    state = {
        isActive: false,
        isBlurEnabled: false,
    }

    timeOut = null;

    handleActiveToggle = () => {
        this.setState({isActive: !this.state.isActive})
    }

    handleBlurActive = () => {
        this.timeOut = setTimeout(() => {
            this.setState({isBlurEnabled: !this.state.isBlurEnabled})
        }, 2000)
    }

    handleBlurUnActive = () => {
        clearTimeout(this.timeOut)
    }

    // handleBlurToggle = () => {
    //     this.setState({isBlurEnabled: !this.state.isBlurEnabled})
    // }

    render() {
       return <Layout
           isActive={this.state.isActive}
           isBlurEnabled={this.state.isBlurEnabled}
           handleBlurActive={this.handleBlurActive}
           handleActiveToggle={this.handleActiveToggle}
           handleBlurUnActive={this.handleBlurUnActive}
       />
    }
}

export default ConditionalRenderingContainer;
