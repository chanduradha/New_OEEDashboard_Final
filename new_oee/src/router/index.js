// // src/router/index.js
// import { createRouter, createWebHistory } from 'vue-router'
// import MainDashboard from '../views/MainDashboard.vue'
// import UserProfile from '../views/UserProfile.vue'
// import RegularTables from '../views/RegularTables.vue'
// import Typography from '../views/Typography.vue'
// import Icons from '../views/Icons.vue'
// import GoogleMaps from '../views/GoogleMaps.vue'
// import Notifications from '../views/Notifications.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'MainDashboard',
//     component: MainDashboard
//   },
//   {
//     path: '/profile',
//     name: 'UserProfile',
//     component: UserProfile
//   },
//   {
//     path: '/tables',
//     name: 'RegularTables',
//     component: RegularTables
//   },
//   {
//     path: '/typography',
//     name: 'Typography',
//     component: Typography
//   },
//   {
//     path: '/icons',
//     name: 'Icons',
//     component: Icons
//   },
//   {
//     path: '/maps',
//     name: 'GoogleMaps',
//     component: GoogleMaps
//   },
//   {
//     path: '/notifications',
//     name: 'Notifications',
//     component: Notifications
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

// export default router
// src/router/index.js
// import { createRouter, createWebHistory } from 'vue-router'
// import DashboardView from '../views/DashboardView.vue'
// import UserProfileView from '../views/UserProfileView.vue'
// import RegularTablesView from '../views/RegularTablesView.vue'
// import TypographyView from '../views/TypographyView.vue'
// import IconsView from '../views/IconsView.vue'
// import GoogleMapsView from '../views/GoogleMapsView.vue'
// import NotificationsView from '../views/NotificationsView.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'dashboard',
//     component: DashboardView,
//     meta: {
//       title: 'Dashboard',
//       icon: '📊'
//     }
//   },
//   {
//     path: '/profile',
//     name: 'user-profile',
//     component: UserProfileView,
//     meta: {
//       title: 'User Profile',
//       icon: '👤'
//     }
//   },
//   {
//     path: '/tables',
//     name: 'regular-tables',
//     component: RegularTablesView,
//     meta: {
//       title: 'Regular Tables',
//       icon: '📋'
//     }
//   },
//   {
//     path: '/typography',
//     name: 'typography',
//     component: TypographyView,
//     meta: {
//       title: 'Typography',
//       icon: '📝'
//     }
//   },
//   {
//     path: '/icons',
//     name: 'icons',
//     component: IconsView,
//     meta: {
//       title: 'Icons',
//       icon: '🎨'
//     }
//   },
//   {
//     path: '/maps',
//     name: 'google-maps',
//     component: GoogleMapsView,
//     meta: {
//       title: 'Google Maps',
//       icon: '🗺️'
//     }
//   },
//   {
//     path: '/notifications',
//     name: 'notifications',
//     component: NotificationsView,
//     meta: {
//       title: 'Notifications',
//       icon: '🔔'
//     }
//   }
// ]

// const router = createRouter({
//   history: createWebHistory('/'), // Changed this line
//   routes
// })

