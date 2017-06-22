<template> 
<div class="top-bar-wrapper">
    {{ name }}
</div>
</template>

<script>
export default {
    name: "topbar",
    data() {
        return {
            name: "TopBar Name"
        }
    } 
}    
</script>

<style lang="sass" scoped>
.top-bar-wrapper {
    color:red;
}
</style>