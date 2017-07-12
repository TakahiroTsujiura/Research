<!DOCTYPE>
<html lang="ja">
<head>
    <meta charset="utf-8" />
    <title>設置サンプル</title>
    <!-- スマートフォン向けviewportの指定 -->
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <!-- Google Maps APIの読み込み -->
    <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
    <script type="text/javascript">
        function initialize() {
            /* 緯度・経度：日本, 表参道駅（東京）*/
            var latlng=new google.maps.LatLng(35.6652470, 139.7123140);
            /* 地図のオプション設定 */
            var myOptions = {
                /*初期のズーム レベル */
                zoom: 5,
                /* 地図の中心点 */
                center: latlng,
                /* 地図タイプ */
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map=new google.maps.Map(document.getElementById("map"), myOptions);
        }
    </script>
    <style type="text/css">
        html, body { margin:0; padding:0; height: 100%}
        
        
         
        
    </style>
</head>
<body onload="initialize()">
    <!-- 地図の埋め込み表示 -->
    <div style="float:left;">
    <id="map">
    </div>
    
    <class="ui-widget">
      <label for="tags">船舶名: </label>
      <input id="tags" />
      <input type="button" value="追加" id="submitbutton" />
    
    
</body>
</html