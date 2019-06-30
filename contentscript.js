var div = document.createElement('script');
div.innerHTML=`
function removeAd() {
	videoEvents.ad.firstPlay = !1,
		document.querySelector(".rkl-button").classList.remove("skip"),
		videoEvents.ad.active = !1,
		videoEvents.ad.actionSaved = !1,
		videoEvents.ad.skipCheck = !1,
		videoPlayer = document.querySelector("#video"),
		player.classList.remove("cuepoint"),
		videoEvents.ad.hls ? videoEvents.ad.hls.destroy() : videoEvents.ad.player.pause(),
		totalTime && (totalTime.innerText = videoEvents.formatDuration(originalPlayer.dataset.seconds)),
		console.log("video duration:", videoPlayer.duration),
		isLive === "True" ? videoPlayer.currentTime = videoPlayer.duration === Infinity || isNaN(videoPlayer.duration) ? hlsPlayer.liveSyncPosition : videoPlayer.duration - 6 : lastUpdateSeconds == 0 ? (videoEvents.handleTimestamp.hasTimestampCheck = !1,
			videoEvents.handleTimestamp.check(),
			lastUpdateSeconds = videoPlayer.currentTime) : videoPlayer.currentTime = lastUpdateSeconds - 2 >= 0 ? lastUpdateSeconds - 2 : lastUpdateSeconds,
		document.querySelector("#video").volume = document.querySelector("#vad").volume,
		document.querySelector("#video").muted = document.querySelector("#vad").muted,
		videoEvents.handleTimestamp.check(),
		videoPlayer.play()
}
function checkForAdRemoval() {
	if(videoEvents && videoEvents.ad.active == 1) {
        console.log("remove ad");
		removeAd();
	}
}
var mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
		checkForAdRemoval();
    });
  });
mutationObserver.observe(document.documentElement, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});
`;
document.body.appendChild(div);
