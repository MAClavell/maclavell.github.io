//Tab view
Vue.component('tab', {
    props: ['name', 'index'],
    template: `
        <div>
        <div class="tab" @click="changeTab(index)" :style="{ backgroundColor: color }">
            {{name}}
        </div>
        </div>`,
    methods: {
        changeTab(ind) {
            router.push({ name: 'tab', params: { index: ""+ind } });
            currentTabIndex = ind;
        }
    },
    computed: {
        //Compute style based on current index
        color() {
            if(currentTabIndex == this.$props.index)
                return "#F0F0F0";
            else return "#978b7d";
        }
    }
});

//Tab view
Vue.component('tabView', {
    template: `
        <div>
        <div id="tabView">
            <projectThumb v-for="(p, index) in projects" v-bind:json="p" v-bind:index="index"></projectThumb>
        </div>
        </div>`,
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
    props: ["json", "index"],
    template: `
        <div class="thumbView">
            <h3>{{json.Name}}</h3>
            <img :src=json.Thumbnail alt="thumbnail" @click="selectProject">
            <div v-html=json.ShortDesc></div>
            <div class="selectButton" @click="selectProject">See More...</div>
        </div>`,
    methods: {
        selectProject() {
            router.push(`project/${currentTabIndex}-${this.$props.index}`)
            let scrollTo = document.querySelector("#tabContainer")
            if(!isElementInViewport(scrollTo))
                scrollTo.scrollIntoView(true);
        }
    }
});

//Project view
Vue.component('projectView', {
    template: `
        <div id="projectContainer">
        <div class="projectView">
            <div class="selectButton" @click="goBack">Go Back</div>
            <h2>{{json.Name}}</h2>
            <div v-html=json.LongDesc></div>
            <div class="videoContainer" v-if="hasVideo">
                <iframe width="560" height="315" :src="json.VideoLink" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="selectButton" @click="goBack">Go Back</div>\
        </div>
        </div>`,
    methods: {
        goBack() {
            router.push({ name: 'tab', params: { index: ""+currentTabIndex } });
        }
    },
    created: function () {
        let indices = this.$route.params.project.split("-");
        this.$data.json = tabs[indices[0]].Projects[indices[1]];
        if(this.$data.json.VideoLink) 
            this.$data.hasVideo = true;
    },
    data() {
        return {
            json: {},
            hasVideo: false
        }
    }
});