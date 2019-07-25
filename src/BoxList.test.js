import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import BoxList from "./BoxList";

it("renders without crashing", function() {
  shallow(<BoxList />);
});

// snapshot test
it("matches snapshot", function() {
  let wrapper = shallow(<BoxList />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

// let's test adding an item using the addItem function we defined in the component
it("adds box", function() {
  const box = [{ height: 4, width: 5, color: "blue" }];
  const wrapper = mount(<BoxList />);

  wrapper.setState({ box: box });
  expect(wrapper.state().box).toEqual([
    {  "height": 4, "width": 5, "color": "blue"  }
  ]);

  // here we use the "instance" method 
  // to get access to all instance methods defined on the component
//   wrapper.instance()
//     .addBox( { height: 3, width: 2, color: "green" });

//   expect(wrapper.state().boxes).toEqual([
//     { "height": 4, "width": 5, "color": "blue" },
//     { id: expect.any(String),height: 3, width: 2, color: "green" },
//   ]);
});
// end adding items


//  integration test, we are testing:
// that a form is rendered when the BoxList is rendered
// when we add values to the inputs and submit the form a new box is added
// when the new box is added, we expect the style property to be updated on that box
it("finds a form and successfully creates ", function() {
  const wrapper = mount(<BoxList />);

  const heightInput = wrapper.find("#height")
  heightInput.instance().value = 1
  heightInput.simulate("change")

  
  const widthInput = wrapper.find("#width")
  widthInput.instance().value = 4
  widthInput.simulate("change")


  const colorInput = wrapper.find("#color")
  colorInput.instance().value = "blue"
  colorInput.simulate("change")

  const form = wrapper.find("form");
  form.simulate("submit");

  expect(wrapper.state().boxes.length).toEqual(1);

  // since we are appending to the end, find the last item, 
  // and make sure it matches what we have just created

  expect(wrapper
    .find("div")
    .last()
    .html())
    .toEqual("<div style=\"height: 1em; width: 4em; background-color: blue;\"><button>X</button></div>");
      
});
// end finding form
