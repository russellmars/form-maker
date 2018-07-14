<template>
  <b-table :fields="fields" :items="items">
    <template slot="name" slot-scope="data">
      <a :href="`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`">
        {{data.value}}
      </a>
    </template>
    <template slot="actions" slot-scope="row">
      <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
      <b-button size="sm">编辑</b-button>
      <b-button size="sm">预览</b-button>
      <b-button size="sm">查看反馈</b-button>
    </template>
  </b-table>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          // A column that needs custom formatting,
          // calling formatter 'fullName' in this app
          key: 'name',
          label: 'Full Name',
          formatter: 'fullName'
        },
        // A regular column
        'age',
        {
          // A regular column with custom formatter
          key: 'sex',
          formatter: value => {
            return value.charAt(0).toUpperCase();
          }
        },
        {
          // A virtual column with custom formatter
          key: 'birthYear',
          label: 'Calculated Birth Year',
          formatter: (value, key, item) => {
            return new Date().getFullYear() - item.age;
          }
        },
        { key: 'actions', label: '操作' }
      ],
      items: [
        { name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 },
        { name: { first: 'Jane', last: 'Doe' }, sex: 'Female', age: 36 },
        { name: { first: 'Rubin', last: 'Kincade' }, sex: 'male', age: 73 },
        {
          name: { first: 'Shirley', last: 'Partridge' },
          sex: 'female',
          age: 62
        }
      ]
    };
  },
  methods: {
    fullName(value) {
      return `${value.first} ${value.last}`;
    }
  }
};
</script>
