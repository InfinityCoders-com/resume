import React from 'react'
import { Flex, Button } from '@icstark/ui'

import { FormInput, FormSelect } from '../../../style/Form'

function PSCat(props: any) {
  const { error, data, onChange } = props
  return (
    <Flex
      column
      style={{ margin: 10, padding: 10, borderWidth: 5, borderColor: 'red' }}
    >
      <FormInput
        name={`persionalSkills`}
        type="textarea"
        label="Personal Skills"
        value={data.persionalSkills}
        fieldErrors={error}
        onChange={onChange}
      />
    </Flex>
  )
}

export default PSCat
