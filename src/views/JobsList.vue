<template>
  <div>
    <FilterJobs/>
    <SearchJobs />
    <Spinner v-if="loading" />
    <div v-else>
      <JobPreview v-for="job in sortedJobs" :key="job.id" :job="job"/>
    </div>

  </div>
</template>

<script>
import JobPreview from "../components/JobPreview";
import SearchJobs from "../components/SearchJobs";
import FilterJobs from "../components/FilterJobs";
import Spinner from "../components/Spinner";
import {jobsListQuery} from "../graphql/queries";
import {sortJobs} from "../common/helpers";

export default {
  name: "JobsList.vue",
  data() {
    return {
      loading: 0 // loading from apollo
    }
  },
  computed: {
    sortedJobs() {
      return sortJobs(this.jobs)
    }
  },
  components: {
    JobPreview,
    SearchJobs,
    FilterJobs,
    Spinner
  },
  apollo: {
    jobs: jobsListQuery
  }
}
</script>

<style scoped>

</style>