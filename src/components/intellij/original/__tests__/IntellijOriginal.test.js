import React from 'react'
import renderer from 'react-test-renderer'
import IntellijOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<IntellijOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
