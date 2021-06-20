<template>
  <div>
    <Table :columns="columns" :data="students"/>
  </div>
</template>

<script>
import Table from "../components/Table";

export default {
  components: { Table },
  name: 'Student',
  data(){
    return {
      title: 'student management',
      students: [{
        id:1,
        fullName: "Duong"
      }],
      columns: [
        {
          label: 'Id',
          field: 'id',
        },
        {
          label: 'Full Name',
          field: 'fullName',
        },
      ]
    }
}
}
</script>
