import { defineStore } from 'pinia';
import { ref } from 'vue';

const useCkeditorStore = defineStore('ckeditor', () => {
  const editorResult = ref('');

  return {
    editorResult
  };
});

export default useCkeditorStore;
