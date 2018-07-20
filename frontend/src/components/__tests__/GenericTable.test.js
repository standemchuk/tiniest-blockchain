import React from 'react'
import renderer from 'react-test-renderer'
import Typography from '@material-ui/core/Typography'

import GenericTable from '../GenericTable'

it('renders correctly', () => {
  const props = {
    data: [ {test1: 1, test2: 2} ],
    headers: ['Test 1', 'Test 2']
  }
  const tree = renderer
    .create(
      <GenericTable {...props} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders a text warning when no data is supplied', () => {
  const tree = renderer
    .create(<GenericTable />)

  const text = tree.root.findByType(Typography)

  expect(text.props.children).toBe('No data')
})
