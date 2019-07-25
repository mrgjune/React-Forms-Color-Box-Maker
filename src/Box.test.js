import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Box from "./Box";

describe('check that box renders correctly', () => {
  let wrapper = shallow (<Box/> );
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
