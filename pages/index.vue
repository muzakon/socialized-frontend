<template>
  <div class="tw-container tw-mx-auto">
    <div class="tw-flex">
      <div class="tw-w-2/12 tw-p-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ratione
          asperiores impedit tempore eaque expedita porro, sunt corporis rem
          quibusdam debitis, repellat voluptates hic nihil ipsa illum qui rerum
          laboriosam.
        </p>
      </div>
      <div class="tw-w-7/12 tw-p-2">
        <div v-for="(item, index) in 4" :key="index">
          <Question />
        </div>
        <div class="tw-bg-white tw-p-5 tw-rounded-lg">
          <div class="tw-flex tw-items-center tw-mb-3">
            <Skeleton shape="circle" size="4rem" class="tw-mr-2"></Skeleton>
            <div>
              <Skeleton width="5rem" class="tw-mb-3"></Skeleton>
              <Skeleton width="15rem" class="tw-mb-0"></Skeleton>
            </div>
          </div>
          <div>
            <Skeleton height="4rem" width="100%" class="tw-mb-3"></Skeleton>
            <Skeleton height="2rem" width="5rem" class="tw-mb-3"></Skeleton>
            <Skeleton height="2rem" width="100%"></Skeleton>
          </div>
        </div>
      </div>
      <div class="tw-w-3/12 tw-p-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ratione
          asperiores impedit tempore eaque expedita porro, sunt corporis rem
          quibusdam debitis, repellat voluptates hic nihil ipsa illum qui rerum
          laboriosam.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

// Components
import Question from "~/components/home/Question.vue";

export default Vue.extend({
  name: "IndexPage",
  components: {
    Question,
  },
});
</script>
