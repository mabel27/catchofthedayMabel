import React from 'react';

class EditFishForm extends React.Component {
	handleChange = event =>
	{
		console.log(event.currentTarget.value);
		//Update that fish
		// 1. Take a copy of the current fish 
			const updatedFish = { 
			...this.props.fish,
			[event.currentTarget.name]: event.currentTarget.value
		};

		this.props.updateFish(this.props.index, updatedFish);
	}
	render(){
		return( 
		<div className= "fish-edit">
		<form>
		<input name="name"  type= "text" onChange={this.handleChange} value={this.props.fish.name}/>
			<input name="price"   type= "text" value={this.props.fish.price}/>
			<select name="status" onChange={this.handleChange} value={this.props.fish.status} >
				<option value="avalaible">Fresh</option>
				<option value="avalaible">Sold Out</option>
			</select>
			<textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} ></textarea>
			<input name="image" onChange={this.handleChange}   type= "text"value={this.props.fish.image} />
			<button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
			</form>
		</div>

		)};

}

export default EditFishForm;