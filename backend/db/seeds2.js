require('./connection')

const Group = require('../models/Group')

const group = [
    {
        name: 'phase1',
        exerciseIds: ["6319124f2d7c6968bee0b9bc"]
    }
]



Group.deleteMany({})
.then(() => {
return Group.insertMany(group)
})
.then((group) => {
console.log(group)
})
.catch((err) => {
console.log(err)
})
.finally(() => {
process.exit()
})