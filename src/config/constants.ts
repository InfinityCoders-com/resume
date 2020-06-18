import {
  FaBriefcase,
  FaGraduationCap,
  FaUser,
  FaUserPlus,
  FaUserTie
} from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'

export const categoryOptions = [
  {
    label: 'Experience',
    value: 'experience',
    icon: FaUserTie
  },
  {
    label: 'Education',
    value: 'education',
    icon: FaGraduationCap
  },
  {
    label: 'Skills & Abilities',
    value: 'skillsNAbilities',
    icon: FaBriefcase
  },
  {
    label: 'Personal Skills',
    value: 'personalSkills',
    icon: MdSettings
  },
  {
    label: 'Career',
    value: 'career',
    icon: FaUser
  },
  {
    label: 'Contact',
    value: 'contact',
    icon: FaUserPlus
  },
  {
    label: 'Interest',
    value: 'interest',
    icon: MdSettings
  }
]
