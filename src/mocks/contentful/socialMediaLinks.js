import media from './media'

export const socialMediaLink = {
  sys: {
    id: '7fb8b29Sx8xzEerHpUkFuC',
    contentType: {
      sys: {
        id: 'component',
      },
    },
  },
  fields: {
    name: 'Social Media Link - ajdurancr - GitHub',
    contentType: 'Social Media Link',
    props: [
      {
        sys: {
          id: '3DOnmJjojmOqGUCwZVXcmZ',
          contentType: {
            sys: {
              id: 'propMedia',
            },
          },
        },
        fields: {
          name: 'icon',
          value: {
            sys: {
              id: '5Yt9H0zn6ewSMnuvzh7V6P',
              locale: 'en-US',
            },
            fields: media,
          },
        },
      },
      {
        sys: {
          id: '4c1KdByPrvFRuKMILrEayJ',
          contentType: {
            sys: {
              id: 'propCta',
            },
          },
        },
        fields: {
          name: 'cta',
          text: 'GitHub',
          value: 'https://github.com/ajdurancr',
        },
      },
    ],
  },
}

export default [socialMediaLink]
