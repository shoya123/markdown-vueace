var Vue = require('vue/dist/vue.common.js');

document.querySelector('body').append(document.createElement('div'))
window.aceVue = new Vue({
    el: '#app',
    template:'<div><editor v-model="content" lang="html" height="500" @init="initEditor"></editor><div id="preview" v-html="cmpledmkdown"></div></div>',
    data:{
        content:"",
        editorValue: ''
    },
    components:{
        editor:require('vue2-ace-editor')
    },
    computed: {
        cmpledmkdown: function () {
            return this.editorValue ? marked(this.editorValue, { sanitize: false }) : '';
        }
    },
    methods:{
        initEditor:function (editor) {
            require('brace/mode/html');
            require('brace/theme/monokai');
        }
    }
})