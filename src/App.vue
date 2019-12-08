<template>
    <div id="app">
        <HelloWorld/>
        <Loader/>
    </div>
</template>

<script>
    import Loader from "@/components/Loader";
    import HelloWorld from "@/components/HelloWorld";

    export default {
        name: 'app',
        components: {
            Loader,
            HelloWorld
        }
    }
</script>

<style>
    body{
        margin: 0;
    }
</style>