// export default router
// import { createRouter, createWebHistory } from 'vue-router'
// import DashboardView from '../views/DashboardView.vue'
// import UserProfileView from '../views/UserProfileView.vue'
// import RegularTablesView from '../views/RegularTablesView.vue'
// import TypographyView from '../views/TypographyView.vue'
// import IconsView from '../views/IconsView.vue'
// import GoogleMapsView from '../views/GoogleMapsView.vue'
// import NotificationsView from '../views/NotificationsView.vue'
// import AnalyticsView from '../views/AnalyticsView.vue'
// import DailyView from '../views/DailyView.vue'
// import WeeklyView from '../views/WeeklyView.vue'
// import MonthlyView from '../views/MonthlyView.vue'
// const routes = [
//   {
//     path: '/',
//     name: 'dashboard',
//     component: DashboardView,
//     meta: {
//       title: 'OEE Dashboard',
//       icon: '📊'
//     },
//     children: [
//         {
//           path: 'analytics',
//           name: 'analytics',
//           component: AnalyticsView,
//           meta: {
//             title: 'Analytics',
//             icon: '📈'
//           }
//         },
//         {
//           path: 'daily',
//           name: 'daily',
//           component: DailyView,
//           meta: {
//             title: 'Daily Report',
//             icon: '📅'
//           }
//         },
//         {
//           path: 'weekly',
//           name: 'weekly',
//           component: WeeklyView,
//           meta: {
//             title: 'Weekly Report',
//             icon: '📆'
//           }
//         },
//         {
//           path: 'monthly',
//           name: 'monthly',
//           component: MonthlyView,
//           meta: {
//             title: 'Monthly Report',
//             icon: '📋'
//           }
//         }
//       ]

    
//   },
//   {
//     path: '/profile',
//     name: 'user-profile',
//     component: UserProfileView,
//     meta: {
//       title: 'User Profile',
//       icon: '👤',
//       external: 'https://example.com/profile'  // Added external link for profile
//     }
//   },
//   {
//     path: '/tables',
//     name: 'regular-tables',
//     component: RegularTablesView,
//     meta: {
//       title: 'Regular Tables',
//       icon: '📋',
//       external: 'https://example.com/tables'
//     }
//   },
//   {
//     path: '/typography',
//     name: 'typography',
//     component: TypographyView,
//     meta: {
//       title: 'Typography',
//       icon: '📝',
//       external: 'https://example.com/typography'
//     }
//   },
//   {
//     path: '/icons',
//     name: 'icons',
//     component: IconsView,
//     meta: {
//       title: 'Icons',
//       icon: '🎨',
//       external: 'https://example.com/icons'
//     }
//   },
//   {
//     path: '/maps',
//     name: 'google-maps',
//     component: GoogleMapsView,
//     meta: {
//       title: 'Google Maps',
//       icon: '🗺️',
//       external: 'https://maps.google.com'
//     }
//   },
//   {
//     path: '/notifications',
//     name: 'notifications',
//     component: NotificationsView,
//     meta: {
//       title: 'Notifications',
//       icon: '🔔',
//       external: 'https://example.com/notifications'
//     }
//   }
// ]

// const router = createRouter({
//   history: createWebHistory('/'),
//   routes
// })
//'''''''''''''''''''''''''''''''''''''

//'''''''''''below is the new code whcih is working'''''''''''''''''

// import { createRouter, createWebHistory } from 'vue-router'
// import DashboardView from '../views/DashboardView.vue'
// import AnalyticsView from '../views/AnalyticsView.vue'
// import DailyView from '../views/DailyView.vue'
// import WeeklyView from '../views/WeeklyView.vue'
// import MonthlyView from '../views/MonthlyView.vue'
// import DownloadView from '@/views/DownloadView.vue'


// const routes = [
   
//   {
//     path: '/',
//     name: 'dashboard',
//     component: DashboardView,
//     meta: {
//       title: 'OEE Dashboard',
//       icon: '📊'
//     },
//     children: [
//       {
//         path: 'analytics',
//         name: 'analytics',
//         component: AnalyticsView,
//         meta: {
//           title: 'Analytics',
//           icon: '📈'
//         }
//       },
//       {
//         path: 'daily',
//         name: 'daily',
//         component: DailyView,
//         meta: {
//           title: 'Daily Report',
//           icon: '📅'
//         }
//       },
//       {
//         path: 'weekly',
//         name: 'weekly',
//         component: WeeklyView,
//         meta: {
//           title: 'Weekly Report',
//           icon: '📆'
//         }
//       },
//       {
//         path: 'monthly',
//         name: 'monthly',
//         component: MonthlyView,
//         meta: {
//           title: 'Monthly Report',
//           icon: '📋'
//         }
//       },
//       {
//         path: 'download',
//         name: 'download',
//         component: DownloadView,
//         meta: {
//           title: 'Download Report',
//           icon: '📋'
//         }
//       }
//     ]
//   },
//   {
//     path: '/energy',
//     name: 'Energy-monitoring',
//     beforeEnter: () => {
//       window.location.href = 'http://172.18.7.24:5123/'
//       return false
//     },
//     meta: {
//       title: 'Energy Monitoring',
//       icon: '👤',
//       external: 'http://172.18.7.24:5123/'
//     }
//   },
//   {
//     path: '/maintenance',
//     name: 'Maintenance',
//     beforeEnter: () => {
//       window.location.href = 'https://example.com/Maintenance'
//       return false
//     },
//     meta: {
//       title: 'Maintenance',
//       icon: '📋',
//       external: 'https://example.com/Maintenance'
//     }
//   },
//   {
//     path: '/iot',
//     name: 'IOT',
//     beforeEnter: () => {
//       window.location.href = 'https://example.com/IOT'
//       return false
//     },
//     meta: {
//       title: 'IOT',
//       icon: '📝',
//       external: 'https://example.com/IOT'
//     }
//   },
//   {
//     path: '/cbm',
//     name: 'CBM',
//     beforeEnter: () => {
//       window.location.href = 'https://example.com/CBM'
//       return false
//     },
//     meta: {
//       title: 'CBM',
//       icon: '🎨',
//       external: 'https://example.com/CBM'
//     }
//   },
//   {
//     path: '/quality',
//     name: 'Quality',
//     beforeEnter: () => {
//       window.location.href = 'https://example.com/Quality'
//       return false
//     },
//     meta: {
//       title: 'Quality',
//       icon: '🗺️',
//       external: 'https://example.com/Quality'
//     }
//   },
//   {
//     path: '/notifications',
//     name: 'notifications',
//     beforeEnter: () => {
//       window.location.href = 'https://example.com/notifications'
//       return false
//     },
//     meta: {
//       title: 'Notifications',
//       icon: '🔔',
//       external: 'https://example.com/notifications'
//     }
//   }
// ]

