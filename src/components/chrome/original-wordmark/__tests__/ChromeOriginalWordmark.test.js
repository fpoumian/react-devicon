import React from 'react'
import renderer from 'react-test-renderer'
import ChromeOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ChromeOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
