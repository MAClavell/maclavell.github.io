//All routes in the app
const routes = [
    { path: '/:index', name: 'tab', component: { template: '<tabView></tabView>' }, props: true },
    { path: '/project/:project', name: 'project', component: { template: '<projectView></projectView>' }, props: true },
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

        },
        changeTab(index) {
            router.push(index);
        }
    },
    created() {
        //Initial values
        this.$data.tabs = tabs;
        this.changeTab("0");
    }
}).$mount('#root');