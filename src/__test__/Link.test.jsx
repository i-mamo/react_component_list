import React from "react";
import { Link } from "react-router-dom";
const renderer = require('react-test-renderer');



test('should Linkテスト', () => {

  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  let tree = component.toJSON();

})
