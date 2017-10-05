import React from 'react'
import renderer from 'react-test-renderer'
import BitbucketOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<BitbucketOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
