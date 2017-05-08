<template>
  <div class="home">
    <div class="overview-area">
      <span class="overview-icon"></span>
      <span class="overview-title">{{title | titleFormat}}</span>
    </div>
    <div class="show-area">
      <el-table
        :data="tableData"
        border
        style="width:100%;margin:20px 0 0 0;">
        <el-table-column
          prop="date"
          label="日期">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import MeInput from '../../meUI/input.vue'
export default {
  data() {
    return {
      title: 'table'
    }
  },
  computed: {
    tableData() {
      return this.$store.getters.tableData
    }
  },
  methods: {
    onchangeInput(value) {
      this.$store.commit('INPUT_DATA', {value: value})
    }
  },
  mounted() {
    this.$store.dispatch('table')
  },
  watch: {
    $route(to, from) {
      console.log(to, from)
    }
  },
  filters: {
    titleFormat(value) {
      return value.substring(0, 1).toUpperCase() + value.substring(1)
    }
  },
  components: {
    'me-input': MeInput
  },
}
</script>