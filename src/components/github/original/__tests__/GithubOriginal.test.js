import React from 'react'
import renderer from 'react-test-renderer'
import GithubOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GithubOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
