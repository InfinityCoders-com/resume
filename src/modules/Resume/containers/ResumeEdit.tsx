import { Button, Flex } from '@icstark/ui'
import React from 'react'
import {
  FaBriefcase,
  FaGraduationCap,
  FaUser,
  FaUserPlus,
  FaUserTie
} from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'
import { FormSelect } from '../../../style/Form'
import AddCategory from '../components/AddCategory'

interface IResumeEdit {}
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export function ResumeEdit({}: IResumeEdit) {
  const [resume, setResume] = React.useState<any>([])
  console.log('-')

  return (
    <Flex
      column
      style={{ width: 1000, margin: '0 auto', border: '1px solid #4f4f4f' }}
    >
      <DndProvider backend={HTML5Backend}>{/* <Example /> */}</DndProvider>

      <AddCategory />
    </Flex>
  )
}
