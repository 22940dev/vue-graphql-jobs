<template>
  <div>
    <div class="row at-row">
      <div class="col-24 col-md-10 col-md-offset-1">
        <FilterJobs/>
      </div>
      <div class="col-24 col-md-10 col-md-offset-1">
        <SearchJobs :searchQuery.sync="searchQuery"/>
      </div>
    </div>
    <Spinner v-if="loading"/>
    <div class="row at-row" v-else-if="sortedJobs.length > 0 && !loading">
      <div class="col-24 col-md-10 col-md-offset-1" v-for="job in sortedJobs" :key="job.id">
        <JobPreview :job="job"/>
      </div>
    </div>
    <div class="flex-center no-results" v-else>
      <p>No results</p>
      <at-button @click.native="clearSearchQuery">Clear search field</at-button>
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
      loading: 0, // loading from apollo
      searchQuery: '' // from SearchJobs emit
    }
  },
  computed: {
    filteredJobs() {
      return this.jobs.filter(item => item.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },
    sortedJobs() {
      return sortJobs(this.filteredJobs)
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
  },
  methods: {
    clearSearchQuery() {
      this.searchQuery = ""
    }
  }
}
</script>

<style scoped>
.no-results {
  margin-top: var(--s2);
}
</style>