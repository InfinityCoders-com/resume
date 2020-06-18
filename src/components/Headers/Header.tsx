import React from 'react'
import { Flex, Button, Span } from '@icstark/ui'
import { SHeader } from './styled'
import { TMode } from '../../modules/type'

interface IHeader {
  mode: TMode
  setMode: (mode: TMode) => void
}

function Header({ mode, setMode }: IHeader) {
  return (
    <SHeader>
      <Span variant="secondary h4">Resume Editor</Span>
      <Flex width={[1 / 2, 1 / 3]} style={{ maxWidth: 200 }}>
        {mode === 'edit' ? null : (
          <Button style={{ marginRight: 10 }}>Export as PDF</Button>
        )}
        <Button onClick={() => setMode(mode === 'edit' ? 'preview' : 'edit')}>
          {mode === 'edit' ? 'Preview' : 'Edit'}
        </Button>
      </Flex>
    </SHeader>
  )
}

export default Header
