import React from 'react'
import renderer from 'react-test-renderer'
import TwitterOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<TwitterOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
