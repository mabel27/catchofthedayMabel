import React, {Fragment} from 'react';
import {getFunName} from "../helpers";

class StorePicker extends React.Component {

	myInput = React.createRef();
	goToStore = (event) => {
 	
 	//Store the form from submitting
		event.preventDefault();
	// 2. get the text from that input
		const storeName = this.myInput.value.value;
	// 3. Change the page to /store/watever-they-enter
		this.props.history.push(`/store/${storeName}`);
	}
	render(){
		return (
		<form className = "store-selector" onSubmit={this.goToStore}>
			<h2>Please Enter A Store</h2>
			<input type="text" required placeholder="Enter store name" defaultValue={getFunName()} ref={this.myInput}/>
			<button  type="submit">Visit Store</button>
		</form>
		);
	}
}

export default StorePicker;

