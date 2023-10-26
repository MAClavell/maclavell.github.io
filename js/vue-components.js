function createComponents() {
    //Projects view
    app.component('projectsGrid', {
        template: `
            <div id="projectsGrid">
                <projectThumb v-for="(p, index) in projects" v-bind:json="p" v-bind:index="index"></projectThumb>
            </div>`,
        created: function () {
            //Parse the projects json
            for(let proj of projectsData)
            {
                this.$data.projects.push(proj);
            }
        },
        data() {
            return {
                projects: []
            }
        }
    });

    //Project thumbnail
    app.component('projectThumb', {
        props: ["json", "index"],
        template: `
            <div class="thumbView">
                <img :src=json.Thumbnail :alt=json.Name @click="selectProject">
            </div>`,
        methods: {
            selectProject() {
                router.push(`project/${this.$props.index}`)
                let scrollTo = document.querySelector("#projectsHeader")
                if(!isElementInViewport(scrollTo))
                    scrollTo.scrollIntoView(true);
            }
        }
    });

    //Project view
    app.component('projectView', {
        template: `
            <div id="projectContainer">
            <div class="projectView">
                <div class="selectButton" @click="goBack" alt="go back">Go Back</div>
                <h2>{{json.Name}}</h2>
                <div class="role">{{json.Role}}</div>
                <div v-html=json.LongDesc></div>
                <div class="videoContainer" v-if="hasVideo">
                    <iframe width="560" height="315" alt="video" :src="json.VideoLink" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="selectButton" @click="goBack" alt="go back">Go Back</div>
            </div>
            </div>`,
        methods: {
            goBack() {
                router.push({ name: 'ProjectsGrid' });
            }
        },
        created: function () {
            let index = this.$route.params.project;
            this.$data.json = projectsData[index];
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
}