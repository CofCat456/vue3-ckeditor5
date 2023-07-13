import { defineStore } from 'pinia';
import { ref } from 'vue';

const useCkeditorStore = defineStore('ckeditor', () => {
  const editorResult = ref('It works!');

  return {
    editorResult
  };
});

export default useCkeditorStore;
