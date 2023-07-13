<script setup>
import { RouterLink } from 'vue-router';

import { component as ckeditor } from '@ckeditor/ckeditor5-vue';

// 中文包
import 'ckeditor5-custom-build/build/translations/zh-cn';

// 經典版型
import Editor from 'ckeditor5-custom-build/build/ckeditor';

import { storeToRefs } from 'pinia';
import useCkeditor from '../stores/ckeditor';

const ckeditorStore = useCkeditor();

const { editorResult } = storeToRefs(ckeditorStore);

// 控制 ckeditor 的啟用
defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['ready', 'foucs', 'blur', 'input', 'destroy']);

// 存放版型，用來傳入
const editor = Editor;

// 準備
const onEditorReady = () => {
  emit('ready');
};

// 聚焦
const onEditorFoucs = () => {
  emit('foucs');
};

// 失去焦點
const onEditorBlur = () => {
  emit('blur');
};

// 打字中
const onEditorInput = () => {
  emit('input');
};

// 銷毀時
const onEditorDestroy = () => {
  emit('destroy');
};
</script>

<template>
  <div id="ckeditor">
    <!-- 套件放置處 -->
    <ckeditor
      :editor="editor"
      :disabled="disabled"
      @ready="onEditorReady"
      @foucs="onEditorFoucs"
      @blur="onEditorBlur"
      @input="onEditorInput"
      @destroy="onEditorDestroy"
      v-model="editorResult"
    />
  </div>
  <RouterLink :to="{ name: 'Preview' }">GoPreview</RouterLink>
</template>

<style scoped>
#ckeditor :deep(.ck-editor__editable) {
  min-height: 200px;
  max-height: 500px;
  color: #1a202c;
}

a {
  position: fixed;
  bottom: 16px;
  right: 16px;
}
</style>
