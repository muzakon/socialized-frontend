<template>
  <div class="question-section">
    <div
      class="tw-p-5 tw-mb-2 tw-border tw-rounded tw-bg-white tw-border-gray-300 hover:tw-bg-gray-100 hover:tw-border-indigo-300 hover:tw-shadow tw-transition tw-duration-200"
    >
      <div
        class="head-section tw-flex tw-items-center tw-justify-between tw-mb-3"
      >
        <div class="tw-flex tw-items-center">
          <div class="avatar"></div>
          <div class="tw-ml-3 tw-flex tw-flex-col">
            <div class="tw-flex tw-items-center">
              <span class="tw-font-semibold">Hasan Muzak</span>
              <span
                class="tw-font-semibold tw-ml-2 tw-uppercase f-11 tw-cursor-pointer tw-transition tw-duration-200 hover:tw-text-indigo-800 hover:tw-underline tw-text-indigo-600"
                >Follow</span
              >
            </div>
            <div class="tw-flex tw-items-center text-lighter">
              <span class="f-12">Software Developer</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="f-12">Turkey</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="f-12">3 hours ago</span>
            </div>
          </div>
        </div>
        <div class="tw-flex tw-items-center tw-gap-1">
          <Chip label="C++" class="primary-chip" />
          <Chip icon="pi pi-check" label="Solved" class="success-chip" />
        </div>
      </div>
      <div>
        <h1 class="title tw-cursor-pointer hover:tw-underline">
          How do typical women in Turkey look like? Do they look like the
          actresses in Turkish dramas or are they deceiving us? Are Turks really
          white like them?
        </h1>

        <p class="tw-my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas,
          consequatur veniam delectus ex in atque placeat, aperiam omnis
          accusantium unde totam explicabo quae libero quo dolorum rem dolore
          autem.
        </p>
      </div>
      <div class="tw-flex tw-items-center tw-justify-between">
        <div class="tw-flex tw-items-center tw-text-gray-600">
          <div
            class="tw-flex tw-items-center tw-p-2 hover:tw-text-indigo-600 tw-cursor-pointer tw-rounded-lg"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
            </svg>
            <span class="f-12 tw-font-semibold">132</span>
          </div>
          <div
            class="tw-flex tw-items-center tw-ml-2 tw-p-2 hover:tw-text-indigo-600 tw-cursor-pointer tw-rounded-lg"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 3L2.49999 3.00002C1.67157 3.00002 0.999999 3.67159 0.999999 4.50002V9.50002C0.999999 10.3284 1.67157 11 2.5 11H7.50002C7.63263 11 7.75981 11.0527 7.85358 11.1465L9.99999 13.2929V11.5C9.99999 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3284 14 9.50002V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11928 15 4.5V9.50002C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8535L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50002V4.50002C0 3.11931 1.11928 2.00002 2.49999 2.00002Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="f-12 tw-font-semibold tw-ml-1">23</span>
          </div>
        </div>
        <div class="tw-flex tw-items-center tw-text-gray-600">
          <div
            class="tw-flex tw-items-center tw-ml-2 tw-p-2 hover:tw-text-indigo-600 hover:tw-bg-gray-200 tw-cursor-pointer tw-rounded-lg"
            @click="toggle"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <OverlayPanel ref="overlay_panel">
      <div class="overlay-section">
        <div class="tw-flex tw-items-center tw-p-4 tw-mb-1 hover:tw-bg-gray-200 tw-rounded tw-cursor-pointer tw-w-full">
          <i class="pi pi-share-alt"></i>
          <span class="f-12 tw-ml-2">Share</span>
        </div>
         <div class="tw-flex tw-items-center tw-p-4 tw-mb-1 hover:tw-bg-gray-200 tw-rounded tw-cursor-pointer tw-w-full">
          <i class="pi pi-bookmark"></i>
          <span class="f-12 tw-ml-2">Save</span>
        </div>
         <div class="tw-flex tw-items-center tw-p-4 hover:tw-bg-gray-200 tw-rounded tw-cursor-pointer tw-w-full">
          <i class="pi pi-flag"></i>
          <span class="f-12 tw-ml-2">Report</span>
        </div>
      </div>
    </OverlayPanel>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Question",
  methods: {
    toggle(event) {
      this.$refs.overlay_panel.toggle(event);
    },
  },
});
</script>

<style scoped lang="less">
@import "~/assets/style/variables.less";

.question-section {
  .title {
    font-size: 16px;
    font-weight: 600;
  }
  .head-section {
    .avatar {
      background-image: url("http://pm1.narvii.com/6278/46d976910b261a600fa78ca382d193eee9de37cf_00.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 44px;
      width: 44px;
      border-radius: 50%;
    }
  }
  .primary-chip {
    background-color: @primary-color;
    color: white;
    font-size: 11px;
  }
  .success-chip {
    background-color: @success-color;
    color: white;
    font-size: 11px;
  }
}

.overlay-section {
  width: 170px;
}
.p-overlaypanel {
  &::after {
    display: none;
  }
  &::before {
    display: none;
  }
}
/deep/ .p-overlaypanel-content {
  padding: 1rem;
}
</style>
