<template>
    <div class="animated">
        <div class="w-25 mx-auto">
            <b-progress :value="value" :max="max" show-progress animated variant="warning"></b-progress>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: 45,
                max: 100
            }
        },
        methods: {
            randomValue() {
                this.value = Math.random() * this.max
            }
        }
    }
</script>