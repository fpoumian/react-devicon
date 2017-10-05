import React from 'react'
import renderer from 'react-test-renderer'
import FirefoxPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<FirefoxPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
