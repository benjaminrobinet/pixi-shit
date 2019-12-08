<template>
    <div class="loader">
        <div ref="percent" class="percent">0</div>
    </div>
</template>

<script>
    import gsap from "gsap";

    export default {
        name: "Loader",
        mounted(){
            const { percent } = this.$refs;
            let loadingProgress = {
                value: 0
            };
            this.timeline = gsap.timeline({paused: true});
            this.timeline.fromTo(loadingProgress, 100, {value: 0}, {value: 100, onUpdate: () => {
                loadingProgress.value = loadingProgress.value | 0;
                percent.innerHTML = loadingProgress.value;
            }});
        },
        loaded(){
            const { percent } = this.$refs;
            let progress = this.timeline.progress();

            let hide = () => {
                gsap.to(this.$el, { yPercent: -100, display: 'none', ease: "expo.inOut", duration: 0.8, delay: 0.3});
                gsap.to(percent, {y: this.$el.offsetHeight * 0.75, display: 'none', ease: "expo.inOut", duration: 0.8, delay: 0.3});
            };

            if(progress >= 1)
                hide();
            else
                this.timeline.eventCallback('onComplete', hide);
        },
        progress(Loader){
            gsap.to(this.timeline, {time: Loader.progress, duration: 0.8, ease: "linear"})
        }
    }
</script>

<style scoped>
    .loader{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: black;
        color: white;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        font-size: 56px;
        overflow: hidden;
    }
</style>