<template>
  <div class="family-user">
    <v-data-table
      dense
      :headers="headers"
      :items="desserts"
      item-key="name"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import TooltipMixin from '@/mixins/Tooltip'
import CAvatar from '@/components/avatar/CAvatar'

export default {
  components: {},
  mixins: [TooltipMixin],
  data() {
    return {
      search: '',
      loadingItems: false,
      serverItemsLength: 0,
      itemsPerPage: 15,
      showFilter: false,
      filter: {
        page: 1,
        'filter[username]': null,
        'filter[gender]': null
      },
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ],

      actions: [
        {
          text: 'View Item',
          icon: 'mdi-eye',
          click: this.handleViewItem
        },
        {
          text: 'Edit Item',
          icon: 'mdi-pencil',
          click: this.handleEditItem
        },
        {
          text: 'Delete Item',
          icon: 'mdi-close',
          click: this.handleDeleteItem
        }
      ]
    }
  },
  watch: {
    '$route.query': {
      handler(query) {
        const filter = this.updateFilterQuery(query)
        this.fetchRecords(filter)
      },
      immediate: true
    }
  },
  methods: {
    //
    // updateFilterQuery(query) {
    //   const filter = Object.assign(this.filter, query)
    //   filter.page = parseInt(filter.page)
    //   return filter
    // },
    // resetFilter() {
    //   this.filter = {
    //     page: 1,
    //     'filter[username]': null
    //   }
    // },
    // fetchRecords(query) {
    //   this.loadingItems = true
    //   this.items = []
    //   return fetchUsers(query)
    //     .then(({ data, meta }) => {
    //       this.items = data
    //       this.serverItemsLength = meta.total
    //       this.loadingItems = false
    //     })
    //     .catch(() => {
    //       this.loadingItems = false
    //     })
    // },
    //action
    handleCreateItem() {
      this.$router.push({
        path: '/acl/user/create'
      })
    },
    handleViewItem() {},
    handleEditItem({ id }) {
      this.$router.push({
        path: `/acl/user/item/${id}`
      })
    },
    handleDeleteItem() {},
    handleSubmit() {},
    handleRefreshItem() {
      this.fetchRecords(this.filter)
    },
    // filter
    handlePageChanged(page) {
      this.filter.page = page
      this.filter.t = Date.now()
      this.$router.replace({
        path: this.$route.path,
        query: this.filter
      })
    },
    handleResetFilter() {
      this.filter = {
        page: 1,
        'filter[username]': null,
        'filter[gender]': null
      }
      this.$router.replace({
        path: this.$route.path
      })
    },
    handleApplyFilter() {
      this.filter.t = Date.now()
      this.$router.replace({
        path: this.$route.path,
        query: this.filter
      })
    },
    handleClear() {
      this.resetFilter()
      this.filter.t = Date.now()
      this.$router.replace({
        path: this.$route.path,
        query: this.filter
      })
    }
  }
}
</script>
