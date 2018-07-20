import React from 'react'
import { PageHeader } from '../PageHeader'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <PageHeader classes={{ header: 'header' }} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
