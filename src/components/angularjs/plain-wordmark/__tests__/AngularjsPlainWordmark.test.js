import React from 'react'
import renderer from 'react-test-renderer'
import AngularjsPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<AngularjsPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
