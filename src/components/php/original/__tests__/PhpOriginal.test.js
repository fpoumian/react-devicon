import React from 'react'
import renderer from 'react-test-renderer'
import PhpOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<PhpOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
