<template>
    <div id="app">
        <transition name="el-fade-in-linear">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
    name: 'app'
})
export default class extends Vue {
}
</script>
<style lang="less" scoped>
</style>
