<template>
  <div>
    <span>{{ count }}</span>
    <button data-testid="btn" :disabled="disabled" @click="handleClick">
      <slot>默认按钮</slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++;
      this.$emit("click");
    },
  },
};
</script>

<style scoped></style>
