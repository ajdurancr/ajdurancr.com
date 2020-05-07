import socialMediaLinks from './socialMediaLinks'

export default {
  sys: {
    id: '3Aj6YhWjxQsZvrJbmPbm0i',
    contentType: {
      sys: { id: 'component' },
    },
  },
  fields: {
    name: 'Social Media',
    contentType: 'Social Media',
    props: [
      {
        sys: {
          id: '4mQeFUKhFefDEGBEoJG4C8',
          contentType: {
            sys: { id: 'propComponents' },
          },
        },
        fields: {
          name: 'socialMediaLinks',
          value: socialMediaLinks,
        },
      },
    ],
  },
}
