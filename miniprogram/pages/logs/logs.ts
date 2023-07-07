// logs.ts
// const util = require('../../utils/util.js')
import { formatTime } from '../../utils/util'

Page({
  data: {
    logs: [],
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logssfa') || []).map((log: string) => {
        return {
          date: formatTime(new Date(log)),
          timeStamp: log
        }
      }),
    })
  },
})
