import React from 'react'
import renderer from 'react-test-renderer'
import ExpressOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ExpressOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
