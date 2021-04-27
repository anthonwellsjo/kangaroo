import { MdAlarm as icon } from 'react-icons/md'


export default {
  name: 'notification',
  title: 'Notification',
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
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'createdOn',
      title: 'Created On',
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
      name: 'isRegional',
      title: 'Is Regional?',
      type: 'boolean',
      description: "Notifcation is regional?"
    },
    {
      name: 'region',
      title: 'Region',
      type: 'array',
      of: [{type: "string"}],
      description: "Regions for notification"
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'notificationCategory'}],
    },
  ],
}
