<template>
    <div class="container">
        <b-card
            v-for="data in questions"
            :key="data.id"
            :title="data.questionText"
            img-src="https://picsum.photos/600/300/?image=25"
            img-top
            tag="article"
            style="max-width: 20rem; margin: 0 auto;"
            class="mb-2"
        >
            <b-card-text v-if="data.choices.length">
                <b-form-radio-group v-model="vote">
                    <b-form-radio
                        v-for="choice in data.choices"
                        :key="choice.id"
                        :value="choice.id">{{ choice.choiceText }} 投票数: {{ choice.votes }}
                    </b-form-radio>
                </b-form-radio-group>
                <b-btn @click="doVote" color="success" :disabled="!voteEnable(data.choices)">投票</b-btn>
            </b-card-text>
            <b-card-text>
                {{ data.pubDate | printDate }}
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
    import axios from 'axios'
    import moment from 'moment'

    export default {
        name: 'PollIndex',

        data() {
            return {
                vote: null,
                questions: [],
            }
        },
        methods: {
            fetchData () {
                this.$request.questions.list().then(res => {
                    this.questions = res.data.results
                })
            },
            doVote () {
                if (!this.vote) {
                    return
                }
                this.$request.questions.vote(this.vote).then(res => {
                    this.fetchData()
                })
            },
            voteEnable (choices) {
              if (!this.vote) {
                return false
              }
              return choices.some(x => x.id === this.vote)
            },
        },
        filters: {
            printDate (val) {
                return moment(val).locale('ja').format('YYYY年MM月DD日(ddd) HH時mm分ss秒')
            },
        },
        mounted() {
            this.fetchData()
        },
    }
</script>

<style>
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-auto-rows: 1fr;
      grid-gap: 0.8em;
      border: 1px solid #ddd;
      padding: 0.8em;
      margin: 0 0 2em;
    }

    .container > div {
        background: #ddd;
        overflow: auto;
        min-width: 0;
        padding: 1em;
    }
</style>