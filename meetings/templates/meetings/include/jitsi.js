<script>
var jitsiMeetAPIOptions = {
  "useIPv6": false,
  "disableAudioLevels": false,
  "disableSimulcast": false,
  "enableWindowOnErrorHandler": true,
  "disableThirdPartyRequests": false,
  "enableAnalyticsLogging": false,
  "externalStorage": false,
  "callStatsCustomScriptUrl": false,
  "disableRtx": false,
  "disabledCodec": "",
  "preferredCodec": "",
  "useTurnUdp": false,
}

JitsiMeetJS.init();

var connection = new JitsiMeetJS.JitsiConnection(null, null, {"hosts": {"domain": "https://alpha.jitsi.net"}});

  connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED, onConnectionSuccess);
  connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_FAILED, onConnectionFailed);
  connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED, disconnect);

  connection.connect();

  room = connection.initJitsiConference("conference1", confOptions);
  room.on(JitsiMeetJS.events.conference.TRACK_ADDED, onRemoteTrack);
  room.on(JitsiMeetJS.events.conference.CONFERENCE_JOINED, onConferenceJoined);

  JitsiMeetJS.createLocalTracks().then(onLocalTracks);

  room.join();
</script>
