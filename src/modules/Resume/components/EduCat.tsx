import React from 'react'
import { Flex, Button } from '@icstark/ui'

import { FormInput, FormSelect } from '../../../style/Form'

function EduCat(props: any) {
  const { error, data, onChange } = props
  console.log(props)
  return (
    <Flex
      column
      style={{ margin: 10, padding: 10, borderWidth: 5, borderColor: 'red' }}
    >
      <FormInput
        name={`study`}
        type="text"
        label="Study"
        value={data.study}
        fieldErrors={error}
        onChange={onChange}
      />
      <FormInput
        name={`startDate`}
        type="date"
        label="Start Date"
        value={data.startDate}
        fieldErrors={error}
        onChange={onChange}
      />
      <FormInput
        name={`endDate`}
        type="date"
        label="End Date"
        value={data.endDate}
        fieldErrors={error}
        onChange={onChange}
      />
      <FormInput
        name={`boardUniversity`}
        type="text"
        label="Board / University"
        value={data.company}
        fieldErrors={error}
        onChange={onChange}
      />

      <Button onClick={() => props.addSubCat('education')}>
        Add SubCategory
      </Button>
    </Flex>
  )
}

export default EduCat
