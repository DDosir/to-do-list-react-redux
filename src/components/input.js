import React from "react";

const Input = ({inputValue, handleInput, handleAdd}) => {
	const handleAddElement = () => inputValue.trim() && handleAdd(inputValue);
	return (
		<div className={'element input'}>
			<input
				placeholder={'input'}
				onChange={event => handleInput(event.target.value)}
				value={inputValue}
			/>
			<button onClick={handleAddElement}>Add</button>
		</div>
	)
}

export default Input;
