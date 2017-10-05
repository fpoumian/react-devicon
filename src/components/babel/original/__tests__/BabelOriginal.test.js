import React from 'react'
import renderer from 'react-test-renderer'
import BabelOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<BabelOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
