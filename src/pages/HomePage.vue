<template>
  <div class="component container-fluid">
    <div class="row">
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

export default {
  name: "HomePage",
  setup() {
    const state = reactive({
      query: "", //what does this query do?
    });
    return {
      state,
    };
  },
};
</script>
