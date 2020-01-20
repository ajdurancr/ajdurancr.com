export const children = [
  {
    fields: {
      children: undefined,
      description: 'This is a child component',
      name: 'Child Component 1',
    },
  },
  {
    fields: {
      children: undefined,
      description: 'This is a child component',
      name: 'Child Component 2',
    },
  },
]

export default [
  {
    fields: {
      children: undefined,
      description: 'Component without children',
      name: 'Test Component',
    },
  },
  {
    fields: {
      children,
      description: 'Component with children',
      name: 'Parent Component',
    },
  },
]
