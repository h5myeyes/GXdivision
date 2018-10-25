$(function() {
    var init = function() {
       

        var app = new Vue({
            el: "#GXdivision",
            data: {
                navbars: ['推荐', '天盛长歌', '精选视频', '一天一片', '权益特惠'],
                links: [
                    'https://m.miguvideo.com/wap/resource/migu/miguH5/index.jsp?nodeId=70043613',
                    'https://sphy.gnettechnology.cn/api/iqiyi/pay/index?gtcode=14nmc84k',
                    'https://m.miguvideo.com/wap/resource/migu/miguH5/index.jsp?nodeId=70032516',
                    'https://m.miguvideo.com/wap/resource/migu/common/freeDayTemplate.jsp?channelid=90010000026'
                ],
                discounts: [
                    {
                        'imgUrl': 'img/GXdivision1.png',
                        'title': '无门槛领30G',
                        'time': '201808-201812',
                        'link': "window.open('http://gx.10086.cn/zt-portal/wap/sprom/0ymgspllb30g/view?productNo=212099531905')"
                    },
                    {
                        'imgUrl': 'img/GXdivision2.png',
                        'title': '30G大视频流量包',
                        'time': '201808-201812',
                        'link': "window.open('http://m.miguvideo.com/wap/resource/migu/subject/get30G.jsp?from=singlemessage&isappinstalled=0')"
                    },
                    {
                        'imgUrl': 'img/GXdivision3.png',
                        'title': '3个月会员体验',
                        'time': '201808-201812',
                        'link': "window.open('http://gx.10086.cn/zt-portal/wap/promoaccept/hywshf3M/view?productNo=196199800481_310010000766_0&from=groupmessage&isappinstalled=0')"
                    },
                ],
                iframeW: '',
                iframeH: '',
                navbarI: '',
                wrapperI: 0,
                equityIsShow: false,
            },
            created: function () {
                

            },
            methods: {
                tabChange: function (index, item) {
                    this.wrapperI = index;
                    let moveL = -iframeW * 1 ;
                    if (index == 4 ) {
                        $(".wrapperUl").css("left", moveL + "px")
                    } else {
                        $("iframe").attr("src",this.links[index]);
                        $(".wrapperUl").css("left", "0px")
                    }
                    console.info('========', index, item, this.links[index])
                    _czc.push(['_trackEvent', '广西视频专区', item]);

                },
                equityChange: function (index, item) {
                    console.info(item.title)
                    _czc.push(['_trackEvent', '权益特惠', item.title]);
                },
                loadingEng: function () {
                    this.loadingIsShow = false;
                },
                getWH: function () {
                    iframeW = $(document).width();
                    iframeH = $(document).height() - 44;
                    
                }
            },
            mounted: function () {     
                this.getWH();
            } 
        })
    };
    init();
})