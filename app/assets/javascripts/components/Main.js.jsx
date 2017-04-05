var Main = React.createClass({
	getInitialState() {
		return {
			title: '',
      department: '',
      manager: '',
      item_to_buy: '',
      budget: '', 
      position: 0,
      comment: '',
      review: ''
		}
	},

	onClickForm(event) {
    var name = event.target.name;
    this.setState({[name]: event.target.value});
  },

  handleClick() {
  	if (this.state.position == 0) {
  		this.setState({position: 1});
  	} else if(this.state.position == 1) {
  		this.setState({position: 2});
  	} else {
  		this.setState({position: 3});
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

            <div className="col-md-6">
		          <fieldset>
		            <legend>Your Previous Purchase Request List</legend>
		            <div className="form-group">
		              <label className="col-sm-4 control-label" htmlFor="textinput">PR to buy 15 Laptops</label>
		              <div className="col-sm-6">Submitted on 12<sup>th</sup> April 2011</div>
		              <label className="col-sm-2 control-label" htmlFor="textinput">Approved</label>
		            </div>

		            <div className="form-group">
		              <label className="col-sm-4 control-label" htmlFor="textinput">PR to buy 15 Laptops</label>
		              <div className="col-sm-6">Submitted on 12<sup>th</sup> April 2011</div>
		              <label className="col-sm-2 control-label" htmlFor="textinput">Approved</label>
		            </div>

		            <div className="form-group">
		              <label className="col-sm-4 control-label" htmlFor="textinput">PR to buy 15 Laptops</label>
		              <div className="col-sm-6">Submitted on 12<sup>th</sup> April 2011</div>
		              <label className="col-sm-2 control-label" htmlFor="textinput">Pending</label>
		            </div>

		            <div className="form-group">
		              <label className="col-sm-4 control-label" htmlFor="textinput">PR to buy 15 Laptops</label>
		              <div className="col-sm-6">Submitted on 12<sup>th</sup> April 2011</div>
		              <label className="col-sm-2 control-label" htmlFor="textinput">Pending</label>
		            </div>

		            <div className="form-group">
		              <label className="col-sm-4 control-label" htmlFor="textinput">PR to buy 15 Laptops</label>
		              <div className="col-sm-6">Submitted on 12<sup>th</sup> April 2011</div>
		              <label className="col-sm-2 control-label" htmlFor="textinput">On Hold</label>
		            </div>
		          </fieldset>
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
      			<div className="col-md-10">
            	<legend>Finance Department Review System</legend>
          		<div className="panel panel-primary">
                <div className="panel-heading">
                  <h2 className="panel-title">
                    Purchase Request report for Financial Department
                  </h2>
                </div>
                <div className="panel-body">
		            	<table className="table table-hover">
		                <thead>
		                  <tr>
		                    <th>Title </th>
		                    <th>Department</th>
		                    <th>Manager</th>
		                    <th>Items to buy</th>
		                    <th>Estimated Budget</th>
		                  </tr>
		                </thead>
		                <tbody>
		                  <tr>
		                    <td>{this.state.title}</td>
		                    <td>{this.state.department}</td>
		                    <td>{this.state.manager}</td>
		                    <td>{this.state.item_to_buy}</td>
		                    <td>{this.state.budget}</td>
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

		            	<h4>Previous Purchase Requests</h4>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                          <th>Title </th>
                          <th>Department</th>
                          <th>Manager</th>
                          <th>Items to buy</th>
                          <th>Estimated Budget</th>
                          <th>Date of Submission</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>PR to buy Clothes</td>
                          <td>Volunteering</td>
                          <td>Jonex A.</td>
                          <td>500 piece of clothes</td>
                          <td>Rs. 100,000</td>
                          <td>Wed Nov 12 17:43:13 2015</td>
                        </tr>
                        <tr>
                          <td>PR to buy Laptops</td>
                          <td>Education</td>
                          <td>John A.</td>
                          <td>500 Laptops</td>
                          <td>Rs. 500,000</td>
                          <td>Wed Nov 12 17:43:13 2013</td>
                        </tr>
                        <tr>
                          <td>PR to buy Pencils</td>
                          <td>Education</td>
                          <td>Janardhan</td>
                          <td>500 piece of clothes</td>
                          <td>Rs. 100,000</td>
                          <td>Wed Nov 12 17:43:13 2011</td>
                        </tr>
                    </tbody>
                	</table>
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
  			<div className="container">
    			<div className="row">
      			<div className="col-md-6">
            	<legend>Review System</legend>
          		
            	<table className="table table-bordered">
						    <tbody>
						      <tr>
						      	<td>Item To Buy</td>
						        <td>{this.state.item_to_buy}</td>
						      </tr>
						      <tr>
						      	<td>Budget</td>
						        <td>{this.state.budget}</td>
						      </tr>
						      <tr>
						      	<td>Department</td>
						        <td>{this.state.department}</td>
						      </tr>
						      <tr>
						      	<td>Comment from Account Department</td>
						        <td>{this.state.comment}</td>
						      </tr>
						    </tbody>
						  </table>

						  <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="textinput">Review</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" name="review" placeholder="review" onChange={this.onClickForm} />
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

  approvalLetter() {
  	if (this.state.position == 3) {
  		return (
  			<div className="container">
    			<div className="row">
      			<div className="col-md-6">
            	<legend>Approval Letter</legend>
          		
            	<table className="table table-bordered">
						    <tbody>
						      <tr>
						      	<td>Item To Buy</td>
						        <td>{this.state.item_to_buy}</td>
						      </tr>
						      <tr>
						      	<td>Budget</td>
						        <td>{this.state.budget}</td>
						      </tr>
						      <tr>
						      	<td>Department</td>
						        <td>{this.state.department}</td>
						      </tr>
						      <tr>
						      	<td>Comment from Account Department</td>
						        <td>{this.state.comment}</td>
						      </tr>
						      <tr>
						      	<td>Comment from Review Department</td>
						        <td>{this.state.review}</td>
						      </tr>
						    </tbody>
						  </table>
		  			</div>
          </div>	
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
        {this.approvalLetter()}
      </div>
		)
	}
})
