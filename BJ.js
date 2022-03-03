hostname = api.m.jd.com, trade-acs.m.taobao.com,

# Tartarus2014 通知
# 京东比价
^https?://api\.m\.jd\.com/(client\.action|api)\?functionId=(wareBusiness|serverConfig|basicConfig|lite_wareBusiness|pingou_item) url script-response-body https://raw.githubusercontent.com/Tartarus2014/Script/master/jdjf_price.js

#淘宝历史比价-通知版(by yichahucha)
;^http://.+/amdc/mobileDispatch url script-request-body https://raw.githubusercontent.com/yichahucha/surge/master/tb_price_lite.js
;^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/tb_price_lite.js
