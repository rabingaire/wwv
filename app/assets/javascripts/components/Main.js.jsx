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
  			<div className="container">
    			<div className="row">
      			<div className="col-md-6">
            	<legend>Purchase Request Form Fill Up</legend>

          		<p>Please fill form for the PR you are requesting.</p>
            	<div className="form-group">
              	<label className="col-sm-3 control-label" htmlFor="textinput">Title</label>
              	<div className="col-sm-9">
                	<input type="text" className="form-control" name="title" placeholder="title" onChange={this.onClickForm}/>
              	</div>
            	</div>

              <div className="form-group">
                <label className="col-sm-3 control-label" htmlFor="textinput">Department</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="department" placeholder="department" onChange={this.onClickForm}/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-3 control-label" htmlFor="textinput">Manager</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="manager" placeholder="manager" onChange={this.onClickForm}/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-3 control-label" htmlFor="textinput">Item to buy</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="item_to_buy" placeholder="item to buy" onChange={this.onClickForm}/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-3 control-label" htmlFor="textinput">Estimated Budget</label>
                <div className="col-sm-9">
                  <input type="number" className="form-control" name="budget" placeholder="budget" onChange={this.onClickForm}/>
                </div>
              </div>

             	<div className="form-group">
              	<div className="col-sm-offset-2 col-sm-10">
                	<div className="pull-right">
                  	<button type="submit" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
                 	</div>
               	</div>
             	</div>
            </div>
          </div>
	      </div>
  		)
  	}
  },

  showPrRequest() {
  	if(this.state.position == 1) {
  		return (
  			<div className="container">
    			<div className="row">
      			<div className="col-md-6">
            	<legend>Finance Department Review System</legend>
          		
            	<table className="table table-bordered">
						    <tbody>
						      <tr>
						        <td>PR created by {this.state.manager} of department {this.state.department}</td>
						      </tr>
						      <tr>
						        <td>On the title of {this.state.title}</td>
						      </tr>
						      <tr>
						        <td>To buy {this.state.item_to_buy} at budget of {this.state.budget}</td>
						      </tr>
						    </tbody>
						  </table>

            	<div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="textinput">Comment</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" name="comment" placeholder="comment" onChange={this.onClickForm} />
                </div>
              </div>

              <div className="form-group">
              	<div className="col-sm-offset-2 col-sm-10">
                	<div className="pull-right">
                  	<button type="submit" className="btn btn-primary" onClick={this.handleClick}>Approve</button>
                 	</div>
               	</div>
             	</div>
            </div>
          </div>
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
