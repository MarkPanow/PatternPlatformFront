import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

Vue.use(VueRouter)


const routes: Array<RouteConfig> = [
    {
        path: '/patterns',
        name: 'Patterns',
        component: () => import('../components/PatternFilter.vue'),
        meta: {
            breadcrumb: 'Pattern'
        },

        // Path for the patterns is their name in lowercase and dash between words: This is a Long Pattern Name -> this-is-a-long-pattern-name
        children: [
            {
                path: 'pattern-a',
                name: 'Pattern A',
                component: () => import('../views/Patterns/PatternA.vue'),
                meta: {
                    breadcrumb: 'Pattern A'
                }
            },
            {
                path: 'pattern-b',
                name: 'Pattern B',
                component: () => import('../views/Patterns/PatternB.vue'),
                meta: {
                    breadcrumb: 'Pattern B'
                }
            },
            {
                path: 'pattern-c',
                name: 'Pattern C',
                component: () => import('../views/Patterns/PatternC.vue'),
                meta: {
                    breadcrumb: 'Pattern C'
                }
            },
            {
                path: 'pattern-d',
                name: 'Pattern D',
                component: () => import('../views/Patterns/PatternD.vue'),
                meta: {
                    breadcrumb: 'Pattern D'
                }
            },
            {
                path: 'pattern-e',
                name: 'Pattern E',
                component: () => import('../views/Patterns/PatternE.vue'),
                meta: {
                    breadcrumb: 'Pattern E'
                }
            },
            {
                path: 'pattern-f',
                name: 'Pattern F',
                component: () => import('../views/Patterns/PatternF.vue'),
                meta: {
                    breadcrumb: 'Pattern F'
                }
            },

        ]
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: {
            breadcrumb: 'Home'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: {
            breadcrumb: 'About'
        }
    },

    {
        path: '/tags',
        name: 'Tags',
        component: () => import('../components/Tags.vue'),
        meta: {
            breadcrumb: 'Tags'
        }
    },
    {
        path: '/control',
        name: 'Control',
        component: () => import('../views/ControlRoom.vue'),
        meta: {
            breadcrumb: 'Controll Room'
        }
    },
    {
        path: '/connections',
        name: 'Connections',
        component: () => import('../views/Chord.vue'),
        meta: {
            breadcrumb: 'Relationships'
        }
    }

]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
