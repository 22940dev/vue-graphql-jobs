<template>
  <div>
    <div class="row at-row">
      <div class="col-24 col-md-10 col-md-offset-1">
        <SearchJobs :searchQuery.sync="searchQuery"/>
      </div>
      <div class="col-24 col-md-10 col-md-offset-1 flex flex-center flex-middle">
        <SortJobs @sort-update="setSort"/>
      </div>
    </div>
    <Spinner v-if="loading"/>
    <div class="row at-row" v-else-if="sortedJobs.length > 0 && !loading">
      <div class="col-24 col-md-10 col-md-offset-1" v-for="job in sortedJobs" :key="job.id">
        <JobPreview :job="job"/>
      </div>
    </div>
    <div class="flex flex-center no-results" v-else>
      <p>No results</p>
      <at-button @click.native="clearSearchQuery">Clear search field</at-button>
    </div>
  </div>
</template>

<script>
import JobPreview from "../components/JobPreview";
import SearchJobs from "../components/SearchJobs";
import SortJobs from "../components/SortJobs";
import Spinner from "../components/Spinner";
import {jobsListQuery} from "../graphql/queries";
import {sortJobs} from "../common/helpers";

export default {
  name: "JobsList.vue",
  data: () => ({
    loading: 0, // loading from apollo
    searchQuery: '', // from SearchJobs emit
    sortByNewest: true
  }),
  computed: {
    filteredJobs() {
      return this.searchQuery.length > 0 ?
          this.jobs.filter(item => item.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
          :
          this.jobs
    },
    sortedJobs() {
      return sortJobs(this.filteredJobs, this.sortByNewest)
    }
  },
  components: {
    JobPreview,
    SearchJobs,
    SortJobs,
    Spinner
  },
  apollo: {
    jobs: jobsListQuery
  },
  methods: {
    clearSearchQuery() {
      this.searchQuery = ""
    },
    setSort(sortByNewest) {
      this.sortByNewest = sortByNewest
    }
  }
}
</script>

<style scoped>
.no-results {
  margin-top: var(--s2);
}
</style>