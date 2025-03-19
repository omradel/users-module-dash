<template>
  <div class="text-start">
    <!-- this input to handle basic input -->
    <div v-if="type != 'select' && type != 'checkbox'">
      <label class="block text-start text-gray-700 text-sm font-medium mb-1">{{
        lable
      }}</label>
      <Field
        :name="name"
        :value="modelValue"
        :placeholder="lable"
        :rules="rules"
        :type="type"
        class="w-full border border-gray-300 rounded-lg px-3 py-3 text-gray-900 focus:outline-none"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>

    <!-- this input to handle checkbox input -->
    <div v-if="type == 'checkbox'" class="flex items-center">
      <Field
        :name="name"
        type="checkbox"
        class="mr-2 h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
      />
      <span>{{ lable }}</span>
    </div>

    <!-- this input to handle select input -->
    <div v-if="type == 'select'">
      <label class="block text-start text-gray-700 text-sm font-medium mb-1">{{
        lable
      }}</label>
      <Field
        as="select"
        :name="name"
        :value="modelValue"
        :placeholder="lable"
        :rules="rules"
        class="w-full border border-gray-300 rounded-lg px-3 py-3 text-gray-900 focus:outline-none"
        @input="$emit('update:modelValue', $event.target.value)"
      >
        <option v-for="(item, index) in options" :key="index" :value="item">
          {{ item }}
        </option>
      </Field>
    </div>

    <ErrorMessage :name="name" class="text-sm font-thin text-red-500" />
  </div>
</template>

<script setup lang="ts">
import { Field, ErrorMessage } from "vee-validate";

const props = withDefaults(
  defineProps<{
    lable: string;
    modelValue: string | number;
    name: string;
    rules: string;
    type: string;
    options?: Array<string> | Array<number>;
  }>(),
  {
    rules: "required",
  }
);
</script>
