<template>
    <div class="container">
        <Test />
    </div>
</template>

<script>
    import * as PIXI from 'pixi.js';
    import Test from "./Test";
    // import Console from "@/modules/Console";
    import Viewport from "@/modules/Viewport";
    import Background from "@/components/Background";

    export default {
        name: 'HelloWorld',
        components: {
            Test
        },
        methods: {
          onResize: function() {
              this.app.renderer.resize(Viewport.width, Viewport.height);
          }
        },
        preload(){
            return [{name: "background", url: "https://images.unsplash.com/photo-1541450805268-4822a3a774ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}];
        },
        progress(){},
        loaded(){
            new Background(this.app);
        },
        mounted(){
            Viewport.on('resize', this.onResize);

            this.app = new PIXI.Application({
                transparent: true,
                antialias: true
            });
            this.$el.appendChild(this.app.view);
            this.app.renderer.view.style.display = "block";
            this.app.renderer.autoResize = true;
            this.app.renderer.resize(window.innerWidth, window.innerHeight);

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
