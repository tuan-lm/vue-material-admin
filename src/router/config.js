import {
  LayoutAuth,
  LayoutDefault,
  LayoutChat,
  RouteWrapper
} from '@/components/layouts'

export const publicRoute = [
  {
    path: '*',
    component: () => import('@/views/error/NotFound.vue')
  },
  {
    path: '/auth',
    component: LayoutAuth,
    meta: {
      title: 'Login'
    },
    redirect: '/auth/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        meta: {
          title: 'Login'
        },
        component: () => import('@/views/auth/Login.vue')
      }
    ]
  },

  {
    path: '/404',
    name: '404',
    meta: {
      title: 'Not Found'
    },
    component: () => import('@/views/error/NotFound.vue')
  },

  {
    path: '/500',
    name: '500',
    meta: {
      title: 'Server Error'
    },
    component: () => import('@/views/error/Error.vue')
  }
]

export const protectedRoute = [
  {
    path: '/',
    component: LayoutDefault,
    meta: {
      title: 'home',
      group: 'apps',
      icon: ''
    },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: 'dashboard',
          group: 'apps',
          icon: 'mdi-emoticon-kiss-outline'
        },
        component: () => import('@/views/Dashboard.vue')
      },
      {
        path: '/calendar',
        meta: {
          title: 'term',
          group: 'apps',
          icon: 'mdi-calendar-check',
          new: true
        },
        name: 'calendar',
        props: (route) => ({
          type: route.query.type
        }),
        component: () => import('@/views/Calendar.vue')
      },

      {
        path: '/family',
        component: RouteWrapper,
        redirect: '/family',
        meta: {
          title: 'family',
          icon: 'mdi-human-male-child',
          group: 'cms'
        },
        children: [
          {
            path: '/family/member',
            name: 'FamilyMember',
            meta: {
              title: 'familyMember',
              icon: 'mdi-grave-stone'
            },
            component: () => import('@/views/list/FamilyUser.vue'),
          }
        ]
      },
      //widgets
      {
        path: '/ending-note',
        component: RouteWrapper,
        meta: {
          title: 'endingNote',
          icon: 'mdi-bed',
          group: 'advance'
        },
        redirect: '/ending-note/about-me',
        children: [
          {
            path: '/ending-note/about-me',
            name: 'AboutMe',
            meta: {
              title: 'aboutMe',
              icon: 'mdi-table'
            },
            component: () => import('@/views/widgets/List.vue')
          },
          {
            path: '/ending-note/property',
            name: 'Property',
            meta: {
              title: 'property',
              icon: 'mdi-face-profile'
            },
            component: () => import('@/views/widgets/Social.vue')
          },
          {
            path: '/ending-note/insurance',
            name: 'Insurance',
            meta: {
              title: 'insurance',
              icon: 'mdi-hexagon'
            },
            component: () => import('@/views/widgets/Statistic.vue')
          },
          {
            path: '/ending-note/last-message',
            name: 'LastMessage',
            meta: {
              title: 'lastMessage',
              icon: 'mdi-hexagon'
            },
            component: () => import('@/views/widgets/Statistic.vue')
          },
          
        ]
      },
      //form
      {
        path: '/forms',
        component: RouteWrapper,
        meta: {
          title: 'invitingList',
          icon: 'mdi-human-greeting-proximity',
          group: 'advance'
        },
        redirect: '/forms/list',
        children: [
          {
            path: '/forms/basic',
            name: 'forms.basic',
            meta: {
              title: 'basic_form',
              icon: 'mdi-alpha-b'
            },
            component: () => import('@/views/form/BasicForm.vue')
          },
          {
            path: '/forms/stepper',
            name: 'forms.stepper',
            meta: {
              title: 'step_form',
              icon: 'mdi-alpha-s'
            },
            component: () => import('@/views/form/Steppers.vue')
          }
        ]
      },
      
      {
        path: '/password-request',
        name: 'PasswordRequest',
        meta: {
          title: 'passwordRequest',
          icon: 'mdi-key-arrow-right',
          hiddenInMenu: false
        },
        component: () => import('@/views/list/PasswordRequestList.vue')
      },
      {
        path: '/report-of-user',
        name: 'ReportOfUser',
        meta: {
          title: 'reportOfUser',
          icon: 'mdi-account-voice',
          hiddenInMenu: false
        },
        component: () => import('@/views/list/CRUDTable.vue')
      },
      //chart
      {
        path: '/chart',
        component: RouteWrapper,
        meta: {
          title: 'chart',
          icon: 'mdi-chart-line',
          group: 'advance'
        },
        redirect: '/chart/echart',
        children: [
          {
            path: '/cart/echart',
            name: 'echart',
            meta: {
              title: 'echart',
              icon: 'mdi-paw'
            },
            component: () => import('@/views/chart/Echart.vue')
          },
          {
            path: '/cart/g2',
            name: 'g2',
            meta: {
              title: 'g2',
              icon: 'mdi-alpha-g'
            },
            component: () => import('@/views/chart/G2.vue')
          }
        ]
      },
      {
        path: '/403',
        name: 'Forbidden',
        meta: {
          title: 'access_denied',
          hiddenInMenu: true
        },
        component: () => import('@/views/error/Deny.vue')
      }
    ]
  },

  // chat app
  {
    path: '/chat',
    name: 'Chat',
    component: LayoutChat,
    redirect: {
      path: '/chat/messaging'
    },
    meta: {
      title: 'Chat',
      group: 'apps',
      icon: 'chat_bubble'
    },
    children: [
      {
        path: '/chat/messaging/:uuid?',
        name: 'ChatMessaging',
        props: true,
        component: () => import('@/views/chat/ChatMessaging.vue')
      },
      {
        path: '/chat/contact/:uuid?',
        meta: {
          public: true
        },
        name: 'ChatContact',
        component: () => import('@/views/chat/ChatContact.vue')
      }
    ]
  }
]