// const router = createRouter({
//   history: createWebHistory('/'),
//   routes
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import AnalyticsView from '../views/AnalyticsView.vue'
import DailyView from '../views/DailyView.vue'
import WeeklyView from '../views/WeeklyView.vue'
import MonthlyView from '../views/MonthlyView.vue'
import DownloadView from '@/views/DownloadView.vue'

// Create a new empty component for the initial route
const EmptyView = { template: '<div></div>' }

const routes = [
  // Add a new root route that shows nothing
  {
    path: '/',
    name: 'home',
    component: EmptyView,
    meta: {
      title: 'Home',
      icon: '🏠'
    }
  },
  // Move dashboard to its own top-level route
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      title: 'OEE Dashboard',
      icon: '📊',
      hideComponents: true 
    },
    children: [
      {
        path: 'analytics',
        name: 'analytics',
        component: AnalyticsView,
        meta: {
          title: 'Analytics',
          icon: '📈'
        }
      },
      {
        path: 'daily',
        name: 'daily',
        component: DailyView,
        meta: {
          title: 'Daily Report',
          icon: '📅'
        }
      },
      {
        path: 'weekly',
        name: 'weekly',
        component: WeeklyView,
        meta: {
          title: 'Weekly Report',
          icon: '📆'
        }
      },
      {
        path: 'monthly',
        name: 'monthly',
        component: MonthlyView,
        meta: {
          title: 'Monthly Report',
          icon: '📋'
        }
      },
      {
        path: 'download',
        name: 'download',
        component: DownloadView,
        meta: {
          title: 'Download Report',
          icon: '📋'
        }
      }
    ]
  },
  {
    path: '/energy',
    name: 'Energy-monitoring',
    beforeEnter: () => {
      window.location.href = 'http://172.18.7.24:5123/'
      return false
    },
    meta: {
      title: 'Energy Monitoring',
      // icon: '👤',
      icon: '⚡',
      external: 'http://172.18.7.24:5123/'
    }
  },
  {
    path: '/maintenance',
    name: 'Maintenance',
    beforeEnter: () => {
      window.location.href = 'https://example.com/Maintenance'
      return false
    },
    meta: {
      title: 'Maintenance',
      icon: '🔧', 
      external: 'http://172.18.7.91/tiei_dynamic/#/'
    }
  },
  {
    path: '/iot',
    name: 'IOT',
    beforeEnter: () => {
      window.location.href = 'https://example.com/IOT'
      return false
    },
    meta: {
      title: 'IOT',
      icon: '⚡',
      external: 'https://example.com/IOT'
    }
  },
  {
    path: '/cbm',
    name: 'CBM',
    beforeEnter: () => {
      window.location.href = 'https://example.com/CBM'
      return false
    },
    meta: {
      title: 'CBM',
      icon: '📶',
      external: 'https://example.com/CBM'
    }
  },
  {
    path: '/quality',
    name: 'Quality',
    beforeEnter: () => {
      window.location.href = 'https://example.com/Quality'
      return false
    },
    meta: {
      title: 'Quality',
      icon: '✅',
      external: 'https://example.com/Quality'
    }
  },
  {
    path: '/notifications',
    name: 'notifications',
    beforeEnter: () => {
      window.location.href = 'https://example.com/notifications'
      return false
    },
    meta: {
      title: 'Notifications',
      icon: '🔔',
      external: 'https://example.com/notifications'
    }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router

// import { createRouter, createWebHistory } from 'vue-router'
// import DashboardView from '../views/DashboardView.vue'
// import AnalyticsView from '../views/AnalyticsView.vue'
// import DailyView from '../views/DailyView.vue'
// import WeeklyView from '../views/WeeklyView.vue'
// import MonthlyView from '../views/MonthlyView.vue'
// import DownloadView from '@/views/DownloadView.vue'
// import OeeOverview from '@/views/OeeOverview.vue' 
// import MainPage from '@/views/MainPage.vue'
// const routes = [
//   {
//     path: '/',
//     name: 'dashboard',
//     component: DashboardView,
//     meta: {
//       title: 'OEE Dashboard',
//       icon: '📊'  // keeping dashboard icon
//     },
//   },
//   {
//       path: '/oee',
//       name: 'oee-overview',
//       component: OeeOverview,
//       redirect: '/oee/',  // Add this line to redirect to the empty path child route
//       meta: {
//         title: 'OEE Overview',
//         icon: '📊'
//       },
//     children: [
//       {
//         path: '',
//         name: 'Home',
//         component: MainPage
//       },
//       {
//         path: 'analytics',
//         name: 'analytics',
//         component: AnalyticsView,
//         meta: {
//           title: 'Analytics',
//           icon: '📈'
//         }
//       },
//       {
//         path: 'daily',
//         name: 'daily',
//         component: DailyView,
//         meta: {
//           title: 'Daily Report',
//           icon: '📅'
//         }
//       },
//       {
//         path: 'weekly',
//         name: 'weekly',
//         component: WeeklyView,
//         meta: {
//           title: 'Weekly Report',
//           icon: '📆'
//         }
//       },
//       {
//         path: 'monthly',
//         name: 'monthly',
//         component: MonthlyView,
//         meta: {
//           title: 'Monthly Report',
//           icon: '📋'
//         }
//       },
//       {
//         path: 'download',
//         name: 'download',
//         component: DownloadView,
//         meta: {
//           title: 'Download Report',
//           icon: '⬇️'
//         }
//       }
//     ]
//   },
//   {
//     path: '/energy',
//     name: 'Energy-monitoring',
//     beforeEnter: () => {
//       window.location.href = 'http://172.18.7.24:5123/'
//       return false
//     },
//     meta: {
//       title: 'Energy Monitoring',
//       icon: '⚡',  // Changed to lightning bolt for energy
//       external: 'http://172.18.7.24:5123/'
//     }
//   },
//   {
//     path: '/maintenance',
//     name: 'Maintenance',
//     beforeEnter: () => {
//       window.location.href = 'https://example.com/Maintenance'
//       return false
//     },
//     meta: {
//       title: 'Maintenance',
//       icon: '🔧',  // Changed to wrench for maintenance
//       external: 'https://example.com/Maintenance'
//     }
//   },
//   {
//     path: '/iot',
//     name: 'IOT',
//     beforeEnter: () => {
//       window.location.href = 'https://example.com/IOT'
//       return false
//     },
//     meta: {
//       title: 'IOT',
//       icon: '🔌',  // Changed to electric plug for IoT
//       external: 'https://example.com/IOT'
//     }
//   },
//   {
//     path: '/cbm',
//     name: 'CBM',
//     beforeEnter: () => {
//       window.location.href = 'https://example.com/CBM'
//       return false
//     },
//     meta: {
//       title: 'CBM',
//       icon: '🔄',  // Changed to rotating arrows for Condition Based Monitoring
//       external: 'https://example.com/CBM'
//     }
//   },
//   {
//     path: '/quality',
//     name: 'Quality',
//     beforeEnter: () => {
//       window.location.href = 'https://example.com/Quality'
//       return false
//     },
//     meta: {
//       title: 'Quality',
//       icon: '✅',  // Changed to check mark for quality
//       external: 'https://example.com/Quality'
//     }
//   },
//   {
//     path: '/notifications',
//     name: 'notifications',
//     beforeEnter: () => {
//       window.location.href = 'https://example.com/notifications'
//       return false
//     },
//     meta: {
//       title: 'Notifications',
//       icon: '🔔',
//       external: 'https://example.com/notifications'
//     }
//   }
// ]

// const router = createRouter({
//   history: createWebHistory('/'),
//   routes
// })

// export default router


