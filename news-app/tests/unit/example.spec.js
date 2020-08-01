import {
  shallowMount
} from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import { isMainThread } from "worker_threads";

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });

describe("Home.vue", () => {
  isMainThread("renders title when site is loaded", () => {
    const wrapper = shallowMount(Header, {
      propsData: {
        title: "Nick's Suvera Interview"
      }
    })

    // Makes sure the title matches the header
    expect(wrapper.name()).toMatch("Header")

    // Makes sure it also says what I wrote it to say, more than just matching
    expect(wrapper.text()).toMatch("Nick's Suvera Interview")
  })
})

