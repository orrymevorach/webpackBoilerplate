import React from 'react';
import Reset from './Reset';

class CounterComplete extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }

        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
        this.reset = this.reset.bind(this)
    }

    increase() {
        let newIndex = this.state.index;
        newIndex = newIndex + 1;

        this.setState({
            index: newIndex
        })
    }

    decrease() {
        let newIndex = this.state.index;
        newIndex = newIndex - 1;

        this.setState({
            index: newIndex
        })
    }

    reset() {
        this.setState({
            index: 0
        })
    }

    render() {
        return (
            <div className="counter-page">
                <div className="counter">
                    <div className="block minus" onClick={this.decrease}>-</div>     
                    <div className="block count">{this.state.index}</div>
                    <div className="block plus" onClick={this.increase}>+</div>
                    <Reset reset={this.reset} />
                </div>
            </div>
        )
    }
}

export default CounterComplete ;