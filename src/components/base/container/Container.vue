<template>
    <transition name="slide">
        <div class="main-container">
            <router-view :key="$route.path"></router-view>
        </div>
    </transition>
</template>

<script lang="ts">
import Container from './container'

export default Container
</script>

<style lang="less" scoped>
.main-container {
    float: left;
    width: 100%;
    height: 100%;
}

.v-enter,
.v-leave-to {
    opacity: 0;
    // transform: translateY(768px);
}

.v-enter-active,
.v-leave-active {
    transition: all 1s ease;
}
</style>
