'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 用户登录
  async login() {
    const result = this.ctx.request.body;
    const data = await this.ctx.model.Login.find(result);

    if (data.length > 0) {
      this.ctx.body = {
        code: 200,
        msg: '登录成功',
        data: {
          token: 'ssdklfhnfgkdhjfmdsjhbfdhjbfdsakl,fdjbkaafdlsgbnjkmdfgvl.vfgdvjknbm',
        },
      };
    } else {
      this.ctx.body = {
        code: 404,
        msg: '用户名或密码不对',
      };
    }

  }

  // 指标集查询
  async searchParam() {
    const result = await this.ctx.model.Indicators.find();
    this.ctx.body = {
      code: 200,
      message: '成功',
      data: result,
    };

  }
  // 新增指标管理
  async addSearchParam() {
    const result = this.ctx.request.body;
    const data = new this.ctx.model.Indicators(result);
    await data.save();

    this.ctx.body = '增加数据成功';

  }
  // 指标价格
  async listPrice() {
    const result = this.ctx.request.body;
    const data = await this.ctx.model.Price.find();
    this.ctx.body = {
      code: 200,
      message: '成功',
      data,
    };
  }
  // 结果字典
  async tableList() {
    const result = this.ctx.request.body;
    const data = await this.ctx.model.Result.find();
    this.ctx.body = {
      code: 200,
      message: 'success',
      data,
    };

  }
  // 新增结果字典
  async addResult() {
    const result = this.ctx.request.body;
    const data = new this.ctx.model.Result(result);
    await data.save();

    this.ctx.body = '增加数据成功';

  }
  // 结果字典查询功能
  async resultQuery() {
    const result = this.ctx.query;
    const data = await this.ctx.model.Result.find(result);

    this.ctx.body = {
      code: 200,
      message: 'success',
      data,
    };
  }
  // 指标编号查询
  async resultIndex() {
    const result = this.ctx.request.body;
    const data = await this.ctx.model.Index.find(result);
    this.ctx.body = {
      code: 200,
      message: 'success',
      data,
    };
  }
  // 指标缓存策略
  async listAttribute() {
    const data = await this.ctx.model.Update.find();
    const total = await this.ctx.model.Update.find().count();

    this.ctx.body = {
      code: 200,
      message: 'success',
      rows: data,
      total,
    };
  }
  // 指标缓存册除
  async tableDelete() {
    const result = this.ctx.request.body;
    const data = await this.ctx.model.Update.remove(result);

    this.ctx.body = {
      code: 200,
      message: 'success',
      data,
    };
  }
  // 指标缓存删除所有
  async tableAllData() {
    const result = this.ctx.request.body;
    let res = [];
    for (let i = 0; i < result.length; i++) {
      res = await this.ctx.model.Update.remove(result[i]);
    }
    if (res.ok) {
      this.ctx.body = {
        code: 200,
        message: 'success',
      };
    } else {
      this.ctx.body = {
        code: 404,
        message: '没有可删除的了',
      };
    }
  }

  // 指标缓存添加
  async addAttribute() {
    const result = this.ctx.request.body;
    const data = new this.ctx.model.Update(result);
    const res = await data.save();
    this.ctx.body = {
      code: 200,
      message: 'success',
      codeInfo: '添加成功',
    };
  }

  // 添加指标重试
  async addAttributeRetry() {
    const result = this.ctx.request.body;
    const data = new this.ctx.model.Retry(result);
    const res = await data.save();
    this.ctx.body = {
      code: 200,
      message: 'success',
      codeInfo: '添加成功',
    };
  }
  // 指标重试查询
  async listAttributeTable() {
    const data = await this.ctx.model.Retry.find();
    const total = await this.ctx.model.Retry.count();
    this.ctx.body = {
      code: 200,
      message: 'success',
      totla: total,
      rows: data,
    };

  }

  // 指标重试删除单项
  async tableDeleteRetry() {
    const result = this.ctx.request.body;
    const data = await this.ctx.model.Retry.remove(result);
    this.ctx.body = {
      code: 200,
      message: 'success',

    };

  }
  // 指标重试删除所有的
  async tableAllDeleteRetry() {
    const result = this.ctx.request.body;
    let res = [];
    for (let i = 0; i < result.length; i++) {
      res = await this.ctx.model.Retry.remove(result[i]);

    }
    if (res.ok) {
      this.ctx.body = {
        code: 200,
        message: 'success',
      };
    } else {
      this.ctx.body = {
        code: 404,
        message: '没有可删除的了',
      };
    }
  }

  // 指标管理查询
  async tableListSearch() {
    const result = this.ctx.request.body;
    const data = await this.ctx.model.Indicators.find(result);

    this.ctx.body = {
      code: 200,
      message: 'success',
      data,
    };

  }
  // 指标缓存查询
  async tableSearchUpdate() {
    const result = this.ctx.request.body;

    const data = await this.ctx.model.Update.find(result);

    this.ctx.body = {
      code: 200,
      message: 'success',
      data,
    };
  }
  // 指标重试查询
  async tableSeachRetry() {
    const result = this.ctx.request.body;
    const data = await this.ctx.model.Retry.find(result);

    this.ctx.body = {
      code: 200,
      message: 'success',
      data,
    };
  }
}

module.exports = UserController;
