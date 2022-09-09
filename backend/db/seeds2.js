require('./connection')

const Group = require('../models/Group')

const group = [
    {
        name: 'phase1',
        exerciseIds: [
            "631b882fd968bc8269d89b33",
            "631b882fd968bc8269d89b34",
            "631b882fd968bc8269d89b35",
            "631b882fd968bc8269d89b36",
            "631b882fd968bc8269d89b37",
            "631b882fd968bc8269d89b38",
            "631b882fd968bc8269d89b39",
            "631b882fd968bc8269d89b3a",
            "631b882fd968bc8269d89b3b",
            "631b882fd968bc8269d89b3c",
            "631b882fd968bc8269d89b3d",
            "631b882fd968bc8269d89b3e",
            "631b882fd968bc8269d89b3f",
            "631b882fd968bc8269d89b40",
            "631b882fd968bc8269d89b41",
            "631b882fd968bc8269d89b42",
            "631b882fd968bc8269d89b43",
            "631b882fd968bc8269d89b44",
            "631b882fd968bc8269d89b45",
            "631b882fd968bc8269d89b46",
            "631b882fd968bc8269d89b47",
            "631b882fd968bc8269d89b48",
            "631b882fd968bc8269d89b49",
            "631b882fd968bc8269d89b4a",
        ]
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