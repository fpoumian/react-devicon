import React from 'react'
import renderer from 'react-test-renderer'
import ApachePlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ApachePlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
