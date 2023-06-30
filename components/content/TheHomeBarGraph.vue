<template>
  <div class="text-center">
    <h2 style="border: none; font-size: 18px">
      Domestic and Sexual Assault Victims Who Received Service in Illinois,
      2018-2022
    </h2>
    <h3 style="border: none; font-size: 12px">Source: InfoNet System</h3>
    <div style="min-height: 25vh" class="pt-3 pb-10">
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>
<script setup>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { ref } from "vue";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartData = ref({
  labels: ["2018", "2019", "2020", "2021", "2022"],
  layout: {
    padding: 20,
  },
  datasets: [
    {
      label: "Domestic and Sexual Violence Assualt Victims serviced",
      backgroundColor: "#0D4471",
      data: [70133, 72905, 60717, 61857, 61259],
    },
  ],
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
});
</script>
