export default function (cli) {
    return {
        list () {
            return cli.get('questions/')
        },
        vote () {
            return cli.post('choices/${choiceId}/vote/')
        },
    }
}