<template>
  <div class="grafico-container">
    <h1>Estado del municipal</h1>
    <Doughnut :data="chartData" :options="chartOptions" />
  </div>
  <!-- <div class="grafico-container">
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div> -->
</template>

<script>
import dbservice from "@/services/dbService";

// import { Bar } from "vue-chartjs";
import { Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  // BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  // BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
);

export default {
  name: "GraficoComponent",

  mounted() {
    dbservice
      .getMunicipal(localStorage.getItem("id"))
      .then((response) => {
        console.log("Grafico");
        console.log(response);
        let r = response.data.required;
        let f = response.data.finalized;
        let i = response.data.inprocess;

        this.sampleAsync(r, f, i);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    sampleAsync(r, f, i) {
      this.chartData = {
        labels: ["En proceso", "Finalizado", "Requerido"],
        datasets: [
          {
            label: "Tramites",
            data: [r, f, i],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      };
    },
  },
  components: { Doughnut },
  data() {
    return {
      modal: true,
      chartData: {
        labels: ["En proceso", "Finalizado", "Requerido"],
        datasets: [
          {
            label: "Tramites",
            data: [1, 2, 3],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>

<style scoped>
.grafico-container {
  margin: 10px;
  height: 500px;
  width: 400px; /* Need a specific value to work */
  border-radius: 10px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
