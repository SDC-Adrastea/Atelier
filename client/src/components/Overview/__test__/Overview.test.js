import Enzyme, { shallow, configure } from 'enzyme';
import { Overview } from '../../Overview.jsx';
import React, { useEffect, useState } from "react";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

it("SHALLOW: renders Overview Widget without crashing", ()=> {
  shallow(<Overview />);
});

// IDEAS
// check for 'mount' of the subcomponents

