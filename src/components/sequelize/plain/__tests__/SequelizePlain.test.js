import React from 'react'
import renderer from 'react-test-renderer'
import SequelizePlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SequelizePlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
