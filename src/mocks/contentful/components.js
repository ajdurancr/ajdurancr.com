const childComponent = {
  sys: {
    id: '4gfjlQfm3x9ShZKO8gdYqx',
    contentType: {
      sys: {
        id: 'component',
      },
    },
  },
  fields: {
    name: 'ChildComponent',
    contentType: 'Test Component',
    componentDescription: 'This is a child component',
  },
}

export const component = {
  sys: {
    id: '6neuJJsr2mbdKli0VjWnCn',
    contentType: {
      sys: {
        id: 'component',
      },
    },
  },
  fields: {
    name: 'TestComponent',
    contentType: 'Test Component',
    componentDescription: 'This is a test component',
    props: [
      {
        sys: {
          id: '74gEMnRKSOxejniOwjkHYN',
          contentType: {
            sys: {
              id: 'propText',
            },
          },
        },
        fields: {
          name: 'title',
          value: 'This is a test title',
        },
      },
      {
        sys: {
          id: '3hwiQ7OcvmctEdQPye6exu',
          contentType: {
            sys: {
              id: 'propComponents',
            },
          },
        },
        fields: {
          name: 'children',
          value: [
            childComponent,
          ],
        },
      },
      {
        sys: {
          id: '1RezpPBXf2buGYIccqQw0i',
          contentType: {
            sys: {
              id: 'propMarkdown',
            },
          },
        },
        fields: {
          name: 'markdownField',
          value: 'Test value',
        },
      },
    ],
  },
}

export default [component]
