export const Counter = {
    data() {
        return {
            counter: 0,
        };
    },
    computed: {
        computedResult() {
            return this.counter > 5 ? "  more than 5" : "  less than 5"
        },
    },
    methods: {
        increase(x=1) {
          this.counter+=x
        },
        decrease(x=1) {
          this.counter-=x
        },
        writeResult() {
            return this.counter>5 ? "  more than 5" : "  less than 5"
        },
    }

}
