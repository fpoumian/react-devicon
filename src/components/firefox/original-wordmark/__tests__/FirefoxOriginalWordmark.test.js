import React from 'react'
import renderer from 'react-test-renderer'
import FirefoxOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<FirefoxOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
