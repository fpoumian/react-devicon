import React from 'react'
import renderer from 'react-test-renderer'
import DoctrineLine from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DoctrineLine />).toJSON()
  expect(tree).toMatchSnapshot()
})
