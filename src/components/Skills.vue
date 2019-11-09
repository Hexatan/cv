<template>
    <div class="skills">
        <h3>Technical Skills</h3>
        <ul>
            <li>PHP</li>
            <li>Wordpress - Advanced</li>
            <li>Woocommerce</li>
            <li>MySQL/SQL</li>
            <li>JavaScript</li>
            <li>ES6</li>
            <li>Vue.js</li>
            <li>Git</li>
            <li>CSS/SCSS</li>
            <li>jQuery</li>
            <li>HTML</li>
            <li>REST API</li>
            <li>NPM</li>
            <li>Webpack</li>
            <li>Gulp</li>
            <li>Photoshop</li>
            <li>Google Analytics</li>
            <li>Google Search Console</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Skills"
    }
</script>

<style scoped lang="scss">
    ul {
        columns: 1;

        @include media-breakpoint-up('lg') {
            columns: 2;
        }

        @media print {
            columns: 2;
        }
    }
</style>