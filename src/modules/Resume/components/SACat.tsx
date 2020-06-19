import React from 'react'
import { Flex, Button } from '@icstark/ui'

import { FormInput, FormSelect } from '../../../style/Form'

function SACat(props: any) {
  const { error, data, onChange } = props
  return (
    <Flex
      column
      style={{ margin: 10, padding: 10, borderWidth: 5, borderColor: 'red' }}
    >
      <FormInput
        name={`skillsAbility`}
        type="textarea"
        label="Skills / Ability"
        value={data.skillsAbility}
        fieldErrors={error}
        onChange={onChange}
      />
    </Flex>
  )
}

export default SACat
