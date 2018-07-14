<template>
  <div class="home">
    <h1 style="padding: 10px 0;">首页</h1>

    <Row style="margin-bottom: 20px;">
      <i-col span="12" style="text-align: left">
        <a @click="addRecord">新建记录</a>
      </i-col>
      <i-col span="12" style="text-align: right">
        <router-link to="/history">查看历史记录</router-link>
      </i-col>
    </Row>

    <Table :columns="columns" :data="list"></Table>

    <Modal
        v-model="modalAdd"
        title="新建记录"
        :mask-closable="false"
        @on-ok="addRecordOk">
      <Row style="margin-bottom: 20px;">创建日期： <DatePicker type="date" placeholder="请选择日期" style="width: 300px"></DatePicker></Row>
      <Row style="margin-bottom: 20px;">花费时间： <Input v-model="date" placeholder="请输入花费时间" style="width: 300px"></Input></Row>
      <Row>任务描述： <Input v-model="date" type="textarea" placeholder="请输入任务描述" style="width: 300px"></Input></Row>
    </Modal>
  </div>
</template>

<script>
  import axios from 'axios'

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
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '10px'
                  },
                  on: {
                    click: () => {
                      this.archive(params.index)
                    }
                  }
                }, '存入历史'),
                h('Button', {
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
              ]);
            }
          }
        ],
        list: [
          {creatTime: '2017-09-10', hour: 6, desc: '优化了UI'},
          {creatTime: '2017-09-11', hour: 2, desc: '修复了bug'},
        ],
        modalAdd: false,
        createDate: '',
      }
    },
    created () {
      console.log(axios)
    },
    methods: {
      archive () {
        console.log('archive')
      },
      delete () {
        console.log('delete')
      },
      addRecord () {
        this.modalAdd = true
      },
      addRecordOk () {
        console.log('addRecordOk')
      }
    }
  }
</script>

<style>
  .home {

  }
</style>
