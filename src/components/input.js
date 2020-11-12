import React, {Component} from "react";

class Input extends Component {
	constructor(props) {
		super(props);

		this.state = {value:''};
	}
	render(){
		const handleAdd = () => {
			this.state.value.trim() && this.props.handleAdd(this.state.value);
			this.setState({value: ''});
		};
		return (
			<div>
				<input
					placeholder={'input'}
					onChange={event => this.setState({value: event.target.value})}
					value={this.state.value}
				/>
				<button onClick={handleAdd}>Add</button>
			</div>
		)
	}
}

export default Input;
