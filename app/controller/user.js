'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  //用户登录
    async login() {

        let result =  this.ctx.request.body;
        
        let data =   await this.ctx.model.Login.find(result);

        if(data.length > 0) {
            this.ctx.body = {
                code:200,
                message:'登录成功'
            }
        } else {
            this.ctx.body = {
                code:404,
                message:'传入参数有误'
            }
        }

    }

    //指标集查询
    async searchParam() {

        let result = await this.ctx.model.Indicators.find();

        // let res = new this.ctx.model.Indicators({
        //     apiCode:'0002',
        //     name:'小智',
        //     isMulriple:true,
        //     operator:'第三方',
        //     category:'运营商',
        //     tags:'小智',
        //     resultExample:'json',
        //     unit:'100',
        //     description:'小智数据工厂'
        // })

        // await res.save();

        this.ctx.body = {
            code:200,
            message:'成功',
            data:result
        }

    }
    //指标价格
    async listPrice() {
        let result = this.ctx.request.body;


        let data = await this.ctx.model.Price.find();

        this.ctx.body = {
            code:200,
            message:'成功',
            data:data
        }

    }

    //结果字典
    async tableList() {
        let result = this.ctx.request.body;


        let data = await this.ctx.model.Result.find();

        this.ctx.body = {
            code:200,
            message:'success',
            data:data
        }

    }

    //结果字典查询功能
    async resultQuery() {
        let result = this.ctx.query;
        let data = await this.ctx.model.Result.find(result);
      
        this.ctx.body = {
            code:200,
            message:'success',
            data:data
        }

       
    
    }
    //指标编号查询
    async resultIndex() {
        let result = this.ctx.request.body;
       
        let data = await this.ctx.model.Index.find(result);
    

        this.ctx.body = {
            code:200,
            message:'success',
            data:data

        }

    }

    //指标缓存策略
    async listAttribute() {
        
        let data = await this.ctx.model.Update.find();
        let total = await this.ctx.model.Update.find().count();

        // let res = new this.ctx.model.Update({
        //     apiCode:'013',
        //     name:'小智',
        //     internalCode:'00B',
        //     operator:'自有',
        //     UpdateStrategy:'post',
        //     category:'全部',
        // })

        // await res.save();


        this.ctx.body = {
            code:200,
            message:'success',
            rows:data,
            total:total
        }
    }

    //指标缓存册除
    async tableDelete() {
        let result = this.ctx.request.body;
        
        let data = await this.ctx.model.Update.remove(result);

        this.ctx.body = {
            code:200,
            message:'success',
            data:data
        }

    }


    //指标缓存删除所有
    async tableAllData() {
        let result =  this.ctx.request.body;

        let res = [];

        
        for(let i=0;i<result.length;i++){
             res = await this.ctx.model.Update.remove(result[i]);

        }

      
        if(res.ok) {
            this.ctx.body = {
                code:200,
                message:'success'
            }
        } else {
            this.ctx.body = {
                code:404,
                message:'没有可删除的了'
            }
        }
    
    
    }

    //指标缓存添加
    async addAttribute() {
        let result = this.ctx.request.body;
        

        let data = new this.ctx.model.Update(result);

        let res = await data.save();


        this.ctx.body = {
            code:200,
            message:'success',
            codeInfo:'添加成功'
        }
    }

    //添加指标重试
    async addAttributeRetry() {
        let result = this.ctx.request.body;
        
        let data = new this.ctx.model.Retry(result);

        let res = await data.save();


        this.ctx.body = {
            code:200,
            message:'success',
            codeInfo:'添加成功'
        }
    }

    //指标重试查询
    async listAttributeTable() {
        
        let data = await this.ctx.model.Retry.find();
        let total = await this.ctx.model.Retry.count();

        this.ctx.body = {
            code:200,
            message:'success',
            totla:total,
            rows:data
        }

    }

    //指标重试删除单项
    async tableDeleteRetry() {
        let result = this.ctx.request.body;
        

        let data = await this.ctx.model.Retry.remove(result);


        this.ctx.body = {
            code:200,
            message:'success',

        }

    }

    //指标重试删除所有的
    async tableAllDeleteRetry() {
        let result = this.ctx.request.body;

       

        let res = [];
        for(let i=0;i<result.length;i++){
            res = await this.ctx.model.Retry.remove(result[i]);

        }

        if(res.ok) {
            this.ctx.body = {
                code:200,
                message:'success'
            }
        } else {
            this.ctx.body = {
                code:404,
                message:'没有可删除的了'
            }
        }


    }

    async tableListSearch() {
        let result = this.ctx.request.body;

    
        let data = await this.ctx.model.Indicators.find(result);
     
        this.ctx.body = {
            code:200,
            message:'success',
            data:data
        }

    }


 
}

module.exports = UserController;
