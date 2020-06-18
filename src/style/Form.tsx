import React from 'react'
import { Flex, Input, Span, styled } from '@icstark/ui'

const Form = styled(Flex)`
  flex-direction: ${(props: any) =>
    ['row', 'rowToColumn'].includes(props.variant)
      ? 'row'
      : ['column', 'columnToRow'].includes(props.variant)
      ? 'column'
      : 'column'};
  align-items: ${(props: any) =>
    ['row', 'rowToColumn'].includes(props.variant)
      ? 'center'
      : ['column', 'columnToRow'].includes(props.variant)
      ? 'flex-start'
      : 'flex-start'};

  justify-content: ${(props: any) =>
    ['row', 'rowToColumn'].includes(props.variant)
      ? 'space-between'
      : ['column', 'columnToRow'].includes(props.variant)
      ? 'flex-start'
      : 'flex-start'};

  @media screen and (max-width: 540px) {
    flex-direction: ${(props: any) =>
      ['column', 'rowToColumn'].includes(props.variant)
        ? 'column'
        : ['row', 'columnToRow'].includes(props.variant)
        ? 'row'
        : 'column'};
    align-items: ${(props: any) =>
      ['row', 'rowToColumn'].includes(props.variant)
        ? 'flex-start'
        : ['column', 'columnToRow'].includes(props.variant)
        ? 'center'
        : 'flex-start'};

    justify-content: ${(props: any) =>
      ['row', 'rowToColumn'].includes(props.variant)
        ? 'flex-start'
        : ['column', 'columnToRow'].includes(props.variant)
        ? 'space-between'
        : 'flex-start'};
  }
`

interface IForm {
  name: string
  label?: string
  className?: string
  style?: {
    container?: React.CSSProperties
    label?: React.CSSProperties
    formElement?: React.CSSProperties
  }
  variant?: 'row' | 'column' | 'rowToColumn' | 'columnToRow'
  onChange?: (item: any) => void
  onBlur?: (item: any) => void
  placeholder?: string
  fieldErrors?: any
  disabled?: boolean
  value?: string | undefined
}

interface IFormInput extends IForm {
  type: string
  checked?: boolean
}

interface IFormSelect extends IForm {
  list: any[]
}

export function FormInput({
  type,
  name,
  label,
  style = {},
  value,
  onBlur,
  variant,
  checked,
  onChange,
  disabled,
  placeholder,
  fieldErrors
}: IFormInput) {
  const styles = {
    ...style.container,
    ...(['checkbox', 'radio'].includes(type) ? {} : { flexGrow: 1 })
  }
  return (
    <Form
      variant={variant}
      alignItemsFlexStart
      style={{ ...styles, margin: '5px 2px' }}
    >
      {label && (
        <Span
          variant="secondary"
          style={{ ...style.label, paddingBottom: 5, fontSize: 12 }}
        >
          {label}
        </Span>
      )}
      <Input
        type={type}
        name={name}
        onBlur={onBlur}
        style={{
          ...style.formElement,
          width: '100%',
          padding: '6px 11px',
          borderRadius: 2,
          cursor: 'pointer'
        }}
        value={value}
        disabled={disabled}
        checked={checked}
        placeholder={placeholder}
        onChange={(e: any) => onChange && onChange(e.target)}
      />
      {fieldErrors[name] && (
        <Span
          p={2}
          style={{ color: '#e21515', height: '15px' }}
          variant="secondary"
        >
          {'*' + fieldErrors[name]}
        </Span>
      )}
    </Form>
  )
}

export function FormSelect({
  list,
  name,
  label,
  style = {},
  value,
  onBlur,
  variant,
  disabled,
  onChange,
  className,
  placeholder,
  fieldErrors
}: IFormSelect) {
  return (
    <Form
      variant={variant}
      style={{ flexGrow: 1, margin: '5px 2px', ...style.container }}
    >
      {label && (
        <label style={{ paddingBottom: 5, fontSize: 12, ...style.label }}>
          {label}
        </label>
      )}
      <select
        name={name}
        value={value}
        className={className}
        style={{ width: '100%', ...style.formElement }}
        disabled={disabled}
        onBlur={onBlur}
        onChange={(e: any) => onChange && onChange(e.target)}
      >
        <option value={''}>{placeholder}</option>
        {list.map((item: any, i: number) => (
          <option value={item.value} key={i}>
            {item.Label}
          </option>
        ))}
      </select>
      {fieldErrors[name] && (
        <Span
          p={2}
          style={{ color: '#e21515', height: '15px' }}
          variant="secondary"
        >
          {'*' + fieldErrors[name]}
        </Span>
      )}
    </Form>
  )
}
