<template>
    <div class="work">
        <h3>Work History</h3>
        <div class="history-item">
            <div class="history-item_place col-4">
                <span class="font-weight-bold">Jolifish<span
                        class="font-weight-light d-inline ml-1">(Web agency)</span></span>
                <span>Chandler, Canada</span>
                <span>January 2015 - September 2019</span>
            </div>
            <div class="history-item_position">
                <font-awesome-icon :icon="['fad','circle']"></font-awesome-icon>
                <span class="ml-1">Full-Stack Web developer</span>
            </div>
        </div>
        <div class="history-item">
            <div class="history-item_place col-4">
                <span class="font-weight-bold">Jolifish<span
                        class="font-weight-light d-inline ml-1">(Web agency)</span></span>
                <span>Chandler, Canada</span>
                <span>Mars 2014 - June 2014</span>
            </div>
            <div class="history-item_position">
                <font-awesome-icon :icon="['fad','circle']"></font-awesome-icon>
                <span class="ml-1">Web developer internship</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WorkHistory"
    }
</script>

<style scoped lang="scss">
</style>