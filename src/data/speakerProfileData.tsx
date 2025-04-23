import { Tag } from 'antd';

export const statusColors: Record<string, string> = {
  Submitted: 'default',
  Approved: 'green',
  Rejected: 'red',
  Accepted: 'blue',
  Declined: 'orange',
  Wishlist: 'purple',
  Upcoming: 'orange',
  Current: 'green',
  Ended: 'default',
  Cancelled: 'red',
};

export const cfpColors: Record<string, string> = {
  Opened: 'green',
  Closed: 'red',
  Future: 'blue',
  Cancelled: 'red',
};

export const columnsSubmission = [
  { title: 'Session Title', dataIndex: 'session', key: 'session' },
  { title: 'Event Name', dataIndex: 'event', key: 'event' },
  { title: 'Session Format', dataIndex: 'format', key: 'format' },
  { title: 'Session Track', dataIndex: 'track', key: 'track' },
  { title: 'Submission Date & Time', dataIndex: 'datetime', key: 'datetime' },
  { title: 'Rating', dataIndex: 'rating', key: 'rating' },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      <Tag color={statusColors[status] ?? 'default'}>{status}</Tag>
    ),
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: () => <span className="text-gray-400 cursor-pointer">👁️</span>,
  },
];

export const columnsEvents = [
  { title: 'Event Name', dataIndex: 'event', key: 'event' },
  { title: 'Event Manager', dataIndex: 'manager', key: 'manager' },
  { title: 'Event Dates', dataIndex: 'dates', key: 'dates' },
  { title: 'Nb Submissions', dataIndex: 'submissions', key: 'submissions' },
  {
    title: 'Event Status',
    dataIndex: 'eventStatus',
    key: 'eventStatus',
    render: (status: string) => (
      <Tag color={statusColors[status] ?? 'default'}>{status}</Tag>
    ),
  },
  {
    title: 'Call for Participation',
    dataIndex: 'cfpStatus',
    key: 'cfpStatus',
    render: (cfp: string) => (
      <Tag color={cfpColors[cfp] ?? 'default'}>{cfp}</Tag>
    ),
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: () => <span className="text-gray-400 cursor-pointer">👁️</span>,
  },
];

export const dataSubmission = Array.from({ length: 14 }, (_, i) => ({
  key: i,
  session: `Session title Session title...`,
  event: `Event title`,
  format: 'Quickie (15 min)',
  track: 'UX design',
  datetime: '12 Feb, 2023 at 04:45 pm',
  rating: '6',
  status: ['Submitted', 'Approved', 'Rejected', 'Accepted', 'Declined', 'Wishlist'][i % 6],
}));

export const dataEvents = Array.from({ length: 14 }, (_, i) => ({
  key: i,
  event: 'Event title',
  manager: 'Youness Meriaf',
  dates: i % 3 === 0 ? 'May 30–June 02, 2023' : 'May 23–26, 2023',
  submissions: i % 3 === 0 ? 5 : 0,
  eventStatus: ['Upcoming', 'Current', 'Ended', 'Cancelled'][i % 4],
  cfpStatus: ['Future', 'Opened', 'Closed', 'Cancelled'][i % 4],
}));

export const socialLinks = [
  { name: 'Github', url: '#' },
  { name: 'Twitter', url: '#' },
  { name: 'Facebook', url: '#' },
  { name: 'Youtube', url: '#' },
];
