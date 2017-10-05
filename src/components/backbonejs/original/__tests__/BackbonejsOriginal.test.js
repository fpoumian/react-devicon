import React from 'react'
import renderer from 'react-test-renderer'
import BackbonejsOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<BackbonejsOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
