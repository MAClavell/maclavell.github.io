let currentTabIndex = 0;

const tabViewTemplate = { template: '<tabView></tabView>' }
const projectViewTemplate = { template: '<projectView></projectView>' }

//All routes in the app
const routes = [
    { path: '/:index', name: 'tab', component: tabViewTemplate, props: true },
    { path: '/project/:project', name: 'project', component: projectViewTemplate, props: true },
]

//The VueRouter
const router = new VueRouter({
    routes // short for `routes: routes`
});


//The main Vue app
const app = new Vue({
    router, //use a router to switch between pages
    data: {
        tabs: []
    },
    methods: {
        //Go to the home page (weather selection)
        exitProject() {

        }
    },
    created() {
        //Initial values
        this.$data.tabs = tabs;
        router.push({ name: 'tab', params: { index: "0" } });
    }
}).$mount('#root');

function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}