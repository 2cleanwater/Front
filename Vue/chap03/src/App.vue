<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Chap03 Component</h1>
      </div>

      <div class="col-12">
        <TodoForm></TodoForm>
        <hr>
        <TodoList></TodoList>
      </div>

      <div class="col-12">
        <A04Props></A04Props>
      </div>

      <div class="col-12">
        <A03Style></A03Style>
      </div>


      <div class="col-6">
        <A01Bind></A01Bind>
      </div>
      <div class="col-6">
        <A02Attr></A02Attr>
      </div>

      
    </div>
  </div>
</template>

<script>
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import A01Bind from './components/A01Bind.vue'
import A02Attr from './components/A02Attribute.vue'
import A03Style from './components/A03Style.vue'
import A04Props from './components/A04Props.vue'
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'

export default {
  components: { A01Bind, A02Attr, A03Style, A04Props, TodoForm, TodoList  }
}
</script>

<style>

</style>
