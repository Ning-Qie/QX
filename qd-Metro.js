var body = $response.body;
var obj = JSON.parse(body);

obj.data.topAds = [];
obj.data.ads = {};
body = JSON.stringify(obj);

console.log(body);

$done(body);
