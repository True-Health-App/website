<script src="https://apis.google.com/js/api.js"></script>
<script>
  /**
   * Sample JavaScript code for youtube.videos.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */

  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
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
    return gapi.client.youtube.videos.list({
      "part": "snippet,contentDetails,statistics",
      "id": "p0VwjsZJmYo"
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
    "kind": "youtube#videoListResponse",
    "etag": "\"xwzn9fn_LczrfK9QS3iZcGzqRGs/9GQkYtzXe05gofj2Z-ZNCdDwFb4\"",
    "pageInfo": {
     "totalResults": 1,
     "resultsPerPage": 1
    },
    "items": [
     {
      "kind": "youtube#video",
      "etag": "\"xwzn9fn_LczrfK9QS3iZcGzqRGs/dehS6kRpiZsZaHOzsN4PKVBS2jE\"",
      "id": "p0VwjsZJmYo",
      "snippet": {
       "publishedAt": "2019-04-07T20:57:27.000Z",
       "channelId": "UCPn4FsiQP15nudug9FDhluA",
       "title": "Why the War on Meat??? Find out here from Dr. Gary & Belinda Fettke Podcast #16",
       "description": "Ever wondered why absurd anti-meat articles keep  popping up on the world's media?  Or why EAT-Lancet has sprung from the ashes of low-fat, to promote the guzzling of grains and vegetable oils in preference to real food?\nWell look no further - the answers are in 100 years of the historical record - now revealed here!\n\nTRANSCRIPT:  https://thefatemperor.com/wp-content/uploads/2019/04/Why-the-War-on-Meat-Find-out-here-from-Dr.-Gary-Belinda-Fettke-Podcast-16.pdf\n\nAUDIO PODCAST:  https://anchor.fm/ivor-cummins/episodes/Why-the-War-on-Meat----Find-out-here-from-Dr--Gary--Belinda-Fettke-Podcast-16-e3lusd",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/p0VwjsZJmYo/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/p0VwjsZJmYo/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/p0VwjsZJmYo/hqdefault.jpg",
         "width": 480,
         "height": 360
        },
        "standard": {
         "url": "https://i.ytimg.com/vi/p0VwjsZJmYo/sddefault.jpg",
         "width": 640,
         "height": 480
        },
        "maxres": {
         "url": "https://i.ytimg.com/vi/p0VwjsZJmYo/maxresdefault.jpg",
         "width": 1280,
         "height": 720
        }
       },
       "channelTitle": "Ivor Cummins",
       "tags": [
        "aha2018",
        "cholesterol",
        "cholesterol \\& high cholesterol in blood",
        "diabetes mellitus",
        "keto",
        "keto diet",
        "lchf",
        "ldl",
        "ldl cholesterol",
        "low carb diet",
        "sugar",
        "eat lancet",
        "eat lancet commission",
        "Vegan",
        "vegetarian",
        "propaganda",
        "politics",
        "Corruption",
        "Bias",
        "gary fettke",
        "belinda fettke",
        "low carb down under",
        "APRA",
        "dietary guidelines",
        "MeatHeals",
        "carnivore diet"
       ],
       "categoryId": "28",
       "liveBroadcastContent": "none",
       "defaultLanguage": "en-US",
       "localized": {
        "title": "Why the War on Meat??? Find out here from Dr. Gary & Belinda Fettke Podcast #16",
        "description": "Ever wondered why absurd anti-meat articles keep  popping up on the world's media?  Or why EAT-Lancet has sprung from the ashes of low-fat, to promote the guzzling of grains and vegetable oils in preference to real food?\nWell look no further - the answers are in 100 years of the historical record - now revealed here!\n\nTRANSCRIPT:  https://thefatemperor.com/wp-content/uploads/2019/04/Why-the-War-on-Meat-Find-out-here-from-Dr.-Gary-Belinda-Fettke-Podcast-16.pdf\n\nAUDIO PODCAST:  https://anchor.fm/ivor-cummins/episodes/Why-the-War-on-Meat----Find-out-here-from-Dr--Gary--Belinda-Fettke-Podcast-16-e3lusd"
       },
       "defaultAudioLanguage": "en-US"
      },
      "contentDetails": {
       "duration": "PT44M2S",
       "dimension": "2d",
       "definition": "hd",
       "caption": "false",
       "licensedContent": true,
       "projection": "rectangular"
      },
      "statistics": {
       "viewCount": "41067",
       "likeCount": "2075",
       "dislikeCount": "50",
       "favoriteCount": "0",
       "commentCount": "608"
      }
     }
    ]
   }
   </script>
