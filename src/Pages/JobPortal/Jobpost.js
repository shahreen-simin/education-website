import React from 'react';

const Jobpost = () => {
    const handleJobPost=(e) =>{
        e.preventDefault();
        const jobs = {
            JobTitle: e.target.JobTitle.value,
            CompanyName: e.target.CompanyName.value,
            VacancyNumber: e.target.VacancyNumber.value,
            Deadline: e.target.Deadline.value,
            Result: e.target.Result.value,
            Salary: e.target.Salary.value,
            OfficeHour: e.target.OfficeHour.value,
            JobLocation: e.target.JobLocation.value,
            Experience: e.target.Experience.value,
            Program: e.target.Program.value,
            Context: e.target.Context.value,
            Responsibility: e.target.Responsibility.value,
            Benefits: e.target.Benefits.value,
            Remarks: e.target.Remarks.value,
            Procedure: e.target.Procedure.value,
        }

        fetch('http://localhost:5000/jobs', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(jobs)
        })
        .then(res=> res.json())
        .then(data=> {
          console.log(data)
        })
    }
    return (
        <div>
            <h1 className='text-2xl my-12'>Create a Job Post</h1>
            <form
              onSubmit={handleJobPost}
              className="form-control w-full max-w-md m-auto my-8"
            >
              <label class="label"><span class="label-text">Job Title</span></label>
              <input type="text" name="JobTitle" required placeholder="Job Title" className="block m-auto input-bordered input w-full max-w-md"/>

              <label class="label"><span class="label-text">Company Name</span></label>
              <input type="text" name="CompanyName" required  placeholder="Company Name" className="block m-auto input-bordered input w-full max-w-md"/>

              <label class="label"><span class="label-text">Vacancy Number</span></label>
              <input type="text" name="VacancyNumber" required  placeholder="Vacancy Number" className="block m-auto input-bordered input w-full max-w-md"/>

              <label class="label"><span class="label-text">Deadline</span></label>
              <input type="date" name="Deadline" required  className="block m-auto input-bordered input w-full max-w-md"/>

              <label class="label"><span class="label-text">Result</span></label>
              <input type="text" name="Result" required  placeholder="Result Requirements" className="block m-auto input-bordered input w-full max-w-md"/>

              <label class="label"><span class="label-text">Salary</span></label>
              <input type="text" name="Salary" required  placeholder="Salary" className="block m-auto input-bordered input w-full max-w-md"/>

              <label class="label"><span class="label-text">Office Hour</span></label>
              <input type="text" name="OfficeHour" required  placeholder="Office Hour" className="block m-auto input-bordered input w-full max-w-md"/>

              <label class="label"><span class="label-text">Job Location</span></label>
              <input type="text" name="JobLocation" required  placeholder="Job Location" className="block m-auto input-bordered input w-full max-w-md"/>

              <label class="label"><span class="label-text">Requirement Experience</span></label>
              <input type="text" name="Experience" required  placeholder="Requirement Experience" className="block m-auto input-bordered input w-full max-w-md"/>

              <label class="label"><span class="label-text">Preferred Program</span></label>
              <input type="text" name="Program" required  placeholder="Preferred Program" className="block m-auto input-bordered input w-full max-w-md"/>

              <label class="label"><span class="label-text"> Job Context</span></label>
              <textarea name="Context" class="textarea textarea-bordered h-32 block m-auto input w-full max-w-md" placeholder="Announce The Job Context"></textarea>

              <label class="label"><span class="label-text"> Job Responsibility</span></label>
              <textarea name="Responsibility" required  class="textarea textarea-bordered h-32 block m-auto input w-full max-w-md" placeholder="Announce The Job Responsibility"></textarea>

              <label class="label"><span class="label-text">Other Benefits</span></label>
              <textarea name="Benefits" class="textarea textarea-bordered h-32 block m-auto input w-full max-w-md" placeholder="Announce The Other Benefits"></textarea>

              <label class="label"><span class="label-text"> Additional Remarks</span></label>
              <textarea name="Remarks" class="textarea textarea-bordered h-32 block m-auto input w-full max-w-md" placeholder="Announce The Additional Remarks"></textarea>

              <label class="label"><span class="label-text"> Application Procedure</span></label>
              <textarea name="Procedure" required  class="textarea textarea-bordered h-32 block m-auto input w-full max-w-md" placeholder="Announce The Application Procedure"></textarea>

              <input type="submit" value="Submit" className="btn btn-secondary block my-5 m-auto  w-full max-w-md"/>
            </form>
        </div>
    );
};

export default Jobpost;