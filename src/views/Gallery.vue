<template>
  <div class="mx-auto container max-w-7xl bg">
    <h1
      class="text-3xl lg:text-5xl font-bold flex items-center justify-center mt-24"
    >
      Gallery page
    </h1>
    <div
      class="flex justify-center flex-wrap flex-col lg:flex-row mt-16 lg:my-32 gap-2"
    >
      <div class="w-full lg:w-72 h-96">
        <img
          src="../assets/images/adsa_11.jpeg"
          alt="adsa_11"
          height="150"
          width="150"
          class="rounded-xl h-full w-full object-cover"
        />
      </div>
      <div class="w-full lg:w-[900px] h-96">
        <img
          src="../assets/images/adsa_14.jpeg"
          alt="adsa_11"
          height="150"
          width="150"
          class="rounded-xl h-full w-full object-cover"
        />
      </div>
      <div class="w-[900px] h-96">
        <img
          src="../assets/images/adsa_19.jpeg"
          alt="adsa_11"
          height="150"
          width="150"
          class="rounded-xl h-full w-full object-cover"
        />
      </div>
      <div class="w-full lg:w-72 h-96">
        <img
          src="../assets/images/adsa_15.jpeg"
          alt="adsa_11"
          height="150"
          width="150"
          class="rounded-xl h-full w-full object-cover"
        />
      </div>
      <div class="w-full lg:w-72 h-96">
        <img
          src="../assets/images/adsa_1.jpeg"
          alt="adsa_11"
          height="150"
          width="150"
          class="rounded-xl h-full w-full object-cover object-right-bottom"
        />
      </div>
      <div class="w-[400px] h-96">
        <img
          src="../assets/images/adsa_16.jpeg"
          alt="adsa_11"
          height="150"
          width="150"
          class="rounded-xl h-full w-full object-cover"
        />
      </div>
      <div class="w-full lg:w-72 h-96">
        <img
          src="../assets/images/adsa_15.jpeg"
          alt="adsa_11"
          height="150"
          width="150"
          class="rounded-xl h-full w-full object-cover"
        />
      </div>
      <div class="w-full lg:w-48 h-96">
        <img
          src="../assets/images/adsa_10.jpeg"
          alt="adsa_11"
          height="150"
          width="150"
          class="rounded-xl h-full w-full object-cover"
        />
      </div>
      <div class="w-full lg:w-1/3 h-96">
        <img
          src="../assets/images/20230325_121709.jpg"
          alt="adsa_11"
          height="150"
          width="150"
          class="rounded-xl h-full w-full object-cover"
        />
      </div>

      <div class="w-full lg:w-1/2 bg-red-500 h-fit">
        <video controls>
          <source
            :src="videoSource"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoSource:
        "https://res.cloudinary.com/senninseyi/video/upload/v1685990688/adsa/video_gkc0du.mp4",
    };
  },
};
</script>
