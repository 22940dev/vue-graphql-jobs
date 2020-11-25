import { shallowMount } from "@vue/test-utils";
import JobPreview from "@/components/JobPreview.vue";

const job = {
  company: {
    name: "company name",
    logoUrl: "logourl",
    slug: "company_name",
  },
  title: "job title",
  slug: "job_title",
  postedAt: "12-08-20T20:20",
};

describe("JobPreview.vue", () => {
  const wrapper = shallowMount(JobPreview, {
    propsData: { job },
  });

  it("Render job title", () => {
    expect(wrapper.find("h4").text()).toMatch(job.title);
  });

  it("Render company name", () => {
    expect(wrapper.find(".job-preview__company-name").text()).toMatch(
      job.company.name
    );
  });

  it("Render posted at", () => {
    expect(wrapper.text()).toContain("12-08-20");
  });

  it("Render job logo", () => {
    expect(wrapper.find("img").attributes('src')).toMatch(job.company.logoUrl)
  });
});
