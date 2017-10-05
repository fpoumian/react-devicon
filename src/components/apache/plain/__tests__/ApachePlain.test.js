import React from 'react'
import renderer from 'react-test-renderer'
import ApachePlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ApachePlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
