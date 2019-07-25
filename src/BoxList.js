import React from 'react';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import uuid from 'uuid/v4';

class BoxList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { boxes: [] }

        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }
    /**renders each box */
    renderBoxes() {
        return (
            this.state.boxes.map(box => (
                <Box
                    key={box.id}
                    id={box.id}
                    height={box.height}
                    width={box.width}
                    color={box.color}
                    remove={this.removeBox}
                />
            ))
        )
    };

    /** adds the box to the array and updated the state */
    addBox(box) {
        let newBox = { ...box, id: uuid() };
        this.setState(st => ({
            boxes: [...st.boxes, newBox]
        }));
    }
    /**removes a box by the id and updates the state */
    removeBox(id) {
        this.setState(st => ({
            boxes: st.boxes.filter(box => box.id !== id)
        }))
    }


    render() {
        return (
            <div className="BoxList">
                <NewBoxForm addBox={this.addBox} />
                {this.renderBoxes()}
            </div>
        )
    }

}

export default BoxList;