import React from 'react'
import { FormSelect } from '../../../style/Form'
import { categoryOptions } from '../../../config/constants'
import { Flex, Button } from '@icstark/ui'

function AddCategory() {
  const [category, setCategory] = React.useState<any>([])
  const [form, setForm] = React.useState<any>([{ values: {}, errors: {} }])
  let i = 0
  let name = 'category'
  function onChange(target: any) {}
  return (
    <div>
      <Flex>
        <FormSelect
          list={categoryOptions}
          variant="row"
          placeholder="Category"
          name={name}
          onChange={onChange}
          value={form[i]['values'][name]}
          fieldErrors={form[i].errors}
        />
        <Button>Add Category</Button>
      </Flex>
    </div>
  )
}

export default AddCategory
