import React from 'react'
import renderer from 'react-test-renderer'
import TomcatOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<TomcatOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
