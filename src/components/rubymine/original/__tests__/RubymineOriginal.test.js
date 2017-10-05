import React from 'react'
import renderer from 'react-test-renderer'
import RubymineOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<RubymineOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
