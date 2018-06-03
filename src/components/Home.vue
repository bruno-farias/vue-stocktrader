<template>
    <div>
        <h1>Trade or View your Portfolio</h1>
        <h6>You may save and load your data</h6>
        <h6>Click on 'End Day' to begin a New Day!</h6>
        <hr>
        <p>Your funds: {{funds}}</p>
    </div>
</template>

<script>
	export default {
		name: "Home",
        computed: {
			funds() {
				return this.$store.getters.funds
            }
        }
	}
</script>

<style scoped>

</style>