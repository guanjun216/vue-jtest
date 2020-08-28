<template>
  <button @click="handleClick">
    <slot></slot>
    111111
  </button>
</template>

<script>
export default {
  name: "testButton",
  setup(props, { emit }) {
    const handleClick = () => {
      emit("click", 1);
    };

    return {
      handleClick,
    };
  },
};
</script>

<style></style>
