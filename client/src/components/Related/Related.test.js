import Enzyme, {shallow, configure} from 'enzyme';
import { Questions } from '../../Questions.jsx';
import React, {useEffect, useState} from "react";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});


it("SHALLOW: renders Questions Widget without crashing", ()=> {
  shallow(<Questions />);
});

