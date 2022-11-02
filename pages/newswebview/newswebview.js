// pages/news/newswebview/newswebview.js

Page({

    /**
     * 页面的初始数据
     */
    data: {
        link:""
    },
 
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        //JS字符串解密
        String.prototype.decode = function () {
            return String.fromCharCode.apply(null,this.trim().split(","));
        }     
        console.log("+++++++  before:", options.link)
        var link = options.link.decode()
        console.log("+++++++ newswebview 2 after",link)
        this.setData({
            link:link
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})