import React from 'react'
import renderer from 'react-test-renderer'
import OracleOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<OracleOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
