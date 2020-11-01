<template>
      <at-card :no-hover="true" :bordered="false">
        <div class="row at-row flex-center">
        <img v-if="companyLogo" :src="companyLogo" style="width: 100%; height: auto;" class="col-8"/>
        <div class="col-24 col-sm-16">
          <h3 class="job_title">{{ jobName }}</h3>
          <h4 class="company-name">{{ company.name }}</h4>
          <JobLocations :locations="locations"/>
          <JobTags :tags="tags" class="tags"/>
        </div>
        </div>
      </at-card>
</template>

<script>
import JobLocations from "../JobLocations";
import JobTags from "../JobTags";
import {getCompanyLogo} from "../../common/helpers";

export default {
  name: "JobHeader",
  data: () => ({
    companyLogo: ''
  }),
  components: {
    JobLocations,
    JobTags
  },
  props: {
    jobName: {
      type: String,
      required: true
    },
    company: {
      type: Object,
      required: true
    },
    locations: {
      type: Array,
      required: true
    },
    tags: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.companyLogo = getCompanyLogo(this.company.logoUrl)
  }
}
</script>

<style scoped>
.job_title {
  margin-top: var(--s2);
}

.company-name {
  margin: var(--s1) 0;
}
</style>