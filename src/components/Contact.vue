<template>
    <div class="contact">
        <h1>Gaëtan Duvaux</h1>
        <h5>Full Stack Developer</h5>
        <ul>
            <li>
                <font-awesome-icon :icon="['fad','map-marker-alt']" fixed-width></font-awesome-icon>
                <span class="ml-1">91 Cameron St, Whangarei, 0110, New Zealand</span>
            </li>
            <li>
                <font-awesome-icon :icon="['fad','envelope']" fixed-width></font-awesome-icon>
                <a class="ml-1" href="mailto:duvaux.gaetan@gmail.com">duvaux.gaetan@gmail.com</a>
            </li>
            <li>
                <font-awesome-icon :icon="['fad','phone']" fixed-width></font-awesome-icon>
                <a class="ml-1" href="tel:+64273256160">+64 27 325 6160</a>
            </li>
            <li>
                <font-awesome-icon :icon="['fab','linkedin']" fixed-width></font-awesome-icon>
                <a class="ml-1" href="https://www.linkedin.com/in/gaetan-duvaux/">https://www.linkedin.com/in/gaetan-duvaux/</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped lang="scss">
    ul {
        padding-left: 0;
    }

    li {
        list-style: none;
    }
</style>