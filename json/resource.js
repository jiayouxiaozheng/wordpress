(function (w) {
	var resourceJson=[
		{
    	  name:"斗破苍穹漫画",
    	  type:"doupo",
    	  source:"yantai",
    	  imgUrl:[
            "http://mhpic.mh51.com/comic/D%2F%E6%96%97%E7%A0%B4%E8%8B%8D%E7%A9%B9%2F",
            "http://mhpic.mh51.com/comic/D%2F%E6%96%97%E7%A0%B4%E8%8B%8D%E7%A9%B9%E6%8B%86%E5%88%86%E7%89%88%2F"
    	  ],
    	  // articleUrl:"http://www.zhengwenjie.com/wordpress/doupocangqiong",
    	  articleNum:326,
    	  articleListNum:326,
    	  webUrl:"http://www.manhuatai.com/doupocangqiong/"
		},
		{
    	  name:"砂与海漫画",
    	  type:"shahai",
    	  source:"yantai",
    	  imgUrl:[
            "http://mhpic.mh51.com/comic/S%2F%E7%A0%82%E4%B8%8E%E6%B5%B7%E4%B9%8B%E6%AD%8C%2F"
    	  ],
    	  // articleUrl:"http://www.zhengwenjie.com/wordpress/shayuhai",
    	  articleNum:328,
    	  articleListNum:328,
    	  webUrl:"http://www.manhuatai.com/shayuhaizhige/"
		},
        {
          name:"绝世唐门漫画",
          type:"jueshitangmen",
          source:"yantai",
          imgUrl:[
            "http://mhpic.mh51.com/comic/J%2F%E7%BB%9D%E4%B8%96%E5%94%90%E9%97%A8%2F"
          ],
          // articleUrl:"http://www.zhengwenjie.com/wordpress/shayuhai",
          articleNum:402,
          articleListNum:402,
          webUrl:"http://www.manhuatai.com/jueshitangmen/"
        },
        {
          name:"斗罗大陆漫画",
          type:"douluo",
          source:"yantai",
          imgUrl:[
            "http://mhpic.mh51.com/comic/D%2F%E6%96%97%E7%BD%97%E5%A4%A7%E9%99%86%E6%8B%86%E5%88%86%E7%89%88%2F"
          ],
          articleNum:451,
          articleListNum:451,
          webUrl:"http://www.manhuatai.com/douluodalu/"
        },
        {
          name:"偷星九月天漫画",
          type:"touxing",
          source:"yantai",
          imgUrl:[
            "http://mhpic.mh51.com/comic/T%2F%E5%81%B7%E6%98%9F%E4%B9%9D%E6%9C%88%E5%A4%A9%2F"
          ],
          articleNum:447,
          articleListNum:447,
          webUrl:"http://www.manhuatai.com/touxingjiuyuetian/"
        },
        {
          name:"霸道忠犬寻爱记漫画",
          type:"badaozongquan",
          source:"yantai",
          imgUrl:[
            "http://mhpic.mh51.com/comic/B%2F%E9%9C%B8%E9%81%93%E5%BF%A0%E7%8A%AC%E5%AF%BB%E7%88%B1%E8%AE%B0%2F"
          ],
          articleNum:456,
          articleListNum:456,
          webUrl:"http://www.manhuatai.com/bdzqxaj/"
        },
		{
    	  name:"纯情花嫁漫画",
    	  type:"cunqinghuajia",
    	  source:"yantai",
    	  imgUrl:[
    	    "http://mhpic.mh51.com/comic/C%2F%E7%BA%AF%E6%83%85%E4%B8%AB%E5%A4%B4%E7%81%AB%E8%BE%A3%E8%BE%A3%2F"
    	  ],
    	  articleNum:460,
    	  articleListNum:460,
    	  webUrl:"http://www.manhuatai.com/chunqingyatouhuolala/"
		},
		{
    	  name:"一拳超人漫画",
    	  type:"yiquan",
    	  source:"feiwan",
    	  imgUrl:[
            "http://img.feiwan.net/yqcr/manhua/"
    	  ],
    	  articleNum:330,
    	  articleListNum:330,
    	  webUrl:"http://yqcr.feiwan.net/manhua/"
		},{
    	  name:"东京食尸鬼RE漫画",
    	  type:"ssg",
    	  source:"feiwan",
    	  imgUrl:[
            "http://img.feiwan.net/ssg/xiangguan/RE"
    	  ],
    	  articleNum:386,
    	  articleListNum:386,
    	  webUrl:"http://ssg.feiwan.net/xiangguan/"
		},{
          name:"全职猎人漫画",
          type:"lieren",
          source:"feiwan",
          imgUrl:[
            "http://img.feiwan.net/hunter/manhua/"
          ],
          articleNum:395,
          articleListNum:395,
          webUrl:"http://hunter.feiwan.net/manhua/"
        },{
    	  name:"进击的巨人漫画",
    	  type:"juren",
    	  source:"feiwan",
    	  imgUrl:[
            "http://img.feiwan.net/juren/manhua/"
    	  ],
    	  articleNum:464,
    	  articleListNum:464,
    	  webUrl:"http://juren.feiwan.net/manhua/"
		}
	];
    
    //主函数
	function ResourceFun() {
		
	}
    
    //返回json数据
	ResourceFun.prototype.returnJsonFun=function () {
		return resourceJson;
	}
    
    //返回html
	ResourceFun.prototype.returnHtmlFun=function () {
		var html="";
		for (var i = 0,len=resourceJson.length;i<len; i++) {
			  var data=resourceJson[i];
			  html+='<ul>'+
					   	'<li>'+
					   	    '<input  checked="checked" type="checkbox">'+
					   		'<input type="text" class="name" value="'+data.name+'" disabled>'+
					   		'<input type="hidden" class="type" value="'+data.type+'" disabled>'+
					   		'<input type="text" class="maxNum" value="10" placeholder="编辑最新集数">'+
					   		'<a href="'+encodeURI(data.webUrl)+'" target="_blank">'+data.name+'资源网站'+'</a>'+
					   		'<button class="createJson">生成</button>'+
					   		'<button class="deleteLi">删除</button>'+
					   	'</li>'+
			        '</ul>';
		}

		return html;
	}

    w.ResourceFun=ResourceFun;
})(window)
