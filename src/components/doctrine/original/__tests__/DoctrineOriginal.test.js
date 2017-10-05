import React from 'react'
import renderer from 'react-test-renderer'
import DoctrineOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DoctrineOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
