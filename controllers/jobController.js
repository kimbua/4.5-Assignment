const jobController = {}
let {jobs,companies} = require('../data/data.json')

// read job
jobController.get = (req,res) => {
    try {
    let job = {}
    let idx = jobs.findIndex(j => j.id === req.params.id)
    job= jobs[idx]
    res.status(200).send({job})
    }catch (error) {
        console.log({ error });
        res.status(404).send("Oops, something went wrong")
    }
}
// update job
const admissableJobProperties = ['title','city','salary','description','skills']
jobController.patch = (req,res) => {
    try {
    let job = {}
    let idx = jobs.findIndex(j => j.id === req.params.id)
    job= jobs[idx]
    for (const property of admissableJobProperties) {
        if (req.body[property]) {
            job[property] = req.body[property]
        }
    }
    
    res.status(201).send({updatedJob: job})
    } catch {
        console.log({ error });
        res.status(404).send("Oops, something went wrong")
    }
}
// delete job
jobController.delete = (req,res) => {
    try {
    let job = {}
    let idx = jobs.findIndex(j => j.id === req.params.id)
    job= jobs[idx]

    jobs=jobs.filter(j=>j.id !== req.params.id)
    res.status(202).send({deletedJob: job,
    jobs: jobs.slice(0,10)})
    }catch (error) {
        console.log({ error });
        res.status(404).send("Oops, something went wrong")
    }
}


module.exports=jobController