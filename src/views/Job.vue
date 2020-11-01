<template>
  <Spinner v-if="loading"/>
  <div v-else-if="job">
    <JobHeader :job-name="job.title" :company="job.company" :tags="job.tags" :locations="job.cities"/>
    <JobApply :apply-link="job.applyUrl" :email="job.userEmail"/>
    <JobDescription :content="job.description"/>
  </div>
</template>

<script>
import JobDescription from "../components/job/JobDescription";
import JobHeader from "../components/job/JobHeader";
import JobApply from "../components/job/JobApply";
import Spinner from "../components/Spinner";
import {jobQuery} from "../graphql/queries";

export default {
  name: "Job",
  data: () => ({
    loading: 0
  }),
  components: {
    JobDescription,
    JobHeader,
    JobApply,
    Spinner
  },
  apollo: {
    job: {
      query: jobQuery,
      variables() {
        return {
          jobData: {
            jobSlug: this.$route.params.jobSlug,
            companySlug: this.$route.params.companySlug
          }
        }
      }
    }
  }
}
</script>