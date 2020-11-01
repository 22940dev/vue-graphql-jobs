<template>
  <at-card :bordered="true" @click.native="goToJob" class="job-preview is-pointer">
    <div class="row at-row flex-wrap">
      <div class="col-12">
        <img :src="companyLogo" style="width: 92px; height: auto;"/>
      </div>
      <div class="col-12">
        <p class="job-preview__company-name">{{ job.company.name }}</p>
        <JobLocations :locations="job.cities"/>
        <p>{{ postedAt }}</p>
      </div>
    </div>
    <div class="row at-row">
      <div class="col-24">
        <JobTags :tags="job.tags"/>
      </div>
    </div>
    <h4 slot="title" class="text-align-left">{{ job.title }}</h4>
  </at-card>
</template>

<script>
import JobLocations from "./JobLocations";
import JobTags from "./JobTags";
import {getCompanyLogo, getPostedAt} from "../common/helpers";

export default {
  name: "JobPreview",
  data: () => ({
    companyLogo: ""
  }),
  components: {
    JobLocations,
    JobTags
  },
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  computed: {
    postedAt() {
      return getPostedAt(this.job.postedAt)
    }
  },
  methods: {
    goToJob() {
      this.$router.push(`job/${this.job.slug}/${this.job.company.slug}`)
    },
    getPostedAt
  },
  mounted() {
    this.companyLogo = getCompanyLogo(this.job.company.logoUrl)
  }
}
</script>

<style scoped>
.job-preview {
  margin-top: var(--s1);
}

.job-preview__company-name {
  color: var(--primary-color);
}
</style>