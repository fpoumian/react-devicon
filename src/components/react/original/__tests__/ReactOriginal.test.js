import React from 'react'
import renderer from 'react-test-renderer'
import ReactOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ReactOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
