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
    
    toMore:function(e){
        console.log("--------------> detail",e.currentTarget.dataset.link)
        wx.navigateTo({
          url: '../../pages/newswebview/newswebview?link='+e.currentTarget.dataset.link
        })
    },
    onLoad: function (options) {
        // console.log("---detail.link>>>:", options)
        // this.refreshArticle(1)
        const articles = {
            "title": options.title,
            "abstract": options.abstract,
            "link": options.link
        }
        console.log("++++++ link detail.js", options.link)

        this.setData({
            article:articles
        })
        // this.refreshRelationArticles()
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
    }
})