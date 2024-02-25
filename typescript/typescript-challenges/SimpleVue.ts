type GetComputed<C> = C extends { [S in keyof C]: (...args: any[]) => any }
  ? { [S in keyof C]: ReturnType<C[S]> }
  : never

declare function SimpleVue<D, C, M>(
  options: {
    data: () => D,
    computed: C,
    methods: M,
  } & ThisType<D & M & GetComputed<C>>
): any

const vue = SimpleVue({
  data() {
    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
      symbol: Symbol('fff')
    }
  },
  computed: {
    fullname() {
      return this.firstname + ' ' + this.lastname
    },
    amountPlusOne() {
      let amount = this.plusOne()
      return amount
    },
    fullnameAsNickname() {
      return Symbol(this.fullname)
    }
  },
  methods: {
    plusOne() {
      return this.amount + 1
    },
    hi() {
      alert(this.fullname.toLowerCase())
    },
    alert() {
      this.hi()
    }
  }
})

// { [S in keyof C]: (...args: any[]) => any }
// like
// Record<string, (...args: any[]) => any>

