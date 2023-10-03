<script setup>
import ChevronRightIcon from "vue-material-design-icons/ChevronRight.vue";
import ChevronDownIcon from "vue-material-design-icons/ChevronDown.vue";
import GoalCard from "../components/goalCard.vue";
</script>
<template>
  <div class="container mx-auto max-w-7xl">
    <h3
      class="lg:text-5xl text-2xl px-6 my-24 leading-normal flex items-center justify-center font-bold"
    >
      <span class="w-full lg:w-8/12 block text-center">
        About African Diaspora Squash Association (ADSA)
      </span>
    </h3>
    <div class="flex flex-col lg:flex-row items-center gap-8 lg:mt-40">
      <div class="w-72 h-72 lg:-translate-y-32">
        <img
          src="../assets/images/adsa_1.jpeg"
          alt="adsa_1"
          height="150"
          width="150"
          class="rounded-3xl h-full w-full object-cover"
        />
      </div>
      <div class="w-72 h-96">
        <img
          src="../assets/images/adsa_2.jpg"
          alt="adsa_1"
          height="150"
          width="150"
          class="rounded-3xl h-full w-full object-cover"
        />
      </div>
      <div class="w-72 lg:w-[400px] h-96">
        <img
          src="../assets/images/adsa_3.jpg"
          alt="adsa_1"
          height="150"
          width="150"
          class="rounded-3xl h-full w-full object-cover"
        />
      </div>
      <div class="w-72 lg:w-52 h-64 lg:-translate-y-32">
        <img
          src="../assets/images/adsa_4.jpg"
          alt="adsa_1"
          height="150"
          width="150"
          class="rounded-3xl h-full w-full object-cover"
        />
      </div>
      <div class="w-72 h-96">
        <img
          src="../assets/images/adsa_5.jpg"
          alt="adsa_1"
          height="150"
          width="150"
          class="rounded-3xl h-full w-full object-cover"
        />
      </div>
    </div>

    <div
      class="py-20 px-6 lg:px-0 flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 items-center mt-20"
    >
      <!-- mission -->
      <div class="bg-[#747bff] p-6 lg:p-8 rounded-2xl">
        <h2 class="text-white text-3xl font-bold">Our Mission</h2>
        <p class="text-white my-8 text-base lg:text-lg leading-normal">
          Our mission is to provide a positive and inclusive environment for
          squash players of African descent in America, while also giving back
          to the youth in Africa through the sport. We aim to develop and
          promote the skills and talents of our team members, while also
          fostering a sense of community and social responsibility. Through our
          efforts, we hope to inspire and empower the next generation of squash
          players in Africa, while also building a strong and successful team in
          America.
        </p>
      </div>
      <!-- vision -->
      <div class="bg-[#ff4040] p-6 lg:p-8 rounded-2xl">
        <h2 class="text-white text-3xl font-bold">Our Vision</h2>
        <p class="text-white my-8 text-base lg:text-lg leading-normal">
          Our vision is to create a community of passionate squash players in
          America that celebrates and promotes the diversity of the African
          diaspora through the sport. We strive to empower and inspire
          individuals to reach their full potential on and off the court, while
          fostering a culture of inclusivity and excellence.
        </p>
      </div>
    </div>

    <!-- goals -->
    <div class="lg:py-32">
      <h2
        class="text-3xl lg:text-5xl font-bold mb-20 flex items-center justify-center"
      >
        Our Goals
      </h2>
      <div class="grid grid-cols-1 place-items-center lg:grid-cols-5 gap-6">
        <GoalCard
          content="Providing access to squash equipment and training for young people in underprivileged communities."
        />
        <GoalCard
          content=" Organizing events and tournaments to promote the sport of squash in Africa."
        />
        <GoalCard
          content=" Building a sustainable future for squash on the continent by developing local coaches and players."
        />
        <GoalCard
          content=" Empowering young people through the sport of squash, promoting physical and mental well-being."
        />
        <GoalCard
          content="  Partnering with local organizations and communities to promote and develop squash in Africa."
        />
        <GoalCard
          content=" Encouraging the growth of squash in Africa by providing opportunities for young players to   showcase their skills."
        />
        <GoalCard
          content="  Raising awareness of squash in Africa and encouraging greater participation in the sport among   young people."
        />
        <GoalCard
          content=" Promoting the African Diaspora in the sport of squash."
        />
        <GoalCard
          content=" Developing a strong and vibrant squash community that positively impacts the lives of young   people."
        />
        <GoalCard
          content=" Creating opportunities for personal development and success through the sport of squash."
        />
      </div>
    </div>
  </div>
  <!-- Faq-wrapper -->
  <!-- <div class="bg-[#8a2be2] text-white p-16">
    <div class="mx-auto container flex gap-24 max-w-7xl">
      <div>
        <h3 class="text-5xl font-bold">
          what you should <span class="text-yellow-300">know</span>
        </h3>
        <p class="my-8">
          Got questions? We’ve got answers. Learn all about our facility and why
          we’re the right one for you. We have collected some of the most
          frequently asked questions that we receive below. We’ve tried to
          provide the best answers, but if there is something that we missed,
          please reach out and a member of our staff will get in touch with you!
        </p>
      </div>

      <div class="">
        <div>
          <div class="p-2 bg-[#9f4bec] flex items-center justify-between">
            <h3 class="text-xl font-bold">Do you offer a trial membership?</h3>
            <ChevronRightIcon size="32" />
          </div>

          <P class="p-3">
            Enter your answer here. Be thoughtful, write clearly and concisely,
            and consider adding written as well as visual examples. Go over what
            you’ve written to make sure that if it was the first time you were
            visiting the site, you’d understand the answer.</P
          >
        </div>
        <div>
          <div class="p-2 bg-[#9f4bec] flex items-center justify-between">
            <h3 class="text-xl font-bold">Do you offer guest passes?</h3>
            <ChevronDownIcon size="32" />
          </div>

          <P class="p-3">
            Enter your answer here. Be thoughtful, write clearly and concisely,
            and consider adding written as well as visual examples. Go over what
            you’ve written to make sure that if it was the first time you were
            visiting the site, you’d understand the answer.</P
          >
        </div>
        <div>
          <div class="p-2 bg-[#9f4bec] flex items-center justify-between">
            <h3 class="text-xl font-bold">Are children allowed entry?</h3>
            <ChevronDownIcon size="32" />
          </div>

          <P class="p-3">
            Enter your answer here. Be thoughtful, write clearly and concisely,
            and consider adding written as well as visual examples. Go over what
            you’ve written to make sure that if it was the first time you were
            visiting the site, you’d understand the answer.</P
          >
        </div>
      </div>
    </div>
  </div> -->
</template>
