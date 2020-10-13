/* 

[rewrite_local]
# videoleap
^https:\/\/api\.lightricks\.com\/subscription*Enlight-Video* url script-response-body id77/Script/videoleap.js

[mitm]
hostname = api.lightricks.com
*/


let obj = JSON.parse($response.body);
obj = {
  "latestProductId" : "com.lightricks.EnlightVideo_V2.PJ.1Y.SA_1Y.SA_TRIAL.3D",
  "latestPurchaseDateMs" : 1578662017000,
  "originalPurchaseDateMs" : 1578662017000,
  "originalTransactionId" : obj.originalTransactionId,
  "pendingRenewalInfo" : {
    "nextProductId" : "com.lightricks.EnlightVideo_V2.PJ.1Y.SA_1Y.SA_TRIAL.3D",
    "isAutoRenewEnabled" : false,
    "expirationIntent" : null
  },
  "isExpired" : false,
  "latestTransactionId" : obj.latestTransactionId,
  "latestExpirationDateMs" : 4072497469000,
  "fullRefundDateMs" : null
};
$done({body: JSON.stringify(obj)});
