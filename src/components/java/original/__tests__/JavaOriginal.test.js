import React from 'react'
import renderer from 'react-test-renderer'
import JavaOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<JavaOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
