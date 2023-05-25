import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faBuildingColumns, faChartColumn, faClipboardList, faCoins, faHandHoldingDollar, faHandshake, faMoneyBillTransfer, faPiggyBank, faSackDollar, faScroll, faSliders, faTag, faUserCheck, faUserGear, faUserGroup, faUserXmark, faUsers } from "@fortawesome/free-solid-svg-icons";

export const customerLinks = [
  {
    icon: faUserGroup,
    text: 'Users',
    link: '/users'
  },
  {
    icon: faUsers,
    text: 'Guarantors',
    link: '/guarantors'
  },
  {
    icon: faSackDollar,
    text: 'Loans',
    link: '/loans'
  },
  {
    icon: faHandshake,
    text: 'Decision Models',
    link: '/decision-models'
  },
  {
    icon: faPiggyBank,
    text: 'Savings',
    link: '/savings'
  },
  {
    icon: faHandHoldingDollar,
    text: 'Loan Requests',
    link: '/loan-requests'
  },
  {
    icon: faUserCheck,
    text: 'White List',
    link: '/white-list'
  },
  {
    icon: faUserXmark,
    text: 'Karma',
    link: '/karma'
  },
]

export const businessLinks = [
  {
    icon: faBriefcase,
    text: 'Organization',
    link: '/organization'
  },
  {
    icon: faHandHoldingDollar,
    text: 'Loan products',
    link: '/loan-products'
  },
  {
    icon: faBuildingColumns,
    text: 'Savings Products',
    link: '/savings-products'
  },
  {
    icon: faCoins,
    text: 'Fees and Charges',
    link: '/feest-and-charges'
  },
  {
    icon: faMoneyBillTransfer,
    text: 'Transactions',
    link: '/transactions'
  },
  {
    icon: faServicestack,
    text: 'Services',
    link: '/services'
  },
  {
    icon: faUserGear,
    text: 'Service Account',
    link: '/service-account'
  },
  {
    icon: faScroll,
    text: 'Settlements',
    link: '/settlements'
  },
  {
    icon: faChartColumn,
    text: 'Reports',
    link: '/reports'
  },
]

export const settingLinks = [
  {
    icon: faSliders,
    text: 'Preferences',
    link: '/preferences'
  },
  {
    icon: faTag,
    text: 'Fees and Pricing',
    link: '/fees-and-pricing'
  },
  {
    icon: faClipboardList,
    text: 'Audit Logs',
    link: '/audit-logs'
  },
]