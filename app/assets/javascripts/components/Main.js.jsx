var Main = React.createClass({
	getInitialState() {
		return {
			title: '',
      department: '',
      manager: '',
      item_to_buy: '',
      budget: '', 
      position: 0,
      comment: ''
		}
	},

	onClickForm(event) {
    var name = event.target.name;
    this.setState({[name]: event.target.value});
  },

  handleClick() {
  	if (this.state.position == 0) {
  		this.setState({position: 1});
  	} else {
  		this.setState({position: 2})
  	}
  },

  prRequestForm() {
  	if(this.state.position == 0) {
  		return(
  			<div>
	        <h2>Purchase Request Form Fill Up</h2>
	        <hr/>
	        <h5>Please fill form for the PR you are requesting.</h5>
	        <input type="text" name="title" placeholder="title" onChange={this.onClickForm}/>
	        <input type="text" name="department" placeholder="department" onChange={this.onClickForm}/>
	        <input type="text" name="manager" placeholder="manager" onChange={this.onClickForm}/>
	        <input type="text" name="item_to_buy" placeholder="item to buy" onChange={this.onClickForm}/>
	        <input type="text" name="budget" placeholder="budget" onChange={this.onClickForm}/>
	        <button onClick={this.handleClick}>Submit</button>
	      </div>
  		)
  	}
  },

  showPrRequest() {
  	if(this.state.position == 1) {
  		return (
  			<div>
  				<hr/>
  				<h4>PR created by {this.state.manager} of department {this.state.department}</h4>
  				<h4>On the title of {this.state.title}</h4>
  				<h3>To buy {this.state.item_to_buy} at budget of {this.state.budget}</h3>
  				<input type="text" name="comment" placeholder="comment" onChange={this.onClickForm} />
  				<button onClick={this.handleClick}>Approve</button>
  			</div>
  		)
  	}
  },

  showReview() {
  	if (this.state.position == 2) {
  		return (
  			<div>
  				<h1>Review</h1>
  				<h3>Item To Buy: {this.state.item_to_buy}</h3>
  				<h4>Budget: {this.state.budget}</h4>
  				<h4>Department: {this.state.department}</h4>
  				<h5>Comment from Account Department: {this.state.comment}</h5>
  			</div>
  		)
  	}
  },

	render() {
		return (
			<div>
        {this.prRequestForm()}
        {this.showPrRequest()}
        {this.showReview()}
      </div>
		)
	}
})
