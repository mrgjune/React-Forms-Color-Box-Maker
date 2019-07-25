import React from 'react';
class NewBoxForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0, color: "" }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    /** Send {height, width, color} to parent
    *    & clear form. */
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addBox(this.state);
        this.setState({ width: 0, height: 0, color: "" });
    }

    /** Update local state w/curr state of input elem */

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    /** render form */
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="color">Background Color:</label>
                <input id="color"
                    name="color"
                    value={this.state.color}
                    onChange={this.handleChange} />

                <label htmlFor="width">Width:</label>
                <input type="number"
                    id="width"
                    name="width"
                    value={this.state.width}
                    onChange={this.handleChange} />

                <label htmlFor="height">Height:</label>
                <input type="number"
                    id="height"
                    name="height"
                    value={this.state.height}
                    onChange={this.handleChange} />

                <button>Add a new item!</button>
            </form>
        );
    }
}




export default NewBoxForm;