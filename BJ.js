hostname = api.m.jd.com, trade-acs.m.taobao.com, 

#京东历史比价-通知
# yichahucha
;^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/jd_price_lite.js

# Tartarus2014 通知
;^https?://api\.m\.jd\.com/(client\.action|api)\?functionId=(wareBusiness|serverConfig|basicConfig|lite_wareBusiness|pingou_item) url script-response-body https://raw.githubusercontent.com/Tartarus2014/Script/master/jd_price_lite.js
# tg网友内置
;^https?://api\.m\.jd\.com/(client\.action|api)\?functionId=(wareBusiness|serverConfig|basicConfig|lite_wareBusiness|pingou_item) url script-response-body https://raw.githubusercontent.com/kan3Git/Script/main/jd_price_lite.js

^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://service.2ti.st/QuanX/Script/jd_tb_price/main.js

#京东历史比价-内置版 (by yichahucha)
;^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/jd_price.js

#淘宝历史比价-通知版(by yichahucha)
;^http://.+/amdc/mobileDispatch url script-request-body https://raw.githubusercontent.com/yichahucha/surge/master/tb_price_lite.js
;^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/tb_price_lite.js
