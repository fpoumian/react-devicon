import React from 'react'
import renderer from 'react-test-renderer'
import LinkedinOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<LinkedinOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
