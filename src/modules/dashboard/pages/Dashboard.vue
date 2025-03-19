<template>
  <div class="admin-home p-xl">
    <BreadCrumb :isDashboard="true">
      <template #page-title> Dashboard </template>
      <template #first-page> Dashboard </template>
    </BreadCrumb>

    <div
      class="statistc-cards pt-xl grid gap-5 grid-cols-1 lg:grid-cols-4 md:grid-cols-2"
    >
      <MainCard
        v-for="(card, index) in cards.slice(0, 4)"
        :key="index"
        :icon_bg="card.icon_bg"
        :card_ststus="card.card_status"
      >
        <template #card-icon>
          <img :src="card.icon" width="35" height="35" alt="" />
        </template>

        <template #static-number>{{ card.number }}</template>

        <template #rate>{{ card.rate }}%</template>

        <template #card-name>{{ card.title }}</template>
      </MainCard>
    </div>

    <div
      class="statistc-cards pt-xl grid gap-5 grid-cols-1 lg:grid-cols-2 md:grid-cols-2"
    >
      <MainCard
        v-for="(card, index) in cards.slice(4, 6)"
        :key="index"
        :icon_bg="card.icon_bg"
        :card_ststus="card.card_status"
      >
        <template #card-icon>
          <img :src="card.icon" width="35" height="35" alt="" />
        </template>

        <template #static-number>{{ card.number }}</template>

        <template #rate>{{ card.rate }}%</template>

        <template #card-name>{{ card.title }}</template>
      </MainCard>
    </div>

    <GlobalCard card_title="Chart Example" class="mt-5">
      <template #catr-body>
        <BarChart />
      </template>
    </GlobalCard>
  </div>
</template>

<script setup>
import BreadCrumb from "@/global/BreadCrumb.vue";
import MainCard from "@/global/cards/MainCard.vue";
import GlobalCard from "@/global/cards/GlobalCard.vue";
import BarChart from "../components/BarChart.vue";
import icon1 from "../../../assets/images/employee.svg";
import icon2 from "../../../assets/images/all-users.svg";
import icon3 from "../../../assets/images/famil.svg";
import icon4 from "../../../assets/images/land.svg";
import icon5 from "../../../assets/images/work.svg";

const cards = [
  {
    icon: icon1,
    title: "total employees",
    number: 265,
    rate: 0.01,
    card_status: "down",
    icon_bg: "success",
  },
  {
    icon: icon2,
    title: "active employees",
    number: 265,
    rate: 0.01,
    card_status: "up",
    icon_bg: "secondary",
  },
  {
    icon: icon3,
    title: "absent employees",
    number: 265,
    rate: 0.01,
    card_status: "down",
    icon_bg: "success",
  },
  {
    icon: icon4,
    title: "absent rate",
    number: 265,
    rate: 0.01,
    card_status: "up",
    icon_bg: "pink",
  },
  {
    icon: icon5,
    title: "accedents number",
    number: 265,
    rate: 0.01,
    card_status: "down",
    icon_bg: "teal",
  },
  {
    icon: icon1,
    title: "inactive employees",
    number: 265,
    rate: 0.01,
    card_status: "up",
    icon_bg: "warning",
  },
];
</script>
