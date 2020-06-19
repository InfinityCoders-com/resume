import React from 'react'
import { Flex, Button } from '@icstark/ui'

import { FormInput, FormSelect } from '../../../style/Form'
import ExpCat from '../components/ExpCat'
import { without } from 'lodash'
import EduCat from '../components/EduCat'
import SACat from '../components/SACat'
import PSCat from '../components/PSCat'

const initData = {
  cat: [],
  catData: {},
  errors: {}
}
const ddData = [
  { value: 'experience', Label: 'Experience' },
  { value: 'education', Label: 'Education' },
  { value: 'skillsAbilities', Label: 'Skills and Abilities' },
  { value: 'personalSkills', Label: 'Personal Skills' }
]

// var data = [1, 2, 3]
// console.log(data)
// console.log(without(data, 1))
// console.log(data)
// console.log(ddData.includes({}))

export function Resume() {
  const [resume, setResume] = React.useState<any>(initData)
  const [dd, setDd] = React.useState('aa')

  const AddCategory = () => {
    let data = resume.cat
    if (!data.includes(dd)) {
      data.push(dd)
      setResume({ ...resume, cat: data })
      if (dd === 'experience') {
        setResume({ ...resume, catData: { ...resume.catData, [dd]: [{}] } })
      }
      if (dd == 'education') {
        setResume({ ...resume, catData: { ...resume.catData, [dd]: [{}] } })
      }
      if (dd === 'skillsAbilities') {
        setResume({ ...resume, catData: { ...resume.catData, [dd]: {} } })
      }
      if (dd === 'personalSkills') {
        setResume({ ...resume, catData: { ...resume.catData, [dd]: {} } })
      }
    }
  }

  const AddSubCategory = (cat: any) => {
    let data = resume.catData[cat]
    if (cat === 'experience') {
      data.push({})
      setResume({ ...resume, catData: { ...resume.catData, experience: data } })
    }
    if (cat === 'education') {
      data.push({})
      setResume({ ...resume, catData: { ...resume.catData, education: data } })
    }
  }

  console.log(resume)

  const onChange = (target: any, keyId: any, cat: string) => {
    if (['experience', 'education'].includes(cat)) {
      let data = resume.catData[cat][keyId]
      let newCatData = [...resume.catData[cat]]
      newCatData[keyId] = {
        ...newCatData[keyId],
        [target.name]: target.value
      }
      let newData = {
        ...resume,
        catData: {
          ...resume.catData,
          [cat]: newCatData
        }
      }
      console.log(newData)
      setResume(newData)
    } else {
      setResume({
        ...resume,
        catData: {
          ...resume.catData,
          [cat]: { ...resume.catData[cat], [target.name]: target.value }
        }
      })
    }
  }

  const fields = (cat: any) => {
    if (['experience', 'education'].includes(cat)) {
      return resume.catData[cat].map((item: string, i: any) => {
        if (cat === 'experience') {
          return (
            <ExpCat
              key={String(i)}
              data={item}
              error={resume.errors}
              addSubCat={AddSubCategory}
              onChange={(t: any) => onChange(t, i, 'experience')}
            />
          )
        }
        if (cat === 'education') {
          return (
            <EduCat
              key={String(i)}
              data={item}
              error={resume.errors}
              addSubCat={AddSubCategory}
              onChange={(t: any) => onChange(t, i, 'education')}
            />
          )
        }
      })
    } else {
      let data = resume.catData[cat]
      if (cat === 'skillsAbilities') {
        return (
          <SACat
            data={data}
            error={resume.errors}
            onChange={(t: any) => onChange(t, 0, 'skillsAbilities')}
          />
        )
      }
      if (cat === 'personalSkills') {
        return (
          <PSCat
            data={data}
            error={resume.errors}
            onChange={(t: any) => onChange(t, 0, 'personalSkills')}
          />
        )
      }
    }
  }

  return (
    <Flex column style={{ width: 300 }}>
      <Flex column>
        {Object.keys(resume.catData).map((item, i) => {
          return (
            <Flex column key={String(i)}>
              <h1>{item}</h1>
              {fields(item)}
            </Flex>
          )
        })}
      </Flex>

      <FormSelect
        list={ddData}
        name="username"
        value={dd}
        label="Category"
        fieldErrors={resume.errors}
        onChange={(target) => setDd(target.value)}
        placeholder="Select Category"
      />
      <Button onClick={AddCategory}>Add Field</Button>
    </Flex>
  )
}
