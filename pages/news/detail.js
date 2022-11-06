const {
    getArticleDetail,
    getNewsByCategory
} = require("../../utils/api")

Page({
    data: {
        article: {},
        tagStyle: {
            img: "display: block; width: 100%; height: auto;",
            h2: "margin: 10px 0",
        },
        relations: [],
        showWebView: true,
        markers: [{
            id: 10,
            longitude: 118.795009,
            latitude: 31.944315,
            width: 34,
            height: 49
        }]
    },
    
    // 跳转到详情页
    toMore:function(e){
        wx.navigateTo({
          url: '../../pages/newswebview/newswebview?link='+e.currentTarget.dataset.link
        })
    },
    onLoad: function (options) {
        const articles = {
            "title": options.title,
            "abstract": options.abstract,
            "link": options.link
        }
        
        this.setData({
            article:articles
        })        
    },
    tiaozhuan: function () {
        this.setData({
            showWebView: false
        })
    },
    async refreshArticle(id) {
        const article = await getArticleDetail(id)
        this.setData({
            article
        })
    },
    async refreshRelationArticles() {
        const relations = await getNewsByCategory(0)
        this.setData({
            relations
        })
    },
    //地图移动时, 触发
    regionchange: function(){

    }
})