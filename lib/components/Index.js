import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
	state = {
		answer : 2
	}
    asyncFn = () => {
		return Promise.resolve(452);
	}
	async componentDidMount(){
        this.setState({
        	answer  : await this.asyncFn()
        })
	}
	render(){
		return (
             <h2>Hello {this.state.answer}</h2>
	 		);
	}
}

ReactDom.render(<App/>, document.querySelector('#app'))