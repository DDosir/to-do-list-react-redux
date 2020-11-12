import React from "react";

const Input = ({inputValue, changeInput, handleAdd}) => {
	const handleAddElement = () => handleAdd(inputValue);
	return (
		<div>
			<input
				placeholder={'input'}
				onChange={event => changeInput(event.target.value)}
				value={inputValue}
			/>
			<button onClick={handleAddElement}>Add</button>
		</div>
	)
}

export default Input;
