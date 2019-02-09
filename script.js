var Counter = React.createClass({
    getDefaultProps: function () {
        console.log('getDefaultProps - ustawienie domyślnych propsów przed render');
    },

    getInitialState: function () {
        console.log('getInitialState - określamy początkowy stan naszego komponentu');
        return {
            counter: 0
        };
    },

    componentWillMount: function () {
        console.log('componentWillMount - tuż przed render - rzadko używana, nie spowoduje re-renderowania');
    },

    componentDidMount: function () {
        console.log('componentDidMount - wywoływana po zamontowaniu komponentu - dobre miejsce na funkcje używające DOM - powoduje rozpoczęcie etapu aktualizacji komponentu');
    },

    componentWillReceiveProps: function () {
        console.log('componentWillReceiveProps - wywoływana gdy zmieniają się propsy - aktualizacja stanu');
    },

    shouldComponentUpdate: function () {
        console.log('shouldComponentUpdate - wywoływana przed wywołaniem metody render - czy faktycznie trzeba jeszcze raz przerysować komponent true/false');
        return true;
    },

    componentWillUpdate: function () {
        console.log('componentWillUpdate- wywoływana tylko do przygotowania na nadchodzące zmiany - podobna do componentWillMount');
    },

    componentDidUpdate: function () {
        console.log('componentDidUpdate- odpowiednik metody componentDidMount- możemy wykonać np. jakieś manipulacje DOM');
    },

    componentWillUnmount: function () {
        console.log('componentWillUnmount- przed usunięciem komponentu - dobre miejsce na „posprzątanie” po sobie');
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
        return React.createElement(
            'div',
            { className: 'counter' },
            React.createElement('span', {}, 'Licznik: ' + this.state.counter),
            React.createElement('button', { onClick: this.increment }, '+'),
            React.createElement('button', { onClick: this.decrement }, '-')
        );
    }
});

var app = React.createElement(
    'div',
    { className: 'app' },
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter)
);

ReactDOM.render(app, document.getElementById('app'));
