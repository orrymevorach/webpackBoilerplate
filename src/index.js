import React from 'react';
import ReactDOM from 'react-dom';
import "./scss/main.scss";
import CounterComplete from './CounterComplete/CounterComplete';
import Counter from './CounterTECHTEST/Counter';

class App extends React.Component {
    render() {
        return (
            <div>
                {/* <CounterComplete /> */}
                <Counter />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))