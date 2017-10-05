import React from 'react'
import renderer from 'react-test-renderer'
import GitlabPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GitlabPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
