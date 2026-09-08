import { createRouter, createWebHashHistory } from 'vue-router';

import Example1 from './views/Example1.vue';
import Example2 from './views/Example2.vue';
import Example3 from './views/Example3.vue';
import Example4 from './views/Example4.vue';
import Example6 from './views/Example6.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Example1 },
        { path: '/example1', component: Example1 },
        { path: '/example2', component: Example2 },
        { path: '/example3', component: Example3 },
        { path: '/example4', component: Example4 },
        { path: '/example6', component: Example6 },
    ],
});
