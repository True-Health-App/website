<script src="https://apis.google.com/js/api.js"></script>
<script>
  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("YOUR_API_KEY");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.captions.list({
      "part": "snippet",
      "videoId": "p0VwjsZJmYo"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
  });
</script>
<button onclick="authenticate().then(loadClient)">authorize and load</button>
<button onclick="execute()">execute</button>


<script>
    var response = {
 "kind": "youtube#captionListResponse",
 "etag": "\"xwzn9fn_LczrfK9QS3iZcGzqRGs/fJDQ-WKt1IcMyVwWXydjIT8JvAI\"",
 "items": [
  {
   "kind": "youtube#caption",
   "etag": "\"xwzn9fn_LczrfK9QS3iZcGzqRGs/tVAS_3iTIEW_7OJ6B4_4flWKtlU\"",
   "id": "gGFJdZUd5COkgIgKXlUEsVSmgceqDEGAHCRR8xMhC0E=",
   "snippet": {
    "videoId": "p0VwjsZJmYo",
    "lastUpdated": "2019-04-07T22:28:44.192Z",
    "trackKind": "ASR",
    "language": "en",
    "name": "",
    "audioTrackType": "unknown",
    "isCC": false,
    "isLarge": false,
    "isEasyReader": false,
    "isDraft": false,
    "isAutoSynced": false,
    "status": "serving"
   }
  }
 ]
}

curl \
  'https://www.googleapis.com/youtube/v3/captions/gGFJdZUd5COkgIgKXlUEsVSmgceqDEGAHCRR8xMhC0E%3D?key=[YOUR_API_KEY]' \
  --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
  --header 'Accept: application/json' \
  --compressed

  GET https://www.googleapis.com/youtube/v3/captions/gGFJdZUd5COkgIgKXlUEsVSmgceqDEGAHCRR8xMhC0E%3D?key=[YOUR_API_KEY] HTTP/1.1

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json

</script>

