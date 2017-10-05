import React from 'react'
import renderer from 'react-test-renderer'
import ElmPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ElmPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
