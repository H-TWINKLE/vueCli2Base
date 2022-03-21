<template>
    <div>
        <h2>Base</h2>
        <Container/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Container from './container/Container.vue'

@Component({
    name: 'Base',
    components: { Container },
    filters: {}
})
export default class extends Vue {
}
</script>

<style lang="less" scoped>
</style>
