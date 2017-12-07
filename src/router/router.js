import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => {
        require(['@/views/login.vue'], resolve);
    }
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => {
        require(['@/views/error-page/404.vue'], resolve);
    }
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: resolve => {
        require(['@//views/error-page/403.vue'], resolve);
    }
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: resolve => {
        require(['@/views/error-page/500.vue'], resolve);
    }
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    meta: {
        title: '中铁中宇后台管理系统'
    },
    component: Main,
    children: [
        {
            path: 'home',
            title: {i18n: 'home'},
            name: 'home_index',
            component: resolve => {
                require(['@/views/home/home.vue'], resolve);
            }
        },
        {
            path: 'ownspace',
            title: '个人中心',
            name: 'ownspace_index',
            component: resolve => {
                require(['@/views/own-space/own-space.vue'], resolve);
            }
        }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/',
        name: 'home',
        title: '首页',
        icon: 'home',
        component: Main,
        children: [
            {
                path: 'home',
                title: '首页',
                name: 'home-index',
                component: resolve => {
                    require(['@/views/home/home.vue'], resolve);
                }
            }
        ]
    },
    {
        path: '/man-manage',
        icon: 'person',
        name: 'man-manage',
        title: '用户管理',
        component: Main,
        children: [
            {
                path: 'employee',
                title: '员工管理',
                name: 'employee',
                component: resolve => {
                    require(['@/views/man-manage/employee/employee.vue'], resolve);
                }
            },
            {
                path: 'company-user',
                title: '企业用户',
                name: 'company-user',
                component: resolve => {
                    require(['@/views/man-manage/company-user/company-user.vue'], resolve);
                }
            },
            {
                path: 'user-info',
                title: '用户信息',
                name: 'user-info',
                component: resolve => {
                    require(['@/views/man-manage/user-info/user-info.vue'], resolve);
                }
            },
            {
                path: 'access',
                title: '权限管理',
                name: 'access',
                component: resolve => {
                    require(['@/views/man-manage/access/access.vue'], resolve);
                }
            }
        ]
    },
    {
        path: '/bid-manage',
        icon: 'arrow-graph-up-right',
        title: '投标管理',
        name: 'bid-manage',
        // access: 0,
        component: Main,
        children: [
            {
                path: 'bid-info',
                title: '标信息管理',
                name: 'bid-info',
                component: resolve => {
                    require(['@/views/bid-manage/bid-info/bid-info.vue'], resolve);
                }
            },
            {
                path: 'bidder',
                title: '用户投标查询',
                name: 'bidder',
                component: resolve => {
                    require(['@/views/bid-manage/bidder/bidder.vue'], resolve);
                }
            },
            {
                path: 'bid',
                title: '投标管理',
                name: 'bid',
                component: resolve => {
                    require(['@/views/bid-manage/bid/bid.vue'], resolve);
                }
            }
        ]
    },
    {
        path: '/fund-manage',
        icon: 'social-yen',
        title: '资金管理',
        name: 'fund-manage',
        component: Main,
        children: [
            {
                path: 'charge',
                title: '充值信息',
                name: 'charge',
                component: resolve => {
                    require(['@/views/fund-manage/charge/charge.vue'], resolve);
                }
            },
            {
                path: 'cash',
                title: '提现信息',
                name: 'cash',
                component: resolve => {
                    require(['@/views/fund-manage/cash/cash.vue'], resolve);
                }
            },
            {
                path: 'invest',
                title: '投资管理',
                name: 'invest',
                component: resolve => {
                    require(['@/views/fund-manage/invest/invest.vue'], resolve);
                }
            },
            {
                path: 'overdate',
                title: '到期管理',
                name: 'overdate',
                component: resolve => {
                    require(['@/views/fund-manage/overdate/overdate.vue'], resolve);
                }
            }
        ]
    },
    {
        path: '/portal-manage',
        icon: 'monitor',
        name: 'portal-manage',
        title: '门户管理',
        component: Main,
        children: [
            {
                path: 'news',
                name: 'news',
                title: '新闻信息管理',
                component: resolve => {
                    require(['@/views/portal-manage/news/news.vue'], resolve);
                }
            },
            {
                path: 'ads',
                name: 'ads',
                title: '广告位管理',
                component: resolve => {
                    require(['@/views/portal-manage/ads/ads.vue'], resolve);
                }
            },
            {
                path: 'issues',
                name: 'issues',
                title: '常见问题管理',
                component: resolve => {
                    require(['@/views/portal-manage/issues/issues.vue'], resolve);
                }
            }
        ]
    },
    {
        path: '/',
        icon: 'document',
        name: 'log',
        title: '查看日志',
        component: Main,
        children: [
            {
                path: '/log',
                title: '查看日志',
                name: 'log-index',
                component: resolve => {
                    require(['@/views/log/log.vue'], resolve);
                }
            }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    ...appRouter,
    page500,
    page403,
    page404
];
