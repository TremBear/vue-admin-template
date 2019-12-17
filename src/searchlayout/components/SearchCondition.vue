<template>
  <el-card class="box-card" style="font-size: 13px" shadow="hover" body-style="padding:0px">
    <!--<div slot="header" class="clearfix">-->
    <!--<span>关于本站</span>-->
    <!--</div>-->
    <el-divider content-position="left"><span style="font-weight: bold;color: #5a5e66"><i class="el-icon-menu"></i> 搜索选项</span></el-divider>
    <div style="padding:0 20px 20px 20px;font-color:#222;line-height: 150%;">
      <el-collapse v-model="activeName"  >
        <el-collapse-item title="热门" name="1">
          <el-tag
            v-for="item in items"
            :key="item.label"
            :type="item.type"
            style="margin: 2px"
            size="mini"
            @click="chouse1(item)"
            effect="dark">
            {{ item.label }}
          </el-tag>
        </el-collapse-item>
        <el-collapse-item title="分类" name="2">
          <el-tag
            v-for="item2 in items2"
            :key="item2.label"
            :type="item2.type"
            style="margin: 2px"
            size="mini"
            @click="chouse2(item2)"
            effect="dark">
            {{ item2.label }}
          </el-tag>
        </el-collapse-item>
      </el-collapse>
    </div>
  </el-card>
</template>
<style>
  .el-collapse-item__content{
    font-size: 10px;
  }
</style>
<script>
export default {
  name: 'SearchCondition',
  data() {
    return {
      activeName: ['1', '2'],
      items: [
        { type: 'info', label: '标签一' },
        { type: 'info', label: '标签二' },
        { type: 'info', label: '标签三' },
        { type: 'info', label: '标签四' },
        { type: 'info', label: '标签五' }
      ],

      items2: [
        { type: 'info', label: '标签一' },
        { type: 'info', label: '标签二' },
        { type: 'info', label: '标签三' },
        { type: 'info', label: '标签四' },
        { type: 'info', label: '标签五' }
      ]
    }
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },
    chouse1(tag) {
      if (tag.type === 'info') {
        for (const k in this.items) {
          this.items[k].type = 'info'
        }
        tag.type = 'warning'
      } else if (tag.type === 'warning') {
        tag.type = 'info'
      }
      console.log(tag)
    },
    chouse2(tag) {
      if (tag.type === 'info') {
        for (const k in this.items2) {
          this.items2[k].type = 'info'
        }
        tag.type = 'warning'
      } else if (tag.type === 'warning') {
        tag.type = 'info'
      }
      console.log(tag)
    }
  }
}
</script>

<style scoped>

</style>
