import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    decrement = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }));
    };

    render() {
        const { count } = this.state;

        return (
            <div>
                <h1>{count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}

export default Counter;



/*
Counter App - Setting up NPM & package.json, Installing & using packages, Exploring React JS A ... - In Class
Create a React class component called 'Counter' that keeps track of a count, and has buttons to increment and decrement the count.
Initlaize the count to 0 in the state of the class using its constructor
Create a increment function, which increase the count by 1
Create a decrement function, which decreases the count by 1
The class should render a h1 tag and two buttons. The h1 tag would display the value of count. One button should be used for increasing the count and the other for decreasing the count. The buttons should have text increment and decrement respectively
This is how it should look at the end - 
5b34dde482da9258e2d06ffb1e3.mkv Note:- The current app is not working and will show error instead of preview, you will have to implement the counter component to make it work
Test Cases
1.
starts with a count of 0
2.
increments the count when the increment button is clicked
3.
decrements the count when the decrement button is clicked
*/ 