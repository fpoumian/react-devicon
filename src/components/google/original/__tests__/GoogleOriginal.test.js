import React from 'react'
import renderer from 'react-test-renderer'
import GoogleOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GoogleOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
