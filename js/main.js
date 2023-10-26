const projectsGridTemplate = { template: '<projectsGrid></projectsGrid>' }
const projectViewTemplate = { template: '<projectView></projectView>' }

//All routes in the app
const routes = [
    { path: '/', name: 'ProjectsGrid', component: projectsGridTemplate, props: true },
    { path: '/project/:project', name: 'Project', component: projectViewTemplate, props: true },
]

//The VueRouter
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

//The main Vue app
const app = Vue.createApp({
    data() {
        return { projectsData: [] }
    },
    created() {
        //Initial values
        this.$data.projectsData = projectsData;
        router.push(`/`);
    },
    template: `
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in" enter-active-class="animated fadeIn">
            <component :is="Component" />
        </transition>
    </router-view>
    `
});

createComponents();
app.use(router).mount('#routerContainer');

function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}