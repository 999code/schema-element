import { createRouter, createWebHashHistory } from 'vue-router';

import { examplePages } from './examples';
import Examples from './views/Examples.vue';

export const exampleRoutes = [
    { path: '/examples', component: Examples, meta: { title: '示例页面' } },
];

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/examples' },
        ...exampleRoutes,
        ...examplePages,
    ],
    scrollBehavior() {
        return { top: 0 };
    },
});
