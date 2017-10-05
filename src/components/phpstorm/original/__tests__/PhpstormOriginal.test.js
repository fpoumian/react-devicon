import React from 'react'
import renderer from 'react-test-renderer'
import PhpstormOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<PhpstormOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
