<template> 
<div class="top-bar-wrapper">
    <span>{{ name }}</span>
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

<style lang="scss" scoped>
.top-bar-wrapper {
    color:red;

    span {
    	color: blue;
    }
}
</style>