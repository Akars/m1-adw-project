<template>
    <button class="normal"
            :class="type"
            @click="callback($event)"
            >
    <slot></slot>
    </button>
</template>
<script>

export default {
    
}
</script>
<style lang="">
    
</style>