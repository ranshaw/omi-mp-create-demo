import create from '../../utils/create'
import util from '../../utils/util'

create.Page({
  data: {
    logs: []
  },
  onLoad: function () {
    console.log('store',this.store)
    this.oData.logs = (wx.getStorageSync('logs') || []).map(log => {
      return util.formatTime(new Date(log))
    })

    setTimeout(() => {
      this.oData.logs[0] = 'Changed!'
    }, 1000)


    setTimeout(() => {
      this.oData.logs.push(Math.random(), Math.random())
    }, 2000)

    setTimeout(() => {
      this.oData.logs.splice(this.oData.logs.length-1,1)
    }, 4000)
  }
})
