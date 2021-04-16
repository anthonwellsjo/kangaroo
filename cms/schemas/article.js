import { MdAssignment as icon } from 'react-icons/md'


export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'blockContent',
    },
    {
      name: 'releaseDate',
      title: 'Release date',
      type: 'datetime',
    },
    {
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    },
    {
      name: 'minAgeMonths',
      title: 'Minimum age in months',
      type: 'number',
      description: "Minimum age (in months) for relatability"
    },
    {
      name: 'maxAgeMonths',
      title: 'Maximum age in months',
      type: 'number',
      description: "Maximum age (in months) for relatability"
    },
    {
      name: 'articleImage',
      title: 'Article Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'category' }],
    },
  ],
}
