import React from 'react'
import renderer from 'react-test-renderer'
import Css3Plain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<Css3Plain />).toJSON()
  expect(tree).toMatchSnapshot()
})
