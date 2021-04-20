<template>
  <div class="component container-fluid">
    <div class="row text-center">
      <div class="col">
        <form @submit.prevent="search">
          <label for="movie"></label>
          <input
            type="text"
            name="movie"
            id="movie"
            placeholder="Search Pokemon"
            v-model="state.query"
          />
          <button type="submit" class="btn btn-primary">Search</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { pokeService } from "../services/PokeService";
import Results from "../components/ResultsComponent";

export default {
  name: "HomePage",
  setup() {
    const state = reactive({
      query: "", //what does this query do?
    });
    return {
      state,
      async search() {
        try {
          await pokeService.getPoke(state.query);
          state.query = "";
        } catch (e) {
          console.error(e);
        }
      },
      components: {
        Results,
      },
    };
  },
};
</script>
