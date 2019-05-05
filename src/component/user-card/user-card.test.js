import React from "react";
import { shallow } from "enzyme"
import UserCardComponent from "./user-card";

describe('Given an invocation to UserCardComponent', () => {
  test('should render without crashing', () => {
    const user = {
      first_name: 'John'
    };
    const wrapper = shallow(<UserCardComponent user={user} />);
    expect(wrapper).toMatchSnapshot();
  });
});
