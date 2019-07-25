import React from 'react';
class Box extends React.Component {
    constructor(props) {
        super(props)

        this.handleRemove = this.handleRemove.bind(this);
    }
    /**when button is clicked pass the box ID to the remove prop */
    handleRemove(evt) {
        console.log(this.props)
        this.props.remove(this.props.id);
    }

    /**return a box*/
    render() {
        const { width, height, color } = this.props;

        return (
            <div style={{
                height: `${height}em`, width: `${width}em`, backgroundColor: color
            }} >
                <button onClick={this.handleRemove}>X</button>

            </div>

        )
    }
}

export default Box;