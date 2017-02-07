import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class App extends Component {
    render() {
        return (
            <div>this is App component</div>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root'))