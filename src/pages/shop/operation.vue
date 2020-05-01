<template>
  <div>
    <h1 class="text-center font20 mtb20">商店信息</h1>
    <el-form class="form-box" :model="shop">
      <div class="flex-start-center-no">
        <div class="width100">商铺名称</div>
        <el-form-item class="width280">
          <el-input v-model="shop.name"></el-input>
        </el-form-item>
      </div>
      <div class="flex-start-center-no mt20">
        <div class="width100">商铺地址</div>
        <el-form-item class="width280">
          <el-select v-model="shop.addr" placeholder="请选择商铺区域">
            <el-option label="东苑" value="东苑"></el-option>
            <el-option label="西苑" value="西苑"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="flex-start-center-no mt20">
        <div class="width100">商铺电话</div>
        <el-form-item class="width280">
          <el-input v-model="shop.phone"></el-input>
        </el-form-item>
      </div>
      <div class="flex-start-center-no mt20">
        <div class="width100">缩略图</div>
        <input ref="oDom" type="file" />
      </div>
      <div class="flex-start-center-no mt20">
        <div class="width100">商铺简介</div>
        <el-form-item class="width280">
          <el-input type="textarea"  v-model="shop.desc"></el-input>
        </el-form-item>
      </div>
      <div class="flex-end-center-no mt20">
        <el-button type="danger">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
  import ShopApi from "@/assets/js/axios/shop"

  export default {
    name: 'operation',
    data () {
      return {
        shop: {}
      }
    },
    methods: {
      confirm () {
        let file = this.$refs.oDom.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        let that = this;
        reader.onload=function(e){
          let data = this.result;
          ShopApi.registerShop({
            name: that.shop.name,
            addr: that.shop.addr,
            desc: that.shop.desc,
            file: data
          }).then(res => {
            console.log(res)
          })
        }
      }
    },
    created () {
      
    }
  }
</script>

