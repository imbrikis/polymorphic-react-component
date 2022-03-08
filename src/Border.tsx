import React from 'react'

type BorderProps<T extends React.ElementType> = {
  as?: T
  children: React.ReactNode
  styling: 'solid' | 'dotted' | 'dashed' | 'double'
  color: string
  width: number
} & React.ComponentPropsWithoutRef<T>

type Props<C extends React.ElementType> = React.PropsWithChildren<
  BorderProps<C>
>

const Border = <T extends React.ElementType>({
  as,
  children,
  styling,
  color,
  width,
}: Props<T>) => {
  const Component = as || 'span'
  const style = { style: { border: `${width}px ${styling} ${color}` } }

  return <Component {...style}>{children}</Component>
}

export default Border
