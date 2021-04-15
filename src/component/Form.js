
function Form(props) {
    return (
      <div id="Form" className="bd-example">
        <h3>Linarc Task</h3>
        <form onSubmit={props.handleFormSubmit}>
          <div className="form-group">
          <label htmlFor="username">
            Name:
          </label>
            <input
              id="username"
              className="form-control"
              value={props.newUsername}
              type="text"
              name="username"
              onChange={props.handleInputChange}
            />
          <label htmlFor="dob">
            DOB:
          </label>
            <input
              id="dob"
              value={props.newDob}
              name="dob"
              type="date"
              className="form-control"
              onChange={props.handleInputChange}
            />
          <label htmlFor="email">
            Email:
          </label>
            <input
              id="email"
              value={props.newEmail}
              type="email"
              name="email"
              className="form-control"
              onChange={props.handleInputChange}
            />
          <label htmlFor="address">
            Address:
          </label>
            <input
              id="address"
              value={props.newAddress}
              type="textarea"
              name="address"
              className="form-control"
              onChange={props.handleInputChange}
            />
          <label htmlFor="contact">
            Contact:
            </label>
            <input
              id="contact"
              value={props.newContact}
              type="tel"
              name="contact"
              className="form-control"
              onChange={props.handleInputChange}
            />
          
          </div>
          <button type="submit" value="Submit" className="btn btn-primary">
            Add Item
          </button>
        </form>
      </div>
    );
  }
  export default Form;