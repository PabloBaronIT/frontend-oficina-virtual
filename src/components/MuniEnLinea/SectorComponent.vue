<template>
  <div class="sector-component">
    <!-- Mostrar los tramites
     correspondientes al sector seleccionado -->
    <header>
      <h1>
        <img @click="back()" src="@/assets/back-arrow.svg" alt="Volver" />
        {{ this.$route.params.sectorTitle }}
      </h1>
    </header>
    <div class="tramites">
      <div
        class="card slide-top"
        v-for="tramite in tramitesApi"
        :key="tramite.id"
      >
        <div class="descripcion">
          <img src="@/assets/tramite-logo.svg" :alt="tramite.id" />
          <p class="title">{{ tramite.title }}</p>
        </div>
        <div class="requisitos">
          <a href="">Ver requisitos</a>
          <img
            src="@/assets/arancel.svg"
            alt="arancel"
            @mouseover="Hover"
            @mouseleave="Hover"
          />
        </div>

        <router-link
          class="btn-iniciar"
          :to="`/formulario/${this.$route.params.sectorId}/${tramite.title}/${tramite.id}`"
        >
          Iniciar tramite
        </router-link>
        <p :id="key" class="hover" v-if="this.hover && id == this.id">
          {{ tramite.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      id: null,
      title: "",
      hover: false,
      tramitesApi: [],
    };
  },
  created() {
    console.log(this.$route);
    console.log(this.$route.params.sectorId);

    // get tramites para la vista sectores con el id de categoria sacado del path con vue router

    const apiClient = axios.create({
      baseURL: "https://oficina-virtual-pablo-baron.up.railway.app/",
      withCredentials: false,
      headers: {
        "auth-header": localStorage.getItem("token"),
      },
    });

    apiClient
      .get(
        "/oficina/categories/category/procedure/" + this.$route.params.sectorId
      )
      .then((response) => {
        if (response.status == 200) {
          console.log(response.data.length);
          console.log("Get tramites ");
          for (let i = 0; i < response.data.length; i++) {
            this.tramitesApi.push(response.data[i]);
          }
          console.log(this.tramitesApi);
        } else {
          console.log(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  methods: {
    Hover(id) {
      this.hover = !this.hover;
      this.id = id;
    },
    back() {
      this.$router.go(-1);
    },
  },
  computed: {
    tramitesFiltered() {
      return this.tramites.filter((tramite) => {
        return tramite.sector === this.$route.params.sectorId;
      });
    },
  },
};
</script>

<style scoped>
.slide-top {
  -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2023-2-10 16:41:26
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-top
 * ----------------------------------------
 */
@-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes slide-top {
  0% {
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
.title {
  color: var(--blue);
}

.hover {
  position: absolute;
  bottom: 0;
  font-weight: 100;
  color: var(--text-color);
}

.requisitos img {
  width: 22px;
  margin: 0 10px;
}

.sector-component {
  width: 70vw;
  height: 100vh;
  background: var;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  padding: 10px 0;
}

.descripcion {
  display: flex;
}

.tramites {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  padding: 0;
}
.btn-iniciar {
  width: 100%;
  border: none;
  border-radius: 10px;
  background: var(--red);
  font-size: 0.9em;
  color: var(--text-color);
  transition: all 0.5s ease;
}

.tramites a {
  color: var(--blue);
  font-size: 0.9em;
  text-decoration: none;
}
.tramites a:hover {
  color: var(--red);
  font-size: 0.9em;
  text-decoration: none;
}

.tramites input:hover {
  background: var(--blue);
  color: var(--red);
}

img {
  max-width: 30px;
  align-self: center;
}

h1 {
  color: var(--red);
}

.card {
  font-weight: bold;
  padding: 0px 10px;
  border: none;
  box-shadow: 5px 5px 12px #444;
  width: 220px;
  height: 220px;
  margin: 30px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
