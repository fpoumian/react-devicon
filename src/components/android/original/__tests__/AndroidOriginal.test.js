import React from 'react'
import renderer from 'react-test-renderer'
import AndroidOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<AndroidOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
