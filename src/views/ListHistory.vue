<template>
  <div class="about">
    <h1 style="padding: 10px;">历史记录</h1>

    <Row style="margin-bottom: 20px; text-align: right">
      <router-link to="/">返回首页</router-link>
    </Row>
    <Table :columns="columns" :data="list"></Table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        columns: [
          {
            title: '创建时间',
            key: 'creatTime',
            align: 'center'
          },
          {
            title: '耗时',
            key: 'hour',
            align: 'center'
          },
          {
            title: '任务描述',
            key: 'desc',
            align: 'center'
          },
          {
            title: '操作',
            align: 'center',
            render: (h, params) => {
              return h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.delete(params.index)
                  }
                }
              }, '删除')
            }
          }
        ],
        list: [
          {creatTime: '2017-06-10', hour: 2, desc: '设计项目原型'},
          {creatTime: '2017-06-11', hour: 5, desc: '设计数据库模型'},
        ]
      }
    },
    methods: {
      delete () {
        console.log('delete')
      }
    }
  }
</script>
