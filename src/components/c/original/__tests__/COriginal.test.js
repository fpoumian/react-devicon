import React from 'react'
import renderer from 'react-test-renderer'
import COriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<COriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
