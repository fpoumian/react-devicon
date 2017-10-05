import React from 'react'
import renderer from 'react-test-renderer'
import ElectronOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ElectronOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
