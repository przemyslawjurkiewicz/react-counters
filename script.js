var Counter = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function () {
        return React.createElement('div', {className: 'counter'},
            React.createElement('span', {}, 'Licznik: ' + this.state.counter),
            React.createElement('button', { onClick: this.increment }, '+'),
            React.createElement('button', { onClick: this.decrement }, '-'),
        );
    }
});




var app = React.createElement('div', {className: 'app'},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter),
    );


ReactDOM.render(app, document.getElementById('app'));