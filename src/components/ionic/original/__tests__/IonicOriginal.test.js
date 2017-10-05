import React from 'react'
import renderer from 'react-test-renderer'
import IonicOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<IonicOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
