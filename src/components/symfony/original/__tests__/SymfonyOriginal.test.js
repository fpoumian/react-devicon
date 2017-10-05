import React from 'react'
import renderer from 'react-test-renderer'
import SymfonyOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SymfonyOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
