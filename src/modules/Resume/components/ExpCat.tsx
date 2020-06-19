import React from 'react'
import { Flex, Button } from '@icstark/ui'

import { FormInput, FormSelect } from '../../../style/Form'

function ExpCat(props: any) {
  const { error, data, onChange } = props
  // console.log(props)
  return (
    <Flex
      column
      style={{ margin: 10, padding: 10, borderWidth: 5, borderColor: 'red' }}
    >
      <FormInput
        name={`jobTitle`}
        type="text"
        label="Job Title"
        value={data.jobTitle}
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
        name={`company`}
        type="text"
        label="Company Name"
        value={data.company}
        fieldErrors={error}
        onChange={onChange}
      />
      <FormInput
        name={`description`}
        type="text"
        label="Job Description"
        value={data.description}
        fieldErrors={error}
        onChange={onChange}
      />
      <Button onClick={() => props.addSubCat('experience')}>
        Add SubCategory
      </Button>
    </Flex>
  )
}

export default ExpCat
