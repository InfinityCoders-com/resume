import React from 'react'
import { TMode } from '../../type'
import { ResumePreview } from './ResumePreview'
import { ResumeEdit } from './ResumeEdit'

interface IResume {
  mode: TMode
}

export function Resume({ mode, ...rest }: IResume) {
  return mode === 'edit' ? (
    <ResumeEdit {...rest} />
  ) : (
    <ResumePreview {...rest} />
  )
}
