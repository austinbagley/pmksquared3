import React from 'react'

export const sluggifyTitle = (title: string) => {
  const re = /[^\w\s]/g
  return title.trim().toLowerCase().replace(re, '').replace(/\s+/g, '-')
}

export const getNodeText = (node: React.ReactNode): string => {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return node.toString()
  if (node instanceof Array) return node.map(getNodeText).join('')

  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return node.props.children ? getNodeText(node.props.children) : ''
  }

  return ''
}