/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  SquareTerminal,
} from 'lucide-react'

export const sideBarItems = {
  // Role-based navigation items
  navMain: {
    admin: [
      {
        title: 'Product Management',
        url: '#',
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: 'All Products',
            url: '/admin/all-products',
          },
          {
            title: 'Add Products',
            url: '/admin/add-products',
          },
          {
            title: 'Single Product',
            url: '/admin/single-products',
          },
        ],
      },
      {
        title: 'Category Management',
        url: '#',
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: 'Main Categories',
            url: '/admin/main-categories',
          },
          {
            title: 'Sub Categories',
            url: '/admin/sub-categories',
          },
          {
            title: ' Nested Sub Categories',
            url: '/admin/nested-sub-categories',
          },
          {
            title: 'Add Category',
            url: '/admin/add-products',
          },
        ],
      },
      {
        title: 'User Management',
        url: '#',
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: 'All Users',
            url: '/admin/all-users',
          },
          {
            title: 'Add User',
            url: '/admin/add-user',
          },
          {
            title: 'Single User',
            url: '/admin/single-user',
          },
        ],
      },
      {
        title: 'Vendor Management',
        url: '#',
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: 'All Vendors',
            url: '/admin/all-vendors',
          },
          {
            title: 'Add Vendor',
            url: '/admin/add-vendor',
          },
          {
            title: 'Single Vendor',
            url: '/admin/single-vendor',
          },
        ],
      },
    ],
    vendor: [
      {
        title: 'Product Management',
        url: '#',
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: 'My Products',
            url: '/vendor/vendor-products',
          },
          {
            title: 'Single Product',
            url: '/vendor/single-products',
          },
          {
            title: 'Delete Product',
            url: '/vendor/single-products',
          },
        ],
      },
      {
        title: 'Profile Management',
        url: '#',
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: 'My Profile',
            url: '/vendor/vendor-profile',
          },
        ],
      },
    ],
    user: [
      {
        title: 'Product Management',
        url: '#',
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: 'My Orders',
            url: '/user/all-products',
          },
          {
            title: 'My Cart',
            url: '/user/add-products',
          },
          {
            title: 'Manage Profile',
            url: '/user/single-products',
          },
        ],
      },
    ],
  },
  navSecondary: [
    {
      title: 'Support',
      url: '#',
      icon: LifeBuoy,
    },
    {
      title: 'Feedback',
      url: '#',
      icon: Send,
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
}
