import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import NewBoxForm from "./NewBoxForm";

it("renders without crashing", function () {
    shallow(<NewBoxForm />);
  });

// snapshot test
it("matches snapshot", function () {
  let wrapper = shallow(<NewBoxForm />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
  

//testing if input changes state changes
it("allows for changes in height, width, color", function() {
 
    let wrapper = mount(<NewBoxForm />);
    const heightInput = wrapper.find("#height")
    heightInput.instance().value = 1
    heightInput.simulate("change")

    expect(wrapper.state().height).toEqual('1');

    const widthInput = wrapper.find("#width")
    widthInput.instance().value = 4
    widthInput.simulate("change")
  
    expect(wrapper.state().width).toEqual('4');

    const colorInput = wrapper.find("#color")
    colorInput.instance().value = "blue"
    colorInput.simulate("change")
  
    expect(wrapper.state().color).toEqual("blue");
  });
  // end testing inputs

// when this form is submitted, we expect that a function is fun
// we can then expect that the state changes once we fire a "change" event
it("runs a mocked fn on submit", function () {
  const submitFn = jest.fn();
  let wrapper = mount(
    <NewBoxForm addBox={submitFn} />
  );
  const form = wrapper.find("form")

  form.simulate("submit")

  expect(submitFn).toHaveBeenCalled();
});

// end mock test
// let's go and add some inputs and expect the state to reset on submit
it("resets state on submit", function () {
  const submitForm = jest.fn();
  
  let wrapper = mount(<NewBoxForm  addBox={submitForm}/>);
  const heightInput = wrapper.find("#height")
  heightInput.instance().value = 1
  heightInput.simulate("change")

  expect(wrapper.state().height).toEqual('1');

  const widthInput = wrapper.find("#width")
  widthInput.instance().value = 4
  widthInput.simulate("change")

  const colorInput = wrapper.find("#color")
  colorInput.instance().value = "blue"
  colorInput.simulate("change")

  const form = wrapper.find("form");
  form.simulate("submit");

  // after submit, we expect the state to reset
  expect(wrapper.state()).toEqual({
    "color": "",
    "height": 0,
    "width": 0
  })
});
//end reset test