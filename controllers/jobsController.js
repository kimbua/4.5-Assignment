const jobsController = {}
let {jobs,companies} = require('../data/data.json')


function getCompanyId(name) {
        let company =  companies.find(c => c.name.toLowerCase() === name.toLowerCase())
        let companyId= company.id
        return companyId.toLowerCase()
    
}
// read jobs
const filterableJobProperties = ['city','skills','title','companyName']
jobsController.get = (req,res) => {
    try {
        let returnedJobs = [...jobs];
        for (const property of filterableJobProperties) {
        if (req.query[property]) {
            if (req.query.city) {
                returnedJobs = returnedJobs.filter(
                    (f) => {
                        return f.city.toLowerCase() === req.query.city.toLowerCase()
                    });
                
            }
            if (req.query.skills) {
                returnedJobs = returnedJobs.filter(
                    (f) => {
                        return f.skills.some(s => s.toLowerCase().includes(req.query.skills.toLowerCase()))
                    });
                }
            if (req.query.companyName) {
               
                returnedJobs = returnedJobs.filter(
                    (f) => f.companyId.toLowerCase() ===  getCompanyId(req.query.companyName)
                    );
            }
            if (req.query.title) {
                returnedJobs = returnedJobs.filter(
                    (f) => {
                        return f.title.toLowerCase().includes(req.query.title.toLowerCase())
                    });
                
            }    
        }}        
            res.status(200).send({
            numberOfFilteredJobs: returnedJobs.length,
            ReturnedJobs: returnedJobs.slice(req.start,req.end),

        });
      } catch (error) {
        console.log({ error });
        res.status(404).send("Oops, something went wrong");
      }
}
// create jobs
const admissableJobProperties = ['title','city','salary','description','skills']
jobsController.post = (req,res) => {
    try {
        let job = {}
        for (const property of admissableJobProperties) {
            if (req.body[property]){
                job[property]=req.body[property] 
            }}        
            jobs.push(job)
            res.status(201).send({
            createdJob: job,
            jobs: jobs.slice(jobs.length-2,jobs.length)
        });
      } catch (error) {
        console.log({ error });
        res.status(404).send("Oops, something went wrong");
      }
}


module.exports=jobsController


                