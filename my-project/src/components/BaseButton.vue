<template lang="">
    <button class="btn btn-primary btn-lg btn-block"
            :class="type"
            @click="callback($event)"
            >
    <slot></slot>
    </button>
</template>
<script>
export default {
    methods: {
        callback: function(e) {
            this.$emit('click', e);
        },
    },
}
</script>
<style lang="">
    
</style>