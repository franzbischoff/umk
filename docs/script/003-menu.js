const menuVue = new Vue({
    el: "#tool-bar",
    data: {
        tools: menu,
        statusVisible: 0,
        updateCounter: 0
    },
    /*watch: {
        settings: {
            deep: true,
            handler: function() {
                this.updateCounter++;
            }
        }
    },*/
    computed: {
        lang: function () {
            this.updateCounter;
            return settings.lang;
        }
    },
    methods: {
        update: function () {
            this.updateCounter++;
        },
        showStatus: function (txt) {
            if (!!this.statusVisible) {
                this.removeStatus(this.statusVisible);
            }
            this.statusVisible = footerVue.addHint("<span><i class='fas fa-info-circle'></i>&nbsp;</span><span>" + txt + "</span>");
        },
        removeStatus: function () {
            footerVue.removeHint(this.statusVisible);
            this.statusVisible = 0;
        }
    }
});