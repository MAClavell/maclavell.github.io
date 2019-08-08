//Tab view
Vue.component('tab', {
    props: ['name'],
    template: `
        <div>
        <div class="tab">
            {{name}}
        </div>
        </div>`,
    data() {
        return {
        }
    }
});

//Tab view
Vue.component('tabView', {
    template: `
        <div>
        <div class="tabView">
            <div v-for="p in projects">
                <projectThumb v-bind:json="p"></projectThumb>
            </div>
        </div>
        </div>`,
    methods: {
    },
    created: function () {
        //Parse a tab's json
        let index = this.$route.params.index;
        let json = tabs[index].Projects;
        for(let proj of json)
        {
            this.$data.projects.push(proj)
        }
    },
    data() {
        return {
            projects: []
        }
    }
});

//Project thumbnail
Vue.component('projectThumb', {
    props: ["json"],
    template: `
        <div>
        <div class="thumbView">
            <h3>{{json.Name}}</h3>
            <img :src=json.Image alt="shortDesc">
            {{json.ShortDesc}}
        </div>
        </div>`,
    methods: {
        //Parse a project's json
        parseProject(json) {

        }
    },
    created: function () {
        
    },
    data() {
        return {
            
        }
    }
});

//Project view
Vue.component('projectView', {
    template: `
        <div>
        <div class="content" id="projectView">
        </div>
        </div>`,
    methods: {
        //Parse a project's json
        parseProject(json) {

        }
    },
    created: function () {
        
    },
    data() {
        return {
            
        }
    }
});