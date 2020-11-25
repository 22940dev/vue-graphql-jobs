import { shallowMount } from "@vue/test-utils";
import JobLocations from "@/components/JobLocations.vue";

describe("JobLocations.vue", () => {
  it("Renders props locations when passed", () => {
    const locations = [
      {
        name: "Warsaw",
        country: {
          name: "Poland",
        },
      },
    ];
    const wrapper = shallowMount(JobLocations, {
      propsData: { locations },
    });
    expect(wrapper.text()).toMatch(
      `${locations[0].name} | ${locations[0].country.name}`
    );
  });

  it("Renders remote when props locations is not passed", () => {
    const wrapper = shallowMount(JobLocations);
    expect(wrapper.text()).toMatch(`Remote`);
  });
});
