"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/**
 * @ignore
 */
var API_TYPE;
(function (API_TYPE) {
    API_TYPE[API_TYPE["INITIALIZE"] = 0] = "INITIALIZE";
    API_TYPE[API_TYPE["RELEASE"] = 1] = "RELEASE";
    API_TYPE[API_TYPE["SET_CHANNEL_PROFILE"] = 2] = "SET_CHANNEL_PROFILE";
    API_TYPE[API_TYPE["SET_CLIENT_ROLE"] = 3] = "SET_CLIENT_ROLE";
    API_TYPE[API_TYPE["JOIN_CHANNEL"] = 4] = "JOIN_CHANNEL";
    API_TYPE[API_TYPE["SWITCH_CHANNEL"] = 5] = "SWITCH_CHANNEL";
    API_TYPE[API_TYPE["LEAVE_CHANNEL"] = 6] = "LEAVE_CHANNEL";
    API_TYPE[API_TYPE["RE_NEW_TOKEN"] = 7] = "RE_NEW_TOKEN";
    API_TYPE[API_TYPE["REGISTER_LOCAL_USER_ACCOUNT"] = 8] = "REGISTER_LOCAL_USER_ACCOUNT";
    API_TYPE[API_TYPE["JOIN_CHANNEL_WITH_USER_ACCOUNT"] = 9] = "JOIN_CHANNEL_WITH_USER_ACCOUNT";
    API_TYPE[API_TYPE["GET_USER_INFO_BY_USER_ACCOUNT"] = 10] = "GET_USER_INFO_BY_USER_ACCOUNT";
    API_TYPE[API_TYPE["GET_USER_INFO_BY_UID"] = 11] = "GET_USER_INFO_BY_UID";
    API_TYPE[API_TYPE["START_ECHO_TEST"] = 12] = "START_ECHO_TEST";
    API_TYPE[API_TYPE["START_ECHO_TEST_2"] = 13] = "START_ECHO_TEST_2";
    API_TYPE[API_TYPE["STOP_ECHO_TEST"] = 14] = "STOP_ECHO_TEST";
    API_TYPE[API_TYPE["ENABLE_VIDEO"] = 15] = "ENABLE_VIDEO";
    API_TYPE[API_TYPE["DISABLE_VIDEO"] = 16] = "DISABLE_VIDEO";
    API_TYPE[API_TYPE["SET_VIDEO_PROFILE"] = 17] = "SET_VIDEO_PROFILE";
    API_TYPE[API_TYPE["SET_VIDEO_ENCODER_CONFIGURATION"] = 18] = "SET_VIDEO_ENCODER_CONFIGURATION";
    API_TYPE[API_TYPE["SET_CAMERA_CAPTURER_CONFIGURATION"] = 19] = "SET_CAMERA_CAPTURER_CONFIGURATION";
    API_TYPE[API_TYPE["SET_UP_LOCAL_VIDEO"] = 20] = "SET_UP_LOCAL_VIDEO";
    API_TYPE[API_TYPE["SET_UP_REMOTE_VIDEO"] = 21] = "SET_UP_REMOTE_VIDEO";
    API_TYPE[API_TYPE["START_PREVIEW"] = 22] = "START_PREVIEW";
    API_TYPE[API_TYPE["SET_REMOTE_USER_PRIORITY"] = 23] = "SET_REMOTE_USER_PRIORITY";
    API_TYPE[API_TYPE["STOP_PREVIEW"] = 24] = "STOP_PREVIEW";
    API_TYPE[API_TYPE["ENABLE_AUDIO"] = 25] = "ENABLE_AUDIO";
    API_TYPE[API_TYPE["ENABLE_LOCAL_AUDIO"] = 26] = "ENABLE_LOCAL_AUDIO";
    API_TYPE[API_TYPE["DISABLE_AUDIO"] = 27] = "DISABLE_AUDIO";
    API_TYPE[API_TYPE["SET_AUDIO_PROFILE"] = 28] = "SET_AUDIO_PROFILE";
    API_TYPE[API_TYPE["MUTE_LOCAL_AUDIO_STREAM"] = 29] = "MUTE_LOCAL_AUDIO_STREAM";
    API_TYPE[API_TYPE["MUTE_ALL_REMOTE_AUDIO_STREAMS"] = 30] = "MUTE_ALL_REMOTE_AUDIO_STREAMS";
    API_TYPE[API_TYPE["SET_DEFAULT_MUTE_ALL_REMOTE_AUDIO_STREAMS"] = 31] = "SET_DEFAULT_MUTE_ALL_REMOTE_AUDIO_STREAMS";
    API_TYPE[API_TYPE["ADJUST_USER_PLAYBACK_SIGNAL_VOLUME"] = 32] = "ADJUST_USER_PLAYBACK_SIGNAL_VOLUME";
    API_TYPE[API_TYPE["MUTE_REMOTE_AUDIO_STREAM"] = 33] = "MUTE_REMOTE_AUDIO_STREAM";
    API_TYPE[API_TYPE["MUTE_LOCAL_VIDEO_STREAM"] = 34] = "MUTE_LOCAL_VIDEO_STREAM";
    API_TYPE[API_TYPE["ENABLE_LOCAL_VIDEO"] = 35] = "ENABLE_LOCAL_VIDEO";
    API_TYPE[API_TYPE["MUTE_ALL_REMOTE_VIDEO_STREAMS"] = 36] = "MUTE_ALL_REMOTE_VIDEO_STREAMS";
    API_TYPE[API_TYPE["SET_DEFAULT_MUTE_ALL_REMOTE_VIDEO_STREAMS"] = 37] = "SET_DEFAULT_MUTE_ALL_REMOTE_VIDEO_STREAMS";
    API_TYPE[API_TYPE["MUTE_REMOTE_VIDEO_STREAM"] = 38] = "MUTE_REMOTE_VIDEO_STREAM";
    API_TYPE[API_TYPE["SET_REMOTE_VIDEO_STREAM_TYPE"] = 39] = "SET_REMOTE_VIDEO_STREAM_TYPE";
    API_TYPE[API_TYPE["SET_REMOTE_DEFAULT_VIDEO_STREAM_TYPE"] = 40] = "SET_REMOTE_DEFAULT_VIDEO_STREAM_TYPE";
    API_TYPE[API_TYPE["ENABLE_AUDIO_VOLUME_INDICATION"] = 41] = "ENABLE_AUDIO_VOLUME_INDICATION";
    API_TYPE[API_TYPE["START_AUDIO_RECORDING"] = 42] = "START_AUDIO_RECORDING";
    API_TYPE[API_TYPE["START_AUDIO_RECORDING2"] = 43] = "START_AUDIO_RECORDING2";
    API_TYPE[API_TYPE["STOP_AUDIO_RECORDING"] = 44] = "STOP_AUDIO_RECORDING";
    API_TYPE[API_TYPE["ENABLE_FACE_DETECTION"] = 62] = "ENABLE_FACE_DETECTION";
    API_TYPE[API_TYPE["SET_REMOTE_VOICE_POSITIONN"] = 73] = "SET_REMOTE_VOICE_POSITIONN";
    API_TYPE[API_TYPE["SET_LOG_FILE"] = 79] = "SET_LOG_FILE";
    API_TYPE[API_TYPE["SET_LOG_FILTER"] = 80] = "SET_LOG_FILTER";
    API_TYPE[API_TYPE["SET_LOG_FILE_SIZE"] = 81] = "SET_LOG_FILE_SIZE";
    API_TYPE[API_TYPE["SET_LOCAL_RENDER_MODE"] = 82] = "SET_LOCAL_RENDER_MODE";
    API_TYPE[API_TYPE["SET_LOCAL_RENDER_MODE_2"] = 83] = "SET_LOCAL_RENDER_MODE_2";
    API_TYPE[API_TYPE["SET_REMOTE_RENDER_MODE"] = 84] = "SET_REMOTE_RENDER_MODE";
    API_TYPE[API_TYPE["SET_REMOTE_RENDER_MODE_2"] = 85] = "SET_REMOTE_RENDER_MODE_2";
    API_TYPE[API_TYPE["SET_LOCAL_VIDEO_MIRROR_MODE"] = 86] = "SET_LOCAL_VIDEO_MIRROR_MODE";
    API_TYPE[API_TYPE["ENABLE_DUAL_STREAM_MODE"] = 87] = "ENABLE_DUAL_STREAM_MODE";
    API_TYPE[API_TYPE["ADJUST_RECORDING_SIGNAL_VOLUME"] = 93] = "ADJUST_RECORDING_SIGNAL_VOLUME";
    API_TYPE[API_TYPE["ADJUST_PLAYBACK_SIGNAL_VOLUME"] = 94] = "ADJUST_PLAYBACK_SIGNAL_VOLUME";
    API_TYPE[API_TYPE["ENABLE_WEB_SDK_INTEROPER_ABILITY"] = 95] = "ENABLE_WEB_SDK_INTEROPER_ABILITY";
    API_TYPE[API_TYPE["SET_VIDEO_QUALITY_PARAMETERS"] = 96] = "SET_VIDEO_QUALITY_PARAMETERS";
    API_TYPE[API_TYPE["SET_LOCAL_PUBLISH_FALLBACK_OPTION"] = 97] = "SET_LOCAL_PUBLISH_FALLBACK_OPTION";
    API_TYPE[API_TYPE["SET_REMOTE_SUBSCRIBE_FALLBACK_OPTION"] = 98] = "SET_REMOTE_SUBSCRIBE_FALLBACK_OPTION";
    API_TYPE[API_TYPE["SWITCH_CAMERA"] = 99] = "SWITCH_CAMERA";
    API_TYPE[API_TYPE["SWITCH_CAMERA_2"] = 100] = "SWITCH_CAMERA_2";
    API_TYPE[API_TYPE["SET_DEFAULT_AUDIO_ROUTE_SPEAKER_PHONE"] = 101] = "SET_DEFAULT_AUDIO_ROUTE_SPEAKER_PHONE";
    API_TYPE[API_TYPE["SET_ENABLE_SPEAKER_PHONE"] = 102] = "SET_ENABLE_SPEAKER_PHONE";
    API_TYPE[API_TYPE["ENABLE_IN_EAR_MONITORING"] = 103] = "ENABLE_IN_EAR_MONITORING";
    API_TYPE[API_TYPE["SET_IN_EAR_MONITORING_VOLUME"] = 104] = "SET_IN_EAR_MONITORING_VOLUME";
    API_TYPE[API_TYPE["IS_SPEAKER_PHONE_ENABLED"] = 105] = "IS_SPEAKER_PHONE_ENABLED";
    API_TYPE[API_TYPE["SET_AUDIO_SESSION_OPERATION_RESTRICTION"] = 106] = "SET_AUDIO_SESSION_OPERATION_RESTRICTION";
    API_TYPE[API_TYPE["ENABLE_LOOP_BACK_RECORDING"] = 107] = "ENABLE_LOOP_BACK_RECORDING";
    API_TYPE[API_TYPE["START_SCREEN_CAPTURE_BY_DISPLAY_ID"] = 108] = "START_SCREEN_CAPTURE_BY_DISPLAY_ID";
    API_TYPE[API_TYPE["START_SCREEN_CAPTURE_BY_SCREEN_RECT"] = 109] = "START_SCREEN_CAPTURE_BY_SCREEN_RECT";
    API_TYPE[API_TYPE["START_SCREEN_CAPTURE_BY_WINDOW_ID"] = 110] = "START_SCREEN_CAPTURE_BY_WINDOW_ID";
    API_TYPE[API_TYPE["SET_SCREEN_CAPTURE_CONTENT_HINT"] = 111] = "SET_SCREEN_CAPTURE_CONTENT_HINT";
    API_TYPE[API_TYPE["UPDATE_SCREEN_CAPTURE_PARAMETERS"] = 112] = "UPDATE_SCREEN_CAPTURE_PARAMETERS";
    API_TYPE[API_TYPE["UPDATE_SCREEN_CAPTURE_REGION"] = 113] = "UPDATE_SCREEN_CAPTURE_REGION";
    API_TYPE[API_TYPE["STOP_SCREEN_CAPTURE"] = 114] = "STOP_SCREEN_CAPTURE";
    API_TYPE[API_TYPE["GET_CALL_ID"] = 117] = "GET_CALL_ID";
    API_TYPE[API_TYPE["RATE"] = 118] = "RATE";
    API_TYPE[API_TYPE["COMPLAIN"] = 119] = "COMPLAIN";
    API_TYPE[API_TYPE["GET_VERSION"] = 120] = "GET_VERSION";
    API_TYPE[API_TYPE["ENABLE_LAST_MILE_TEST"] = 121] = "ENABLE_LAST_MILE_TEST";
    API_TYPE[API_TYPE["DISABLE_LAST_MILE_TEST"] = 122] = "DISABLE_LAST_MILE_TEST";
    API_TYPE[API_TYPE["START_LAST_MILE_PROBE_TEST"] = 123] = "START_LAST_MILE_PROBE_TEST";
    API_TYPE[API_TYPE["STOP_LAST_MILE_PROBE_TEST"] = 124] = "STOP_LAST_MILE_PROBE_TEST";
    API_TYPE[API_TYPE["GET_ERROR_DESCRIPTION"] = 125] = "GET_ERROR_DESCRIPTION";
    API_TYPE[API_TYPE["SET_ENCRYPTION_SECTRT"] = 126] = "SET_ENCRYPTION_SECTRT";
    API_TYPE[API_TYPE["SET_ENCRYPTION_MODE"] = 127] = "SET_ENCRYPTION_MODE";
    API_TYPE[API_TYPE["REGISTER_PACKET_OBSERVER"] = 128] = "REGISTER_PACKET_OBSERVER";
    API_TYPE[API_TYPE["CREATE_DATA_STREAM"] = 129] = "CREATE_DATA_STREAM";
    API_TYPE[API_TYPE["SEND_STREAM_MESSAGE"] = 130] = "SEND_STREAM_MESSAGE";
    API_TYPE[API_TYPE["ADD_PUBLISH_STREAM_URL"] = 131] = "ADD_PUBLISH_STREAM_URL";
    API_TYPE[API_TYPE["REMOVE_PUBLISH_STREAM_URL"] = 132] = "REMOVE_PUBLISH_STREAM_URL";
    API_TYPE[API_TYPE["SET_LIVE_TRANSCODING"] = 133] = "SET_LIVE_TRANSCODING";
    API_TYPE[API_TYPE["ADD_VIDEO_WATER_MARK"] = 134] = "ADD_VIDEO_WATER_MARK";
    API_TYPE[API_TYPE["ADD_VIDEO_WATER_MARK_2"] = 135] = "ADD_VIDEO_WATER_MARK_2";
    API_TYPE[API_TYPE["CLEAR_VIDEO_WATER_MARKS"] = 136] = "CLEAR_VIDEO_WATER_MARKS";
    API_TYPE[API_TYPE["SET_BEAUTY_EFFECT_OPTIONS"] = 137] = "SET_BEAUTY_EFFECT_OPTIONS";
    API_TYPE[API_TYPE["ADD_INJECT_STREAM_URL"] = 138] = "ADD_INJECT_STREAM_URL";
    API_TYPE[API_TYPE["START_CHANNEL_MEDIA_RELAY"] = 139] = "START_CHANNEL_MEDIA_RELAY";
    API_TYPE[API_TYPE["UPDATE_CHANNEL_MEDIA_RELAY"] = 140] = "UPDATE_CHANNEL_MEDIA_RELAY";
    API_TYPE[API_TYPE["STOP_CHANNEL_MEDIA_RELAY"] = 141] = "STOP_CHANNEL_MEDIA_RELAY";
    API_TYPE[API_TYPE["REMOVE_INJECT_STREAM_URL"] = 142] = "REMOVE_INJECT_STREAM_URL";
    API_TYPE[API_TYPE["GET_CONNECTION_STATE"] = 143] = "GET_CONNECTION_STATE";
    API_TYPE[API_TYPE["REGISTER_MEDIA_META_DATA_OBSERVER"] = 144] = "REGISTER_MEDIA_META_DATA_OBSERVER";
    API_TYPE[API_TYPE["SET_PARAMETERS"] = 145] = "SET_PARAMETERS";
    API_TYPE[API_TYPE["SET_PLAYBACK_DEVICE_VOLUME"] = 146] = "SET_PLAYBACK_DEVICE_VOLUME";
    API_TYPE[API_TYPE["PUBLISH"] = 147] = "PUBLISH";
    API_TYPE[API_TYPE["UNPUBLISH"] = 148] = "UNPUBLISH";
    API_TYPE[API_TYPE["CHANNEL_ID"] = 149] = "CHANNEL_ID";
    API_TYPE[API_TYPE["SEND_METADATA"] = 150] = "SEND_METADATA";
    API_TYPE[API_TYPE["SET_MAX_META_SIZE"] = 151] = "SET_MAX_META_SIZE";
    API_TYPE[API_TYPE["PUSH_AUDIO_FRAME"] = 152] = "PUSH_AUDIO_FRAME";
    API_TYPE[API_TYPE["PUSH_AUDIO_FRAME_2"] = 153] = "PUSH_AUDIO_FRAME_2";
    API_TYPE[API_TYPE["PULL_AUDIO_FRAME"] = 154] = "PULL_AUDIO_FRAME";
    API_TYPE[API_TYPE["SET_EXTERN_VIDEO_SOURCE"] = 155] = "SET_EXTERN_VIDEO_SOURCE";
    API_TYPE[API_TYPE["PUSH_VIDEO_FRAME"] = 156] = "PUSH_VIDEO_FRAME";
    API_TYPE[API_TYPE["ENABLE_ENCRYPTION"] = 157] = "ENABLE_ENCRYPTION";
    API_TYPE[API_TYPE["SEND_CUSTOM_REPORT_MESSAGE"] = 158] = "SEND_CUSTOM_REPORT_MESSAGE";
    API_TYPE[API_TYPE["REGISTER_VIDEO_FRAME_OBSERVER"] = 159] = "REGISTER_VIDEO_FRAME_OBSERVER";
    API_TYPE[API_TYPE["ENABLE_REMOTE_SUPER_RESOLUTION"] = 160] = "ENABLE_REMOTE_SUPER_RESOLUTION";
})(API_TYPE || (API_TYPE = {}));
/**
 * @ignore
 */
var API_TYPE_AUDIO_EFFECT;
(function (API_TYPE_AUDIO_EFFECT) {
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["START_AUDIO_MIXING"] = 45] = "START_AUDIO_MIXING";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["STOP_AUDIO_MIXING"] = 46] = "STOP_AUDIO_MIXING";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["PAUSE_AUDIO_MIXING"] = 47] = "PAUSE_AUDIO_MIXING";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["RESUME_AUDIO_MIXING"] = 48] = "RESUME_AUDIO_MIXING";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["SET_HIGH_QUALITY_AUDIO_PARAMETERS"] = 49] = "SET_HIGH_QUALITY_AUDIO_PARAMETERS";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["ADJUST_AUDIO_MIXING_VOLUME"] = 50] = "ADJUST_AUDIO_MIXING_VOLUME";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["ADJUST_AUDIO_MIXING_PLAYOUT_VOLUME"] = 51] = "ADJUST_AUDIO_MIXING_PLAYOUT_VOLUME";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["GET_AUDIO_MIXING_PLAYOUT_VOLUME"] = 52] = "GET_AUDIO_MIXING_PLAYOUT_VOLUME";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["ADJUST_AUDIO_MIXING_PUBLISH_VOLUME"] = 53] = "ADJUST_AUDIO_MIXING_PUBLISH_VOLUME";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["GET_AUDIO_MIXING_PUBLISH_VOLUME"] = 54] = "GET_AUDIO_MIXING_PUBLISH_VOLUME";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["GET_AUDIO_MIXING_DURATION"] = 55] = "GET_AUDIO_MIXING_DURATION";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["GET_AUDIO_MIXING_CURRENT_POSITION"] = 56] = "GET_AUDIO_MIXING_CURRENT_POSITION";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["SET_AUDIO_MIXING_POSITION"] = 57] = "SET_AUDIO_MIXING_POSITION";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["SET_AUDIO_MIXING_PITCH"] = 58] = "SET_AUDIO_MIXING_PITCH";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["GET_EFFECTS_VOLUME"] = 59] = "GET_EFFECTS_VOLUME";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["SET_EFFECTS_VOLUME"] = 60] = "SET_EFFECTS_VOLUME";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["SET_VOLUME_OF_EFFECT"] = 61] = "SET_VOLUME_OF_EFFECT";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["PLAY_EFFECT"] = 63] = "PLAY_EFFECT";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["STOP_EFFECT"] = 64] = "STOP_EFFECT";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["STOP_ALL_EFFECTS"] = 65] = "STOP_ALL_EFFECTS";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["PRE_LOAD_EFFECT"] = 66] = "PRE_LOAD_EFFECT";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["UN_LOAD_EFFECT"] = 67] = "UN_LOAD_EFFECT";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["PAUSE_EFFECT"] = 68] = "PAUSE_EFFECT";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["PAUSE_ALL_EFFECTS"] = 69] = "PAUSE_ALL_EFFECTS";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["RESUME_EFFECT"] = 70] = "RESUME_EFFECT";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["RESUME_ALL_EFFECTS"] = 71] = "RESUME_ALL_EFFECTS";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["ENABLE_SOUND_POSITION_INDICATION"] = 72] = "ENABLE_SOUND_POSITION_INDICATION";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["SET_LOCAL_VOICE_PITCH"] = 74] = "SET_LOCAL_VOICE_PITCH";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["SET_LOCAL_VOICE_EQUALIZATION"] = 75] = "SET_LOCAL_VOICE_EQUALIZATION";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["SET_LOCAL_VOICE_REVERB"] = 76] = "SET_LOCAL_VOICE_REVERB";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["SET_LOCAL_VOICE_CHANGER"] = 77] = "SET_LOCAL_VOICE_CHANGER";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["SET_LOCAL_VOICE_REVERB_PRESET"] = 78] = "SET_LOCAL_VOICE_REVERB_PRESET";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["SET_EXTERNAL_AUDIO_SOURCE"] = 88] = "SET_EXTERNAL_AUDIO_SOURCE";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["SET_EXTERNAL_AUDIO_SINK"] = 89] = "SET_EXTERNAL_AUDIO_SINK";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["SET_RECORDING_AUDIO_FRAME_PARAMETERS"] = 90] = "SET_RECORDING_AUDIO_FRAME_PARAMETERS";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["SET_PLAYBACK_AUDIO_FRAME_PARAMETERS"] = 91] = "SET_PLAYBACK_AUDIO_FRAME_PARAMETERS";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["SET_MIXED_AUDIO_FRAME_PARAMETERS"] = 92] = "SET_MIXED_AUDIO_FRAME_PARAMETERS";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["SET_VOICE_BEAUTIFIER_PRESET"] = 93] = "SET_VOICE_BEAUTIFIER_PRESET";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["SET_AUDIO_EFFECT_PRESET"] = 94] = "SET_AUDIO_EFFECT_PRESET";
    API_TYPE_AUDIO_EFFECT[API_TYPE_AUDIO_EFFECT["SET_AUDIO_EFFECT_PARAMETERS"] = 95] = "SET_AUDIO_EFFECT_PARAMETERS";
})(API_TYPE_AUDIO_EFFECT || (API_TYPE_AUDIO_EFFECT = {}));
/**
 * @ignore
 */
var API_TYPE_DEVICE_MANAGER;
(function (API_TYPE_DEVICE_MANAGER) {
    API_TYPE_DEVICE_MANAGER[API_TYPE_DEVICE_MANAGER["GET_COUNT"] = 151] = "GET_COUNT";
    API_TYPE_DEVICE_MANAGER[API_TYPE_DEVICE_MANAGER["GET_DEVICE"] = 152] = "GET_DEVICE";
    API_TYPE_DEVICE_MANAGER[API_TYPE_DEVICE_MANAGER["GET_CURRENT_DEVICE"] = 153] = "GET_CURRENT_DEVICE";
    API_TYPE_DEVICE_MANAGER[API_TYPE_DEVICE_MANAGER["GET_CURRENT_DEVICE_INFO"] = 154] = "GET_CURRENT_DEVICE_INFO";
    API_TYPE_DEVICE_MANAGER[API_TYPE_DEVICE_MANAGER["SET_DEVICE"] = 155] = "SET_DEVICE";
    API_TYPE_DEVICE_MANAGER[API_TYPE_DEVICE_MANAGER["SET_DEVICE_VOLUME"] = 156] = "SET_DEVICE_VOLUME";
    API_TYPE_DEVICE_MANAGER[API_TYPE_DEVICE_MANAGER["GET_DEVICE_VOLUME"] = 157] = "GET_DEVICE_VOLUME";
    API_TYPE_DEVICE_MANAGER[API_TYPE_DEVICE_MANAGER["SET_DEVICE_MUTE"] = 158] = "SET_DEVICE_MUTE";
    API_TYPE_DEVICE_MANAGER[API_TYPE_DEVICE_MANAGER["GET_DEVICE_MUTE"] = 159] = "GET_DEVICE_MUTE";
    API_TYPE_DEVICE_MANAGER[API_TYPE_DEVICE_MANAGER["START_DEVICE_TEST"] = 160] = "START_DEVICE_TEST";
    API_TYPE_DEVICE_MANAGER[API_TYPE_DEVICE_MANAGER["STOP_DEVICE_TEST"] = 161] = "STOP_DEVICE_TEST";
    API_TYPE_DEVICE_MANAGER[API_TYPE_DEVICE_MANAGER["START_AUDIO_DEVICE_LOOP_BACK_TEST"] = 162] = "START_AUDIO_DEVICE_LOOP_BACK_TEST";
    API_TYPE_DEVICE_MANAGER[API_TYPE_DEVICE_MANAGER["STOP_AUDIO_DEVICE_LOOP_BACK_TEST"] = 163] = "STOP_AUDIO_DEVICE_LOOP_BACK_TEST";
})(API_TYPE_DEVICE_MANAGER || (API_TYPE_DEVICE_MANAGER = {}));
/**
 * @ignore
 */
function callNativeMethod(apiType, param, extra) {
    if (param === void 0) { param = {}; }
    // @ts-ignore
    return window.agoraBridge.callNativeMethod(apiType, JSON.stringify(param), extra);
}
/**
 * @ignore
 */
function callNativeMethodAudioEffect(apiType, param) {
    if (param === void 0) { param = {}; }
    // @ts-ignore
    return window.agoraBridge.callNativeMethodAudioEffect(apiType, JSON.stringify(param));
}
/**
 * @ignore
 */
function callNativeMethodPlayback(apiType, param) {
    if (param === void 0) { param = {}; }
    // @ts-ignore
    return window.agoraBridge.callNativeMethodPlayback(apiType, JSON.stringify(param));
}
/**
 * @ignore
 */
function callNativeMethodRecording(apiType, param) {
    if (param === void 0) { param = {}; }
    // @ts-ignore
    return window.agoraBridge.callNativeMethodRecording(apiType, JSON.stringify(param));
}
/**
 * @ignore
 */
function callNativeMethodVideo(apiType, param) {
    if (param === void 0) { param = {}; }
    // @ts-ignore
    return window.agoraBridge.callNativeMethodVideo(apiType, JSON.stringify(param));
}
/**
 * Types in AgoraBase.h
 */
var AgoraRtcEngine;
(function (AgoraRtcEngine) {
    var INTERFACE_ID_TYPE;
    (function (INTERFACE_ID_TYPE) {
        INTERFACE_ID_TYPE[INTERFACE_ID_TYPE["AGORA_IID_AUDIO_DEVICE_MANAGER"] = 1] = "AGORA_IID_AUDIO_DEVICE_MANAGER";
        INTERFACE_ID_TYPE[INTERFACE_ID_TYPE["AGORA_IID_VIDEO_DEVICE_MANAGER"] = 2] = "AGORA_IID_VIDEO_DEVICE_MANAGER";
        INTERFACE_ID_TYPE[INTERFACE_ID_TYPE["AGORA_IID_RTC_ENGINE_PARAMETER"] = 3] = "AGORA_IID_RTC_ENGINE_PARAMETER";
        INTERFACE_ID_TYPE[INTERFACE_ID_TYPE["AGORA_IID_MEDIA_ENGINE"] = 4] = "AGORA_IID_MEDIA_ENGINE";
        INTERFACE_ID_TYPE[INTERFACE_ID_TYPE["AGORA_IID_SIGNALING_ENGINE"] = 8] = "AGORA_IID_SIGNALING_ENGINE";
    })(INTERFACE_ID_TYPE = AgoraRtcEngine.INTERFACE_ID_TYPE || (AgoraRtcEngine.INTERFACE_ID_TYPE = {}));
    /**
     * Warning code.
     */
    var WARN_CODE_TYPE;
    (function (WARN_CODE_TYPE) {
        /**
         * 8: The specified view is invalid. Specify a view when using the video call function.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_INVALID_VIEW"] = 8] = "WARN_INVALID_VIEW";
        /**
         * 16: Failed to initialize the video function, possibly caused by a lack of resources. The users cannot see the video
         * while the voice communication is not affected.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_INIT_VIDEO"] = 16] = "WARN_INIT_VIDEO";
        /**
         * 20: The request is pending, usually due to some module not being ready, and the SDK postponed processing the request.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_PENDING"] = 20] = "WARN_PENDING";
        /**
         * 103: No channel resources are available. Maybe because the server cannot allocate any channel resource.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_NO_AVAILABLE_CHANNEL"] = 103] = "WARN_NO_AVAILABLE_CHANNEL";
        /**
         * 104: A timeout occurs when looking up the channel. When joining a channel, the SDK looks up the specified channel. This
         * warning usually occurs when the network condition is too poor for the SDK to connect to the server.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_LOOKUP_CHANNEL_TIMEOUT"] = 104] = "WARN_LOOKUP_CHANNEL_TIMEOUT";
        /**
         * @deprecated 105: The server rejects the request to look up the channel. The server cannot process this request or the
         * request is illegal.
         *
         * Use CONNECTION_CHANGED_REJECTED_BY_SERVER(10) in the [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged}
         * callback instead.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_LOOKUP_CHANNEL_REJECTED"] = 105] = "WARN_LOOKUP_CHANNEL_REJECTED";
        /**
         * 106: A timeout occurs when opening the channel. Once the specific channel is found, the SDK opens the channel.
         * This warning usually occurs when the network condition is too poor for the SDK to connect to the server.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_OPEN_CHANNEL_TIMEOUT"] = 106] = "WARN_OPEN_CHANNEL_TIMEOUT";
        /**
         * 107: The server rejects the request to open the channel. The server cannot process this request or the request is illegal.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_OPEN_CHANNEL_REJECTED"] = 107] = "WARN_OPEN_CHANNEL_REJECTED";
        // sdk: 100~1000
        /**
         * 111: A timeout occurs when switching to the live video.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_SWITCH_LIVE_VIDEO_TIMEOUT"] = 111] = "WARN_SWITCH_LIVE_VIDEO_TIMEOUT";
        /**
         * 118: A timeout occurs when setting the client role in the live interactive streaming profile.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_SET_CLIENT_ROLE_TIMEOUT"] = 118] = "WARN_SET_CLIENT_ROLE_TIMEOUT";
        /**
         * 121: The ticket to open the channel is invalid.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_OPEN_CHANNEL_INVALID_TICKET"] = 121] = "WARN_OPEN_CHANNEL_INVALID_TICKET";
        /**
         * 122: Try connecting to another server.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_OPEN_CHANNEL_TRY_NEXT_VOS"] = 122] = "WARN_OPEN_CHANNEL_TRY_NEXT_VOS";
        /**
         * 131: The channel connection cannot be recovered.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_CHANNEL_CONNECTION_UNRECOVERABLE"] = 131] = "WARN_CHANNEL_CONNECTION_UNRECOVERABLE";
        /**
         * 132: The IP address has changed.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_CHANNEL_CONNECTION_IP_CHANGED"] = 132] = "WARN_CHANNEL_CONNECTION_IP_CHANGED";
        /**
         * 133: The port has changed.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_CHANNEL_CONNECTION_PORT_CHANGED"] = 133] = "WARN_CHANNEL_CONNECTION_PORT_CHANGED";
        /**
         * 701: An error occurs in opening the audio mixing file.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_AUDIO_MIXING_OPEN_ERROR"] = 701] = "WARN_AUDIO_MIXING_OPEN_ERROR";
        /**
         * 1014: Audio Device Module: A warning occurs in the playback device.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_ADM_RUNTIME_PLAYOUT_WARNING"] = 1014] = "WARN_ADM_RUNTIME_PLAYOUT_WARNING";
        /**
         * 1016: Audio Device Module: a warning occurs in the recording device.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_ADM_RUNTIME_RECORDING_WARNING"] = 1016] = "WARN_ADM_RUNTIME_RECORDING_WARNING";
        /**
         * 1019: Audio Device Module: no valid audio data is recorded.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_ADM_RECORD_AUDIO_SILENCE"] = 1019] = "WARN_ADM_RECORD_AUDIO_SILENCE";
        /**
         * 1020: Audio device module: The audio playback frequency is abnormal, which may cause audio freezes. This abnormality
         * is caused by high CPU usage. Agora recommends stopping other apps.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_ADM_PLAYOUT_MALFUNCTION"] = 1020] = "WARN_ADM_PLAYOUT_MALFUNCTION";
        /**
         * 1021: Audio device module: the audio recording frequency is abnormal, which may cause audio freezes. This abnormality
         * is caused by high CPU usage. Agora recommends stopping other apps.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_ADM_RECORD_MALFUNCTION"] = 1021] = "WARN_ADM_RECORD_MALFUNCTION";
        /**
         * 1025: The audio playback or recording is interrupted by system events (such as a phone call).
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_ADM_CALL_INTERRUPTION"] = 1025] = "WARN_ADM_CALL_INTERRUPTION";
        /**
         * 1029: During a call, the audio session category should be set to
         * AVAudioSessionCategoryPlayAndRecord, and agora monitors this value.
         * If the audio session category is set to other values, this warning code
         * is triggered and agora will forcefully set it back to
         * AVAudioSessionCategoryPlayAndRecord.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_ADM_IOS_CATEGORY_NOT_PLAYANDRECORD"] = 1029] = "WARN_ADM_IOS_CATEGORY_NOT_PLAYANDRECORD";
        /**
         * 1031: Audio Device Module: The recorded audio voice is too low.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_ADM_RECORD_AUDIO_LOWLEVEL"] = 1031] = "WARN_ADM_RECORD_AUDIO_LOWLEVEL";
        /**
         * 1032: Audio Device Module: The playback audio voice is too low.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_ADM_PLAYOUT_AUDIO_LOWLEVEL"] = 1032] = "WARN_ADM_PLAYOUT_AUDIO_LOWLEVEL";
        /**
         * 1033: Audio device module: The audio recording device is occupied.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_ADM_RECORD_AUDIO_IS_ACTIVE"] = 1033] = "WARN_ADM_RECORD_AUDIO_IS_ACTIVE";
        /**
         * 1040: Audio device module: An exception occurs with the audio drive.
         * Solutions:
         * - Disable or re-enable the audio device.
         * - Re-enable your device.
         * - Update the sound card drive.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_ADM_WINDOWS_NO_DATA_READY_EVENT"] = 1040] = "WARN_ADM_WINDOWS_NO_DATA_READY_EVENT";
        /**
         * 1042: Audio device module: The audio recording device is different from the audio playback device,
         * which may cause echoes problem. Agora recommends using the same audio device to record and playback
         * audio.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_ADM_INCONSISTENT_AUDIO_DEVICE"] = 1042] = "WARN_ADM_INCONSISTENT_AUDIO_DEVICE";
        /**
         * 1051: (Communication profile only) Audio processing module: A howling sound is detected when recording the audio data.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_APM_HOWLING"] = 1051] = "WARN_APM_HOWLING";
        /**
         * 1052: Audio Device Module: The device is in the glitch state.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_ADM_GLITCH_STATE"] = 1052] = "WARN_ADM_GLITCH_STATE";
        /**
         * 1053: Audio Processing Module: A residual echo is detected, which may be caused by the belated scheduling of system threads
         * or the signal overflow.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_APM_RESIDUAL_ECHO"] = 1053] = "WARN_APM_RESIDUAL_ECHO";
        /** @ignore */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_ADM_WIN_CORE_NO_RECORDING_DEVICE"] = 1322] = "WARN_ADM_WIN_CORE_NO_RECORDING_DEVICE";
        /**
         * 1323: Audio device module: No available playback device.
         * Solution: Plug in the audio device.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_ADM_WIN_CORE_NO_PLAYOUT_DEVICE"] = 1323] = "WARN_ADM_WIN_CORE_NO_PLAYOUT_DEVICE";
        /**
         * 1324: Audio device module: The capture device is released improperly.
         * Solutions:
         * - Disable or re-enable the audio device.
         * - Re-enable your device.
         * - Update the sound card drive.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_ADM_WIN_CORE_IMPROPER_CAPTURE_RELEASE"] = 1324] = "WARN_ADM_WIN_CORE_IMPROPER_CAPTURE_RELEASE";
        /**
         * 1610: Super-resolution warning: The original video dimensions of the remote user exceed 640 * 480.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_SUPER_RESOLUTION_STREAM_OVER_LIMITATION"] = 1610] = "WARN_SUPER_RESOLUTION_STREAM_OVER_LIMITATION";
        /**
         * 1611: Super-resolution warning: Another user is using super resolution.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_SUPER_RESOLUTION_USER_COUNT_OVER_LIMITATION"] = 1611] = "WARN_SUPER_RESOLUTION_USER_COUNT_OVER_LIMITATION";
        /**
         * 1612: The device is not supported.
         */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_SUPER_RESOLUTION_DEVICE_NOT_SUPPORTED"] = 1612] = "WARN_SUPER_RESOLUTION_DEVICE_NOT_SUPPORTED";
        /** @ignore */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_RTM_LOGIN_TIMEOUT"] = 2005] = "WARN_RTM_LOGIN_TIMEOUT";
        /** @ignore */
        WARN_CODE_TYPE[WARN_CODE_TYPE["WARN_RTM_KEEP_ALIVE_TIMEOUT"] = 2009] = "WARN_RTM_KEEP_ALIVE_TIMEOUT";
    })(WARN_CODE_TYPE = AgoraRtcEngine.WARN_CODE_TYPE || (AgoraRtcEngine.WARN_CODE_TYPE = {}));
    /**
     * Error code.
     */
    var ERROR_CODE_TYPE;
    (function (ERROR_CODE_TYPE) {
        /**
         * 0: No error occurs.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_OK"] = 0] = "ERR_OK";
        //1~1000
        /**
         * 1: A general error occurs (no specified reason).
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_FAILED"] = 1] = "ERR_FAILED";
        /**
         * 2: An invalid parameter is used. For example, the specific channel name includes illegal characters.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_INVALID_ARGUMENT"] = 2] = "ERR_INVALID_ARGUMENT";
        /**
         * 3: The SDK module is not ready. Possible solutions:
         * - Check the audio device.
         * - Check the completeness of the application.
         * - Re-initialize the Agora engine.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_NOT_READY"] = 3] = "ERR_NOT_READY";
        /**
         * 4: The SDK does not support this function.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_NOT_SUPPORTED"] = 4] = "ERR_NOT_SUPPORTED";
        /**
         * 5: The request is rejected.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_REFUSED"] = 5] = "ERR_REFUSED";
        /**
         * 6: The buffer size is not big enough to store the returned data.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_BUFFER_TOO_SMALL"] = 6] = "ERR_BUFFER_TOO_SMALL";
        /**
         * 7: The SDK is not initialized before calling this method.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_NOT_INITIALIZED"] = 7] = "ERR_NOT_INITIALIZED";
        /**
         * 9: No permission exists. Check if the user has granted access to the audio or video device.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_NO_PERMISSION"] = 9] = "ERR_NO_PERMISSION";
        /**
         * 10: An API method timeout occurs. Some API methods require the SDK to return the execution result, and this error occurs if
         * the request takes too long (more than 10 seconds) for the SDK to process.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_TIMEDOUT"] = 10] = "ERR_TIMEDOUT";
        /**
         * 11: The request is canceled. This is for internal SDK use only, and it does not return to the application through any method
         * or callback.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_CANCELED"] = 11] = "ERR_CANCELED";
        /**
         * 12: The method is called too often. This is for internal SDK use only, and it does not return to the application through any
         * method or callback.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_TOO_OFTEN"] = 12] = "ERR_TOO_OFTEN";
        /**
         * 13: The SDK fails to bind to the network socket. This is for internal SDK use only, and it does not return to the application
         * through any method or callback.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_BIND_SOCKET"] = 13] = "ERR_BIND_SOCKET";
        /**
         * 14: The network is unavailable. This is for internal SDK use only, and it does not return to the application through any
         * method or callback.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_NET_DOWN"] = 14] = "ERR_NET_DOWN";
        /**
         * 15: No network buffers are available. This is for internal SDK internal use only, and it does not return to the application
         * through any method or callback.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_NET_NOBUFS"] = 15] = "ERR_NET_NOBUFS";
        /**
         * 17: The request to join the channel is rejected.
         *
         * - This error usually occurs when the user is already in the channel, and still calls the method to join the channel, for
         * example, [joinChannel]{@link agoraRtcEngine.joinChannel} .
         * - This error usually occurs when the user tries to join a channel during a call test
         * ([startEchoTest]{@link agoraRtcEngine.startEchoTest}). Once you call [startEchoTest]{@link agoraRtcEngine.startEchoTest} , you need to call
         * [stopEchoTest]{@link agoraRtcEngine.stopEchoTest} before joining a channel.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_JOIN_CHANNEL_REJECTED"] = 17] = "ERR_JOIN_CHANNEL_REJECTED";
        /**
         * 18: The request to leave the channel is rejected.
         *
         * This error usually occurs:
         * - When the user has left the channel and still calls [leaveChannel]{@link agoraRtcEngine.leaveChannel} to leave the channel.
         * In this case, stop calling [leaveChannel]{@link agoraRtcEngine.leaveChannel}.
         * - When the user has not joined the channel and still calls [leaveChannel]{@link agoraRtcEngine.leaveChannel} to leave the channel.
         * In this case, no extra operation is needed.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LEAVE_CHANNEL_REJECTED"] = 18] = "ERR_LEAVE_CHANNEL_REJECTED";
        /**
         * 19: Resources are occupied and cannot be reused.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ALREADY_IN_USE"] = 19] = "ERR_ALREADY_IN_USE";
        /**
         * 20: The SDK gives up the request due to too many requests.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ABORTED"] = 20] = "ERR_ABORTED";
        /**
         * 21: In Windows, specific firewall settings can cause the SDK to fail to initialize and crash.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_INIT_NET_ENGINE"] = 21] = "ERR_INIT_NET_ENGINE";
        /**
         * 22: The application uses too much of the system resources and the SDK fails to allocate the resources.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_RESOURCE_LIMITED"] = 22] = "ERR_RESOURCE_LIMITED";
        /**
         * 101: The specified App ID is invalid. Please try to rejoin the channel with a valid App ID.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_INVALID_APP_ID"] = 101] = "ERR_INVALID_APP_ID";
        /**
         * 102: The specified channel name is invalid. Please try to rejoin the channel with a valid channel name.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_INVALID_CHANNEL_NAME"] = 102] = "ERR_INVALID_CHANNEL_NAME";
        /**
         * 103: Fails to get server resources in the specified region. Please try to specify another region when calling
         * [init]{@link agoraRtcEngine.init} .
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_NO_SERVER_RESOURCES"] = 103] = "ERR_NO_SERVER_RESOURCES";
        /**
         * @deprecated 109: Use `CONNECTION_CHANGED_TOKEN_EXPIRED(9)` in the
         * [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged} callback instead.
         *
         * The token expired due to one of the following reasons:
         * - Authorized Timestamp expired: The timestamp is represented by the number of seconds elapsed since 1/1/1970. The user can
         * use the Token to access the Agora service within 24 hours after the Token is generated. If the user does not access the
         * Agora service after 24 hours, this Token is no longer valid.
         * - Call Expiration Timestamp expired: The timestamp is the exact time when a user can no longer use the Agora service
         * (for example, when a user is forced to leave an ongoing call). When a value is set for the Call Expiration Timestamp,
         * it does not mean that the token will expire, but that the user will be banned from the channel.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_TOKEN_EXPIRED"] = 109] = "ERR_TOKEN_EXPIRED";
        /**
         * @deprecated 110: Use `CONNECTION_CHANGED_INVALID_TOKEN(8)` in the
         * [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged} callback instead.
         *
         * The token is invalid due to one of the following reasons:
         * - The App Certificate for the project is enabled in Console, but the user is still using the App ID. Once the App
         * Certificate is enabled, the user must use a token.
         * - The uid is mandatory, and users must set the same uid as the one set in the [joinChannel]{@link agoraRtcEngine.joinChannel} method.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_INVALID_TOKEN"] = 110] = "ERR_INVALID_TOKEN";
        /**
         * 111: The internet connection is interrupted. This applies to the Agora Web SDK only.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_CONNECTION_INTERRUPTED"] = 111] = "ERR_CONNECTION_INTERRUPTED";
        /**
         * 112: The internet connection is lost. This applies to the Agora Web SDK only.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_CONNECTION_LOST"] = 112] = "ERR_CONNECTION_LOST";
        /**
         * 113: The user is not in the channel when calling the method.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_NOT_IN_CHANNEL"] = 113] = "ERR_NOT_IN_CHANNEL";
        /**
         * 114: The size of the sent data is over 1024 bytes when the user calls the
         * [sendStreamMessage]{@link agoraRtcEngine.sendStreamMessage} method.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_SIZE_TOO_LARGE"] = 114] = "ERR_SIZE_TOO_LARGE";
        /**
         * 115: The bitrate of the sent data exceeds the limit of 6 Kbps when the user calls the
         * [sendStreamMessage]{@link agoraRtcEngine.sendStreamMessage} method.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_BITRATE_LIMIT"] = 115] = "ERR_BITRATE_LIMIT";
        /**
         * 116: Too many data streams (over 5 streams) are created when the user calls the
         * [createDataStream]{@link agoraRtcEngine.createDataStream} method.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_TOO_MANY_DATA_STREAMS"] = 116] = "ERR_TOO_MANY_DATA_STREAMS";
        /**
         * 117: The data stream transmission timed out.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_STREAM_MESSAGE_TIMEOUT"] = 117] = "ERR_STREAM_MESSAGE_TIMEOUT";
        /**
         * 119: Switching roles fail. Please try to rejoin the channel.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_SET_CLIENT_ROLE_NOT_AUTHORIZED"] = 119] = "ERR_SET_CLIENT_ROLE_NOT_AUTHORIZED";
        /** 120: Decryption fails. The user may have used a different encryption password to join the channel. Check your settings
         * or try rejoining the channel.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_DECRYPTION_FAILED"] = 120] = "ERR_DECRYPTION_FAILED";
        /**
         * 123: The client is banned by the server.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_CLIENT_IS_BANNED_BY_SERVER"] = 123] = "ERR_CLIENT_IS_BANNED_BY_SERVER";
        /**
         * 124: Incorrect watermark file parameter.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_WATERMARK_PARAM"] = 124] = "ERR_WATERMARK_PARAM";
        /**
         * 125: Incorrect watermark file path.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_WATERMARK_PATH"] = 125] = "ERR_WATERMARK_PATH";
        /**
         * 126: Incorrect watermark file format.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_WATERMARK_PNG"] = 126] = "ERR_WATERMARK_PNG";
        /**
         * 127: Incorrect watermark file information.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_WATERMARKR_INFO"] = 127] = "ERR_WATERMARKR_INFO";
        /**
         * 128: Incorrect watermark file data format.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_WATERMARK_ARGB"] = 128] = "ERR_WATERMARK_ARGB";
        /**
         * 129: An error occurs in reading the watermark file.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_WATERMARK_READ"] = 129] = "ERR_WATERMARK_READ";
        /**
         * 130: Encryption is enabled when the user calls the [addPublishStreamUrl]{@link agoraRtcEngine.addPublishStreamUrl} method
         * (CDN live streaming does not support encrypted streams).
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ENCRYPTED_STREAM_NOT_ALLOWED_PUBLISH"] = 130] = "ERR_ENCRYPTED_STREAM_NOT_ALLOWED_PUBLISH";
        /**
         * 134: The user account is invalid.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_INVALID_USER_ACCOUNT"] = 134] = "ERR_INVALID_USER_ACCOUNT";
        /**
         * 151: CDN related errors. Remove the original URL address and add a new one by calling the
         * [removePublishStreamUrl]{@link agoraRtcEngine.removePublishStreamUrl} and [addPublishStreamUrl]{@link agoraRtcEngine.addPublishStreamUrl} methods.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_PUBLISH_STREAM_CDN_ERROR"] = 151] = "ERR_PUBLISH_STREAM_CDN_ERROR";
        /**
         * 152: The host publishes more than 10 URLs. Delete the unnecessary URLs before adding new ones.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_PUBLISH_STREAM_NUM_REACH_LIMIT"] = 152] = "ERR_PUBLISH_STREAM_NUM_REACH_LIMIT";
        /**
         * 153: The host manipulates other hosts' URLs. Check your app logic.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_PUBLISH_STREAM_NOT_AUTHORIZED"] = 153] = "ERR_PUBLISH_STREAM_NOT_AUTHORIZED";
        /**
         * 154: An error occurs in Agora's streaming server. Call the addPublishStreamUrl method to publish the streaming again.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_PUBLISH_STREAM_INTERNAL_SERVER_ERROR"] = 154] = "ERR_PUBLISH_STREAM_INTERNAL_SERVER_ERROR";
        /**
         * 155: The server fails to find the stream.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_PUBLISH_STREAM_NOT_FOUND"] = 155] = "ERR_PUBLISH_STREAM_NOT_FOUND";
        /**
         * 156: The format of the RTMP stream URL is not supported. Check whether the URL format is correct.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_PUBLISH_STREAM_FORMAT_NOT_SUPPORTED"] = 156] = "ERR_PUBLISH_STREAM_FORMAT_NOT_SUPPORTED";
        //signaling: 400~600
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LOGOUT_OTHER"] = 400] = "ERR_LOGOUT_OTHER";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LOGOUT_USER"] = 401] = "ERR_LOGOUT_USER";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LOGOUT_NET"] = 402] = "ERR_LOGOUT_NET";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LOGOUT_KICKED"] = 403] = "ERR_LOGOUT_KICKED";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LOGOUT_PACKET"] = 404] = "ERR_LOGOUT_PACKET";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LOGOUT_TOKEN_EXPIRED"] = 405] = "ERR_LOGOUT_TOKEN_EXPIRED";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LOGOUT_OLDVERSION"] = 406] = "ERR_LOGOUT_OLDVERSION";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LOGOUT_TOKEN_WRONG"] = 407] = "ERR_LOGOUT_TOKEN_WRONG";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LOGOUT_ALREADY_LOGOUT"] = 408] = "ERR_LOGOUT_ALREADY_LOGOUT";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LOGIN_OTHER"] = 420] = "ERR_LOGIN_OTHER";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LOGIN_NET"] = 421] = "ERR_LOGIN_NET";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LOGIN_FAILED"] = 422] = "ERR_LOGIN_FAILED";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LOGIN_CANCELED"] = 423] = "ERR_LOGIN_CANCELED";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LOGIN_TOKEN_EXPIRED"] = 424] = "ERR_LOGIN_TOKEN_EXPIRED";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LOGIN_OLD_VERSION"] = 425] = "ERR_LOGIN_OLD_VERSION";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LOGIN_TOKEN_WRONG"] = 426] = "ERR_LOGIN_TOKEN_WRONG";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LOGIN_TOKEN_KICKED"] = 427] = "ERR_LOGIN_TOKEN_KICKED";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LOGIN_ALREADY_LOGIN"] = 428] = "ERR_LOGIN_ALREADY_LOGIN";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_JOIN_CHANNEL_OTHER"] = 440] = "ERR_JOIN_CHANNEL_OTHER";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_SEND_MESSAGE_OTHER"] = 440] = "ERR_SEND_MESSAGE_OTHER";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_SEND_MESSAGE_TIMEOUT"] = 441] = "ERR_SEND_MESSAGE_TIMEOUT";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_QUERY_USERNUM_OTHER"] = 450] = "ERR_QUERY_USERNUM_OTHER";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_QUERY_USERNUM_TIMEOUT"] = 451] = "ERR_QUERY_USERNUM_TIMEOUT";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_QUERY_USERNUM_BYUSER"] = 452] = "ERR_QUERY_USERNUM_BYUSER";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LEAVE_CHANNEL_OTHER"] = 460] = "ERR_LEAVE_CHANNEL_OTHER";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LEAVE_CHANNEL_KICKED"] = 461] = "ERR_LEAVE_CHANNEL_KICKED";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LEAVE_CHANNEL_BYUSER"] = 462] = "ERR_LEAVE_CHANNEL_BYUSER";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LEAVE_CHANNEL_LOGOUT"] = 463] = "ERR_LEAVE_CHANNEL_LOGOUT";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LEAVE_CHANNEL_DISCONNECTED"] = 464] = "ERR_LEAVE_CHANNEL_DISCONNECTED";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_INVITE_OTHER"] = 470] = "ERR_INVITE_OTHER";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_INVITE_REINVITE"] = 471] = "ERR_INVITE_REINVITE";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_INVITE_NET"] = 472] = "ERR_INVITE_NET";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_INVITE_PEER_OFFLINE"] = 473] = "ERR_INVITE_PEER_OFFLINE";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_INVITE_TIMEOUT"] = 474] = "ERR_INVITE_TIMEOUT";
        /**
         * @ignore
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_INVITE_CANT_RECV"] = 475] = "ERR_INVITE_CANT_RECV";
        //1001~2000
        /**
         * 1001: Fails to load the media engine.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_LOAD_MEDIA_ENGINE"] = 1001] = "ERR_LOAD_MEDIA_ENGINE";
        /**
         * 1002: Fails to start the call after enabling the media engine.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_START_CALL"] = 1002] = "ERR_START_CALL";
        /**
         * @deprecated 1003: Fails to start the camera.
         * Use `LOCAL_VIDEO_STREAM_ERROR_CAPTURE_FAILURE(4)` in the
         * [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged} callback instead.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_START_CAMERA"] = 1003] = "ERR_START_CAMERA";
        /**
         * 1004: Fails to start the video rendering module.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_START_VIDEO_RENDER"] = 1004] = "ERR_START_VIDEO_RENDER";
        /**
         * 1005: A general error occurs in the Audio Device Module (no specified reason). Check if the audio device is used by
         * another application, or try rejoining the channel.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_GENERAL_ERROR"] = 1005] = "ERR_ADM_GENERAL_ERROR";
        /**
         * 1006: Audio Device Module: An error occurs in using the Java resources.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_JAVA_RESOURCE"] = 1006] = "ERR_ADM_JAVA_RESOURCE";
        /**
         * 1007: Audio Device Module: An error occurs in setting the sampling frequency.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_SAMPLE_RATE"] = 1007] = "ERR_ADM_SAMPLE_RATE";
        /**
         * 1008: Audio Device Module: An error occurs in initializing the playback device.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_INIT_PLAYOUT"] = 1008] = "ERR_ADM_INIT_PLAYOUT";
        /**
         * 1009: Audio Device Module: An error occurs in starting the playback device.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_START_PLAYOUT"] = 1009] = "ERR_ADM_START_PLAYOUT";
        /**
         * 1010: Audio Device Module: An error occurs in stopping the playback device.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_STOP_PLAYOUT"] = 1010] = "ERR_ADM_STOP_PLAYOUT";
        /**
         * 1011: Audio Device Module: An error occurs in initializing the recording device.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_INIT_RECORDING"] = 1011] = "ERR_ADM_INIT_RECORDING";
        /**
         * 1012: Audio Device Module: An error occurs in starting the recording device.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_START_RECORDING"] = 1012] = "ERR_ADM_START_RECORDING";
        /**
         * 1013: Audio Device Module: An error occurs in stopping the recording device.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_STOP_RECORDING"] = 1013] = "ERR_ADM_STOP_RECORDING";
        /**
         * 1015: Audio Device Module: A playback error occurs. Check your playback device and try rejoining the channel.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_RUNTIME_PLAYOUT_ERROR"] = 1015] = "ERR_ADM_RUNTIME_PLAYOUT_ERROR";
        /**
         * 1017: Audio Device Module: A recording error occurs.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_RUNTIME_RECORDING_ERROR"] = 1017] = "ERR_ADM_RUNTIME_RECORDING_ERROR";
        /**
         * 1018: Audio Device Module: Fails to record.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_RECORD_AUDIO_FAILED"] = 1018] = "ERR_ADM_RECORD_AUDIO_FAILED";
        /**
         * 1022: Audio Device Module: An error occurs in initializing the
         * loopback device.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_INIT_LOOPBACK"] = 1022] = "ERR_ADM_INIT_LOOPBACK";
        /**
         * 1023: Audio Device Module: An error occurs in starting the loopback
         * device.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_START_LOOPBACK"] = 1023] = "ERR_ADM_START_LOOPBACK";
        /**
         * 1027: Audio Device Module: No recording permission exists. Check if the
         *  recording permission is granted.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_NO_PERMISSION"] = 1027] = "ERR_ADM_NO_PERMISSION";
        /**
         * 1033: Audio device module: The device is occupied.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_RECORD_AUDIO_IS_ACTIVE"] = 1033] = "ERR_ADM_RECORD_AUDIO_IS_ACTIVE";
        /**
         * 1101: Audio device module: A fatal exception occurs.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_ANDROID_JNI_JAVA_RESOURCE"] = 1101] = "ERR_ADM_ANDROID_JNI_JAVA_RESOURCE";
        /**
         * 1108: Audio device module: The recording frequency is lower than 50.
         * 0 indicates that the recording is not yet started. We recommend
         * checking your recording permission.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_ANDROID_JNI_NO_RECORD_FREQUENCY"] = 1108] = "ERR_ADM_ANDROID_JNI_NO_RECORD_FREQUENCY";
        /**
         * 1109: The playback frequency is lower than 50. 0 indicates that the
         * playback is not yet started. We recommend checking if you have created
         * too many AudioTrack instances.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_ANDROID_JNI_NO_PLAYBACK_FREQUENCY"] = 1109] = "ERR_ADM_ANDROID_JNI_NO_PLAYBACK_FREQUENCY";
        /**
         * 1111: Audio device module: AudioRecord fails to start up. A ROM system
         * error occurs. We recommend the following options to debug:
         * - Restart your App.
         * - Restart your cellphone.
         * - Check your recording permission.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_ANDROID_JNI_JAVA_START_RECORD"] = 1111] = "ERR_ADM_ANDROID_JNI_JAVA_START_RECORD";
        /**
         * 1112: Audio device module: AudioTrack fails to start up. A ROM system
         * error occurs. We recommend the following options to debug:
         * - Restart your App.
         * - Restart your cellphone.
         * - Check your playback permission.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_ANDROID_JNI_JAVA_START_PLAYBACK"] = 1112] = "ERR_ADM_ANDROID_JNI_JAVA_START_PLAYBACK";
        /**
         * 1115: Audio device module: AudioRecord returns error. The SDK will
         * automatically restart AudioRecord.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_ANDROID_JNI_JAVA_RECORD_ERROR"] = 1115] = "ERR_ADM_ANDROID_JNI_JAVA_RECORD_ERROR";
        /** @deprecated */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_ANDROID_OPENSL_CREATE_ENGINE"] = 1151] = "ERR_ADM_ANDROID_OPENSL_CREATE_ENGINE";
        /** @deprecated */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_ANDROID_OPENSL_CREATE_AUDIO_RECORDER"] = 1153] = "ERR_ADM_ANDROID_OPENSL_CREATE_AUDIO_RECORDER";
        /** @deprecated */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_ANDROID_OPENSL_START_RECORDER_THREAD"] = 1156] = "ERR_ADM_ANDROID_OPENSL_START_RECORDER_THREAD";
        /** @deprecated */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_ANDROID_OPENSL_CREATE_AUDIO_PLAYER"] = 1157] = "ERR_ADM_ANDROID_OPENSL_CREATE_AUDIO_PLAYER";
        /** @deprecated */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_ANDROID_OPENSL_START_PLAYER_THREAD"] = 1160] = "ERR_ADM_ANDROID_OPENSL_START_PLAYER_THREAD";
        /**
         * 1201: Audio device module: The current device does not support audio
         * input, possibly because you have mistakenly configured the audio session
         *  category, or because some other app is occupying the input device. We
         * recommend terminating all background apps and re-joining the channel.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_IOS_INPUT_NOT_AVAILABLE"] = 1201] = "ERR_ADM_IOS_INPUT_NOT_AVAILABLE";
        /**
         * 1206: Audio device module: Cannot activate the Audio Session.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_IOS_ACTIVATE_SESSION_FAIL"] = 1206] = "ERR_ADM_IOS_ACTIVATE_SESSION_FAIL";
        /**
         * 1210: Audio device module: Fails to initialize the audio device,
         * normally because the audio device parameters are wrongly set.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_IOS_VPIO_INIT_FAIL"] = 1210] = "ERR_ADM_IOS_VPIO_INIT_FAIL";
        /**
         * 1213: Audio device module: Fails to re-initialize the audio device,
         * normally because the audio device parameters are wrongly set.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_IOS_VPIO_REINIT_FAIL"] = 1213] = "ERR_ADM_IOS_VPIO_REINIT_FAIL";
        /**
         * 1214: Fails to re-start up the Audio Unit, possibly because the audio session category is not compatible
         * with the settings of the Audio Unit.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_IOS_VPIO_RESTART_FAIL"] = 1214] = "ERR_ADM_IOS_VPIO_RESTART_FAIL";
        /** @ignore */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_IOS_SET_RENDER_CALLBACK_FAIL"] = 1219] = "ERR_ADM_IOS_SET_RENDER_CALLBACK_FAIL";
        /** @deprecated */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_IOS_SESSION_SAMPLERATR_ZERO"] = 1221] = "ERR_ADM_IOS_SESSION_SAMPLERATR_ZERO";
        /**
         * 1301: Audio device module: An audio driver abnomality or a
         * compatibility issue occurs. Solutions: Disable and restart the audio
         * device, or reboot the system
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_WIN_CORE_INIT"] = 1301] = "ERR_ADM_WIN_CORE_INIT";
        /**
         * 1303: Audio device module: A recording driver abnomality or a
         * compatibility issue occurs. Solutions: Disable and restart the audio
         * device, or reboot the system.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_WIN_CORE_INIT_RECORDING"] = 1303] = "ERR_ADM_WIN_CORE_INIT_RECORDING";
        /**
         * 1306: Audio device module: A playout driver abnomality or a
         * compatibility issue occurs. Solutions: Disable and restart the audio
         * device, or reboot the system.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_WIN_CORE_INIT_PLAYOUT"] = 1306] = "ERR_ADM_WIN_CORE_INIT_PLAYOUT";
        /**
         * 1307: Audio device module: No audio device is available. Solutions:
         * Plug in a proper audio device.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_WIN_CORE_INIT_PLAYOUT_NULL"] = 1307] = "ERR_ADM_WIN_CORE_INIT_PLAYOUT_NULL";
        /**
         * 1309: Audio device module: An audio driver abnomality or a
         * compatibility issue occurs. Solutions: Disable and restart the audio
         * device, or reboot the system.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_WIN_CORE_START_RECORDING"] = 1309] = "ERR_ADM_WIN_CORE_START_RECORDING";
        /**
         * 1311: Audio device module: Insufficient system memory or poor device
         * performance. Solutions: Reboot the system or replace the device.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_WIN_CORE_CREATE_REC_THREAD"] = 1311] = "ERR_ADM_WIN_CORE_CREATE_REC_THREAD";
        /**
         * 1314: Audio device module: An audio driver abnormality occurs.
         * Solutions:
         * - Disable and then re-enable the audio device.
         * - Reboot the system.
         * - Upgrade your audio card driver.*/
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_WIN_CORE_CAPTURE_NOT_STARTUP"] = 1314] = "ERR_ADM_WIN_CORE_CAPTURE_NOT_STARTUP";
        /**
         * 1319: Audio device module: Insufficient system memory or poor device
         * performance. Solutions: Reboot the system or replace the device. */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_WIN_CORE_CREATE_RENDER_THREAD"] = 1319] = "ERR_ADM_WIN_CORE_CREATE_RENDER_THREAD";
        /**
         * 1320: Audio device module: An audio driver abnormality occurs.
         * Solutions:
         * - Disable and then re-enable the audio device.
         * - Reboot the system.
         * - Replace the device.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_WIN_CORE_RENDER_NOT_STARTUP"] = 1320] = "ERR_ADM_WIN_CORE_RENDER_NOT_STARTUP";
        /**
         * 1322: Audio device module: No audio sampling device is available.
         * Solutions: Plug in a proper recording device.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_WIN_CORE_NO_RECORDING_DEVICE"] = 1322] = "ERR_ADM_WIN_CORE_NO_RECORDING_DEVICE";
        /**
         * 1323: Audio device module: No audio playout device is available.
         * Solutions: Plug in a proper playback device.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_WIN_CORE_NO_PLAYOUT_DEVICE"] = 1323] = "ERR_ADM_WIN_CORE_NO_PLAYOUT_DEVICE";
        /**
         * 1351: Audio device module: An audio driver abnormality or a
         * compatibility issue occurs. Solutions:
         * - Disable and then re-enable the audio device.
         * - Reboot the system.
         * - Upgrade your audio card driver.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_WIN_WAVE_INIT"] = 1351] = "ERR_ADM_WIN_WAVE_INIT";
        /**
         * 1353: Audio device module: An audio driver abnormality occurs.
         * Solutions:
         * - Disable and then re-enable the audio device.
         * - Reboot the system.
         * - Upgrade your audio card driver.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_WIN_WAVE_INIT_RECORDING"] = 1353] = "ERR_ADM_WIN_WAVE_INIT_RECORDING";
        /**
         * 1354: Audio device module: An audio driver abnormality occurs.
         * Solutions:
         * - Disable and then re-enable the audio device.
         * - Reboot the system.
         * - Upgrade your audio card driver.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_WIN_WAVE_INIT_MICROPHONE"] = 1354] = "ERR_ADM_WIN_WAVE_INIT_MICROPHONE";
        /**
         * 1355: Audio device module: An audio driver abnormality occurs.
         * Solutions:
         * - Disable and then re-enable the audio device.
         * - Reboot the system.
         * - Upgrade your audio card driver. */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_WIN_WAVE_INIT_PLAYOUT"] = 1355] = "ERR_ADM_WIN_WAVE_INIT_PLAYOUT";
        /**
         * 1356: Audio device module: An audio driver abnormality occurs.
         * Solutions:
         * - Disable and then re-enable the audio device.
         * - Reboot the system.
         * - Upgrade your audio card driver.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_WIN_WAVE_INIT_SPEAKER"] = 1356] = "ERR_ADM_WIN_WAVE_INIT_SPEAKER";
        /**
         * 1357: Audio device module: An audio driver abnormality occurs.
         * Solutions:
         * - Disable and then re-enable the audio device.
         * - Reboot the system.
         * - Upgrade your audio card driver. */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_WIN_WAVE_START_RECORDING"] = 1357] = "ERR_ADM_WIN_WAVE_START_RECORDING";
        /**
         * 1358: Audio device module: An audio driver abnormality occurs.
         * Solutions:
         * - Disable and then re-enable the audio device.
         * - Reboot the system.
         * - Upgrade your audio card driver.*/
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_WIN_WAVE_START_PLAYOUT"] = 1358] = "ERR_ADM_WIN_WAVE_START_PLAYOUT";
        /**
         * 1359: Audio Device Module: No recording device exists.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_NO_RECORDING_DEVICE"] = 1359] = "ERR_ADM_NO_RECORDING_DEVICE";
        /**
         * 1360: Audio Device Module: No playback device exists.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_ADM_NO_PLAYOUT_DEVICE"] = 1360] = "ERR_ADM_NO_PLAYOUT_DEVICE";
        // VDM error code starts from 1500
        /**
         * 1501: Video Device Module: The camera is unauthorized.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_VDM_CAMERA_NOT_AUTHORIZED"] = 1501] = "ERR_VDM_CAMERA_NOT_AUTHORIZED";
        // VDM error code starts from 1500
        /**
         * @deprecated 1502: Video Device Module: The camera in use.
         *
         * Use `LOCAL_VIDEO_STREAM_ERROR_DEVICE_BUSY(3)` in the
         * [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged} callback instead.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_VDM_WIN_DEVICE_IN_USE"] = 1502] = "ERR_VDM_WIN_DEVICE_IN_USE";
        // VCM error code starts from 1600
        /**
         * 1600: Video Device Module: An unknown error occurs.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_VCM_UNKNOWN_ERROR"] = 1600] = "ERR_VCM_UNKNOWN_ERROR";
        /**
         * 1601: Video Device Module: An error occurs in initializing the video encoder.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_VCM_ENCODER_INIT_ERROR"] = 1601] = "ERR_VCM_ENCODER_INIT_ERROR";
        /**
         * 1602: Video Device Module: An error occurs in encoding.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_VCM_ENCODER_ENCODE_ERROR"] = 1602] = "ERR_VCM_ENCODER_ENCODE_ERROR";
        /**
         * 1603: Video Device Module: An error occurs in setting the video encoder.
         */
        ERROR_CODE_TYPE[ERROR_CODE_TYPE["ERR_VCM_ENCODER_SET_ERROR"] = 1603] = "ERR_VCM_ENCODER_SET_ERROR";
    })(ERROR_CODE_TYPE = AgoraRtcEngine.ERROR_CODE_TYPE || (AgoraRtcEngine.ERROR_CODE_TYPE = {}));
    /**
     * Output log filter level.
     */
    var LOG_FILTER_TYPE;
    (function (LOG_FILTER_TYPE) {
        /**
         * 0: Do not output any log information.
         */
        LOG_FILTER_TYPE[LOG_FILTER_TYPE["LOG_FILTER_OFF"] = 0] = "LOG_FILTER_OFF";
        /**
         * 0x080f: Output all log information.
         * Set your log filter as debug if you want to get the most complete log file.
         */
        LOG_FILTER_TYPE[LOG_FILTER_TYPE["LOG_FILTER_DEBUG"] = 2063] = "LOG_FILTER_DEBUG";
        /**
         * 0x000f: Output CRITICAL, ERROR, WARNING, and INFO level log information.
         * We recommend setting your log filter as this level.
         */
        LOG_FILTER_TYPE[LOG_FILTER_TYPE["LOG_FILTER_INFO"] = 15] = "LOG_FILTER_INFO";
        /**
         * 0x000e: Outputs CRITICAL, ERROR, and WARNING level log information.
         */
        LOG_FILTER_TYPE[LOG_FILTER_TYPE["LOG_FILTER_WARN"] = 14] = "LOG_FILTER_WARN";
        /**
         * 0x000c: Outputs CRITICAL and ERROR level log information.
         */
        LOG_FILTER_TYPE[LOG_FILTER_TYPE["LOG_FILTER_ERROR"] = 12] = "LOG_FILTER_ERROR";
        /**
         * 0x0008: Outputs CRITICAL level log information.
         */
        LOG_FILTER_TYPE[LOG_FILTER_TYPE["LOG_FILTER_CRITICAL"] = 8] = "LOG_FILTER_CRITICAL";
        /** @ignore */
        LOG_FILTER_TYPE[LOG_FILTER_TYPE["LOG_FILTER_MASK"] = 2063] = "LOG_FILTER_MASK";
    })(LOG_FILTER_TYPE = AgoraRtcEngine.LOG_FILTER_TYPE || (AgoraRtcEngine.LOG_FILTER_TYPE = {}));
})(AgoraRtcEngine || (AgoraRtcEngine = {}));
/**
 * Types in IAgoraMediaEngine.h
 */
(function (AgoraRtcEngine) {
    /**
     * @deprecated Type of audio device.
     */
    var MEDIA_SOURCE_TYPE;
    (function (MEDIA_SOURCE_TYPE) {
        /**
         * Audio playback device.
         */
        MEDIA_SOURCE_TYPE[MEDIA_SOURCE_TYPE["AUDIO_PLAYOUT_SOURCE"] = 0] = "AUDIO_PLAYOUT_SOURCE";
        /**
         * Microphone.
         */
        MEDIA_SOURCE_TYPE[MEDIA_SOURCE_TYPE["AUDIO_RECORDING_SOURCE"] = 1] = "AUDIO_RECORDING_SOURCE";
    })(MEDIA_SOURCE_TYPE = AgoraRtcEngine.MEDIA_SOURCE_TYPE || (AgoraRtcEngine.MEDIA_SOURCE_TYPE = {}));
    /**
     * The frame type.
     */
    var AUDIO_FRAME_TYPE;
    (function (AUDIO_FRAME_TYPE) {
        /**
         * 0: PCM16.
         */
        AUDIO_FRAME_TYPE[AUDIO_FRAME_TYPE["FRAME_TYPE_PCM16"] = 0] = "FRAME_TYPE_PCM16";
    })(AUDIO_FRAME_TYPE = AgoraRtcEngine.AUDIO_FRAME_TYPE || (AgoraRtcEngine.AUDIO_FRAME_TYPE = {}));
    /**
     * The video frame type.
     */
    var VIDEO_FRAME_TYPE;
    (function (VIDEO_FRAME_TYPE) {
        /**
         * 0: YUV420
         */
        VIDEO_FRAME_TYPE[VIDEO_FRAME_TYPE["FRAME_TYPE_YUV420"] = 0] = "FRAME_TYPE_YUV420";
        /**
         * 1: YUV422
         */
        VIDEO_FRAME_TYPE[VIDEO_FRAME_TYPE["FRAME_TYPE_YUV422"] = 1] = "FRAME_TYPE_YUV422";
        /**
         * 2: RGBA
         */
        VIDEO_FRAME_TYPE[VIDEO_FRAME_TYPE["FRAME_TYPE_RGBA"] = 2] = "FRAME_TYPE_RGBA";
    })(VIDEO_FRAME_TYPE = AgoraRtcEngine.VIDEO_FRAME_TYPE || (AgoraRtcEngine.VIDEO_FRAME_TYPE = {}));
    /**
     * The frame position of the video observer.
     */
    var VIDEO_OBSERVER_POSITION;
    (function (VIDEO_OBSERVER_POSITION) {
        /**
         * 1: The post-capturer position, which corresponds to the video data in the onCaptureVideoFrame callback.
         */
        VIDEO_OBSERVER_POSITION[VIDEO_OBSERVER_POSITION["POSITION_POST_CAPTURER"] = 1] = "POSITION_POST_CAPTURER";
        /**
         * 2: The pre-renderer position, which corresponds to the video data in the onRenderVideoFrame callback.
         */
        VIDEO_OBSERVER_POSITION[VIDEO_OBSERVER_POSITION["POSITION_PRE_RENDERER"] = 2] = "POSITION_PRE_RENDERER";
        /**
         * 4: The pre-encoder position, which corresponds to the video data in the onPreEncodeVideoFrame callback.
         */
        VIDEO_OBSERVER_POSITION[VIDEO_OBSERVER_POSITION["POSITION_PRE_ENCODER"] = 4] = "POSITION_PRE_ENCODER";
    })(VIDEO_OBSERVER_POSITION = AgoraRtcEngine.VIDEO_OBSERVER_POSITION || (AgoraRtcEngine.VIDEO_OBSERVER_POSITION = {}));
    var PLANE_TYPE;
    (function (PLANE_TYPE) {
        PLANE_TYPE[PLANE_TYPE["Y_PLANE"] = 0] = "Y_PLANE";
        PLANE_TYPE[PLANE_TYPE["U_PLANE"] = 1] = "U_PLANE";
        PLANE_TYPE[PLANE_TYPE["V_PLANE"] = 2] = "V_PLANE";
        PLANE_TYPE[PLANE_TYPE["NUM_OF_PLANES"] = 3] = "NUM_OF_PLANES";
    })(PLANE_TYPE = AgoraRtcEngine.PLANE_TYPE || (AgoraRtcEngine.PLANE_TYPE = {}));
    var VIDEO_TYPE;
    (function (VIDEO_TYPE) {
        VIDEO_TYPE[VIDEO_TYPE["VIDEO_TYPE_UNKNOWN"] = 0] = "VIDEO_TYPE_UNKNOWN";
        VIDEO_TYPE[VIDEO_TYPE["VIDEO_TYPE_I420"] = 1] = "VIDEO_TYPE_I420";
        VIDEO_TYPE[VIDEO_TYPE["VIDEO_TYPE_IYUV"] = 2] = "VIDEO_TYPE_IYUV";
        VIDEO_TYPE[VIDEO_TYPE["VIDEO_TYPE_RGB24"] = 3] = "VIDEO_TYPE_RGB24";
        VIDEO_TYPE[VIDEO_TYPE["VIDEO_TYPE_ABGR"] = 4] = "VIDEO_TYPE_ABGR";
        VIDEO_TYPE[VIDEO_TYPE["VIDEO_TYPE_ARGB"] = 5] = "VIDEO_TYPE_ARGB";
        VIDEO_TYPE[VIDEO_TYPE["VIDEO_TYPE_ARGB4444"] = 6] = "VIDEO_TYPE_ARGB4444";
        VIDEO_TYPE[VIDEO_TYPE["VIDEO_TYPE_RGB565"] = 7] = "VIDEO_TYPE_RGB565";
        VIDEO_TYPE[VIDEO_TYPE["VIDEO_TYPE_ARGB1555"] = 8] = "VIDEO_TYPE_ARGB1555";
        VIDEO_TYPE[VIDEO_TYPE["VIDEO_TYPE_YUY2"] = 9] = "VIDEO_TYPE_YUY2";
        VIDEO_TYPE[VIDEO_TYPE["VIDEO_TYPE_YV12"] = 10] = "VIDEO_TYPE_YV12";
        VIDEO_TYPE[VIDEO_TYPE["VIDEO_TYPE_UYVY"] = 11] = "VIDEO_TYPE_UYVY";
        VIDEO_TYPE[VIDEO_TYPE["VIDEO_TYPE_MJPG"] = 12] = "VIDEO_TYPE_MJPG";
        VIDEO_TYPE[VIDEO_TYPE["VIDEO_TYPE_NV21"] = 13] = "VIDEO_TYPE_NV21";
        VIDEO_TYPE[VIDEO_TYPE["VIDEO_TYPE_NV12"] = 14] = "VIDEO_TYPE_NV12";
        VIDEO_TYPE[VIDEO_TYPE["VIDEO_TYPE_BGRA"] = 15] = "VIDEO_TYPE_BGRA";
        VIDEO_TYPE[VIDEO_TYPE["VIDEO_TYPE_RGBA"] = 16] = "VIDEO_TYPE_RGBA";
        VIDEO_TYPE[VIDEO_TYPE["VIDEO_TYPE_I422"] = 17] = "VIDEO_TYPE_I422";
    })(VIDEO_TYPE = AgoraRtcEngine.VIDEO_TYPE || (AgoraRtcEngine.VIDEO_TYPE = {}));
    /**
     * The video buffer type.
     */
    var VIDEO_BUFFER_TYPE;
    (function (VIDEO_BUFFER_TYPE) {
        /**
         * 1: The video buffer in the format of raw data.
         */
        VIDEO_BUFFER_TYPE[VIDEO_BUFFER_TYPE["VIDEO_BUFFER_RAW_DATA"] = 1] = "VIDEO_BUFFER_RAW_DATA";
    })(VIDEO_BUFFER_TYPE = AgoraRtcEngine.VIDEO_BUFFER_TYPE || (AgoraRtcEngine.VIDEO_BUFFER_TYPE = {}));
    /**
     * The video pixel format.
     *
     * @note The SDK does not support the alpha channel, and discards any alpha value passed to the SDK.
     */
    var VIDEO_PIXEL_FORMAT;
    (function (VIDEO_PIXEL_FORMAT) {
        /**
         * 0: The video pixel format is unknown.
         */
        VIDEO_PIXEL_FORMAT[VIDEO_PIXEL_FORMAT["VIDEO_PIXEL_UNKNOWN"] = 0] = "VIDEO_PIXEL_UNKNOWN";
        /**
         * 1: The video pixel format is I420.
         */
        VIDEO_PIXEL_FORMAT[VIDEO_PIXEL_FORMAT["VIDEO_PIXEL_I420"] = 1] = "VIDEO_PIXEL_I420";
        /**
         * 2: The video pixel format is BGRA.
         */
        VIDEO_PIXEL_FORMAT[VIDEO_PIXEL_FORMAT["VIDEO_PIXEL_BGRA"] = 2] = "VIDEO_PIXEL_BGRA";
        /**
         * 3: The video pixel format is NV21.
         */
        VIDEO_PIXEL_FORMAT[VIDEO_PIXEL_FORMAT["VIDEO_PIXEL_NV21"] = 3] = "VIDEO_PIXEL_NV21";
        /**
         * 4: The video pixel format is RGBA.
         */
        VIDEO_PIXEL_FORMAT[VIDEO_PIXEL_FORMAT["VIDEO_PIXEL_RGBA"] = 4] = "VIDEO_PIXEL_RGBA";
        /**
         * 5: The video pixel format is IMC2.
         */
        VIDEO_PIXEL_FORMAT[VIDEO_PIXEL_FORMAT["VIDEO_PIXEL_IMC2"] = 5] = "VIDEO_PIXEL_IMC2";
        /**
         * 7: The video pixel format is ARGB.
         */
        VIDEO_PIXEL_FORMAT[VIDEO_PIXEL_FORMAT["VIDEO_PIXEL_ARGB"] = 7] = "VIDEO_PIXEL_ARGB";
        /**
         * 8: The video pixel format is NV12.
         */
        VIDEO_PIXEL_FORMAT[VIDEO_PIXEL_FORMAT["VIDEO_PIXEL_NV12"] = 8] = "VIDEO_PIXEL_NV12";
        /**
         * 16: The video pixel format is I422.
         */
        VIDEO_PIXEL_FORMAT[VIDEO_PIXEL_FORMAT["VIDEO_PIXEL_I422"] = 16] = "VIDEO_PIXEL_I422";
    })(VIDEO_PIXEL_FORMAT = AgoraRtcEngine.VIDEO_PIXEL_FORMAT || (AgoraRtcEngine.VIDEO_PIXEL_FORMAT = {}));
})(AgoraRtcEngine || (AgoraRtcEngine = {}));
/**
 * Types in IAgoraRtcEngine.h
 */
(function (AgoraRtcEngine) {
    /**
     * Maximum length of the device ID.
     */
    var MAX_DEVICE_ID_LENGTH_TYPE;
    (function (MAX_DEVICE_ID_LENGTH_TYPE) {
        /**
         * The maximum length of the device ID is 512 bytes.
         */
        MAX_DEVICE_ID_LENGTH_TYPE[MAX_DEVICE_ID_LENGTH_TYPE["MAX_DEVICE_ID_LENGTH"] = 512] = "MAX_DEVICE_ID_LENGTH";
    })(MAX_DEVICE_ID_LENGTH_TYPE = AgoraRtcEngine.MAX_DEVICE_ID_LENGTH_TYPE || (AgoraRtcEngine.MAX_DEVICE_ID_LENGTH_TYPE = {}));
    /**
     * Maximum length of user account.
     */
    var MAX_USER_ACCOUNT_LENGTH_TYPE;
    (function (MAX_USER_ACCOUNT_LENGTH_TYPE) {
        /**
         * The maximum length of user account is 255 bytes.
         */
        MAX_USER_ACCOUNT_LENGTH_TYPE[MAX_USER_ACCOUNT_LENGTH_TYPE["MAX_USER_ACCOUNT_LENGTH"] = 256] = "MAX_USER_ACCOUNT_LENGTH";
    })(MAX_USER_ACCOUNT_LENGTH_TYPE = AgoraRtcEngine.MAX_USER_ACCOUNT_LENGTH_TYPE || (AgoraRtcEngine.MAX_USER_ACCOUNT_LENGTH_TYPE = {}));
    /**
     * Maximum length of channel ID.
     */
    var MAX_CHANNEL_ID_LENGTH_TYPE;
    (function (MAX_CHANNEL_ID_LENGTH_TYPE) {
        /**
         * The maximum length of channel id is 64 bytes.
         */
        MAX_CHANNEL_ID_LENGTH_TYPE[MAX_CHANNEL_ID_LENGTH_TYPE["MAX_CHANNEL_ID_LENGTH"] = 65] = "MAX_CHANNEL_ID_LENGTH";
    })(MAX_CHANNEL_ID_LENGTH_TYPE = AgoraRtcEngine.MAX_CHANNEL_ID_LENGTH_TYPE || (AgoraRtcEngine.MAX_CHANNEL_ID_LENGTH_TYPE = {}));
    /**
     * Formats of the quality report.
     */
    var QUALITY_REPORT_FORMAT_TYPE;
    (function (QUALITY_REPORT_FORMAT_TYPE) {
        /**
         * 0: The quality report in JSON format,
         */
        QUALITY_REPORT_FORMAT_TYPE[QUALITY_REPORT_FORMAT_TYPE["QUALITY_REPORT_JSON"] = 0] = "QUALITY_REPORT_JSON";
        /**
         * 1: The quality report in HTML format.
         */
        QUALITY_REPORT_FORMAT_TYPE[QUALITY_REPORT_FORMAT_TYPE["QUALITY_REPORT_HTML"] = 1] = "QUALITY_REPORT_HTML";
    })(QUALITY_REPORT_FORMAT_TYPE = AgoraRtcEngine.QUALITY_REPORT_FORMAT_TYPE || (AgoraRtcEngine.QUALITY_REPORT_FORMAT_TYPE = {}));
    var MEDIA_ENGINE_EVENT_CODE_TYPE;
    (function (MEDIA_ENGINE_EVENT_CODE_TYPE) {
        /**
         * 0: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_RECORDING_ERROR"] = 0] = "MEDIA_ENGINE_RECORDING_ERROR";
        /**
         * 1: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_PLAYOUT_ERROR"] = 1] = "MEDIA_ENGINE_PLAYOUT_ERROR";
        /**
         * 2: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_RECORDING_WARNING"] = 2] = "MEDIA_ENGINE_RECORDING_WARNING";
        /**
         * 3: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_PLAYOUT_WARNING"] = 3] = "MEDIA_ENGINE_PLAYOUT_WARNING";
        /**
         * 10: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_AUDIO_FILE_MIX_FINISH"] = 10] = "MEDIA_ENGINE_AUDIO_FILE_MIX_FINISH";
        /**
         * 12: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_AUDIO_FAREND_MUSIC_BEGINS"] = 12] = "MEDIA_ENGINE_AUDIO_FAREND_MUSIC_BEGINS";
        /**
         * 13: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_AUDIO_FAREND_MUSIC_ENDS"] = 13] = "MEDIA_ENGINE_AUDIO_FAREND_MUSIC_ENDS";
        /**
         * 14: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_LOCAL_AUDIO_RECORD_ENABLED"] = 14] = "MEDIA_ENGINE_LOCAL_AUDIO_RECORD_ENABLED";
        /**
         * 15: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_LOCAL_AUDIO_RECORD_DISABLED"] = 15] = "MEDIA_ENGINE_LOCAL_AUDIO_RECORD_DISABLED";
        // media engine role changed
        /**
         * 20: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_ROLE_BROADCASTER_SOLO"] = 20] = "MEDIA_ENGINE_ROLE_BROADCASTER_SOLO";
        /**
         * 21: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_ROLE_BROADCASTER_INTERACTIVE"] = 21] = "MEDIA_ENGINE_ROLE_BROADCASTER_INTERACTIVE";
        /**
         * 22: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_ROLE_AUDIENCE"] = 22] = "MEDIA_ENGINE_ROLE_AUDIENCE";
        /**
         * 23: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_ROLE_COMM_PEER"] = 23] = "MEDIA_ENGINE_ROLE_COMM_PEER";
        /**
         * 24: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_ROLE_GAME_PEER"] = 24] = "MEDIA_ENGINE_ROLE_GAME_PEER";
        // iOS adm sample rate changed
        /**
         * 110: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_AUDIO_ADM_REQUIRE_RESTART"] = 110] = "MEDIA_ENGINE_AUDIO_ADM_REQUIRE_RESTART";
        /**
         * 111: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_AUDIO_ADM_SPECIAL_RESTART"] = 111] = "MEDIA_ENGINE_AUDIO_ADM_SPECIAL_RESTART";
        /**
         * 112: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_AUDIO_ADM_USING_COMM_PARAMS"] = 112] = "MEDIA_ENGINE_AUDIO_ADM_USING_COMM_PARAMS";
        /**
         * 113: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_AUDIO_ADM_USING_NORM_PARAMS"] = 113] = "MEDIA_ENGINE_AUDIO_ADM_USING_NORM_PARAMS";
        // audio mix state
        /**
         * 710: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_AUDIO_EVENT_MIXING_PLAY"] = 710] = "MEDIA_ENGINE_AUDIO_EVENT_MIXING_PLAY";
        /**
         * 711: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_AUDIO_EVENT_MIXING_PAUSED"] = 711] = "MEDIA_ENGINE_AUDIO_EVENT_MIXING_PAUSED";
        /**
         * 712: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_AUDIO_EVENT_MIXING_RESTART"] = 712] = "MEDIA_ENGINE_AUDIO_EVENT_MIXING_RESTART";
        /**
         * 713: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_AUDIO_EVENT_MIXING_STOPPED"] = 713] = "MEDIA_ENGINE_AUDIO_EVENT_MIXING_STOPPED";
        /**
         * 714: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_AUDIO_EVENT_MIXING_ERROR"] = 714] = "MEDIA_ENGINE_AUDIO_EVENT_MIXING_ERROR";
        //Mixing error codes
        /**
         * 701: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_AUDIO_ERROR_MIXING_OPEN"] = 701] = "MEDIA_ENGINE_AUDIO_ERROR_MIXING_OPEN";
        /**
         * 702: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_AUDIO_ERROR_MIXING_TOO_FREQUENT"] = 702] = "MEDIA_ENGINE_AUDIO_ERROR_MIXING_TOO_FREQUENT";
        /**
         * 703: The audio mixing file playback is interrupted. For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_AUDIO_ERROR_MIXING_INTERRUPTED_EOF"] = 703] = "MEDIA_ENGINE_AUDIO_ERROR_MIXING_INTERRUPTED_EOF";
        /**
         * 0: For internal use only.
         */
        MEDIA_ENGINE_EVENT_CODE_TYPE[MEDIA_ENGINE_EVENT_CODE_TYPE["MEDIA_ENGINE_AUDIO_ERROR_MIXING_NO_ERROR"] = 0] = "MEDIA_ENGINE_AUDIO_ERROR_MIXING_NO_ERROR";
    })(MEDIA_ENGINE_EVENT_CODE_TYPE = AgoraRtcEngine.MEDIA_ENGINE_EVENT_CODE_TYPE || (AgoraRtcEngine.MEDIA_ENGINE_EVENT_CODE_TYPE = {}));
    /**
     * The states of the local user's audio mixing file.
     */
    var AUDIO_MIXING_STATE_TYPE;
    (function (AUDIO_MIXING_STATE_TYPE) {
        /**
         * 710: The audio mixing file is playing after the method call of [startAudioMixing]{@link agoraRtcEngine.startAudioMixing} or
         * [resumeAudioMixing]{@link agoraRtcEngine.resumeAudioMixing} succeeds.
         */
        AUDIO_MIXING_STATE_TYPE[AUDIO_MIXING_STATE_TYPE["AUDIO_MIXING_STATE_PLAYING"] = 710] = "AUDIO_MIXING_STATE_PLAYING";
        /**
         * 711: The audio mixing file pauses playing after the method call of [pauseAudioMixing]{@link agoraRtcEngine.pauseAudioMixing} succeeds.
         */
        AUDIO_MIXING_STATE_TYPE[AUDIO_MIXING_STATE_TYPE["AUDIO_MIXING_STATE_PAUSED"] = 711] = "AUDIO_MIXING_STATE_PAUSED";
        /**
         * 713: The audio mixing file stops playing after the method call of [stopAudioMixing]{@link agoraRtcEngine.stopAudioMixing} succeeds.
         */
        AUDIO_MIXING_STATE_TYPE[AUDIO_MIXING_STATE_TYPE["AUDIO_MIXING_STATE_STOPPED"] = 713] = "AUDIO_MIXING_STATE_STOPPED";
        /**
         * 714: An exception occurs when playing the audio mixing file. See
         * [AUDIO_MIXING_ERROR_TYPE]{@link agoraRtcEngine.AUDIO_MIXING_ERROR_TYPE}.
         */
        AUDIO_MIXING_STATE_TYPE[AUDIO_MIXING_STATE_TYPE["AUDIO_MIXING_STATE_FAILED"] = 714] = "AUDIO_MIXING_STATE_FAILED";
    })(AUDIO_MIXING_STATE_TYPE = AgoraRtcEngine.AUDIO_MIXING_STATE_TYPE || (AgoraRtcEngine.AUDIO_MIXING_STATE_TYPE = {}));
    /**
     * The error codes of the local user's audio mixing file.
     */
    var AUDIO_MIXING_ERROR_TYPE;
    (function (AUDIO_MIXING_ERROR_TYPE) {
        /**
         * 701: The SDK cannot open the audio mixing file.
         */
        AUDIO_MIXING_ERROR_TYPE[AUDIO_MIXING_ERROR_TYPE["AUDIO_MIXING_ERROR_CAN_NOT_OPEN"] = 701] = "AUDIO_MIXING_ERROR_CAN_NOT_OPEN";
        /**
         * 702: The SDK opens the audio mixing file too frequently.
         */
        AUDIO_MIXING_ERROR_TYPE[AUDIO_MIXING_ERROR_TYPE["AUDIO_MIXING_ERROR_TOO_FREQUENT_CALL"] = 702] = "AUDIO_MIXING_ERROR_TOO_FREQUENT_CALL";
        /**
         * 703: The audio mixing file playback is interrupted.
         */
        AUDIO_MIXING_ERROR_TYPE[AUDIO_MIXING_ERROR_TYPE["AUDIO_MIXING_ERROR_INTERRUPTED_EOF"] = 703] = "AUDIO_MIXING_ERROR_INTERRUPTED_EOF";
        /**
         * 0: The SDK can open the audio mixing file.
         */
        AUDIO_MIXING_ERROR_TYPE[AUDIO_MIXING_ERROR_TYPE["AUDIO_MIXING_ERROR_OK"] = 0] = "AUDIO_MIXING_ERROR_OK";
    })(AUDIO_MIXING_ERROR_TYPE = AgoraRtcEngine.AUDIO_MIXING_ERROR_TYPE || (AgoraRtcEngine.AUDIO_MIXING_ERROR_TYPE = {}));
    /**
     * Media device states.
     */
    var MEDIA_DEVICE_STATE_TYPE;
    (function (MEDIA_DEVICE_STATE_TYPE) {
        /**
         * 1: The device is active.
         */
        MEDIA_DEVICE_STATE_TYPE[MEDIA_DEVICE_STATE_TYPE["MEDIA_DEVICE_STATE_ACTIVE"] = 1] = "MEDIA_DEVICE_STATE_ACTIVE";
        /**
         * 2: The device is disabled.
         */
        MEDIA_DEVICE_STATE_TYPE[MEDIA_DEVICE_STATE_TYPE["MEDIA_DEVICE_STATE_DISABLED"] = 2] = "MEDIA_DEVICE_STATE_DISABLED";
        /**
         * 4: The device is not present.
         */
        MEDIA_DEVICE_STATE_TYPE[MEDIA_DEVICE_STATE_TYPE["MEDIA_DEVICE_STATE_NOT_PRESENT"] = 4] = "MEDIA_DEVICE_STATE_NOT_PRESENT";
        /**
         * 8: The device is unplugged.
         */
        MEDIA_DEVICE_STATE_TYPE[MEDIA_DEVICE_STATE_TYPE["MEDIA_DEVICE_STATE_UNPLUGGED"] = 8] = "MEDIA_DEVICE_STATE_UNPLUGGED";
    })(MEDIA_DEVICE_STATE_TYPE = AgoraRtcEngine.MEDIA_DEVICE_STATE_TYPE || (AgoraRtcEngine.MEDIA_DEVICE_STATE_TYPE = {}));
    /**
     * Media device types.
     */
    var MEDIA_DEVICE_TYPE;
    (function (MEDIA_DEVICE_TYPE) {
        /**
         * -1: Unknown device type.
         */
        MEDIA_DEVICE_TYPE[MEDIA_DEVICE_TYPE["UNKNOWN_AUDIO_DEVICE"] = -1] = "UNKNOWN_AUDIO_DEVICE";
        /**
         * 0: Audio playback device.
         */
        MEDIA_DEVICE_TYPE[MEDIA_DEVICE_TYPE["AUDIO_PLAYOUT_DEVICE"] = 0] = "AUDIO_PLAYOUT_DEVICE";
        /**
         * 1: Audio recording device.
         */
        MEDIA_DEVICE_TYPE[MEDIA_DEVICE_TYPE["AUDIO_RECORDING_DEVICE"] = 1] = "AUDIO_RECORDING_DEVICE";
        /**
         * 2: Video renderer.
         */
        MEDIA_DEVICE_TYPE[MEDIA_DEVICE_TYPE["VIDEO_RENDER_DEVICE"] = 2] = "VIDEO_RENDER_DEVICE";
        /**
         * 3: Video capturer.
         */
        MEDIA_DEVICE_TYPE[MEDIA_DEVICE_TYPE["VIDEO_CAPTURE_DEVICE"] = 3] = "VIDEO_CAPTURE_DEVICE";
        /**
         * 4: Application audio playback device.
         */
        MEDIA_DEVICE_TYPE[MEDIA_DEVICE_TYPE["AUDIO_APPLICATION_PLAYOUT_DEVICE"] = 4] = "AUDIO_APPLICATION_PLAYOUT_DEVICE";
    })(MEDIA_DEVICE_TYPE = AgoraRtcEngine.MEDIA_DEVICE_TYPE || (AgoraRtcEngine.MEDIA_DEVICE_TYPE = {}));
    /**
     * Local video state types
     */
    var LOCAL_VIDEO_STREAM_STATE;
    (function (LOCAL_VIDEO_STREAM_STATE) {
        /**
         * 0: Initial state
         */
        LOCAL_VIDEO_STREAM_STATE[LOCAL_VIDEO_STREAM_STATE["LOCAL_VIDEO_STREAM_STATE_STOPPED"] = 0] = "LOCAL_VIDEO_STREAM_STATE_STOPPED";
        /**
         * 1: The local video capturing device starts successfully.
         *
         * The SDK also reports this state when you share a maximized window by calling
         * [startScreenCaptureByWindowId]{@link agoraRtcEngine.startScreenCaptureByWindowId}.
         */
        LOCAL_VIDEO_STREAM_STATE[LOCAL_VIDEO_STREAM_STATE["LOCAL_VIDEO_STREAM_STATE_CAPTURING"] = 1] = "LOCAL_VIDEO_STREAM_STATE_CAPTURING";
        /**
         * 2: The first video frame is successfully encoded.
         */
        LOCAL_VIDEO_STREAM_STATE[LOCAL_VIDEO_STREAM_STATE["LOCAL_VIDEO_STREAM_STATE_ENCODING"] = 2] = "LOCAL_VIDEO_STREAM_STATE_ENCODING";
        /**
         * 3: The local video fails to start.
         */
        LOCAL_VIDEO_STREAM_STATE[LOCAL_VIDEO_STREAM_STATE["LOCAL_VIDEO_STREAM_STATE_FAILED"] = 3] = "LOCAL_VIDEO_STREAM_STATE_FAILED";
    })(LOCAL_VIDEO_STREAM_STATE = AgoraRtcEngine.LOCAL_VIDEO_STREAM_STATE || (AgoraRtcEngine.LOCAL_VIDEO_STREAM_STATE = {}));
    /**
     * Local video state error codes
     */
    var LOCAL_VIDEO_STREAM_ERROR;
    (function (LOCAL_VIDEO_STREAM_ERROR) {
        /**
         * 0: The local video is normal.
         */
        LOCAL_VIDEO_STREAM_ERROR[LOCAL_VIDEO_STREAM_ERROR["LOCAL_VIDEO_STREAM_ERROR_OK"] = 0] = "LOCAL_VIDEO_STREAM_ERROR_OK";
        /**
         * 1: No specified reason for the local video failure.
         */
        LOCAL_VIDEO_STREAM_ERROR[LOCAL_VIDEO_STREAM_ERROR["LOCAL_VIDEO_STREAM_ERROR_FAILURE"] = 1] = "LOCAL_VIDEO_STREAM_ERROR_FAILURE";
        /**
         * 2: No permission to use the local video capturing device.
         */
        LOCAL_VIDEO_STREAM_ERROR[LOCAL_VIDEO_STREAM_ERROR["LOCAL_VIDEO_STREAM_ERROR_DEVICE_NO_PERMISSION"] = 2] = "LOCAL_VIDEO_STREAM_ERROR_DEVICE_NO_PERMISSION";
        /**
         * 3: The local video capturing device is in use.
         */
        LOCAL_VIDEO_STREAM_ERROR[LOCAL_VIDEO_STREAM_ERROR["LOCAL_VIDEO_STREAM_ERROR_DEVICE_BUSY"] = 3] = "LOCAL_VIDEO_STREAM_ERROR_DEVICE_BUSY";
        /**
         * 4: The local video capture fails. Check whether the capturing device is working properly.
         */
        LOCAL_VIDEO_STREAM_ERROR[LOCAL_VIDEO_STREAM_ERROR["LOCAL_VIDEO_STREAM_ERROR_CAPTURE_FAILURE"] = 4] = "LOCAL_VIDEO_STREAM_ERROR_CAPTURE_FAILURE";
        /**
         * 5: The local video encoding fails.
         */
        LOCAL_VIDEO_STREAM_ERROR[LOCAL_VIDEO_STREAM_ERROR["LOCAL_VIDEO_STREAM_ERROR_ENCODE_FAILURE"] = 5] = "LOCAL_VIDEO_STREAM_ERROR_ENCODE_FAILURE";
        /**
         * 11: The shared window is minimized when you call
         * [startScreenCaptureByWindowId]{@link agoraRtcEngine.startScreenCaptureByWindowId} to share a window.
         */
        LOCAL_VIDEO_STREAM_ERROR[LOCAL_VIDEO_STREAM_ERROR["LOCAL_VIDEO_STREAM_ERROR_SCREEN_CAPTURE_WINDOW_MINIMIZED"] = 11] = "LOCAL_VIDEO_STREAM_ERROR_SCREEN_CAPTURE_WINDOW_MINIMIZED";
    })(LOCAL_VIDEO_STREAM_ERROR = AgoraRtcEngine.LOCAL_VIDEO_STREAM_ERROR || (AgoraRtcEngine.LOCAL_VIDEO_STREAM_ERROR = {}));
    /**
     * Local audio state types.
     */
    var LOCAL_AUDIO_STREAM_STATE;
    (function (LOCAL_AUDIO_STREAM_STATE) {
        /**
         * 0: The local audio is in the initial state.
         */
        LOCAL_AUDIO_STREAM_STATE[LOCAL_AUDIO_STREAM_STATE["LOCAL_AUDIO_STREAM_STATE_STOPPED"] = 0] = "LOCAL_AUDIO_STREAM_STATE_STOPPED";
        /**
         * 1: The recording device starts successfully.
         */
        LOCAL_AUDIO_STREAM_STATE[LOCAL_AUDIO_STREAM_STATE["LOCAL_AUDIO_STREAM_STATE_RECORDING"] = 1] = "LOCAL_AUDIO_STREAM_STATE_RECORDING";
        /**
         * 2: The first audio frame encodes successfully.
         */
        LOCAL_AUDIO_STREAM_STATE[LOCAL_AUDIO_STREAM_STATE["LOCAL_AUDIO_STREAM_STATE_ENCODING"] = 2] = "LOCAL_AUDIO_STREAM_STATE_ENCODING";
        /**
         * 3: The local audio fails to start.
         */
        LOCAL_AUDIO_STREAM_STATE[LOCAL_AUDIO_STREAM_STATE["LOCAL_AUDIO_STREAM_STATE_FAILED"] = 3] = "LOCAL_AUDIO_STREAM_STATE_FAILED";
    })(LOCAL_AUDIO_STREAM_STATE = AgoraRtcEngine.LOCAL_AUDIO_STREAM_STATE || (AgoraRtcEngine.LOCAL_AUDIO_STREAM_STATE = {}));
    /**
     * Local audio state error codes.
     */
    var LOCAL_AUDIO_STREAM_ERROR;
    (function (LOCAL_AUDIO_STREAM_ERROR) {
        /**
         * 0: The local audio is normal.
         */
        LOCAL_AUDIO_STREAM_ERROR[LOCAL_AUDIO_STREAM_ERROR["LOCAL_AUDIO_STREAM_ERROR_OK"] = 0] = "LOCAL_AUDIO_STREAM_ERROR_OK";
        /**
         * 1: No specified reason for the local audio failure.
         */
        LOCAL_AUDIO_STREAM_ERROR[LOCAL_AUDIO_STREAM_ERROR["LOCAL_AUDIO_STREAM_ERROR_FAILURE"] = 1] = "LOCAL_AUDIO_STREAM_ERROR_FAILURE";
        /**
         * 2: No permission to use the local audio device.
         */
        LOCAL_AUDIO_STREAM_ERROR[LOCAL_AUDIO_STREAM_ERROR["LOCAL_AUDIO_STREAM_ERROR_DEVICE_NO_PERMISSION"] = 2] = "LOCAL_AUDIO_STREAM_ERROR_DEVICE_NO_PERMISSION";
        /**
         * 3: The microphone is in use.
         */
        LOCAL_AUDIO_STREAM_ERROR[LOCAL_AUDIO_STREAM_ERROR["LOCAL_AUDIO_STREAM_ERROR_DEVICE_BUSY"] = 3] = "LOCAL_AUDIO_STREAM_ERROR_DEVICE_BUSY";
        /**
         * 4: The local audio recording fails. Check whether the recording device
         * is working properly.
         */
        LOCAL_AUDIO_STREAM_ERROR[LOCAL_AUDIO_STREAM_ERROR["LOCAL_AUDIO_STREAM_ERROR_RECORD_FAILURE"] = 4] = "LOCAL_AUDIO_STREAM_ERROR_RECORD_FAILURE";
        /**
         * 5: The local audio encoding fails.
         */
        LOCAL_AUDIO_STREAM_ERROR[LOCAL_AUDIO_STREAM_ERROR["LOCAL_AUDIO_STREAM_ERROR_ENCODE_FAILURE"] = 5] = "LOCAL_AUDIO_STREAM_ERROR_ENCODE_FAILURE";
    })(LOCAL_AUDIO_STREAM_ERROR = AgoraRtcEngine.LOCAL_AUDIO_STREAM_ERROR || (AgoraRtcEngine.LOCAL_AUDIO_STREAM_ERROR = {}));
    /**
     * Audio recording qualities.
     */
    var AUDIO_RECORDING_QUALITY_TYPE;
    (function (AUDIO_RECORDING_QUALITY_TYPE) {
        /**
         * 0: Low quality. The sample rate is 32 kHz, and the file size is around
         * 1.2 MB after 10 minutes of recording.
         */
        AUDIO_RECORDING_QUALITY_TYPE[AUDIO_RECORDING_QUALITY_TYPE["AUDIO_RECORDING_QUALITY_LOW"] = 0] = "AUDIO_RECORDING_QUALITY_LOW";
        /**
         * 1: Medium quality. The sample rate is 32 kHz, and the file size is
         * around 2 MB after 10 minutes of recording.
         */
        AUDIO_RECORDING_QUALITY_TYPE[AUDIO_RECORDING_QUALITY_TYPE["AUDIO_RECORDING_QUALITY_MEDIUM"] = 1] = "AUDIO_RECORDING_QUALITY_MEDIUM";
        /**
         * 2: High quality. The sample rate is 32 kHz, and the file size is
         * around 3.75 MB after 10 minutes of recording.
         */
        AUDIO_RECORDING_QUALITY_TYPE[AUDIO_RECORDING_QUALITY_TYPE["AUDIO_RECORDING_QUALITY_HIGH"] = 2] = "AUDIO_RECORDING_QUALITY_HIGH";
    })(AUDIO_RECORDING_QUALITY_TYPE = AgoraRtcEngine.AUDIO_RECORDING_QUALITY_TYPE || (AgoraRtcEngine.AUDIO_RECORDING_QUALITY_TYPE = {}));
    /**
     * Network quality types.
     */
    var QUALITY_TYPE;
    (function (QUALITY_TYPE) {
        /**
         * 0: The network quality is unknown.
         */
        QUALITY_TYPE[QUALITY_TYPE["QUALITY_UNKNOWN"] = 0] = "QUALITY_UNKNOWN";
        /**
         * 1: The network quality is excellent.
         */
        QUALITY_TYPE[QUALITY_TYPE["QUALITY_EXCELLENT"] = 1] = "QUALITY_EXCELLENT";
        /**
         * 2: The network quality is quite good, but the bitrate may be slightly lower than excellent.
         */
        QUALITY_TYPE[QUALITY_TYPE["QUALITY_GOOD"] = 2] = "QUALITY_GOOD";
        /**
         * 3: Users can feel the communication slightly impaired.
         */
        QUALITY_TYPE[QUALITY_TYPE["QUALITY_POOR"] = 3] = "QUALITY_POOR";
        /**
         * 4: Users cannot communicate smoothly.
         */
        QUALITY_TYPE[QUALITY_TYPE["QUALITY_BAD"] = 4] = "QUALITY_BAD";
        /**
         * 5: The network is so bad that users can barely communicate.
         */
        QUALITY_TYPE[QUALITY_TYPE["QUALITY_VBAD"] = 5] = "QUALITY_VBAD";
        /**
         * 6: The network is down and users cannot communicate at all.
         */
        QUALITY_TYPE[QUALITY_TYPE["QUALITY_DOWN"] = 6] = "QUALITY_DOWN";
        /**
         * 7: Users cannot detect the network quality. (Not in use.)
         */
        QUALITY_TYPE[QUALITY_TYPE["QUALITY_UNSUPPORTED"] = 7] = "QUALITY_UNSUPPORTED";
        /**
         * 8: Detecting the network quality.
         */
        QUALITY_TYPE[QUALITY_TYPE["QUALITY_DETECTING"] = 8] = "QUALITY_DETECTING";
    })(QUALITY_TYPE = AgoraRtcEngine.QUALITY_TYPE || (AgoraRtcEngine.QUALITY_TYPE = {}));
    /**
     * Video display modes.
     */
    var RENDER_MODE_TYPE;
    (function (RENDER_MODE_TYPE) {
        /**
         * 1: Uniformly scale the video until it fills the visible boundaries (cropped). One dimension of the video may have
         * clipped contents.
         */
        RENDER_MODE_TYPE[RENDER_MODE_TYPE["RENDER_MODE_HIDDEN"] = 1] = "RENDER_MODE_HIDDEN";
        /**
         * 2: Uniformly scale the video until one of its dimension fits the boundary (zoomed to fit). Areas that are not filled due
         * to disparity in the aspect ratio are filled with black.
         */
        RENDER_MODE_TYPE[RENDER_MODE_TYPE["RENDER_MODE_FIT"] = 2] = "RENDER_MODE_FIT";
        /**
         * @deprecated 3: This mode is deprecated.
         */
        RENDER_MODE_TYPE[RENDER_MODE_TYPE["RENDER_MODE_ADAPTIVE"] = 3] = "RENDER_MODE_ADAPTIVE";
        /**
         4: The fill mode. In this mode, the SDK stretches or zooms the video to fill the display window.
         */
        RENDER_MODE_TYPE[RENDER_MODE_TYPE["RENDER_MODE_FILL"] = 4] = "RENDER_MODE_FILL";
    })(RENDER_MODE_TYPE = AgoraRtcEngine.RENDER_MODE_TYPE || (AgoraRtcEngine.RENDER_MODE_TYPE = {}));
    /**
     * Video mirror modes.
     */
    var VIDEO_MIRROR_MODE_TYPE;
    (function (VIDEO_MIRROR_MODE_TYPE) {
        /**
         * 0: (Default) The SDK enables the mirror mode.
         */
        VIDEO_MIRROR_MODE_TYPE[VIDEO_MIRROR_MODE_TYPE["VIDEO_MIRROR_MODE_AUTO"] = 0] = "VIDEO_MIRROR_MODE_AUTO";
        /**
         * 1: Enable mirror mode.
         */
        VIDEO_MIRROR_MODE_TYPE[VIDEO_MIRROR_MODE_TYPE["VIDEO_MIRROR_MODE_ENABLED"] = 1] = "VIDEO_MIRROR_MODE_ENABLED";
        /**
         * 2: Disable mirror mode.
         */
        VIDEO_MIRROR_MODE_TYPE[VIDEO_MIRROR_MODE_TYPE["VIDEO_MIRROR_MODE_DISABLED"] = 2] = "VIDEO_MIRROR_MODE_DISABLED";
    })(VIDEO_MIRROR_MODE_TYPE = AgoraRtcEngine.VIDEO_MIRROR_MODE_TYPE || (AgoraRtcEngine.VIDEO_MIRROR_MODE_TYPE = {}));
    /**
     * @deprecated Video profiles.
     */
    var VIDEO_PROFILE_TYPE;
    (function (VIDEO_PROFILE_TYPE) {
        /**
         * 0: 160 * 120, frame rate 15 fps, bitrate 65 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_120P"] = 0] = "VIDEO_PROFILE_LANDSCAPE_120P";
        /**
         * 2: 120 * 120, frame rate 15 fps, bitrate 50 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_120P_3"] = 2] = "VIDEO_PROFILE_LANDSCAPE_120P_3";
        /**
         * 10: 320*180, frame rate 15 fps, bitrate 140 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_180P"] = 10] = "VIDEO_PROFILE_LANDSCAPE_180P";
        /**
         * 12: 180 * 180, frame rate 15 fps, bitrate 100 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_180P_3"] = 12] = "VIDEO_PROFILE_LANDSCAPE_180P_3";
        /**
         * 13: 240 * 180, frame rate 15 fps, bitrate 120 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_180P_4"] = 13] = "VIDEO_PROFILE_LANDSCAPE_180P_4";
        /**
         * 20: 320 * 240, frame rate 15 fps, bitrate 200 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_240P"] = 20] = "VIDEO_PROFILE_LANDSCAPE_240P";
        /**
         * 22: 240 * 240, frame rate 15 fps, bitrate 140 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_240P_3"] = 22] = "VIDEO_PROFILE_LANDSCAPE_240P_3";
        /**
         * 23: 424 * 240, frame rate 15 fps, bitrate 220 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_240P_4"] = 23] = "VIDEO_PROFILE_LANDSCAPE_240P_4";
        /**
         * 30: 640 * 360, frame rate 15 fps, bitrate 400 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_360P"] = 30] = "VIDEO_PROFILE_LANDSCAPE_360P";
        /**
         * 32: 360 * 360, frame rate 15 fps, bitrate 260 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_360P_3"] = 32] = "VIDEO_PROFILE_LANDSCAPE_360P_3";
        /**
         * 33: 640 * 360, frame rate 30 fps, bitrate 600 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_360P_4"] = 33] = "VIDEO_PROFILE_LANDSCAPE_360P_4";
        /**
         * 35: 360 * 360, frame rate 30 fps, bitrate 400 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_360P_6"] = 35] = "VIDEO_PROFILE_LANDSCAPE_360P_6";
        /**
         * 36: 480 * 360, frame rate 15 fps, bitrate 320 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_360P_7"] = 36] = "VIDEO_PROFILE_LANDSCAPE_360P_7";
        /**
         * 37: 480 * 360, frame rate 30 fps, bitrate 490 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_360P_8"] = 37] = "VIDEO_PROFILE_LANDSCAPE_360P_8";
        /**
         * 38: 640 * 360, frame rate 15 fps, bitrate 800 Kbps.
         * @note `LIVE_BROADCASTING` profile only.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_360P_9"] = 38] = "VIDEO_PROFILE_LANDSCAPE_360P_9";
        /**
         * 39: 640 * 360, frame rate 24 fps, bitrate 800 Kbps.
         * @note `LIVE_BROADCASTING` profile only.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_360P_10"] = 39] = "VIDEO_PROFILE_LANDSCAPE_360P_10";
        /**
         * 100: 640 * 360, frame rate 24 fps, bitrate 1000 Kbps.
         * @note `LIVE_BROADCASTING` profile only.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_360P_11"] = 100] = "VIDEO_PROFILE_LANDSCAPE_360P_11";
        /**
         * 40: 640 * 480, frame rate 15 fps, bitrate 500 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_480P"] = 40] = "VIDEO_PROFILE_LANDSCAPE_480P";
        /**
         * 42: 480 * 480, frame rate 15 fps, bitrate 400 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_480P_3"] = 42] = "VIDEO_PROFILE_LANDSCAPE_480P_3";
        /**
         * 43: 640 * 480, frame rate 30 fps, bitrate 750 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_480P_4"] = 43] = "VIDEO_PROFILE_LANDSCAPE_480P_4";
        /**
         * 45: 480 * 480, frame rate 30 fps, bitrate 600 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_480P_6"] = 45] = "VIDEO_PROFILE_LANDSCAPE_480P_6";
        /**
         * 47: 848 * 480, frame rate 15 fps, bitrate 610 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_480P_8"] = 47] = "VIDEO_PROFILE_LANDSCAPE_480P_8";
        /**
         * 48: 848 * 480, frame rate 30 fps, bitrate 930 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_480P_9"] = 48] = "VIDEO_PROFILE_LANDSCAPE_480P_9";
        /**
         * 49: 640 * 480, frame rate 10 fps, bitrate 400 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_480P_10"] = 49] = "VIDEO_PROFILE_LANDSCAPE_480P_10";
        /**
         * 50: 1280 * 720, frame rate 15 fps, bitrate 1130 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_720P"] = 50] = "VIDEO_PROFILE_LANDSCAPE_720P";
        /**
         * 52: 1280 * 720, frame rate 30 fps, bitrate 1710 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_720P_3"] = 52] = "VIDEO_PROFILE_LANDSCAPE_720P_3";
        /**
         * 54: 960 * 720, frame rate 15 fps, bitrate 910 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_720P_5"] = 54] = "VIDEO_PROFILE_LANDSCAPE_720P_5";
        /**
         * 55: 960 * 720, frame rate 30 fps, bitrate 1380 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_720P_6"] = 55] = "VIDEO_PROFILE_LANDSCAPE_720P_6";
        /**
         * 60: 1920 * 1080, frame rate 15 fps, bitrate 2080 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_1080P"] = 60] = "VIDEO_PROFILE_LANDSCAPE_1080P";
        /**
         * 62: 1920 * 1080, frame rate 30 fps, bitrate 3150 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_1080P_3"] = 62] = "VIDEO_PROFILE_LANDSCAPE_1080P_3";
        /**
         * 64: 1920 * 1080, frame rate 60 fps, bitrate 4780 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_1080P_5"] = 64] = "VIDEO_PROFILE_LANDSCAPE_1080P_5";
        /**
         * 66: 2560 * 1440, frame rate 30 fps, bitrate 4850 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_1440P"] = 66] = "VIDEO_PROFILE_LANDSCAPE_1440P";
        /**
         * 67: 2560 * 1440, frame rate 60 fps, bitrate 6500 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_1440P_2"] = 67] = "VIDEO_PROFILE_LANDSCAPE_1440P_2";
        /**
         * 70: 3840 * 2160, frame rate 30 fps, bitrate 6500 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_4K"] = 70] = "VIDEO_PROFILE_LANDSCAPE_4K";
        /**
         * 72: 3840 * 2160, frame rate 60 fps, bitrate 6500 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_LANDSCAPE_4K_3"] = 72] = "VIDEO_PROFILE_LANDSCAPE_4K_3";
        /**
         * 1000: 120 * 160, frame rate 15 fps, bitrate 65 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_120P"] = 1000] = "VIDEO_PROFILE_PORTRAIT_120P";
        /**
         * 1002: 120 * 120, frame rate 15 fps, bitrate 50 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_120P_3"] = 1002] = "VIDEO_PROFILE_PORTRAIT_120P_3";
        /**
         * 1010: 180 * 320, frame rate 15 fps, bitrate 140 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_180P"] = 1010] = "VIDEO_PROFILE_PORTRAIT_180P";
        /**
         * 1012: 180 * 180, frame rate 15 fps, bitrate 100 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_180P_3"] = 1012] = "VIDEO_PROFILE_PORTRAIT_180P_3";
        /**
         * 1013: 180 * 240, frame rate 15 fps, bitrate 120 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_180P_4"] = 1013] = "VIDEO_PROFILE_PORTRAIT_180P_4";
        /**
         * 1020: 240 * 320, frame rate 15 fps, bitrate 200 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_240P"] = 1020] = "VIDEO_PROFILE_PORTRAIT_240P";
        /**
         * 1022: 240 * 240, frame rate 15 fps, bitrate 140 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_240P_3"] = 1022] = "VIDEO_PROFILE_PORTRAIT_240P_3";
        /**
         * 1023: 240 * 424, frame rate 15 fps, bitrate 220 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_240P_4"] = 1023] = "VIDEO_PROFILE_PORTRAIT_240P_4";
        /**
         * 1030: 360 * 640, frame rate 15 fps, bitrate 400 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_360P"] = 1030] = "VIDEO_PROFILE_PORTRAIT_360P";
        /**
         * 1032: 360 * 360, frame rate 15 fps, bitrate 260 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_360P_3"] = 1032] = "VIDEO_PROFILE_PORTRAIT_360P_3";
        /**
         * 1033: 360 * 640, frame rate 30 fps, bitrate 600 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_360P_4"] = 1033] = "VIDEO_PROFILE_PORTRAIT_360P_4";
        /**
         * 1035: 360 * 360, frame rate 30 fps, bitrate 400 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_360P_6"] = 1035] = "VIDEO_PROFILE_PORTRAIT_360P_6";
        /**
         * 1036: 360 * 480, frame rate 15 fps, bitrate 320 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_360P_7"] = 1036] = "VIDEO_PROFILE_PORTRAIT_360P_7";
        /**
         * 1037: 360 * 480, frame rate 30 fps, bitrate 490 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_360P_8"] = 1037] = "VIDEO_PROFILE_PORTRAIT_360P_8";
        /**
         * 1038: 360 * 640, frame rate 15 fps, bitrate 800 Kbps.
         * @note `LIVE_BROADCASTING` profile only.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_360P_9"] = 1038] = "VIDEO_PROFILE_PORTRAIT_360P_9";
        /**
         * 1039: 360 * 640, frame rate 24 fps, bitrate 800 Kbps.
         * @note `LIVE_BROADCASTING` profile only.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_360P_10"] = 1039] = "VIDEO_PROFILE_PORTRAIT_360P_10";
        /**
         * 1100: 360 * 640, frame rate 24 fps, bitrate 1000 Kbps.
         * @note `LIVE_BROADCASTING` profile only.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_360P_11"] = 1100] = "VIDEO_PROFILE_PORTRAIT_360P_11";
        /**
         * 1040: 480 * 640, frame rate 15 fps, bitrate 500 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_480P"] = 1040] = "VIDEO_PROFILE_PORTRAIT_480P";
        /**
         * 1042: 480 * 480, frame rate 15 fps, bitrate 400 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_480P_3"] = 1042] = "VIDEO_PROFILE_PORTRAIT_480P_3";
        /**
         * 1043: 480 * 640, frame rate 30 fps, bitrate 750 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_480P_4"] = 1043] = "VIDEO_PROFILE_PORTRAIT_480P_4";
        /**
         * 1045: 480 * 480, frame rate 30 fps, bitrate 600 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_480P_6"] = 1045] = "VIDEO_PROFILE_PORTRAIT_480P_6";
        /**
         * 1047: 480 * 848, frame rate 15 fps, bitrate 610 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_480P_8"] = 1047] = "VIDEO_PROFILE_PORTRAIT_480P_8";
        /**
         * 1048: 480 * 848, frame rate 30 fps, bitrate 930 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_480P_9"] = 1048] = "VIDEO_PROFILE_PORTRAIT_480P_9";
        /**
         * 1049: 480 * 640, frame rate 10 fps, bitrate 400 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_480P_10"] = 1049] = "VIDEO_PROFILE_PORTRAIT_480P_10";
        /**
         * 1050: 720 * 1280, frame rate 15 fps, bitrate 1130 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_720P"] = 1050] = "VIDEO_PROFILE_PORTRAIT_720P";
        /**
         * 1052: 720 * 1280, frame rate 30 fps, bitrate 1710 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_720P_3"] = 1052] = "VIDEO_PROFILE_PORTRAIT_720P_3";
        /**
         * 1054: 720 * 960, frame rate 15 fps, bitrate 910 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_720P_5"] = 1054] = "VIDEO_PROFILE_PORTRAIT_720P_5";
        /**
         * 1055: 720 * 960, frame rate 30 fps, bitrate 1380 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_720P_6"] = 1055] = "VIDEO_PROFILE_PORTRAIT_720P_6";
        /**
         * 1060: 1080 * 1920, frame rate 15 fps, bitrate 2080 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_1080P"] = 1060] = "VIDEO_PROFILE_PORTRAIT_1080P";
        /**
         * 1062: 1080 * 1920, frame rate 30 fps, bitrate 3150 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_1080P_3"] = 1062] = "VIDEO_PROFILE_PORTRAIT_1080P_3";
        /**
         * 1064: 1080 * 1920, frame rate 60 fps, bitrate 4780 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_1080P_5"] = 1064] = "VIDEO_PROFILE_PORTRAIT_1080P_5";
        /**
         * 1066: 1440 * 2560, frame rate 30 fps, bitrate 4850 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_1440P"] = 1066] = "VIDEO_PROFILE_PORTRAIT_1440P";
        /**
         * 1067: 1440 * 2560, frame rate 60 fps, bitrate 6500 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_1440P_2"] = 1067] = "VIDEO_PROFILE_PORTRAIT_1440P_2";
        /**
         * 1070: 2160 * 3840, frame rate 30 fps, bitrate 6500 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_4K"] = 1070] = "VIDEO_PROFILE_PORTRAIT_4K";
        /**
         * 1072: 2160 * 3840, frame rate 60 fps, bitrate 6500 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_PORTRAIT_4K_3"] = 1072] = "VIDEO_PROFILE_PORTRAIT_4K_3";
        /**
         * Default 640 * 360, frame rate 15 fps, bitrate 400 Kbps.
         */
        VIDEO_PROFILE_TYPE[VIDEO_PROFILE_TYPE["VIDEO_PROFILE_DEFAULT"] = 30] = "VIDEO_PROFILE_DEFAULT";
    })(VIDEO_PROFILE_TYPE = AgoraRtcEngine.VIDEO_PROFILE_TYPE || (AgoraRtcEngine.VIDEO_PROFILE_TYPE = {}));
    /**
     * Audio profiles. Sets the sample rate, bitrate, encoding mode, and the number of channels.
     */
    var AUDIO_PROFILE_TYPE;
    (function (AUDIO_PROFILE_TYPE) {
        /**
         * 0: Default audio profile:
         * - For the interactive streaming profile: A sample rate of 48 KHz, music encoding, mono, and a bitrate of up to 64 Kbps.
         * - For the `COMMUNICATION` profile: A sample rate of 32 KHz, music encoding, mono, and a bitrate of up to 18 Kbps.
         */
        AUDIO_PROFILE_TYPE[AUDIO_PROFILE_TYPE["AUDIO_PROFILE_DEFAULT"] = 0] = "AUDIO_PROFILE_DEFAULT";
        /**
         * 1: A sample rate of 32 KHz, audio encoding, mono, and a bitrate of up to 18 Kbps.
         */
        AUDIO_PROFILE_TYPE[AUDIO_PROFILE_TYPE["AUDIO_PROFILE_SPEECH_STANDARD"] = 1] = "AUDIO_PROFILE_SPEECH_STANDARD";
        /**
         * 2: A sample rate of 48 KHz, music encoding, mono, and a bitrate of up to 64 Kbps.
         */
        AUDIO_PROFILE_TYPE[AUDIO_PROFILE_TYPE["AUDIO_PROFILE_MUSIC_STANDARD"] = 2] = "AUDIO_PROFILE_MUSIC_STANDARD";
        /**
         * 3: A sample rate of 48 KHz, music encoding, stereo, and a bitrate of up to 80 Kbps.
         */
        AUDIO_PROFILE_TYPE[AUDIO_PROFILE_TYPE["AUDIO_PROFILE_MUSIC_STANDARD_STEREO"] = 3] = "AUDIO_PROFILE_MUSIC_STANDARD_STEREO";
        /**
         * 4: A sample rate of 48 KHz, music encoding, mono, and a bitrate of up to 96 Kbps.
         */
        AUDIO_PROFILE_TYPE[AUDIO_PROFILE_TYPE["AUDIO_PROFILE_MUSIC_HIGH_QUALITY"] = 4] = "AUDIO_PROFILE_MUSIC_HIGH_QUALITY";
        /**
         * 5: A sample rate of 48 KHz, music encoding, stereo, and a bitrate of up to 128 Kbps.
         */
        AUDIO_PROFILE_TYPE[AUDIO_PROFILE_TYPE["AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO"] = 5] = "AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO";
        /**
         * 6: A sample rate of 16 KHz, audio encoding, mono, and Acoustic Echo Cancellation (AES) enabled.
         */
        AUDIO_PROFILE_TYPE[AUDIO_PROFILE_TYPE["AUDIO_PROFILE_IOT"] = 6] = "AUDIO_PROFILE_IOT";
        /**
         * The number of elements in the enumeration.
         */
        AUDIO_PROFILE_TYPE[AUDIO_PROFILE_TYPE["AUDIO_PROFILE_NUM"] = 7] = "AUDIO_PROFILE_NUM";
    })(AUDIO_PROFILE_TYPE = AgoraRtcEngine.AUDIO_PROFILE_TYPE || (AgoraRtcEngine.AUDIO_PROFILE_TYPE = {}));
    /**
     * Audio application scenarios.
     */
    var AUDIO_SCENARIO_TYPE;
    (function (AUDIO_SCENARIO_TYPE) {
        /**
         * 0: Default audio scenario..
         */
        AUDIO_SCENARIO_TYPE[AUDIO_SCENARIO_TYPE["AUDIO_SCENARIO_DEFAULT"] = 0] = "AUDIO_SCENARIO_DEFAULT";
        /**
         * 1: Entertainment scenario where users need to frequently switch the user role.
         */
        AUDIO_SCENARIO_TYPE[AUDIO_SCENARIO_TYPE["AUDIO_SCENARIO_CHATROOM_ENTERTAINMENT"] = 1] = "AUDIO_SCENARIO_CHATROOM_ENTERTAINMENT";
        /**
         * 2: Education scenario where users want smoothness and stability.
         */
        AUDIO_SCENARIO_TYPE[AUDIO_SCENARIO_TYPE["AUDIO_SCENARIO_EDUCATION"] = 2] = "AUDIO_SCENARIO_EDUCATION";
        /**
         * 3: High-quality audio chatroom scenario where hosts mainly play music.
         */
        AUDIO_SCENARIO_TYPE[AUDIO_SCENARIO_TYPE["AUDIO_SCENARIO_GAME_STREAMING"] = 3] = "AUDIO_SCENARIO_GAME_STREAMING";
        /**
         * 4: Showroom scenario where a single host wants high-quality audio.
         */
        AUDIO_SCENARIO_TYPE[AUDIO_SCENARIO_TYPE["AUDIO_SCENARIO_SHOWROOM"] = 4] = "AUDIO_SCENARIO_SHOWROOM";
        /**
         * 5: Gaming scenario for group chat that only contains the human voice.
         */
        AUDIO_SCENARIO_TYPE[AUDIO_SCENARIO_TYPE["AUDIO_SCENARIO_CHATROOM_GAMING"] = 5] = "AUDIO_SCENARIO_CHATROOM_GAMING";
        /**
         * 6: IoT (Internet of Things) scenario where users use IoT devices with low power consumption.
         */
        AUDIO_SCENARIO_TYPE[AUDIO_SCENARIO_TYPE["AUDIO_SCENARIO_IOT"] = 6] = "AUDIO_SCENARIO_IOT";
        /**
         * The number of elements in the enumeration.
         */
        AUDIO_SCENARIO_TYPE[AUDIO_SCENARIO_TYPE["AUDIO_SCENARIO_NUM"] = 7] = "AUDIO_SCENARIO_NUM";
    })(AUDIO_SCENARIO_TYPE = AgoraRtcEngine.AUDIO_SCENARIO_TYPE || (AgoraRtcEngine.AUDIO_SCENARIO_TYPE = {}));
    /**
     * The channel profile.
     */
    var CHANNEL_PROFILE_TYPE;
    (function (CHANNEL_PROFILE_TYPE) {
        /**
         * (Default) Communication. This profile applies to scenarios such as an audio call or video call,
         * where all users can publish and subscribe to streams.
         */
        CHANNEL_PROFILE_TYPE[CHANNEL_PROFILE_TYPE["CHANNEL_PROFILE_COMMUNICATION"] = 0] = "CHANNEL_PROFILE_COMMUNICATION";
        /**
         * Live streaming. In this profile, uses have roles, namely, host and audience (default).
         *
         * A host both publishes and subscribes to streams, while an audience subscribes to streams only.
         * This profile applies to scenarios such as a chat room or interactive video streaming.
         */
        CHANNEL_PROFILE_TYPE[CHANNEL_PROFILE_TYPE["CHANNEL_PROFILE_LIVE_BROADCASTING"] = 1] = "CHANNEL_PROFILE_LIVE_BROADCASTING";
        /**
         * 2: Agora recommends not using this profile.
         */
        CHANNEL_PROFILE_TYPE[CHANNEL_PROFILE_TYPE["CHANNEL_PROFILE_GAME"] = 2] = "CHANNEL_PROFILE_GAME";
    })(CHANNEL_PROFILE_TYPE = AgoraRtcEngine.CHANNEL_PROFILE_TYPE || (AgoraRtcEngine.CHANNEL_PROFILE_TYPE = {}));
    /**
     * Client roles in the live interactive streaming.
     */
    var CLIENT_ROLE_TYPE;
    (function (CLIENT_ROLE_TYPE) {
        /**
         * 1: Host. A host can both send and receive streams.
         */
        CLIENT_ROLE_TYPE[CLIENT_ROLE_TYPE["CLIENT_ROLE_BROADCASTER"] = 1] = "CLIENT_ROLE_BROADCASTER";
        /**
         * 2: Audience, the default role. An audience can only receive streams.
         */
        CLIENT_ROLE_TYPE[CLIENT_ROLE_TYPE["CLIENT_ROLE_AUDIENCE"] = 2] = "CLIENT_ROLE_AUDIENCE";
    })(CLIENT_ROLE_TYPE = AgoraRtcEngine.CLIENT_ROLE_TYPE || (AgoraRtcEngine.CLIENT_ROLE_TYPE = {}));
    /**
     * The latency level of an audience member in a live interactive streaming.
     *
     * @note Takes effect only when the user role is `CLIENT_ROLE_BROADCASTER`.
     */
    var AUDIENCE_LATENCY_LEVEL_TYPE;
    (function (AUDIENCE_LATENCY_LEVEL_TYPE) {
        /**
         * 1: Low latency.
         */
        AUDIENCE_LATENCY_LEVEL_TYPE[AUDIENCE_LATENCY_LEVEL_TYPE["AUDIENCE_LATENCY_LEVEL_LOW_LATENCY"] = 1] = "AUDIENCE_LATENCY_LEVEL_LOW_LATENCY";
        /**
         * 2: (Default) Ultra low latency.
         */
        AUDIENCE_LATENCY_LEVEL_TYPE[AUDIENCE_LATENCY_LEVEL_TYPE["AUDIENCE_LATENCY_LEVEL_ULTRA_LOW_LATENCY"] = 2] = "AUDIENCE_LATENCY_LEVEL_ULTRA_LOW_LATENCY";
    })(AUDIENCE_LATENCY_LEVEL_TYPE = AgoraRtcEngine.AUDIENCE_LATENCY_LEVEL_TYPE || (AgoraRtcEngine.AUDIENCE_LATENCY_LEVEL_TYPE = {}));
    /**
     * The reason why the super-resolution algorithm is not successfully enabled.
     */
    var SUPER_RESOLUTION_STATE_REASON;
    (function (SUPER_RESOLUTION_STATE_REASON) {
        /**
         * 0: The super-resolution algorithm is successfully enabled.
         */
        SUPER_RESOLUTION_STATE_REASON[SUPER_RESOLUTION_STATE_REASON["SR_STATE_REASON_SUCCESS"] = 0] = "SR_STATE_REASON_SUCCESS";
        /**
         * 1: The origin resolution of the remote video is beyond the range where
         * the super-resolution algorithm can be applied.
         */
        SUPER_RESOLUTION_STATE_REASON[SUPER_RESOLUTION_STATE_REASON["SR_STATE_REASON_STREAM_OVER_LIMITATION"] = 1] = "SR_STATE_REASON_STREAM_OVER_LIMITATION";
        /**
         * 2: Another user is already using the super-resolution algorithm.
         */
        SUPER_RESOLUTION_STATE_REASON[SUPER_RESOLUTION_STATE_REASON["SR_STATE_REASON_USER_COUNT_OVER_LIMITATION"] = 2] = "SR_STATE_REASON_USER_COUNT_OVER_LIMITATION";
        /**
         * 3: The device does not support the super-resolution algorithm.
         */
        SUPER_RESOLUTION_STATE_REASON[SUPER_RESOLUTION_STATE_REASON["SR_STATE_REASON_DEVICE_NOT_SUPPORTED"] = 3] = "SR_STATE_REASON_DEVICE_NOT_SUPPORTED";
    })(SUPER_RESOLUTION_STATE_REASON = AgoraRtcEngine.SUPER_RESOLUTION_STATE_REASON || (AgoraRtcEngine.SUPER_RESOLUTION_STATE_REASON = {}));
    /**
     * Reasons for a user being offline.
     */
    var USER_OFFLINE_REASON_TYPE;
    (function (USER_OFFLINE_REASON_TYPE) {
        /**
         * 0: The user quits the call.
         */
        USER_OFFLINE_REASON_TYPE[USER_OFFLINE_REASON_TYPE["USER_OFFLINE_QUIT"] = 0] = "USER_OFFLINE_QUIT";
        /**
         * 1: The SDK times out and the user drops offline because no data packet is received within a certain period of time. If
         * the user quits the call and the message is not passed to the SDK (due to an unreliable channel), the SDK assumes the user
         * dropped offline.
         */
        USER_OFFLINE_REASON_TYPE[USER_OFFLINE_REASON_TYPE["USER_OFFLINE_DROPPED"] = 1] = "USER_OFFLINE_DROPPED";
        /**
         * 2: (`LIVE_BROADCASTING` only.) The client role switched from the host to the audience. */
        USER_OFFLINE_REASON_TYPE[USER_OFFLINE_REASON_TYPE["USER_OFFLINE_BECOME_AUDIENCE"] = 2] = "USER_OFFLINE_BECOME_AUDIENCE";
    })(USER_OFFLINE_REASON_TYPE = AgoraRtcEngine.USER_OFFLINE_REASON_TYPE || (AgoraRtcEngine.USER_OFFLINE_REASON_TYPE = {}));
    /**
     * States of the RTMP streaming.
     */
    var RTMP_STREAM_PUBLISH_STATE;
    (function (RTMP_STREAM_PUBLISH_STATE) {
        /**
         * The RTMP streaming has not started or has ended. This state is also triggered after you remove an RTMP address from
         * the CDN by calling [removePublishStreamUrl]{@link agoraRtcEngine.removePublishStreamUrl}.
         */
        RTMP_STREAM_PUBLISH_STATE[RTMP_STREAM_PUBLISH_STATE["RTMP_STREAM_PUBLISH_STATE_IDLE"] = 0] = "RTMP_STREAM_PUBLISH_STATE_IDLE";
        /**
         * The SDK is connecting to Agora streaming server and the RTMP server. This state is triggered after you call the
         * [addPublishStreamUrl]{@link agoraRtcEngine.addPublishStreamUrl} method.
         */
        RTMP_STREAM_PUBLISH_STATE[RTMP_STREAM_PUBLISH_STATE["RTMP_STREAM_PUBLISH_STATE_CONNECTING"] = 1] = "RTMP_STREAM_PUBLISH_STATE_CONNECTING";
        /**
         * The RTMP streaming publishes. The SDK successfully publishes the RTMP streaming and returns this state.
         */
        RTMP_STREAM_PUBLISH_STATE[RTMP_STREAM_PUBLISH_STATE["RTMP_STREAM_PUBLISH_STATE_RUNNING"] = 2] = "RTMP_STREAM_PUBLISH_STATE_RUNNING";
        /**
         * The RTMP streaming is recovering. When exceptions occur to the CDN, or the streaming is interrupted, the SDK tries to resume
         * RTMP streaming and returns this state.
         * - If the SDK successfully resumes the streaming, `RTMP_STREAM_PUBLISH_STATE_RUNNING(2)` returns.
         * - If the streaming does not resume within 60 seconds or server errors occur,
         * [RTMP_STREAM_PUBLISH_STATE_FAILURE]{@link agoraRtcEngine.RTMP_STREAM_PUBLISH_STATE.RTMP_STREAM_PUBLISH_STATE_FAILURE}(4) returns.
         * You can also reconnect to the server by calling the [removePublishStreamUrl]{@link agoraRtcEngine.removePublishStreamUrl} and
         * [addPublishStreamUrl]{@link agoraRtcEngine.addPublishStreamUrl} methods.
         */
        RTMP_STREAM_PUBLISH_STATE[RTMP_STREAM_PUBLISH_STATE["RTMP_STREAM_PUBLISH_STATE_RECOVERING"] = 3] = "RTMP_STREAM_PUBLISH_STATE_RECOVERING";
        /**
         * The RTMP streaming fails. See the `errCode` parameter for the detailed error information. You can also call the
         * [addPublishStreamUrl]{@link agoraRtcEngine.addPublishStreamUrl} method to publish the RTMP streaming again.
         */
        RTMP_STREAM_PUBLISH_STATE[RTMP_STREAM_PUBLISH_STATE["RTMP_STREAM_PUBLISH_STATE_FAILURE"] = 4] = "RTMP_STREAM_PUBLISH_STATE_FAILURE";
    })(RTMP_STREAM_PUBLISH_STATE = AgoraRtcEngine.RTMP_STREAM_PUBLISH_STATE || (AgoraRtcEngine.RTMP_STREAM_PUBLISH_STATE = {}));
    /**
     * Error codes of the RTMP streaming.
     */
    var RTMP_STREAM_PUBLISH_ERROR;
    (function (RTMP_STREAM_PUBLISH_ERROR) {
        /**
         * The RTMP streaming publishes successfully.
         */
        RTMP_STREAM_PUBLISH_ERROR[RTMP_STREAM_PUBLISH_ERROR["RTMP_STREAM_PUBLISH_ERROR_OK"] = 0] = "RTMP_STREAM_PUBLISH_ERROR_OK";
        /**
         * Invalid argument used. If, for example, you do not call the [setLiveTranscoding]{@link agoraRtcEngine.setLiveTranscoding} method to
         * configure the [LiveTranscoding]{@link agoraRtcEngine.LiveTranscoding} parameters before calling the
         * [addPublishStreamUrl]{@link agoraRtcEngine.addPublishStreamUrl} method, the SDK returns this error. Check whether you set the
         * parameters in the *setLiveTranscoding* method properly.
         */
        RTMP_STREAM_PUBLISH_ERROR[RTMP_STREAM_PUBLISH_ERROR["RTMP_STREAM_PUBLISH_ERROR_INVALID_ARGUMENT"] = 1] = "RTMP_STREAM_PUBLISH_ERROR_INVALID_ARGUMENT";
        /**
         * The RTMP streaming is encrypted and cannot be published.
         */
        RTMP_STREAM_PUBLISH_ERROR[RTMP_STREAM_PUBLISH_ERROR["RTMP_STREAM_PUBLISH_ERROR_ENCRYPTED_STREAM_NOT_ALLOWED"] = 2] = "RTMP_STREAM_PUBLISH_ERROR_ENCRYPTED_STREAM_NOT_ALLOWED";
        /**
         * Timeout for the RTMP streaming. Call the [addPublishStreamUrl]{@link agoraRtcEngine.addPublishStreamUrl} method to publish
         * the streaming again.
         */
        RTMP_STREAM_PUBLISH_ERROR[RTMP_STREAM_PUBLISH_ERROR["RTMP_STREAM_PUBLISH_ERROR_CONNECTION_TIMEOUT"] = 3] = "RTMP_STREAM_PUBLISH_ERROR_CONNECTION_TIMEOUT";
        /**
         * An error occurs in Agora's streaming server. Call the [addPublishStreamUrl]{@link agoraRtcEngine.addPublishStreamUrl} method to
         * publish the streaming again.
         */
        RTMP_STREAM_PUBLISH_ERROR[RTMP_STREAM_PUBLISH_ERROR["RTMP_STREAM_PUBLISH_ERROR_INTERNAL_SERVER_ERROR"] = 4] = "RTMP_STREAM_PUBLISH_ERROR_INTERNAL_SERVER_ERROR";
        /**
         * An error occurs in the RTMP server.
         */
        RTMP_STREAM_PUBLISH_ERROR[RTMP_STREAM_PUBLISH_ERROR["RTMP_STREAM_PUBLISH_ERROR_RTMP_SERVER_ERROR"] = 5] = "RTMP_STREAM_PUBLISH_ERROR_RTMP_SERVER_ERROR";
        /**
         * The RTMP streaming publishes too frequently.
         */
        RTMP_STREAM_PUBLISH_ERROR[RTMP_STREAM_PUBLISH_ERROR["RTMP_STREAM_PUBLISH_ERROR_TOO_OFTEN"] = 6] = "RTMP_STREAM_PUBLISH_ERROR_TOO_OFTEN";
        /**
         * The host publishes more than 10 URLs. Delete the unnecessary URLs before adding new ones.
         */
        RTMP_STREAM_PUBLISH_ERROR[RTMP_STREAM_PUBLISH_ERROR["RTMP_STREAM_PUBLISH_ERROR_REACH_LIMIT"] = 7] = "RTMP_STREAM_PUBLISH_ERROR_REACH_LIMIT";
        /**
         * The host manipulates other hosts' URLs. Check your app logic.
         */
        RTMP_STREAM_PUBLISH_ERROR[RTMP_STREAM_PUBLISH_ERROR["RTMP_STREAM_PUBLISH_ERROR_NOT_AUTHORIZED"] = 8] = "RTMP_STREAM_PUBLISH_ERROR_NOT_AUTHORIZED";
        /**
         * Agora's server fails to find the RTMP streaming.
         */
        RTMP_STREAM_PUBLISH_ERROR[RTMP_STREAM_PUBLISH_ERROR["RTMP_STREAM_PUBLISH_ERROR_STREAM_NOT_FOUND"] = 9] = "RTMP_STREAM_PUBLISH_ERROR_STREAM_NOT_FOUND";
        /**
         * The format of the RTMP streaming URL is not supported. Check whether the URL format is correct.
         */
        RTMP_STREAM_PUBLISH_ERROR[RTMP_STREAM_PUBLISH_ERROR["RTMP_STREAM_PUBLISH_ERROR_FORMAT_NOT_SUPPORTED"] = 10] = "RTMP_STREAM_PUBLISH_ERROR_FORMAT_NOT_SUPPORTED";
    })(RTMP_STREAM_PUBLISH_ERROR = AgoraRtcEngine.RTMP_STREAM_PUBLISH_ERROR || (AgoraRtcEngine.RTMP_STREAM_PUBLISH_ERROR = {}));
    /**
     * Events during the RTMP streaming.
     */
    var RTMP_STREAMING_EVENT;
    (function (RTMP_STREAMING_EVENT) {
        /**
         * An error occurs when you add a background image or a watermark image to the RTMP stream.
         */
        RTMP_STREAMING_EVENT[RTMP_STREAMING_EVENT["RTMP_STREAMING_EVENT_FAILED_LOAD_IMAGE"] = 1] = "RTMP_STREAMING_EVENT_FAILED_LOAD_IMAGE";
    })(RTMP_STREAMING_EVENT = AgoraRtcEngine.RTMP_STREAMING_EVENT || (AgoraRtcEngine.RTMP_STREAMING_EVENT = {}));
    /**
     * States of importing an external media stream in the live interactive streaming.
     */
    var INJECT_STREAM_STATUS;
    (function (INJECT_STREAM_STATUS) {
        /**
         * 0: The external media stream imported successfully.
         */
        INJECT_STREAM_STATUS[INJECT_STREAM_STATUS["INJECT_STREAM_STATUS_START_SUCCESS"] = 0] = "INJECT_STREAM_STATUS_START_SUCCESS";
        /**
         * 1: The external media stream already exists.
         */
        INJECT_STREAM_STATUS[INJECT_STREAM_STATUS["INJECT_STREAM_STATUS_START_ALREADY_EXISTS"] = 1] = "INJECT_STREAM_STATUS_START_ALREADY_EXISTS";
        /**
         * 2: The external media stream to be imported is unauthorized.
         */
        INJECT_STREAM_STATUS[INJECT_STREAM_STATUS["INJECT_STREAM_STATUS_START_UNAUTHORIZED"] = 2] = "INJECT_STREAM_STATUS_START_UNAUTHORIZED";
        /**
         * 3: Import external media stream timeout.
         */
        INJECT_STREAM_STATUS[INJECT_STREAM_STATUS["INJECT_STREAM_STATUS_START_TIMEDOUT"] = 3] = "INJECT_STREAM_STATUS_START_TIMEDOUT";
        /**
         * 4: Import external media stream failed.
         */
        INJECT_STREAM_STATUS[INJECT_STREAM_STATUS["INJECT_STREAM_STATUS_START_FAILED"] = 4] = "INJECT_STREAM_STATUS_START_FAILED";
        /**
         * 5: The external media stream stopped importing successfully.
         */
        INJECT_STREAM_STATUS[INJECT_STREAM_STATUS["INJECT_STREAM_STATUS_STOP_SUCCESS"] = 5] = "INJECT_STREAM_STATUS_STOP_SUCCESS";
        /**
         * 6: No external media stream is found.
         */
        INJECT_STREAM_STATUS[INJECT_STREAM_STATUS["INJECT_STREAM_STATUS_STOP_NOT_FOUND"] = 6] = "INJECT_STREAM_STATUS_STOP_NOT_FOUND";
        /**
         * 7: The external media stream to be stopped importing is unauthorized.
         */
        INJECT_STREAM_STATUS[INJECT_STREAM_STATUS["INJECT_STREAM_STATUS_STOP_UNAUTHORIZED"] = 7] = "INJECT_STREAM_STATUS_STOP_UNAUTHORIZED";
        /**
         * 8: Stop importing external media stream timeout.
         */
        INJECT_STREAM_STATUS[INJECT_STREAM_STATUS["INJECT_STREAM_STATUS_STOP_TIMEDOUT"] = 8] = "INJECT_STREAM_STATUS_STOP_TIMEDOUT";
        /**
         * 9: Stop importing external media stream failed.
         */
        INJECT_STREAM_STATUS[INJECT_STREAM_STATUS["INJECT_STREAM_STATUS_STOP_FAILED"] = 9] = "INJECT_STREAM_STATUS_STOP_FAILED";
        /**
         * 10: The external media stream is corrupted.
         */
        INJECT_STREAM_STATUS[INJECT_STREAM_STATUS["INJECT_STREAM_STATUS_BROKEN"] = 10] = "INJECT_STREAM_STATUS_BROKEN";
    })(INJECT_STREAM_STATUS = AgoraRtcEngine.INJECT_STREAM_STATUS || (AgoraRtcEngine.INJECT_STREAM_STATUS = {}));
    /**
     * Remote video stream types.
     */
    var REMOTE_VIDEO_STREAM_TYPE;
    (function (REMOTE_VIDEO_STREAM_TYPE) {
        /**
         * 0: High-stream video.
         */
        REMOTE_VIDEO_STREAM_TYPE[REMOTE_VIDEO_STREAM_TYPE["REMOTE_VIDEO_STREAM_HIGH"] = 0] = "REMOTE_VIDEO_STREAM_HIGH";
        /**
         * 1: Low-stream video.
         */
        REMOTE_VIDEO_STREAM_TYPE[REMOTE_VIDEO_STREAM_TYPE["REMOTE_VIDEO_STREAM_LOW"] = 1] = "REMOTE_VIDEO_STREAM_LOW";
    })(REMOTE_VIDEO_STREAM_TYPE = AgoraRtcEngine.REMOTE_VIDEO_STREAM_TYPE || (AgoraRtcEngine.REMOTE_VIDEO_STREAM_TYPE = {}));
    /**
     * The use mode of the audio data in the [onRecordAudioFrame]{@link agoraRtcEngine.onRecordAudioFrame} or
     * [onPlaybackAudioFrame]{@link agoraRtcEngine.onPlaybackAudioFrame} callback.
     */
    var RAW_AUDIO_FRAME_OP_MODE_TYPE;
    (function (RAW_AUDIO_FRAME_OP_MODE_TYPE) {
        /**
         * 0: Read-only mode: Users only read the [AudioFrame]{@link agoraRtcEngine.AudioFrame} data without modifying anything. For example,
         * when users acquire the data with the Agora SDK, then push the RTMP streams.
         */
        RAW_AUDIO_FRAME_OP_MODE_TYPE[RAW_AUDIO_FRAME_OP_MODE_TYPE["RAW_AUDIO_FRAME_OP_MODE_READ_ONLY"] = 0] = "RAW_AUDIO_FRAME_OP_MODE_READ_ONLY";
        /**
         * 1: Write-only mode: Users replace the [AudioFrame]{@link agoraRtcEngine.AudioFrame} data with their own data and pass the data to
         * the SDK for encoding. For example, when users acquire the data.
         */
        RAW_AUDIO_FRAME_OP_MODE_TYPE[RAW_AUDIO_FRAME_OP_MODE_TYPE["RAW_AUDIO_FRAME_OP_MODE_WRITE_ONLY"] = 1] = "RAW_AUDIO_FRAME_OP_MODE_WRITE_ONLY";
        /**
         * 2: Read and write mode: Users read the data from [AudioFrame]{@link agoraRtcEngine.AudioFrame} , modify it, and then play it.
         * For example, when users have their own sound-effect processing module and perform some voice pre-processing, such as
         * a voice change.
         */
        RAW_AUDIO_FRAME_OP_MODE_TYPE[RAW_AUDIO_FRAME_OP_MODE_TYPE["RAW_AUDIO_FRAME_OP_MODE_READ_WRITE"] = 2] = "RAW_AUDIO_FRAME_OP_MODE_READ_WRITE";
    })(RAW_AUDIO_FRAME_OP_MODE_TYPE = AgoraRtcEngine.RAW_AUDIO_FRAME_OP_MODE_TYPE || (AgoraRtcEngine.RAW_AUDIO_FRAME_OP_MODE_TYPE = {}));
    /**
     * Audio-sample rates.
     */
    var AUDIO_SAMPLE_RATE_TYPE;
    (function (AUDIO_SAMPLE_RATE_TYPE) {
        /**
         * 32000: 32 kHz
         */
        AUDIO_SAMPLE_RATE_TYPE[AUDIO_SAMPLE_RATE_TYPE["AUDIO_SAMPLE_RATE_32000"] = 32000] = "AUDIO_SAMPLE_RATE_32000";
        /**
         * 44100: 44.1 kHz
         */
        AUDIO_SAMPLE_RATE_TYPE[AUDIO_SAMPLE_RATE_TYPE["AUDIO_SAMPLE_RATE_44100"] = 44100] = "AUDIO_SAMPLE_RATE_44100";
        /**
         * 48000: 48 kHz
         */
        AUDIO_SAMPLE_RATE_TYPE[AUDIO_SAMPLE_RATE_TYPE["AUDIO_SAMPLE_RATE_48000"] = 48000] = "AUDIO_SAMPLE_RATE_48000";
    })(AUDIO_SAMPLE_RATE_TYPE = AgoraRtcEngine.AUDIO_SAMPLE_RATE_TYPE || (AgoraRtcEngine.AUDIO_SAMPLE_RATE_TYPE = {}));
    /**
     * Video codec profile types.
     */
    var VIDEO_CODEC_PROFILE_TYPE;
    (function (VIDEO_CODEC_PROFILE_TYPE) {
        /**
         * 66: Baseline video codec profile. Generally used in video calls on mobile phones.
         */
        VIDEO_CODEC_PROFILE_TYPE[VIDEO_CODEC_PROFILE_TYPE["VIDEO_CODEC_PROFILE_BASELINE"] = 66] = "VIDEO_CODEC_PROFILE_BASELINE";
        /**
         * 77: Main video codec profile. Generally used in mainstream electronics such as MP4 players, portable video players,
         * PSP, and iPads.
         */
        VIDEO_CODEC_PROFILE_TYPE[VIDEO_CODEC_PROFILE_TYPE["VIDEO_CODEC_PROFILE_MAIN"] = 77] = "VIDEO_CODEC_PROFILE_MAIN";
        /**
         * 100: (Default) High video codec profile. Generally used in high-resolution live streaming or television.
         */
        VIDEO_CODEC_PROFILE_TYPE[VIDEO_CODEC_PROFILE_TYPE["VIDEO_CODEC_PROFILE_HIGH"] = 100] = "VIDEO_CODEC_PROFILE_HIGH";
    })(VIDEO_CODEC_PROFILE_TYPE = AgoraRtcEngine.VIDEO_CODEC_PROFILE_TYPE || (AgoraRtcEngine.VIDEO_CODEC_PROFILE_TYPE = {}));
    /**
     * Video codec types
     */
    var VIDEO_CODEC_TYPE;
    (function (VIDEO_CODEC_TYPE) {
        /**
         * Standard VP8
         */
        VIDEO_CODEC_TYPE[VIDEO_CODEC_TYPE["VIDEO_CODEC_VP8"] = 1] = "VIDEO_CODEC_VP8";
        /**
         * Standard H264
         */
        VIDEO_CODEC_TYPE[VIDEO_CODEC_TYPE["VIDEO_CODEC_H264"] = 2] = "VIDEO_CODEC_H264";
        /**
         * Enhanced VP8
         */
        VIDEO_CODEC_TYPE[VIDEO_CODEC_TYPE["VIDEO_CODEC_EVP"] = 3] = "VIDEO_CODEC_EVP";
        /**
         * Enhanced H264
         */
        VIDEO_CODEC_TYPE[VIDEO_CODEC_TYPE["VIDEO_CODEC_E264"] = 4] = "VIDEO_CODEC_E264";
    })(VIDEO_CODEC_TYPE = AgoraRtcEngine.VIDEO_CODEC_TYPE || (AgoraRtcEngine.VIDEO_CODEC_TYPE = {}));
    /**
     * Video Codec types for publishing streams.
     */
    var VIDEO_CODEC_TYPE_FOR_STREAM;
    (function (VIDEO_CODEC_TYPE_FOR_STREAM) {
        VIDEO_CODEC_TYPE_FOR_STREAM[VIDEO_CODEC_TYPE_FOR_STREAM["VIDEO_CODEC_H264_FOR_STREAM"] = 1] = "VIDEO_CODEC_H264_FOR_STREAM";
        VIDEO_CODEC_TYPE_FOR_STREAM[VIDEO_CODEC_TYPE_FOR_STREAM["VIDEO_CODEC_H265_FOR_STREAM"] = 2] = "VIDEO_CODEC_H265_FOR_STREAM";
    })(VIDEO_CODEC_TYPE_FOR_STREAM = AgoraRtcEngine.VIDEO_CODEC_TYPE_FOR_STREAM || (AgoraRtcEngine.VIDEO_CODEC_TYPE_FOR_STREAM = {}));
    /**
     * Audio equalization band frequencies.
     */
    var AUDIO_EQUALIZATION_BAND_FREQUENCY;
    (function (AUDIO_EQUALIZATION_BAND_FREQUENCY) {
        /**
         * 0: 31 Hz
         */
        AUDIO_EQUALIZATION_BAND_FREQUENCY[AUDIO_EQUALIZATION_BAND_FREQUENCY["AUDIO_EQUALIZATION_BAND_31"] = 0] = "AUDIO_EQUALIZATION_BAND_31";
        /**
         * 1: 62 Hz
         */
        AUDIO_EQUALIZATION_BAND_FREQUENCY[AUDIO_EQUALIZATION_BAND_FREQUENCY["AUDIO_EQUALIZATION_BAND_62"] = 1] = "AUDIO_EQUALIZATION_BAND_62";
        /**
         * 2: 125 Hz
         */
        AUDIO_EQUALIZATION_BAND_FREQUENCY[AUDIO_EQUALIZATION_BAND_FREQUENCY["AUDIO_EQUALIZATION_BAND_125"] = 2] = "AUDIO_EQUALIZATION_BAND_125";
        /**
         * 3: 250 Hz
         */
        AUDIO_EQUALIZATION_BAND_FREQUENCY[AUDIO_EQUALIZATION_BAND_FREQUENCY["AUDIO_EQUALIZATION_BAND_250"] = 3] = "AUDIO_EQUALIZATION_BAND_250";
        /**
         * 4: 500 Hz
         */
        AUDIO_EQUALIZATION_BAND_FREQUENCY[AUDIO_EQUALIZATION_BAND_FREQUENCY["AUDIO_EQUALIZATION_BAND_500"] = 4] = "AUDIO_EQUALIZATION_BAND_500";
        /**
         * 5: 1 kHz
         */
        AUDIO_EQUALIZATION_BAND_FREQUENCY[AUDIO_EQUALIZATION_BAND_FREQUENCY["AUDIO_EQUALIZATION_BAND_1K"] = 5] = "AUDIO_EQUALIZATION_BAND_1K";
        /**
         * 6: 2 kHz
         */
        AUDIO_EQUALIZATION_BAND_FREQUENCY[AUDIO_EQUALIZATION_BAND_FREQUENCY["AUDIO_EQUALIZATION_BAND_2K"] = 6] = "AUDIO_EQUALIZATION_BAND_2K";
        /**
         * 7: 4 kHz
         */
        AUDIO_EQUALIZATION_BAND_FREQUENCY[AUDIO_EQUALIZATION_BAND_FREQUENCY["AUDIO_EQUALIZATION_BAND_4K"] = 7] = "AUDIO_EQUALIZATION_BAND_4K";
        /**
         * 8: 8 kHz
         */
        AUDIO_EQUALIZATION_BAND_FREQUENCY[AUDIO_EQUALIZATION_BAND_FREQUENCY["AUDIO_EQUALIZATION_BAND_8K"] = 8] = "AUDIO_EQUALIZATION_BAND_8K";
        /**
         * 9: 16 kHz
         */
        AUDIO_EQUALIZATION_BAND_FREQUENCY[AUDIO_EQUALIZATION_BAND_FREQUENCY["AUDIO_EQUALIZATION_BAND_16K"] = 9] = "AUDIO_EQUALIZATION_BAND_16K";
    })(AUDIO_EQUALIZATION_BAND_FREQUENCY = AgoraRtcEngine.AUDIO_EQUALIZATION_BAND_FREQUENCY || (AgoraRtcEngine.AUDIO_EQUALIZATION_BAND_FREQUENCY = {}));
    /**
     * Audio reverberation types.
     */
    var AUDIO_REVERB_TYPE;
    (function (AUDIO_REVERB_TYPE) {
        /**
         * 0: The level of the dry signal (db). The value is between -20 and 10.
         */
        AUDIO_REVERB_TYPE[AUDIO_REVERB_TYPE["AUDIO_REVERB_DRY_LEVEL"] = 0] = "AUDIO_REVERB_DRY_LEVEL";
        /**
         * 1: The level of the early reflection signal (wet signal) (dB). The value is between -20 and 10.
         */
        AUDIO_REVERB_TYPE[AUDIO_REVERB_TYPE["AUDIO_REVERB_WET_LEVEL"] = 1] = "AUDIO_REVERB_WET_LEVEL";
        /**
         * 2: The room size of the reflection. The value is between 0 and 100.
         */
        AUDIO_REVERB_TYPE[AUDIO_REVERB_TYPE["AUDIO_REVERB_ROOM_SIZE"] = 2] = "AUDIO_REVERB_ROOM_SIZE";
        /**
         * 3: The length of the initial delay of the wet signal (ms). The value is between 0 and 200.
         */
        AUDIO_REVERB_TYPE[AUDIO_REVERB_TYPE["AUDIO_REVERB_WET_DELAY"] = 3] = "AUDIO_REVERB_WET_DELAY";
        /**
         * 4: The reverberation strength. The value is between 0 and 100.
         */
        AUDIO_REVERB_TYPE[AUDIO_REVERB_TYPE["AUDIO_REVERB_STRENGTH"] = 4] = "AUDIO_REVERB_STRENGTH";
    })(AUDIO_REVERB_TYPE = AgoraRtcEngine.AUDIO_REVERB_TYPE || (AgoraRtcEngine.AUDIO_REVERB_TYPE = {}));
    /**
     * Local voice changer options.
     */
    var VOICE_CHANGER_PRESET;
    (function (VOICE_CHANGER_PRESET) {
        /**
         * The original voice (no local voice change).
         */
        VOICE_CHANGER_PRESET[VOICE_CHANGER_PRESET["VOICE_CHANGER_OFF"] = 0] = "VOICE_CHANGER_OFF";
        /**
         * The voice of an old man.
         */
        VOICE_CHANGER_PRESET[VOICE_CHANGER_PRESET["VOICE_CHANGER_OLDMAN"] = 1] = "VOICE_CHANGER_OLDMAN";
        /**
         * The voice of a little boy.
         */
        VOICE_CHANGER_PRESET[VOICE_CHANGER_PRESET["VOICE_CHANGER_BABYBOY"] = 2] = "VOICE_CHANGER_BABYBOY";
        /**
         * The voice of a little girl.
         */
        VOICE_CHANGER_PRESET[VOICE_CHANGER_PRESET["VOICE_CHANGER_BABYGIRL"] = 3] = "VOICE_CHANGER_BABYGIRL";
        /**
         * The voice of Zhu Bajie, a character in Journey to the West who has a voice like that of a growling bear.
         */
        VOICE_CHANGER_PRESET[VOICE_CHANGER_PRESET["VOICE_CHANGER_ZHUBAJIE"] = 4] = "VOICE_CHANGER_ZHUBAJIE";
        /**
         * The ethereal voice.
         */
        VOICE_CHANGER_PRESET[VOICE_CHANGER_PRESET["VOICE_CHANGER_ETHEREAL"] = 5] = "VOICE_CHANGER_ETHEREAL";
        /**
         * The voice of Hulk.
         */
        VOICE_CHANGER_PRESET[VOICE_CHANGER_PRESET["VOICE_CHANGER_HULK"] = 6] = "VOICE_CHANGER_HULK";
        /**
         * A more vigorous voice.
         */
        VOICE_CHANGER_PRESET[VOICE_CHANGER_PRESET["VOICE_BEAUTY_VIGOROUS"] = 1048577] = "VOICE_BEAUTY_VIGOROUS";
        /**
         * A deeper voice.
         */
        VOICE_CHANGER_PRESET[VOICE_CHANGER_PRESET["VOICE_BEAUTY_DEEP"] = 1048578] = "VOICE_BEAUTY_DEEP";
        /**
         * A mellower voice.
         */
        VOICE_CHANGER_PRESET[VOICE_CHANGER_PRESET["VOICE_BEAUTY_MELLOW"] = 1048579] = "VOICE_BEAUTY_MELLOW";
        /**
         * Falsetto.
         */
        VOICE_CHANGER_PRESET[VOICE_CHANGER_PRESET["VOICE_BEAUTY_FALSETTO"] = 1048580] = "VOICE_BEAUTY_FALSETTO";
        /**
         * A fuller voice.
         */
        VOICE_CHANGER_PRESET[VOICE_CHANGER_PRESET["VOICE_BEAUTY_FULL"] = 1048581] = "VOICE_BEAUTY_FULL";
        /**
         * A clearer voice.
         */
        VOICE_CHANGER_PRESET[VOICE_CHANGER_PRESET["VOICE_BEAUTY_CLEAR"] = 1048582] = "VOICE_BEAUTY_CLEAR";
        /**
         * A more resounding voice.
         */
        VOICE_CHANGER_PRESET[VOICE_CHANGER_PRESET["VOICE_BEAUTY_RESOUNDING"] = 1048583] = "VOICE_BEAUTY_RESOUNDING";
        /**
         * A more ringing voice.
         */
        VOICE_CHANGER_PRESET[VOICE_CHANGER_PRESET["VOICE_BEAUTY_RINGING"] = 1048584] = "VOICE_BEAUTY_RINGING";
        /**
         * A more spatially resonant voice.
         */
        VOICE_CHANGER_PRESET[VOICE_CHANGER_PRESET["VOICE_BEAUTY_SPACIAL"] = 1048585] = "VOICE_BEAUTY_SPACIAL";
        /**
         * (For male only) A more magnetic voice. Do not use it when the speaker is a female; otherwise, voice distortion occurs.
         */
        VOICE_CHANGER_PRESET[VOICE_CHANGER_PRESET["GENERAL_BEAUTY_VOICE_MALE_MAGNETIC"] = 2097153] = "GENERAL_BEAUTY_VOICE_MALE_MAGNETIC";
        /**
         * (For female only) A fresher voice. Do not use it when the speaker is a male; otherwise, voice distortion occurs.
         */
        VOICE_CHANGER_PRESET[VOICE_CHANGER_PRESET["GENERAL_BEAUTY_VOICE_FEMALE_FRESH"] = 2097154] = "GENERAL_BEAUTY_VOICE_FEMALE_FRESH";
        /**
         * (For female only) A more vital voice. Do not use it when the speaker is a male; otherwise, voice distortion occurs.
         */
        VOICE_CHANGER_PRESET[VOICE_CHANGER_PRESET["GENERAL_BEAUTY_VOICE_FEMALE_VITALITY"] = 2097155] = "GENERAL_BEAUTY_VOICE_FEMALE_VITALITY";
    })(VOICE_CHANGER_PRESET = AgoraRtcEngine.VOICE_CHANGER_PRESET || (AgoraRtcEngine.VOICE_CHANGER_PRESET = {}));
    /**
     * Local voice reverberation presets.
     */
    var AUDIO_REVERB_PRESET;
    (function (AUDIO_REVERB_PRESET) {
        /**
         * Turn off local voice reverberation, that is, to use the original voice.
         */
        AUDIO_REVERB_PRESET[AUDIO_REVERB_PRESET["AUDIO_REVERB_OFF"] = 0] = "AUDIO_REVERB_OFF";
        /**
         * The reverberation style typical of a KTV venue (enhanced).
         */
        AUDIO_REVERB_PRESET[AUDIO_REVERB_PRESET["AUDIO_REVERB_FX_KTV"] = 1048577] = "AUDIO_REVERB_FX_KTV";
        /**
         * The reverberation style typical of a concert hall (enhanced).
         */
        AUDIO_REVERB_PRESET[AUDIO_REVERB_PRESET["AUDIO_REVERB_FX_VOCAL_CONCERT"] = 1048578] = "AUDIO_REVERB_FX_VOCAL_CONCERT";
        /**
         * The reverberation style typical of an uncle's voice.
         */
        AUDIO_REVERB_PRESET[AUDIO_REVERB_PRESET["AUDIO_REVERB_FX_UNCLE"] = 1048579] = "AUDIO_REVERB_FX_UNCLE";
        /**
         * The reverberation style typical of a little sister's voice.
         */
        AUDIO_REVERB_PRESET[AUDIO_REVERB_PRESET["AUDIO_REVERB_FX_SISTER"] = 1048580] = "AUDIO_REVERB_FX_SISTER";
        /**
         * The reverberation style typical of a recording studio (enhanced).
         */
        AUDIO_REVERB_PRESET[AUDIO_REVERB_PRESET["AUDIO_REVERB_FX_STUDIO"] = 1048581] = "AUDIO_REVERB_FX_STUDIO";
        /**
         * The reverberation style typical of popular music (enhanced).
         */
        AUDIO_REVERB_PRESET[AUDIO_REVERB_PRESET["AUDIO_REVERB_FX_POPULAR"] = 1048582] = "AUDIO_REVERB_FX_POPULAR";
        /**
         * The reverberation style typical of R&B music (enhanced).
         */
        AUDIO_REVERB_PRESET[AUDIO_REVERB_PRESET["AUDIO_REVERB_FX_RNB"] = 1048583] = "AUDIO_REVERB_FX_RNB";
        /**
         * The reverberation style typical of the vintage phonograph.
         */
        AUDIO_REVERB_PRESET[AUDIO_REVERB_PRESET["AUDIO_REVERB_FX_PHONOGRAPH"] = 1048584] = "AUDIO_REVERB_FX_PHONOGRAPH";
        /**
         * The reverberation style typical of popular music.
         */
        AUDIO_REVERB_PRESET[AUDIO_REVERB_PRESET["AUDIO_REVERB_POPULAR"] = 1] = "AUDIO_REVERB_POPULAR";
        /**
         * The reverberation style typical of R&B music.
         */
        AUDIO_REVERB_PRESET[AUDIO_REVERB_PRESET["AUDIO_REVERB_RNB"] = 2] = "AUDIO_REVERB_RNB";
        /**
         * The reverberation style typical of rock music.
         */
        AUDIO_REVERB_PRESET[AUDIO_REVERB_PRESET["AUDIO_REVERB_ROCK"] = 3] = "AUDIO_REVERB_ROCK";
        /**
         * The reverberation style typical of hip-hop music.
         */
        AUDIO_REVERB_PRESET[AUDIO_REVERB_PRESET["AUDIO_REVERB_HIPHOP"] = 4] = "AUDIO_REVERB_HIPHOP";
        /**
         * The reverberation style typical of a concert hall.
         */
        AUDIO_REVERB_PRESET[AUDIO_REVERB_PRESET["AUDIO_REVERB_VOCAL_CONCERT"] = 5] = "AUDIO_REVERB_VOCAL_CONCERT";
        /**
         * The reverberation style typical of a KTV venue.
         */
        AUDIO_REVERB_PRESET[AUDIO_REVERB_PRESET["AUDIO_REVERB_KTV"] = 6] = "AUDIO_REVERB_KTV";
        /**
         * The reverberation style typical of a recording studio.
         */
        AUDIO_REVERB_PRESET[AUDIO_REVERB_PRESET["AUDIO_REVERB_STUDIO"] = 7] = "AUDIO_REVERB_STUDIO";
        /**
         * The reverberation of the virtual stereo. The virtual stereo is an effect that renders the monophonic
         * audio as the stereo audio, so that all users in the channel can hear the stereo voice effect.
         * To achieve better virtual stereo reverberation, Agora recommends setting `profile` in
         * [setAudioProfile]{@link agoraRtcEngine.setAudioProfile} as `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)`.
         */
        AUDIO_REVERB_PRESET[AUDIO_REVERB_PRESET["AUDIO_VIRTUAL_STEREO"] = 2097153] = "AUDIO_VIRTUAL_STEREO";
    })(AUDIO_REVERB_PRESET = AgoraRtcEngine.AUDIO_REVERB_PRESET || (AgoraRtcEngine.AUDIO_REVERB_PRESET = {}));
    /**
     * The options for SDK preset voice beautifier effects.
     */
    var VOICE_BEAUTIFIER_PRESET;
    (function (VOICE_BEAUTIFIER_PRESET) {
        /**
         * Turn off voice beautifier effects and use the original voice.
         */
        VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["VOICE_BEAUTIFIER_OFF"] = 0] = "VOICE_BEAUTIFIER_OFF";
        /**
         * A more magnetic voice.
         *
         * @note Agora recommends using this enumerator to process a male-sounding voice; otherwise, you may experience vocal distortion.
         */
        VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["CHAT_BEAUTIFIER_MAGNETIC"] = 16843008] = "CHAT_BEAUTIFIER_MAGNETIC";
        /**
         * A fresher voice.
         *
         * @note Agora recommends using this enumerator to process a female-sounding voice; otherwise, you may experience vocal distortion.
         */
        VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["CHAT_BEAUTIFIER_FRESH"] = 16843264] = "CHAT_BEAUTIFIER_FRESH";
        /**
         * A more vital voice.
         *
         * @note Agora recommends using this enumerator to process a female-sounding voice; otherwise, you may experience vocal distortion.
         */
        VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["CHAT_BEAUTIFIER_VITALITY"] = 16843520] = "CHAT_BEAUTIFIER_VITALITY";
        /**
         * A more vigorous voice.
         */
        VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["TIMBRE_TRANSFORMATION_VIGOROUS"] = 16974080] = "TIMBRE_TRANSFORMATION_VIGOROUS";
        /**
         * A deeper voice.
         */
        VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["TIMBRE_TRANSFORMATION_DEEP"] = 16974336] = "TIMBRE_TRANSFORMATION_DEEP";
        /**
         * A mellower voice.
         */
        VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["TIMBRE_TRANSFORMATION_MELLOW"] = 16974592] = "TIMBRE_TRANSFORMATION_MELLOW";
        /**
         * A falsetto voice.
         */
        VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["TIMBRE_TRANSFORMATION_FALSETTO"] = 16974848] = "TIMBRE_TRANSFORMATION_FALSETTO";
        /**
         * A falsetto voice.
         */
        VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["TIMBRE_TRANSFORMATION_FULL"] = 16975104] = "TIMBRE_TRANSFORMATION_FULL";
        /**
         * A clearer voice.
         */
        VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["TIMBRE_TRANSFORMATION_CLEAR"] = 16975360] = "TIMBRE_TRANSFORMATION_CLEAR";
        /**
         * A more resounding voice.
         */
        VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["TIMBRE_TRANSFORMATION_RESOUNDING"] = 16975616] = "TIMBRE_TRANSFORMATION_RESOUNDING";
        /**
         * A more ringing voice.
         */
        VOICE_BEAUTIFIER_PRESET[VOICE_BEAUTIFIER_PRESET["TIMBRE_TRANSFORMATION_RINGING"] = 16975872] = "TIMBRE_TRANSFORMATION_RINGING";
    })(VOICE_BEAUTIFIER_PRESET = AgoraRtcEngine.VOICE_BEAUTIFIER_PRESET || (AgoraRtcEngine.VOICE_BEAUTIFIER_PRESET = {}));
    /**
     * The options for SDK preset audio effects.
     */
    var AUDIO_EFFECT_PRESET;
    (function (AUDIO_EFFECT_PRESET) {
        /**
         * Turn off audio effects and use the original voice.
         */
        AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["AUDIO_EFFECT_OFF"] = 0] = "AUDIO_EFFECT_OFF";
        /**
         * An audio effect typical of a KTV venue.
         *
         * @note To achieve better audio effect quality, Agora recommends calling \ref IRtcEngine::setAudioProfile "setAudioProfile"
         * and setting the `profile` parameter to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` or `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)`
         * before setting this enumerator.
         */
        AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["ROOM_ACOUSTICS_KTV"] = 33620224] = "ROOM_ACOUSTICS_KTV";
        /**
         * An audio effect typical of a concert hall.
         *
         * @note To achieve better audio effect quality, Agora recommends calling \ref IRtcEngine::setAudioProfile "setAudioProfile"
         * and setting the `profile` parameter to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` or `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)`
         * before setting this enumerator.
         */
        AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["ROOM_ACOUSTICS_VOCAL_CONCERT"] = 33620480] = "ROOM_ACOUSTICS_VOCAL_CONCERT";
        /**
         * An audio effect typical of a recording studio.
         *
         * @note To achieve better audio effect quality, Agora recommends calling \ref IRtcEngine::setAudioProfile "setAudioProfile"
         * and setting the `profile` parameter to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` or `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)`
         * before setting this enumerator.
         */
        AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["ROOM_ACOUSTICS_STUDIO"] = 33620736] = "ROOM_ACOUSTICS_STUDIO";
        /**
         * An audio effect typical of a vintage phonograph.
         *
         * @note To achieve better audio effect quality, Agora recommends calling \ref IRtcEngine::setAudioProfile "setAudioProfile"
         * and setting the `profile` parameter to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` or `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)`
         * before setting this enumerator.
         */
        AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["ROOM_ACOUSTICS_PHONOGRAPH"] = 33620992] = "ROOM_ACOUSTICS_PHONOGRAPH";
        /**
         * A virtual stereo effect that renders monophonic audio as stereo audio.
         *
         * @note Call \ref IRtcEngine::setAudioProfile "setAudioProfile" and set the `profile` parameter to
         * `AUDIO_PROFILE_MUSIC_STANDARD_STEREO(3)` or `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)` before setting this
         * enumerator; otherwise, the enumerator setting does not take effect.
         */
        AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["ROOM_ACOUSTICS_VIRTUAL_STEREO"] = 33621248] = "ROOM_ACOUSTICS_VIRTUAL_STEREO";
        /**
         * A more spatial audio effect.
         *
         * @note To achieve better audio effect quality, Agora recommends calling \ref IRtcEngine::setAudioProfile "setAudioProfile"
         * and setting the `profile` parameter to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` or `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)`
         * before setting this enumerator.
         */
        AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["ROOM_ACOUSTICS_SPACIAL"] = 33621504] = "ROOM_ACOUSTICS_SPACIAL";
        /**
         * A more ethereal audio effect.
         *
         * @note To achieve better audio effect quality, Agora recommends calling \ref IRtcEngine::setAudioProfile "setAudioProfile"
         * and setting the `profile` parameter to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` or `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)`
         * before setting this enumerator.
         */
        AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["ROOM_ACOUSTICS_ETHEREAL"] = 33621760] = "ROOM_ACOUSTICS_ETHEREAL";
        /**
         * A 3D voice effect that makes the voice appear to be moving around the user. The default cycle period of the 3D
         * voice effect is 10 seconds. To change the cycle period, call \ref IRtcEngine::setAudioEffectParameters "setAudioEffectParameters"
         * after this method.
         *
         * @note
         * - Call \ref IRtcEngine::setAudioProfile "setAudioProfile" and set the `profile` parameter to `AUDIO_PROFILE_MUSIC_STANDARD_STEREO(3)`
         * or `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)` before setting this enumerator; otherwise, the enumerator setting does not take effect.
         * - If the 3D voice effect is enabled, users need to use stereo audio playback devices to hear the anticipated voice effect.
         */
        AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["ROOM_ACOUSTICS_3D_VOICE"] = 33622016] = "ROOM_ACOUSTICS_3D_VOICE";
        /**
         * The voice of an uncle.
         *
         * @note
         * - Agora recommends using this enumerator to process a male-sounding voice; otherwise, you may not hear the anticipated voice effect.
         * - To achieve better audio effect quality, Agora recommends calling \ref IRtcEngine::setAudioProfile "setAudioProfile" and
         * setting the `profile` parameter to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` or `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)` before
         * setting this enumerator.
         */
        AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["VOICE_CHANGER_EFFECT_UNCLE"] = 33685760] = "VOICE_CHANGER_EFFECT_UNCLE";
        /**
         * The voice of an old man.
         *
         * @note
         * - Agora recommends using this enumerator to process a male-sounding voice; otherwise, you may not hear the anticipated voice effect.
         * - To achieve better audio effect quality, Agora recommends calling \ref IRtcEngine::setAudioProfile "setAudioProfile" and setting
         * the `profile` parameter to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` or `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)` before setting
         * this enumerator.
         */
        AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["VOICE_CHANGER_EFFECT_OLDMAN"] = 33686016] = "VOICE_CHANGER_EFFECT_OLDMAN";
        /**
         * The voice of a boy.
         *
         * @note
         * - Agora recommends using this enumerator to process a male-sounding voice; otherwise, you may not hear the anticipated voice effect.
         * - To achieve better audio effect quality, Agora recommends calling \ref IRtcEngine::setAudioProfile "setAudioProfile" and setting
         * the `profile` parameter to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` or `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)` before
         * setting this enumerator.
         */
        AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["VOICE_CHANGER_EFFECT_BOY"] = 33686272] = "VOICE_CHANGER_EFFECT_BOY";
        /**
         * The voice of a young woman.
         *
         * @note
         * - Agora recommends using this enumerator to process a female-sounding voice; otherwise, you may not hear the anticipated voice effect.
         * - To achieve better audio effect quality, Agora recommends calling \ref IRtcEngine::setAudioProfile "setAudioProfile" and setting
         * the `profile` parameter to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` or `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)` before
         * setting this enumerator.
         */
        AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["VOICE_CHANGER_EFFECT_SISTER"] = 33686528] = "VOICE_CHANGER_EFFECT_SISTER";
        /**
         * The voice of a girl.
         *
         * @note
         * - Agora recommends using this enumerator to process a female-sounding voice; otherwise, you may not hear the anticipated voice effect.
         * - To achieve better audio effect quality, Agora recommends calling \ref IRtcEngine::setAudioProfile "setAudioProfile" and setting
         * the `profile` parameter to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` or `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)` before
         * setting this enumerator.
         */
        AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["VOICE_CHANGER_EFFECT_GIRL"] = 33686784] = "VOICE_CHANGER_EFFECT_GIRL";
        /**
         * The voice of Pig King, a character in Journey to the West who has a voice like a growling bear.
         *
         * @note To achieve better audio effect quality, Agora recommends calling \ref IRtcEngine::setAudioProfile "setAudioProfile" and
         * setting the `profile` parameter to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` or `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)` before
         * setting this enumerator.
         */
        AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["VOICE_CHANGER_EFFECT_PIGKING"] = 33687040] = "VOICE_CHANGER_EFFECT_PIGKING";
        /**
         * The voice of Hulk.
         *
         * @note To achieve better audio effect quality, Agora recommends calling \ref IRtcEngine::setAudioProfile "setAudioProfile" and
         * setting the `profile` parameter to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` or `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)` before
         * setting this enumerator.
         */
        AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["VOICE_CHANGER_EFFECT_HULK"] = 33687296] = "VOICE_CHANGER_EFFECT_HULK";
        /**
         * An audio effect typical of R&B music.
         *
         * @note To achieve better audio effect quality, Agora recommends calling \ref IRtcEngine::setAudioProfile "setAudioProfile" and
         * setting the `profile` parameter to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` or `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)` before
         * setting this enumerator.
         */
        AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["STYLE_TRANSFORMATION_RNB"] = 33751296] = "STYLE_TRANSFORMATION_RNB";
        /**
         * An audio effect typical of popular music.
         *
         * @note To achieve better audio effect quality, Agora recommends calling \ref IRtcEngine::setAudioProfile "setAudioProfile" and
         * setting the `profile` parameter to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` or `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)` before
         * setting this enumerator.
         */
        AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["STYLE_TRANSFORMATION_POPULAR"] = 33751552] = "STYLE_TRANSFORMATION_POPULAR";
        /**
         * A pitch correction effect that corrects the user's pitch based on the pitch of the natural C major scale.
         * To change the basic mode and tonic pitch, call \ref IRtcEngine::setAudioEffectParameters "setAudioEffectParameters" after this method.
         *
         * @note To achieve better audio effect quality, Agora recommends calling \ref IRtcEngine::setAudioProfile "setAudioProfile" and
         * setting the `profile` parameter to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` or `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)` before
         * setting this enumerator.
         */
        AUDIO_EFFECT_PRESET[AUDIO_EFFECT_PRESET["PITCH_CORRECTION"] = 33816832] = "PITCH_CORRECTION";
    })(AUDIO_EFFECT_PRESET = AgoraRtcEngine.AUDIO_EFFECT_PRESET || (AgoraRtcEngine.AUDIO_EFFECT_PRESET = {}));
    /**
     * Audio codec profile types. The default value is LC_ACC.
     */
    var AUDIO_CODEC_PROFILE_TYPE;
    (function (AUDIO_CODEC_PROFILE_TYPE) {
        /**
         * 0: LC-AAC, which is the low-complexity audio codec type.
         */
        AUDIO_CODEC_PROFILE_TYPE[AUDIO_CODEC_PROFILE_TYPE["AUDIO_CODEC_PROFILE_LC_AAC"] = 0] = "AUDIO_CODEC_PROFILE_LC_AAC";
        /**
         * 1: HE-AAC, which is the high-efficiency audio codec type.
         */
        AUDIO_CODEC_PROFILE_TYPE[AUDIO_CODEC_PROFILE_TYPE["AUDIO_CODEC_PROFILE_HE_AAC"] = 1] = "AUDIO_CODEC_PROFILE_HE_AAC";
    })(AUDIO_CODEC_PROFILE_TYPE = AgoraRtcEngine.AUDIO_CODEC_PROFILE_TYPE || (AgoraRtcEngine.AUDIO_CODEC_PROFILE_TYPE = {}));
    /**
     * Remote audio states.
     */
    var REMOTE_AUDIO_STATE;
    (function (REMOTE_AUDIO_STATE) {
        /**
         * 0: The remote audio is in the default state, probably due to
         * [REMOTE_AUDIO_REASON_LOCAL_MUTED]{@link agoraRtcEngine.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_LOCAL_MUTED}(3),
         * [REMOTE_AUDIO_REASON_REMOTE_MUTED]{@link agoraRtcEngine.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_REMOTE_MUTED} (5), or
         * [REMOTE_AUDIO_REASON_REMOTE_OFFLINE]{@link agoraRtcEngine.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_REMOTE_OFFLINE} (7).
         */
        REMOTE_AUDIO_STATE[REMOTE_AUDIO_STATE["REMOTE_AUDIO_STATE_STOPPED"] = 0] = "REMOTE_AUDIO_STATE_STOPPED";
        /**
         * 1: The first remote audio packet is received.
         */
        REMOTE_AUDIO_STATE[REMOTE_AUDIO_STATE["REMOTE_AUDIO_STATE_STARTING"] = 1] = "REMOTE_AUDIO_STATE_STARTING";
        /**
         * 2: The remote audio stream is decoded and plays normally, probably
         * due to [REMOTE_AUDIO_REASON_NETWORK_RECOVERY]{@link agoraRtcEngine.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_NETWORK_RECOVERY}(2),
         * [REMOTE_AUDIO_REASON_LOCAL_UNMUTED]{@link agoraRtcEngine.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_LOCAL_UNMUTED}(4), or
         * [REMOTE_AUDIO_REASON_REMOTE_UNMUTED]{@link agoraRtcEngine.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_REMOTE_UNMUTED}(6).
         */
        REMOTE_AUDIO_STATE[REMOTE_AUDIO_STATE["REMOTE_AUDIO_STATE_DECODING"] = 2] = "REMOTE_AUDIO_STATE_DECODING";
        /**
         * 3: The remote audio is frozen, probably due to
         * [REMOTE_AUDIO_REASON_NETWORK_CONGESTION]{@link agoraRtcEngine.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_NETWORK_CONGESTION}(1).
         */
        REMOTE_AUDIO_STATE[REMOTE_AUDIO_STATE["REMOTE_AUDIO_STATE_FROZEN"] = 3] = "REMOTE_AUDIO_STATE_FROZEN";
        /**
         * 4: The remote audio fails to start, probably due to
         * [REMOTE_AUDIO_REASON_INTERNAL]{@link agoraRtcEngine.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_INTERNAL}(0).
         */
        REMOTE_AUDIO_STATE[REMOTE_AUDIO_STATE["REMOTE_AUDIO_STATE_FAILED"] = 4] = "REMOTE_AUDIO_STATE_FAILED";
    })(REMOTE_AUDIO_STATE = AgoraRtcEngine.REMOTE_AUDIO_STATE || (AgoraRtcEngine.REMOTE_AUDIO_STATE = {}));
    /**
     * Remote audio state reasons.
     */
    var REMOTE_AUDIO_STATE_REASON;
    (function (REMOTE_AUDIO_STATE_REASON) {
        /**
         * 0: Internal reasons.
         */
        REMOTE_AUDIO_STATE_REASON[REMOTE_AUDIO_STATE_REASON["REMOTE_AUDIO_REASON_INTERNAL"] = 0] = "REMOTE_AUDIO_REASON_INTERNAL";
        /**
         * 1: Network congestion.
         */
        REMOTE_AUDIO_STATE_REASON[REMOTE_AUDIO_STATE_REASON["REMOTE_AUDIO_REASON_NETWORK_CONGESTION"] = 1] = "REMOTE_AUDIO_REASON_NETWORK_CONGESTION";
        /**
         * 2: Network recovery.
         */
        REMOTE_AUDIO_STATE_REASON[REMOTE_AUDIO_STATE_REASON["REMOTE_AUDIO_REASON_NETWORK_RECOVERY"] = 2] = "REMOTE_AUDIO_REASON_NETWORK_RECOVERY";
        /**
         * 3: The local user stops receiving the remote audio stream or
         * disables the audio module.
         */
        REMOTE_AUDIO_STATE_REASON[REMOTE_AUDIO_STATE_REASON["REMOTE_AUDIO_REASON_LOCAL_MUTED"] = 3] = "REMOTE_AUDIO_REASON_LOCAL_MUTED";
        /**
         * 4: The local user resumes receiving the remote audio stream or
         * enables the audio module.
         */
        REMOTE_AUDIO_STATE_REASON[REMOTE_AUDIO_STATE_REASON["REMOTE_AUDIO_REASON_LOCAL_UNMUTED"] = 4] = "REMOTE_AUDIO_REASON_LOCAL_UNMUTED";
        /**
         * 5: The remote user stops sending the audio stream or disables the
         * audio module.
         */
        REMOTE_AUDIO_STATE_REASON[REMOTE_AUDIO_STATE_REASON["REMOTE_AUDIO_REASON_REMOTE_MUTED"] = 5] = "REMOTE_AUDIO_REASON_REMOTE_MUTED";
        /**
         * 6: The remote user resumes sending the audio stream or enables the
         * audio module.
         */
        REMOTE_AUDIO_STATE_REASON[REMOTE_AUDIO_STATE_REASON["REMOTE_AUDIO_REASON_REMOTE_UNMUTED"] = 6] = "REMOTE_AUDIO_REASON_REMOTE_UNMUTED";
        /**
         * 7: The remote user leaves the channel.
         */
        REMOTE_AUDIO_STATE_REASON[REMOTE_AUDIO_STATE_REASON["REMOTE_AUDIO_REASON_REMOTE_OFFLINE"] = 7] = "REMOTE_AUDIO_REASON_REMOTE_OFFLINE";
    })(REMOTE_AUDIO_STATE_REASON = AgoraRtcEngine.REMOTE_AUDIO_STATE_REASON || (AgoraRtcEngine.REMOTE_AUDIO_STATE_REASON = {}));
    /**
     * The state of the remote video.
     */
    var REMOTE_VIDEO_STATE;
    (function (REMOTE_VIDEO_STATE) {
        /**
         * 0: The remote video is in the default state, probably due to
         * [REMOTE_VIDEO_STATE_REASON_LOCAL_MUTED]{@link agoraRtcEngine.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_LOCAL_MUTED}(3),
         * [REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED]{@link agoraRtcEngine.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED}(5),
         * or [REMOTE_VIDEO_STATE_REASON_REMOTE_OFFLINE]{@link agoraRtcEngine.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_OFFLINE}(7).
         */
        REMOTE_VIDEO_STATE[REMOTE_VIDEO_STATE["REMOTE_VIDEO_STATE_STOPPED"] = 0] = "REMOTE_VIDEO_STATE_STOPPED";
        /**
         * 1: The first remote video packet is received.
         */
        REMOTE_VIDEO_STATE[REMOTE_VIDEO_STATE["REMOTE_VIDEO_STATE_STARTING"] = 1] = "REMOTE_VIDEO_STATE_STARTING";
        /**
         * 2: The remote video stream is decoded and plays normally, probably due to
         * [REMOTE_VIDEO_STATE_REASON_NETWORK_RECOVERY]{@link agoraRtcEngine.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_NETWORK_RECOVERY}(2),
         * [REMOTE_VIDEO_STATE_REASON_LOCAL_UNMUTED]{@link agoraRtcEngine.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_LOCAL_UNMUTED}(4),
         * [REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED]{@link agoraRtcEngine.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED}(6),
         * or [REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK_RECOVERY]{@link agoraRtcEngine.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK_RECOVERY} (9).
         */
        REMOTE_VIDEO_STATE[REMOTE_VIDEO_STATE["REMOTE_VIDEO_STATE_DECODING"] = 2] = "REMOTE_VIDEO_STATE_DECODING";
        /**
         * 3: The remote video is frozen, probably due to
         * [REMOTE_VIDEO_STATE_REASON_NETWORK_CONGESTION]{@link agoraRtcEngine.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_NETWORK_CONGESTION}(1)
         * or [REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK]{@link agoraRtcEngine.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK}(8).
         */
        REMOTE_VIDEO_STATE[REMOTE_VIDEO_STATE["REMOTE_VIDEO_STATE_FROZEN"] = 3] = "REMOTE_VIDEO_STATE_FROZEN";
        /**
         * 4: The remote video fails to start, probably due to
         * [REMOTE_VIDEO_STATE_REASON_INTERNAL]{@link agoraRtcEngine.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_INTERNAL}(0).
         */
        REMOTE_VIDEO_STATE[REMOTE_VIDEO_STATE["REMOTE_VIDEO_STATE_FAILED"] = 4] = "REMOTE_VIDEO_STATE_FAILED";
    })(REMOTE_VIDEO_STATE = AgoraRtcEngine.REMOTE_VIDEO_STATE || (AgoraRtcEngine.REMOTE_VIDEO_STATE = {}));
    /**
     * The publishing state.
     */
    var STREAM_PUBLISH_STATE;
    (function (STREAM_PUBLISH_STATE) {
        /**
         * 0: The initial publishing state after joining the channel.
         */
        STREAM_PUBLISH_STATE[STREAM_PUBLISH_STATE["PUB_STATE_IDLE"] = 0] = "PUB_STATE_IDLE";
        /**
         * 1: Fails to publish the local stream. Possible reasons:
         * - The local user calls [muteLocalAudioStream(true)]{@link agoraRtcEngine.muteLocalAudioStream} or
         * [muteLocalVideoStream(true)]{@link agoraRtcEngine.muteLocalVideoStream} to stop sending local streams.
         * - The local user calls [disableAudio]{@link agoraRtcEngine.disableAudio} or [disableVideo]{@link agoraRtcEngine.disableVideo} to
         * disable the entire audio or video module.
         * - The local user calls [enableLocalAudio(false)]{@link agoraRtcEngine.enableLocalAudio} or
         * [enableLocalVideo(false)]{@link agoraRtcEngine.enableLocalVideo} to disable the local audio sampling or video capturing.
         * - The role of the local user is `AUDIENCE`.
         */
        STREAM_PUBLISH_STATE[STREAM_PUBLISH_STATE["PUB_STATE_NO_PUBLISHED"] = 1] = "PUB_STATE_NO_PUBLISHED";
        /**
         * 2: Publishing.
         */
        STREAM_PUBLISH_STATE[STREAM_PUBLISH_STATE["PUB_STATE_PUBLISHING"] = 2] = "PUB_STATE_PUBLISHING";
        /**
         * 3: Publishes successfully.
         */
        STREAM_PUBLISH_STATE[STREAM_PUBLISH_STATE["PUB_STATE_PUBLISHED"] = 3] = "PUB_STATE_PUBLISHED";
    })(STREAM_PUBLISH_STATE = AgoraRtcEngine.STREAM_PUBLISH_STATE || (AgoraRtcEngine.STREAM_PUBLISH_STATE = {}));
    /**
     * The subscribing state.
     */
    var STREAM_SUBSCRIBE_STATE;
    (function (STREAM_SUBSCRIBE_STATE) {
        /**
         * 0: The initial subscribing state after joining the channel.
         */
        STREAM_SUBSCRIBE_STATE[STREAM_SUBSCRIBE_STATE["SUB_STATE_IDLE"] = 0] = "SUB_STATE_IDLE";
        /**
         * 1: Fails to subscribe to the remote stream. Possible reasons:
         * - The remote user:
         *   - Calls [muteLocalAudioStream(true)]{@link agoraRtcEngine.muteLocalAudioStream} to stop sending local streams.
         *   - Calls [disableAudio]{@link agoraRtcEngine.disableAudio} to disable the
         * entire audio modules.
         *   - Calls [enableLocalAudio(false)]{@link agoraRtcEngine.enableLocalAudio}
         * to disable the local audio sampling.
         *   - The role of the remote user is `AUDIENCE`.
         * - The local user calls the following methods to stop receiving remote streams:
         * Calls [muteRemoteAudioStream(true)]{@link agoraRtcEngine.muteRemoteAudioStream},
         * [muteAllRemoteAudioStreams(true)]{@link agoraRtcEngine.muteAllRemoteAudioStreams} , or
         * [setDefaultMuteAllRemoteAudioStreams(true)]{@link agoraRtcEngine.setDefaultMuteAllRemoteAudioStreams} to stop receiving remote
         * audio streams.
         */
        STREAM_SUBSCRIBE_STATE[STREAM_SUBSCRIBE_STATE["SUB_STATE_NO_SUBSCRIBED"] = 1] = "SUB_STATE_NO_SUBSCRIBED";
        /**
         * 2: Subscribing.
         */
        STREAM_SUBSCRIBE_STATE[STREAM_SUBSCRIBE_STATE["SUB_STATE_SUBSCRIBING"] = 2] = "SUB_STATE_SUBSCRIBING";
        /**
         * 3: Subscribes to and receives the remote stream successfully.
         */
        STREAM_SUBSCRIBE_STATE[STREAM_SUBSCRIBE_STATE["SUB_STATE_SUBSCRIBED"] = 3] = "SUB_STATE_SUBSCRIBED";
    })(STREAM_SUBSCRIBE_STATE = AgoraRtcEngine.STREAM_SUBSCRIBE_STATE || (AgoraRtcEngine.STREAM_SUBSCRIBE_STATE = {}));
    /**
     * The remote video frozen type.
     */
    var XLA_REMOTE_VIDEO_FROZEN_TYPE;
    (function (XLA_REMOTE_VIDEO_FROZEN_TYPE) {
        /**
         * 0: 500ms video frozen type.
         */
        XLA_REMOTE_VIDEO_FROZEN_TYPE[XLA_REMOTE_VIDEO_FROZEN_TYPE["XLA_REMOTE_VIDEO_FROZEN_500MS"] = 0] = "XLA_REMOTE_VIDEO_FROZEN_500MS";
        /**
         * 1: 200ms video frozen type.
         */
        XLA_REMOTE_VIDEO_FROZEN_TYPE[XLA_REMOTE_VIDEO_FROZEN_TYPE["XLA_REMOTE_VIDEO_FROZEN_200MS"] = 1] = "XLA_REMOTE_VIDEO_FROZEN_200MS";
        /**
         * 2: 600ms video frozen type.
         */
        XLA_REMOTE_VIDEO_FROZEN_TYPE[XLA_REMOTE_VIDEO_FROZEN_TYPE["XLA_REMOTE_VIDEO_FROZEN_600MS"] = 2] = "XLA_REMOTE_VIDEO_FROZEN_600MS";
        /**
         * 3: max video frozen type.
         */
        XLA_REMOTE_VIDEO_FROZEN_TYPE[XLA_REMOTE_VIDEO_FROZEN_TYPE["XLA_REMOTE_VIDEO_FROZEN_TYPE_MAX"] = 3] = "XLA_REMOTE_VIDEO_FROZEN_TYPE_MAX";
    })(XLA_REMOTE_VIDEO_FROZEN_TYPE = AgoraRtcEngine.XLA_REMOTE_VIDEO_FROZEN_TYPE || (AgoraRtcEngine.XLA_REMOTE_VIDEO_FROZEN_TYPE = {}));
    /**
     * The remote audio frozen type.
     */
    var XLA_REMOTE_AUDIO_FROZEN_TYPE;
    (function (XLA_REMOTE_AUDIO_FROZEN_TYPE) {
        /**
         * 0: 80ms audio frozen.
         */
        XLA_REMOTE_AUDIO_FROZEN_TYPE[XLA_REMOTE_AUDIO_FROZEN_TYPE["XLA_REMOTE_AUDIO_FROZEN_80MS"] = 0] = "XLA_REMOTE_AUDIO_FROZEN_80MS";
        /**
         * 1: 200ms audio frozen.
         */
        XLA_REMOTE_AUDIO_FROZEN_TYPE[XLA_REMOTE_AUDIO_FROZEN_TYPE["XLA_REMOTE_AUDIO_FROZEN_200MS"] = 1] = "XLA_REMOTE_AUDIO_FROZEN_200MS";
        /**
         * 2: max audio frozen type.
         */
        XLA_REMOTE_AUDIO_FROZEN_TYPE[XLA_REMOTE_AUDIO_FROZEN_TYPE["XLA_REMOTE_AUDIO_FROZEN_TYPE_MAX"] = 2] = "XLA_REMOTE_AUDIO_FROZEN_TYPE_MAX";
    })(XLA_REMOTE_AUDIO_FROZEN_TYPE = AgoraRtcEngine.XLA_REMOTE_AUDIO_FROZEN_TYPE || (AgoraRtcEngine.XLA_REMOTE_AUDIO_FROZEN_TYPE = {}));
    /**
     * The reason for the remote video state change.
     */
    var REMOTE_VIDEO_STATE_REASON;
    (function (REMOTE_VIDEO_STATE_REASON) {
        /**
         * 0: Internal reasons.
         */
        REMOTE_VIDEO_STATE_REASON[REMOTE_VIDEO_STATE_REASON["REMOTE_VIDEO_STATE_REASON_INTERNAL"] = 0] = "REMOTE_VIDEO_STATE_REASON_INTERNAL";
        /**
         * 1: Network congestion.
         */
        REMOTE_VIDEO_STATE_REASON[REMOTE_VIDEO_STATE_REASON["REMOTE_VIDEO_STATE_REASON_NETWORK_CONGESTION"] = 1] = "REMOTE_VIDEO_STATE_REASON_NETWORK_CONGESTION";
        /**
         * 2: Network recovery.
         */
        REMOTE_VIDEO_STATE_REASON[REMOTE_VIDEO_STATE_REASON["REMOTE_VIDEO_STATE_REASON_NETWORK_RECOVERY"] = 2] = "REMOTE_VIDEO_STATE_REASON_NETWORK_RECOVERY";
        /**
         * 3: The local user stops receiving the remote video stream or disables the video module.
         */
        REMOTE_VIDEO_STATE_REASON[REMOTE_VIDEO_STATE_REASON["REMOTE_VIDEO_STATE_REASON_LOCAL_MUTED"] = 3] = "REMOTE_VIDEO_STATE_REASON_LOCAL_MUTED";
        /**
         * 4: The local user resumes receiving the remote video stream or enables the video module.
         */
        REMOTE_VIDEO_STATE_REASON[REMOTE_VIDEO_STATE_REASON["REMOTE_VIDEO_STATE_REASON_LOCAL_UNMUTED"] = 4] = "REMOTE_VIDEO_STATE_REASON_LOCAL_UNMUTED";
        /**
         * 5: The remote user stops sending the video stream or disables the video module.
         */
        REMOTE_VIDEO_STATE_REASON[REMOTE_VIDEO_STATE_REASON["REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED"] = 5] = "REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED";
        /**
         * 6: The remote user resumes sending the video stream or enables the video module.
         */
        REMOTE_VIDEO_STATE_REASON[REMOTE_VIDEO_STATE_REASON["REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED"] = 6] = "REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED";
        /**
         * 7: The remote user leaves the channel.
         */
        REMOTE_VIDEO_STATE_REASON[REMOTE_VIDEO_STATE_REASON["REMOTE_VIDEO_STATE_REASON_REMOTE_OFFLINE"] = 7] = "REMOTE_VIDEO_STATE_REASON_REMOTE_OFFLINE";
        /**
         * 8: The remote audio-and-video stream falls back to the audio-only stream due to poor network conditions.
         */
        REMOTE_VIDEO_STATE_REASON[REMOTE_VIDEO_STATE_REASON["REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK"] = 8] = "REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK";
        /**
         * 9: The remote audio-only stream switches back to the audio-and-video stream after the network conditions improve.
         */
        REMOTE_VIDEO_STATE_REASON[REMOTE_VIDEO_STATE_REASON["REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK_RECOVERY"] = 9] = "REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK_RECOVERY";
    })(REMOTE_VIDEO_STATE_REASON = AgoraRtcEngine.REMOTE_VIDEO_STATE_REASON || (AgoraRtcEngine.REMOTE_VIDEO_STATE_REASON = {}));
    /**
     * Video frame rates.
     */
    var FRAME_RATE;
    (function (FRAME_RATE) {
        /**
         * 1: 1 fps
         */
        FRAME_RATE[FRAME_RATE["FRAME_RATE_FPS_1"] = 1] = "FRAME_RATE_FPS_1";
        /**
         * 7: 7 fps
         */
        FRAME_RATE[FRAME_RATE["FRAME_RATE_FPS_7"] = 7] = "FRAME_RATE_FPS_7";
        /**
         * 10: 10 fps
         */
        FRAME_RATE[FRAME_RATE["FRAME_RATE_FPS_10"] = 10] = "FRAME_RATE_FPS_10";
        /**
         * 15: 15 fps
         */
        FRAME_RATE[FRAME_RATE["FRAME_RATE_FPS_15"] = 15] = "FRAME_RATE_FPS_15";
        /**
         * 24: 24 fps
         */
        FRAME_RATE[FRAME_RATE["FRAME_RATE_FPS_24"] = 24] = "FRAME_RATE_FPS_24";
        /**
         * 30: 30 fps
         */
        FRAME_RATE[FRAME_RATE["FRAME_RATE_FPS_30"] = 30] = "FRAME_RATE_FPS_30";
        /** @ignore */
        FRAME_RATE[FRAME_RATE["FRAME_RATE_FPS_60"] = 60] = "FRAME_RATE_FPS_60";
    })(FRAME_RATE = AgoraRtcEngine.FRAME_RATE || (AgoraRtcEngine.FRAME_RATE = {}));
    /**
     * Video output orientation modes.
     */
    var ORIENTATION_MODE;
    (function (ORIENTATION_MODE) {
        /**
         * 0: (Default) Adaptive mode.
         *
         * The video encoder adapts to the orientation mode of the video input device.
         *
         * - If the width of the captured video from the SDK is greater than the height, the encoder sends the video in landscape mode.
         * The encoder also sends the rotational information of the video, and the receiver uses the rotational information to rotate
         * the received video.
         * - When you use a custom video source, the output video from the encoder inherits the orientation of the original video. If
         * the original video is in portrait mode, the output video from the encoder is also in portrait mode. The encoder also sends
         * the rotational information of the video to the receiver.
         */
        ORIENTATION_MODE[ORIENTATION_MODE["ORIENTATION_MODE_ADAPTIVE"] = 0] = "ORIENTATION_MODE_ADAPTIVE";
        /**
         * 1: Landscape mode.
         *
         * The video encoder always sends the video in landscape mode. The video encoder rotates the original video before sending
         * it and the rotational information is 0. This mode applies to scenarios involving CDN live streaming.
         */
        ORIENTATION_MODE[ORIENTATION_MODE["ORIENTATION_MODE_FIXED_LANDSCAPE"] = 1] = "ORIENTATION_MODE_FIXED_LANDSCAPE";
        /**
         * 2: Portrait mode.
         *
         * The video encoder always sends the video in portrait mode. The video encoder rotates the original video before sending it
         * and the rotational information is 0. This mode applies to scenarios involving CDN live streaming.
         */
        ORIENTATION_MODE[ORIENTATION_MODE["ORIENTATION_MODE_FIXED_PORTRAIT"] = 2] = "ORIENTATION_MODE_FIXED_PORTRAIT";
    })(ORIENTATION_MODE = AgoraRtcEngine.ORIENTATION_MODE || (AgoraRtcEngine.ORIENTATION_MODE = {}));
    /**
     * Video degradation preferences when the bandwidth is a constraint.
     */
    var DEGRADATION_PREFERENCE;
    (function (DEGRADATION_PREFERENCE) {
        /**
         * 0: (Default) Degrade the frame rate in order to maintain the video quality.
         */
        DEGRADATION_PREFERENCE[DEGRADATION_PREFERENCE["MAINTAIN_QUALITY"] = 0] = "MAINTAIN_QUALITY";
        /**
         * 1: Degrade the video quality in order to maintain the frame rate.
         */
        DEGRADATION_PREFERENCE[DEGRADATION_PREFERENCE["MAINTAIN_FRAMERATE"] = 1] = "MAINTAIN_FRAMERATE";
        /**
         * 2: (For future use) Maintain a balance between the frame rate and video quality.
         */
        DEGRADATION_PREFERENCE[DEGRADATION_PREFERENCE["MAINTAIN_BALANCED"] = 2] = "MAINTAIN_BALANCED";
    })(DEGRADATION_PREFERENCE = AgoraRtcEngine.DEGRADATION_PREFERENCE || (AgoraRtcEngine.DEGRADATION_PREFERENCE = {}));
    /**
     * Stream fallback options.
     */
    var STREAM_FALLBACK_OPTIONS;
    (function (STREAM_FALLBACK_OPTIONS) {
        /**
         * 0: No fallback behavior for the local/remote video stream when the uplink/downlink network conditions are poor. The
         * quality of the stream is not guaranteed.
         */
        STREAM_FALLBACK_OPTIONS[STREAM_FALLBACK_OPTIONS["STREAM_FALLBACK_OPTION_DISABLED"] = 0] = "STREAM_FALLBACK_OPTION_DISABLED";
        /**
         * 1: Under poor downlink network conditions, the remote video stream, to which you subscribe, falls back to the
         * low-stream (low resolution and low bitrate) video. You can set this option only in the
         * [setRemoteSubscribeFallbackOption]{@link agoraRtcEngine.setRemoteSubscribeFallbackOption} method. Nothing happens when you set this
         * in the [setLocalPublishFallbackOption]{@link agoraRtcEngine.setLocalPublishFallbackOption} method.
         */
        STREAM_FALLBACK_OPTIONS[STREAM_FALLBACK_OPTIONS["STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW"] = 1] = "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW";
        /**
         * 2: Under poor uplink network conditions, the published video stream falls back to audio only.
         *
         * Under poor downlink network conditions, the remote video stream, to which you subscribe, first falls back to the
         * low-stream (low resolution and low bitrate) video; and then to an audio-only stream if the network conditions worsen.
         */
        STREAM_FALLBACK_OPTIONS[STREAM_FALLBACK_OPTIONS["STREAM_FALLBACK_OPTION_AUDIO_ONLY"] = 2] = "STREAM_FALLBACK_OPTION_AUDIO_ONLY";
    })(STREAM_FALLBACK_OPTIONS = AgoraRtcEngine.STREAM_FALLBACK_OPTIONS || (AgoraRtcEngine.STREAM_FALLBACK_OPTIONS = {}));
    /**
     * Camera capturer configuration.
     */
    var CAPTURER_OUTPUT_PREFERENCE;
    (function (CAPTURER_OUTPUT_PREFERENCE) {
        /**
         * 0: (Default) self-adapts the camera output parameters to the system performance and network conditions to balance
         * CPU consumption and video preview quality.
         */
        CAPTURER_OUTPUT_PREFERENCE[CAPTURER_OUTPUT_PREFERENCE["CAPTURER_OUTPUT_PREFERENCE_AUTO"] = 0] = "CAPTURER_OUTPUT_PREFERENCE_AUTO";
        /**
         * 1: Prioritizes the system performance. The SDK chooses the dimension and frame rate of the local camera capture
         * closest to those set by [setVideoEncoderConfiguration]{@link agoraRtcEngine.setVideoEncoderConfiguration}
         */
        CAPTURER_OUTPUT_PREFERENCE[CAPTURER_OUTPUT_PREFERENCE["CAPTURER_OUTPUT_PREFERENCE_PERFORMANCE"] = 1] = "CAPTURER_OUTPUT_PREFERENCE_PERFORMANCE";
        /**
         * 2: Prioritizes the local preview quality. The SDK chooses higher camera output parameters to improve the local
         * video preview quality. This option requires extra CPU and RAM usage for video pre-processing.
         */
        CAPTURER_OUTPUT_PREFERENCE[CAPTURER_OUTPUT_PREFERENCE["CAPTURER_OUTPUT_PREFERENCE_PREVIEW"] = 2] = "CAPTURER_OUTPUT_PREFERENCE_PREVIEW";
    })(CAPTURER_OUTPUT_PREFERENCE = AgoraRtcEngine.CAPTURER_OUTPUT_PREFERENCE || (AgoraRtcEngine.CAPTURER_OUTPUT_PREFERENCE = {}));
    /**
     * The priority of the remote user.
     */
    var PRIORITY_TYPE;
    (function (PRIORITY_TYPE) {
        /**
         * 50: The user's priority is high.
         */
        PRIORITY_TYPE[PRIORITY_TYPE["PRIORITY_HIGH"] = 50] = "PRIORITY_HIGH";
        /**
         * 100: (Default) The user's priority is normal.
         */
        PRIORITY_TYPE[PRIORITY_TYPE["PRIORITY_NORMAL"] = 100] = "PRIORITY_NORMAL";
    })(PRIORITY_TYPE = AgoraRtcEngine.PRIORITY_TYPE || (AgoraRtcEngine.PRIORITY_TYPE = {}));
    /**
     * Connection states.
     */
    var CONNECTION_STATE_TYPE;
    (function (CONNECTION_STATE_TYPE) {
        /**
         * 1: The SDK is disconnected from Agora's edge server.
         * - This is the initial state before calling the [joinChannel]{@link agoraRtcEngine.joinChannel} method.
         * - The SDK also enters this state when the application calls the [leaveChannel]{@link agoraRtcEngine.leaveChannel} method.
         */
        CONNECTION_STATE_TYPE[CONNECTION_STATE_TYPE["CONNECTION_STATE_DISCONNECTED"] = 1] = "CONNECTION_STATE_DISCONNECTED";
        /**
         * 2: The SDK is connecting to Agora's edge server.
         * - When the application calls the [joinChannel]{@link agoraRtcEngine.joinChannel} method, the SDK starts to establish a
         * connection to the specified channel, triggers the [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged}
         * callback, and switches to the `CONNECTION_STATE_CONNECTING` state.
         * - When the SDK successfully joins the channel, it triggers the `onConnectionStateChanged` callback and switches to the
         * [CONNECTION_STATE_CONNECTED]{@link agoraRtcEngine.CONNECTION_STATE_TYPE.CONNECTION_STATE_CONNECTED} state.
         * - After the SDK joins the channel and when it finishes initializing the media engine, the SDK triggers the
         * [onJoinChannelSuccess]{@link AgoraRtcEvents.onJoinChannelSuccess} callback.
         */
        CONNECTION_STATE_TYPE[CONNECTION_STATE_TYPE["CONNECTION_STATE_CONNECTING"] = 2] = "CONNECTION_STATE_CONNECTING";
        /**
         * 3: The SDK is connected to Agora's edge server and has joined a channel. You can now publish or subscribe to a media
         * stream in the channel.
         *
         * If the connection to the channel is lost because, for example, if the network is down or switched, the SDK automatically
         * tries to reconnect and triggers:
         * - The [onConnectionInterrupted]{@link AgoraRtcEvents.onConnectionInterrupted} callback (deprecated).
         * - The [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged} callback and switches to the
         * [CONNECTION_STATE_RECONNECTING]{@link agoraRtcEngine.CONNECTION_STATE_TYPE.CONNECTION_STATE_RECONNECTING} state.
         */
        CONNECTION_STATE_TYPE[CONNECTION_STATE_TYPE["CONNECTION_STATE_CONNECTED"] = 3] = "CONNECTION_STATE_CONNECTED";
        /**
         * 4: The SDK keeps rejoining the channel after being disconnected from a joined channel because of network issues.
         *
         * - If the SDK cannot rejoin the channel within 10 seconds after being disconnected from Agora's edge server,
         * the SDK triggers the [onConnectionLost]{@link AgoraRtcEvents.onConnectionLost} callback, stays in the
         * [CONNECTION_STATE_RECONNECTING]{@link agoraRtcEngine.CONNECTION_STATE_TYPE.CONNECTION_STATE_RECONNECTING} state, and keeps
         * rejoining the channel.
         * - If the SDK fails to rejoin the channel 20 minutes after being disconnected from Agora's edge server, the SDK
         * triggers the [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged} callback, switches to the
         * [CONNECTION_STATE_FAILED]{@link agoraRtcEngine.CONNECTION_STATE_TYPE.CONNECTION_STATE_FAILED} state, and stops rejoining the channel.
         */
        CONNECTION_STATE_TYPE[CONNECTION_STATE_TYPE["CONNECTION_STATE_RECONNECTING"] = 4] = "CONNECTION_STATE_RECONNECTING";
        /**
         * 5: The SDK fails to connect to Agora's edge server or join the channel.
         *
         * You must call the [leaveChannel]{@link agoraRtcEngine.leaveChannel} method to leave this state, and call the
         * [joinChannel]{@link agoraRtcEngine.joinChannel} method again to rejoin the channel.
         *
         * If the SDK is banned from joining the channel by Agora's edge server (through the RESTful API), the SDK triggers the
         * [onConnectionBanned]{@link AgoraRtcEvents.onConnectionBanned} (deprecated) and
         * [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged} callbacks.
         */
        CONNECTION_STATE_TYPE[CONNECTION_STATE_TYPE["CONNECTION_STATE_FAILED"] = 5] = "CONNECTION_STATE_FAILED";
    })(CONNECTION_STATE_TYPE = AgoraRtcEngine.CONNECTION_STATE_TYPE || (AgoraRtcEngine.CONNECTION_STATE_TYPE = {}));
    /**
     * Reasons for a connection state change.
     */
    var CONNECTION_CHANGED_REASON_TYPE;
    (function (CONNECTION_CHANGED_REASON_TYPE) {
        /**
         * 0: The SDK is connecting to Agora's edge server.
         */
        CONNECTION_CHANGED_REASON_TYPE[CONNECTION_CHANGED_REASON_TYPE["CONNECTION_CHANGED_CONNECTING"] = 0] = "CONNECTION_CHANGED_CONNECTING";
        /**
         * 1: The SDK has joined the channel successfully.
         */
        CONNECTION_CHANGED_REASON_TYPE[CONNECTION_CHANGED_REASON_TYPE["CONNECTION_CHANGED_JOIN_SUCCESS"] = 1] = "CONNECTION_CHANGED_JOIN_SUCCESS";
        /**
         * 2: The connection between the SDK and Agora's edge server is interrupted.
         */
        CONNECTION_CHANGED_REASON_TYPE[CONNECTION_CHANGED_REASON_TYPE["CONNECTION_CHANGED_INTERRUPTED"] = 2] = "CONNECTION_CHANGED_INTERRUPTED";
        /**
         * 3: The connection between the SDK and Agora's edge server is banned by Agora's edge server.
         */
        CONNECTION_CHANGED_REASON_TYPE[CONNECTION_CHANGED_REASON_TYPE["CONNECTION_CHANGED_BANNED_BY_SERVER"] = 3] = "CONNECTION_CHANGED_BANNED_BY_SERVER";
        /**
         * 4: The SDK fails to join the channel for more than 20 minutes and stops reconnecting to the channel.
         */
        CONNECTION_CHANGED_REASON_TYPE[CONNECTION_CHANGED_REASON_TYPE["CONNECTION_CHANGED_JOIN_FAILED"] = 4] = "CONNECTION_CHANGED_JOIN_FAILED";
        /**
         * 5: The SDK has left the channel.
         */
        CONNECTION_CHANGED_REASON_TYPE[CONNECTION_CHANGED_REASON_TYPE["CONNECTION_CHANGED_LEAVE_CHANNEL"] = 5] = "CONNECTION_CHANGED_LEAVE_CHANNEL";
        /**
         * 6: The connection failed since Appid is not valid.
         */
        CONNECTION_CHANGED_REASON_TYPE[CONNECTION_CHANGED_REASON_TYPE["CONNECTION_CHANGED_INVALID_APP_ID"] = 6] = "CONNECTION_CHANGED_INVALID_APP_ID";
        /**
         * 7: The connection failed since channel name is not valid.
         */
        CONNECTION_CHANGED_REASON_TYPE[CONNECTION_CHANGED_REASON_TYPE["CONNECTION_CHANGED_INVALID_CHANNEL_NAME"] = 7] = "CONNECTION_CHANGED_INVALID_CHANNEL_NAME";
        /**
         * 8: The connection failed since token is not valid, possibly because:
         *
         * - The App Certificate for the project is enabled in Console, but you do not use Token when joining the channel.
         * If you enable the App Certificate, you must use a token to join the channel.
         * - The uid that you specify in the [joinChannel]{@link agoraRtcEngine.joinChannel} method is different from the uid that
         * you pass for generating the token.
         */
        CONNECTION_CHANGED_REASON_TYPE[CONNECTION_CHANGED_REASON_TYPE["CONNECTION_CHANGED_INVALID_TOKEN"] = 8] = "CONNECTION_CHANGED_INVALID_TOKEN";
        /**
         * 9: The connection failed since token is expired.
         */
        CONNECTION_CHANGED_REASON_TYPE[CONNECTION_CHANGED_REASON_TYPE["CONNECTION_CHANGED_TOKEN_EXPIRED"] = 9] = "CONNECTION_CHANGED_TOKEN_EXPIRED";
        /**
         * 10: The connection is rejected by server.
         */
        CONNECTION_CHANGED_REASON_TYPE[CONNECTION_CHANGED_REASON_TYPE["CONNECTION_CHANGED_REJECTED_BY_SERVER"] = 10] = "CONNECTION_CHANGED_REJECTED_BY_SERVER";
        /**
         * 11: The connection changed to reconnecting since SDK has set a proxy server.
         */
        CONNECTION_CHANGED_REASON_TYPE[CONNECTION_CHANGED_REASON_TYPE["CONNECTION_CHANGED_SETTING_PROXY_SERVER"] = 11] = "CONNECTION_CHANGED_SETTING_PROXY_SERVER";
        /**
         * 12: When SDK is in connection failed, the renew token operation will make it connecting.
         */
        CONNECTION_CHANGED_REASON_TYPE[CONNECTION_CHANGED_REASON_TYPE["CONNECTION_CHANGED_RENEW_TOKEN"] = 12] = "CONNECTION_CHANGED_RENEW_TOKEN";
        /**
         * 13: The IP Address of SDK client has changed. i.e., Network type or IP/Port changed by network operator might
         * change client IP address.
         */
        CONNECTION_CHANGED_REASON_TYPE[CONNECTION_CHANGED_REASON_TYPE["CONNECTION_CHANGED_CLIENT_IP_ADDRESS_CHANGED"] = 13] = "CONNECTION_CHANGED_CLIENT_IP_ADDRESS_CHANGED";
        /**
         * 14: Timeout for the keep-alive of the connection between the SDK and Agora's edge server. The connection state
         * changes to [CONNECTION_STATE_RECONNECTING]{@link agoraRtcEngine.CONNECTION_STATE_TYPE.CONNECTION_STATE_RECONNECTING}.
         */
        CONNECTION_CHANGED_REASON_TYPE[CONNECTION_CHANGED_REASON_TYPE["CONNECTION_CHANGED_KEEP_ALIVE_TIMEOUT"] = 14] = "CONNECTION_CHANGED_KEEP_ALIVE_TIMEOUT";
    })(CONNECTION_CHANGED_REASON_TYPE = AgoraRtcEngine.CONNECTION_CHANGED_REASON_TYPE || (AgoraRtcEngine.CONNECTION_CHANGED_REASON_TYPE = {}));
    /**
     * Network type.
     */
    var NETWORK_TYPE;
    (function (NETWORK_TYPE) {
        /**
         * -1: The network type is unknown.
         */
        NETWORK_TYPE[NETWORK_TYPE["NETWORK_TYPE_UNKNOWN"] = -1] = "NETWORK_TYPE_UNKNOWN";
        /**
         * 0: The SDK disconnects from the network.
         */
        NETWORK_TYPE[NETWORK_TYPE["NETWORK_TYPE_DISCONNECTED"] = 0] = "NETWORK_TYPE_DISCONNECTED";
        /**
         * 1: The network type is LAN.
         */
        NETWORK_TYPE[NETWORK_TYPE["NETWORK_TYPE_LAN"] = 1] = "NETWORK_TYPE_LAN";
        /**
         * 2: The network type is Wi-Fi(including hotspots).
         */
        NETWORK_TYPE[NETWORK_TYPE["NETWORK_TYPE_WIFI"] = 2] = "NETWORK_TYPE_WIFI";
        /**
         * 3: The network type is mobile 2G.
         */
        NETWORK_TYPE[NETWORK_TYPE["NETWORK_TYPE_MOBILE_2G"] = 3] = "NETWORK_TYPE_MOBILE_2G";
        /**
         * 4: The network type is mobile 3G.
         */
        NETWORK_TYPE[NETWORK_TYPE["NETWORK_TYPE_MOBILE_3G"] = 4] = "NETWORK_TYPE_MOBILE_3G";
        /**
         * 5: The network type is mobile 4G.
         */
        NETWORK_TYPE[NETWORK_TYPE["NETWORK_TYPE_MOBILE_4G"] = 5] = "NETWORK_TYPE_MOBILE_4G";
    })(NETWORK_TYPE = AgoraRtcEngine.NETWORK_TYPE || (AgoraRtcEngine.NETWORK_TYPE = {}));
    /**
     * States of the last-mile network probe test.
     */
    var LASTMILE_PROBE_RESULT_STATE;
    (function (LASTMILE_PROBE_RESULT_STATE) {
        /**
         * 1: The last-mile network probe test is complete.
         */
        LASTMILE_PROBE_RESULT_STATE[LASTMILE_PROBE_RESULT_STATE["LASTMILE_PROBE_RESULT_COMPLETE"] = 1] = "LASTMILE_PROBE_RESULT_COMPLETE";
        /**
         * 2: The last-mile network probe test is incomplete and the bandwidth estimation is not available, probably due to
         * limited test resources.
         */
        LASTMILE_PROBE_RESULT_STATE[LASTMILE_PROBE_RESULT_STATE["LASTMILE_PROBE_RESULT_INCOMPLETE_NO_BWE"] = 2] = "LASTMILE_PROBE_RESULT_INCOMPLETE_NO_BWE";
        /**
         * 3: The last-mile network probe test is not carried out, probably due to poor network conditions.
         */
        LASTMILE_PROBE_RESULT_STATE[LASTMILE_PROBE_RESULT_STATE["LASTMILE_PROBE_RESULT_UNAVAILABLE"] = 3] = "LASTMILE_PROBE_RESULT_UNAVAILABLE";
    })(LASTMILE_PROBE_RESULT_STATE = AgoraRtcEngine.LASTMILE_PROBE_RESULT_STATE || (AgoraRtcEngine.LASTMILE_PROBE_RESULT_STATE = {}));
    /**
     * Audio output routing.
     */
    var AUDIO_ROUTE_TYPE;
    (function (AUDIO_ROUTE_TYPE) {
        /**
         * Default.
         */
        AUDIO_ROUTE_TYPE[AUDIO_ROUTE_TYPE["AUDIO_ROUTE_DEFAULT"] = -1] = "AUDIO_ROUTE_DEFAULT";
        /**
         * Headset.
         */
        AUDIO_ROUTE_TYPE[AUDIO_ROUTE_TYPE["AUDIO_ROUTE_HEADSET"] = 0] = "AUDIO_ROUTE_HEADSET";
        /**
         * Earpiece.
         */
        AUDIO_ROUTE_TYPE[AUDIO_ROUTE_TYPE["AUDIO_ROUTE_EARPIECE"] = 1] = "AUDIO_ROUTE_EARPIECE";
        /**
         * Headset with no microphone.
         */
        AUDIO_ROUTE_TYPE[AUDIO_ROUTE_TYPE["AUDIO_ROUTE_HEADSET_NO_MIC"] = 2] = "AUDIO_ROUTE_HEADSET_NO_MIC";
        /**
         * Speakerphone.
         */
        AUDIO_ROUTE_TYPE[AUDIO_ROUTE_TYPE["AUDIO_ROUTE_SPEAKERPHONE"] = 3] = "AUDIO_ROUTE_SPEAKERPHONE";
        /**
         * Loudspeaker.
         */
        AUDIO_ROUTE_TYPE[AUDIO_ROUTE_TYPE["AUDIO_ROUTE_LOUDSPEAKER"] = 4] = "AUDIO_ROUTE_LOUDSPEAKER";
        /**
         * Bluetooth headset.
         */
        AUDIO_ROUTE_TYPE[AUDIO_ROUTE_TYPE["AUDIO_ROUTE_BLUETOOTH"] = 5] = "AUDIO_ROUTE_BLUETOOTH";
        /**
         * USB peripheral.
         */
        AUDIO_ROUTE_TYPE[AUDIO_ROUTE_TYPE["AUDIO_ROUTE_USB"] = 6] = "AUDIO_ROUTE_USB";
        /**
         * HDMI peripheral.
         */
        AUDIO_ROUTE_TYPE[AUDIO_ROUTE_TYPE["AUDIO_ROUTE_HDMI"] = 7] = "AUDIO_ROUTE_HDMI";
        /**
         * DisplayPort peripheral.
         */
        AUDIO_ROUTE_TYPE[AUDIO_ROUTE_TYPE["AUDIO_ROUTE_DISPLAYPORT"] = 8] = "AUDIO_ROUTE_DISPLAYPORT";
        /**
         * Apple AirPlay.
         */
        AUDIO_ROUTE_TYPE[AUDIO_ROUTE_TYPE["AUDIO_ROUTE_AIRPLAY"] = 9] = "AUDIO_ROUTE_AIRPLAY";
    })(AUDIO_ROUTE_TYPE = AgoraRtcEngine.AUDIO_ROUTE_TYPE || (AgoraRtcEngine.AUDIO_ROUTE_TYPE = {}));
    /**
     * Audio session restriction.
     */
    var AUDIO_SESSION_OPERATION_RESTRICTION;
    (function (AUDIO_SESSION_OPERATION_RESTRICTION) {
        /**
         * No restriction, the SDK has full control of the audio session operations.
         */
        AUDIO_SESSION_OPERATION_RESTRICTION[AUDIO_SESSION_OPERATION_RESTRICTION["AUDIO_SESSION_OPERATION_RESTRICTION_NONE"] = 0] = "AUDIO_SESSION_OPERATION_RESTRICTION_NONE";
        /**
         * The SDK does not change the audio session category.
         */
        AUDIO_SESSION_OPERATION_RESTRICTION[AUDIO_SESSION_OPERATION_RESTRICTION["AUDIO_SESSION_OPERATION_RESTRICTION_SET_CATEGORY"] = 1] = "AUDIO_SESSION_OPERATION_RESTRICTION_SET_CATEGORY";
        /**
         * The SDK does not change any setting of the audio session (category, mode, categoryOptions).
         */
        AUDIO_SESSION_OPERATION_RESTRICTION[AUDIO_SESSION_OPERATION_RESTRICTION["AUDIO_SESSION_OPERATION_RESTRICTION_CONFIGURE_SESSION"] = 2] = "AUDIO_SESSION_OPERATION_RESTRICTION_CONFIGURE_SESSION";
        /**
         * The SDK keeps the audio session active when leaving a channel.
         */
        AUDIO_SESSION_OPERATION_RESTRICTION[AUDIO_SESSION_OPERATION_RESTRICTION["AUDIO_SESSION_OPERATION_RESTRICTION_DEACTIVATE_SESSION"] = 4] = "AUDIO_SESSION_OPERATION_RESTRICTION_DEACTIVATE_SESSION";
        /**
         * The SDK does not configure the audio session anymore.
         */
        AUDIO_SESSION_OPERATION_RESTRICTION[AUDIO_SESSION_OPERATION_RESTRICTION["AUDIO_SESSION_OPERATION_RESTRICTION_ALL"] = 128] = "AUDIO_SESSION_OPERATION_RESTRICTION_ALL";
    })(AUDIO_SESSION_OPERATION_RESTRICTION = AgoraRtcEngine.AUDIO_SESSION_OPERATION_RESTRICTION || (AgoraRtcEngine.AUDIO_SESSION_OPERATION_RESTRICTION = {}));
    /**
     * The direction of the camera.
     */
    var CAMERA_DIRECTION;
    (function (CAMERA_DIRECTION) {
        /**
         * The rear camera.
         */
        CAMERA_DIRECTION[CAMERA_DIRECTION["CAMERA_REAR"] = 0] = "CAMERA_REAR";
        /**
         * The front camera.
         */
        CAMERA_DIRECTION[CAMERA_DIRECTION["CAMERA_FRONT"] = 1] = "CAMERA_FRONT";
    })(CAMERA_DIRECTION = AgoraRtcEngine.CAMERA_DIRECTION || (AgoraRtcEngine.CAMERA_DIRECTION = {}));
    /**
     * The detailed options of a user.
     */
    var ClientRoleOptions = /** @class */ (function () {
        function ClientRoleOptions(audienceLatencyLevel) {
            this.audienceLatencyLevel = audienceLatencyLevel;
        }
        return ClientRoleOptions;
    }());
    AgoraRtcEngine.ClientRoleOptions = ClientRoleOptions;
    /**
     * Quality change of the local video in terms of target frame rate and target bit rate since last count.
     */
    var QUALITY_ADAPT_INDICATION;
    (function (QUALITY_ADAPT_INDICATION) {
        /**
         * The quality of the local video stays the same.
         */
        QUALITY_ADAPT_INDICATION[QUALITY_ADAPT_INDICATION["ADAPT_NONE"] = 0] = "ADAPT_NONE";
        /**
         * The quality improves because the network bandwidth increases.
         */
        QUALITY_ADAPT_INDICATION[QUALITY_ADAPT_INDICATION["ADAPT_UP_BANDWIDTH"] = 1] = "ADAPT_UP_BANDWIDTH";
        /**
         * The quality worsens because the network bandwidth decreases.
         */
        QUALITY_ADAPT_INDICATION[QUALITY_ADAPT_INDICATION["ADAPT_DOWN_BANDWIDTH"] = 2] = "ADAPT_DOWN_BANDWIDTH";
    })(QUALITY_ADAPT_INDICATION = AgoraRtcEngine.QUALITY_ADAPT_INDICATION || (AgoraRtcEngine.QUALITY_ADAPT_INDICATION = {}));
    /**
     * The error code in CHANNEL_MEDIA_RELAY_ERROR.
     */
    var CHANNEL_MEDIA_RELAY_ERROR;
    (function (CHANNEL_MEDIA_RELAY_ERROR) {
        /**
         * 0: The state is normal.
         */
        CHANNEL_MEDIA_RELAY_ERROR[CHANNEL_MEDIA_RELAY_ERROR["RELAY_OK"] = 0] = "RELAY_OK";
        /**
         * 1: An error occurs in the server response.
         */
        CHANNEL_MEDIA_RELAY_ERROR[CHANNEL_MEDIA_RELAY_ERROR["RELAY_ERROR_SERVER_ERROR_RESPONSE"] = 1] = "RELAY_ERROR_SERVER_ERROR_RESPONSE";
        /**
         * 2: No server response. You can call the
         * [leaveChannel]{@link agoraRtcEngine.leaveChannel} method to leave the channel.
         */
        CHANNEL_MEDIA_RELAY_ERROR[CHANNEL_MEDIA_RELAY_ERROR["RELAY_ERROR_SERVER_NO_RESPONSE"] = 2] = "RELAY_ERROR_SERVER_NO_RESPONSE";
        /**
         * 3: The SDK fails to access the service, probably due to limited
         * resources of the server.
         */
        CHANNEL_MEDIA_RELAY_ERROR[CHANNEL_MEDIA_RELAY_ERROR["RELAY_ERROR_NO_RESOURCE_AVAILABLE"] = 3] = "RELAY_ERROR_NO_RESOURCE_AVAILABLE";
        /**
         * 4: Fails to send the relay request.
         */
        CHANNEL_MEDIA_RELAY_ERROR[CHANNEL_MEDIA_RELAY_ERROR["RELAY_ERROR_FAILED_JOIN_SRC"] = 4] = "RELAY_ERROR_FAILED_JOIN_SRC";
        /**
         * 5: Fails to accept the relay request.
         */
        CHANNEL_MEDIA_RELAY_ERROR[CHANNEL_MEDIA_RELAY_ERROR["RELAY_ERROR_FAILED_JOIN_DEST"] = 5] = "RELAY_ERROR_FAILED_JOIN_DEST";
        /**
         * 6: The server fails to receive the media stream.
         */
        CHANNEL_MEDIA_RELAY_ERROR[CHANNEL_MEDIA_RELAY_ERROR["RELAY_ERROR_FAILED_PACKET_RECEIVED_FROM_SRC"] = 6] = "RELAY_ERROR_FAILED_PACKET_RECEIVED_FROM_SRC";
        /**
         * 7: The server fails to send the media stream.
         */
        CHANNEL_MEDIA_RELAY_ERROR[CHANNEL_MEDIA_RELAY_ERROR["RELAY_ERROR_FAILED_PACKET_SENT_TO_DEST"] = 7] = "RELAY_ERROR_FAILED_PACKET_SENT_TO_DEST";
        /**
         * 8: The SDK disconnects from the server due to poor network
         * connections. You can call the [leaveChannel]{@link agoraRtcEngine.leaveChannel} method to leave the channel.
         */
        CHANNEL_MEDIA_RELAY_ERROR[CHANNEL_MEDIA_RELAY_ERROR["RELAY_ERROR_SERVER_CONNECTION_LOST"] = 8] = "RELAY_ERROR_SERVER_CONNECTION_LOST";
        /**
         * 9: An internal error occurs in the server.
         */
        CHANNEL_MEDIA_RELAY_ERROR[CHANNEL_MEDIA_RELAY_ERROR["RELAY_ERROR_INTERNAL_ERROR"] = 9] = "RELAY_ERROR_INTERNAL_ERROR";
        /**
         * 10: The token of the source channel has expired.
         */
        CHANNEL_MEDIA_RELAY_ERROR[CHANNEL_MEDIA_RELAY_ERROR["RELAY_ERROR_SRC_TOKEN_EXPIRED"] = 10] = "RELAY_ERROR_SRC_TOKEN_EXPIRED";
        /**
         * 11: The token of the destination channel has expired.
         */
        CHANNEL_MEDIA_RELAY_ERROR[CHANNEL_MEDIA_RELAY_ERROR["RELAY_ERROR_DEST_TOKEN_EXPIRED"] = 11] = "RELAY_ERROR_DEST_TOKEN_EXPIRED";
    })(CHANNEL_MEDIA_RELAY_ERROR = AgoraRtcEngine.CHANNEL_MEDIA_RELAY_ERROR || (AgoraRtcEngine.CHANNEL_MEDIA_RELAY_ERROR = {}));
    /**
     * The event code in CHANNEL_MEDIA_RELAY_EVENT.
     */
    var CHANNEL_MEDIA_RELAY_EVENT;
    (function (CHANNEL_MEDIA_RELAY_EVENT) {
        /**
         * 0: The user disconnects from the server due to poor network
         * connections.
         */
        CHANNEL_MEDIA_RELAY_EVENT[CHANNEL_MEDIA_RELAY_EVENT["RELAY_EVENT_NETWORK_DISCONNECTED"] = 0] = "RELAY_EVENT_NETWORK_DISCONNECTED";
        /**
         * 1: The network reconnects.
         */
        CHANNEL_MEDIA_RELAY_EVENT[CHANNEL_MEDIA_RELAY_EVENT["RELAY_EVENT_NETWORK_CONNECTED"] = 1] = "RELAY_EVENT_NETWORK_CONNECTED";
        /**
         * 2: The user joins the source channel.
         */
        CHANNEL_MEDIA_RELAY_EVENT[CHANNEL_MEDIA_RELAY_EVENT["RELAY_EVENT_PACKET_JOINED_SRC_CHANNEL"] = 2] = "RELAY_EVENT_PACKET_JOINED_SRC_CHANNEL";
        /**
         * 3: The user joins the destination channel.
         */
        CHANNEL_MEDIA_RELAY_EVENT[CHANNEL_MEDIA_RELAY_EVENT["RELAY_EVENT_PACKET_JOINED_DEST_CHANNEL"] = 3] = "RELAY_EVENT_PACKET_JOINED_DEST_CHANNEL";
        /**
         * 4: The SDK starts relaying the media stream to the destination channel.
         */
        CHANNEL_MEDIA_RELAY_EVENT[CHANNEL_MEDIA_RELAY_EVENT["RELAY_EVENT_PACKET_SENT_TO_DEST_CHANNEL"] = 4] = "RELAY_EVENT_PACKET_SENT_TO_DEST_CHANNEL";
        /**
         *  5: The server receives the video stream from the source channel.
         */
        CHANNEL_MEDIA_RELAY_EVENT[CHANNEL_MEDIA_RELAY_EVENT["RELAY_EVENT_PACKET_RECEIVED_VIDEO_FROM_SRC"] = 5] = "RELAY_EVENT_PACKET_RECEIVED_VIDEO_FROM_SRC";
        /**
         * 6: The server receives the audio stream from the source channel.
         */
        CHANNEL_MEDIA_RELAY_EVENT[CHANNEL_MEDIA_RELAY_EVENT["RELAY_EVENT_PACKET_RECEIVED_AUDIO_FROM_SRC"] = 6] = "RELAY_EVENT_PACKET_RECEIVED_AUDIO_FROM_SRC";
        /**
         * 7: The destination channel is updated.
         */
        CHANNEL_MEDIA_RELAY_EVENT[CHANNEL_MEDIA_RELAY_EVENT["RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL"] = 7] = "RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL";
        /**
         * 8: The destination channel update fails due to internal reasons.
         */
        CHANNEL_MEDIA_RELAY_EVENT[CHANNEL_MEDIA_RELAY_EVENT["RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL_REFUSED"] = 8] = "RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL_REFUSED";
        /**
         * 9: The destination channel does not change, which means that the
         * destination channel fails to be updated.
         */
        CHANNEL_MEDIA_RELAY_EVENT[CHANNEL_MEDIA_RELAY_EVENT["RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL_NOT_CHANGE"] = 9] = "RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL_NOT_CHANGE";
        /**
         * 10: The destination channel name is `null`.
         */
        CHANNEL_MEDIA_RELAY_EVENT[CHANNEL_MEDIA_RELAY_EVENT["RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL_IS_NULL"] = 10] = "RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL_IS_NULL";
        /**
         *  11: The video profile is sent to the server.
         */
        CHANNEL_MEDIA_RELAY_EVENT[CHANNEL_MEDIA_RELAY_EVENT["RELAY_EVENT_VIDEO_PROFILE_UPDATE"] = 11] = "RELAY_EVENT_VIDEO_PROFILE_UPDATE";
    })(CHANNEL_MEDIA_RELAY_EVENT = AgoraRtcEngine.CHANNEL_MEDIA_RELAY_EVENT || (AgoraRtcEngine.CHANNEL_MEDIA_RELAY_EVENT = {}));
    /**
     * The state code in CHANNEL_MEDIA_RELAY_STATE.
     */
    var CHANNEL_MEDIA_RELAY_STATE;
    (function (CHANNEL_MEDIA_RELAY_STATE) {
        /**
         * 0: The SDK is initializing.
         */
        CHANNEL_MEDIA_RELAY_STATE[CHANNEL_MEDIA_RELAY_STATE["RELAY_STATE_IDLE"] = 0] = "RELAY_STATE_IDLE";
        /**
         * 1: The SDK tries to relay the media stream to the destination channel.
         */
        CHANNEL_MEDIA_RELAY_STATE[CHANNEL_MEDIA_RELAY_STATE["RELAY_STATE_CONNECTING"] = 1] = "RELAY_STATE_CONNECTING";
        /**
         * 2: The SDK successfully relays the media stream to the destination
         * channel.
         */
        CHANNEL_MEDIA_RELAY_STATE[CHANNEL_MEDIA_RELAY_STATE["RELAY_STATE_RUNNING"] = 2] = "RELAY_STATE_RUNNING";
        /**
         * 3: A failure occurs. See the details in code.
         */
        CHANNEL_MEDIA_RELAY_STATE[CHANNEL_MEDIA_RELAY_STATE["RELAY_STATE_FAILURE"] = 3] = "RELAY_STATE_FAILURE";
    })(CHANNEL_MEDIA_RELAY_STATE = AgoraRtcEngine.CHANNEL_MEDIA_RELAY_STATE || (AgoraRtcEngine.CHANNEL_MEDIA_RELAY_STATE = {}));
    /**
     * Video dimensions.
     */
    var VideoDimensions = /** @class */ (function () {
        function VideoDimensions(width, height) {
            if (width === void 0) { width = 640; }
            if (height === void 0) { height = 480; }
            this.width = width;
            this.height = height;
        }
        return VideoDimensions;
    }());
    AgoraRtcEngine.VideoDimensions = VideoDimensions;
    /**
     * (Recommended) The standard bitrate set in the [setVideoEncoderConfiguration]{@link agoraRtcEngine.setVideoEncoderConfiguration} method.
     *
     * In this mode, the bitrates differ between the live interactive streaming and communication profiles:
     * - `COMMUNICATION` profile: The video bitrate is the same as the base bitrate.
     * - `LIVE_BROADCASTING` profile: The video bitrate is twice the base bitrate.
     */
    AgoraRtcEngine.STANDARD_BITRATE = 0;
    /**
     * The compatible bitrate set in the [setVideoEncoderConfiguration]{@link agoraRtcEngine.setVideoEncoderConfiguration} method.
     * The bitrate remains the same regardless of the channel profile. If you choose this mode in the `LIVE_BROADCASTING` profile, the
     * video frame rate may be lower than the set value.
     */
    AgoraRtcEngine.COMPATIBLE_BITRATE = -1;
    /**
     * Use the default minimum bitrate.
     */
    AgoraRtcEngine.DEFAULT_MIN_BITRATE = -1;
    /**
     * Video encoder configurations.
     */
    var VideoEncoderConfiguration = /** @class */ (function () {
        function VideoEncoderConfiguration(dimensions, frameRate, minFrameRate, bitrate, minBitrate, orientationMode, degradationPreference, mirrorMode) {
            if (dimensions === void 0) { dimensions = new VideoDimensions(); }
            if (frameRate === void 0) { frameRate = FRAME_RATE.FRAME_RATE_FPS_15; }
            if (minFrameRate === void 0) { minFrameRate = -1; }
            if (bitrate === void 0) { bitrate = AgoraRtcEngine.STANDARD_BITRATE; }
            if (minBitrate === void 0) { minBitrate = AgoraRtcEngine.DEFAULT_MIN_BITRATE; }
            if (orientationMode === void 0) { orientationMode = ORIENTATION_MODE.ORIENTATION_MODE_ADAPTIVE; }
            if (degradationPreference === void 0) { degradationPreference = DEGRADATION_PREFERENCE.MAINTAIN_QUALITY; }
            if (mirrorMode === void 0) { mirrorMode = VIDEO_MIRROR_MODE_TYPE.VIDEO_MIRROR_MODE_AUTO; }
            this.dimensions = dimensions;
            this.frameRate = frameRate;
            this.minFrameRate = minFrameRate;
            this.bitrate = bitrate;
            this.minBitrate = minBitrate;
            this.orientationMode = orientationMode;
            this.degradationPreference = degradationPreference;
            this.mirrorMode = mirrorMode;
        }
        return VideoEncoderConfiguration;
    }());
    AgoraRtcEngine.VideoEncoderConfiguration = VideoEncoderConfiguration;
    /**
     * The video and audio properties of the user displaying the video in the CDN live. Agora supports a maximum of 17 transcoding
     * users in a CDN streaming channel.
     */
    var TranscodingUser = /** @class */ (function () {
        function TranscodingUser(uid, x, y, width, height, zOrder, alpha, audioChannel) {
            if (alpha === void 0) { alpha = 1.0; }
            this.uid = uid;
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.zOrder = zOrder;
            this.alpha = alpha;
            this.audioChannel = audioChannel;
        }
        return TranscodingUser;
    }());
    AgoraRtcEngine.TranscodingUser = TranscodingUser;
    /**
     * Image properties.
     *
     * The properties of the watermark and background images.
     */
    var RtcImage = /** @class */ (function () {
        function RtcImage(url, x, y, width, height) {
            this.url = url;
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }
        return RtcImage;
    }());
    AgoraRtcEngine.RtcImage = RtcImage;
    /**
     * The configuration for advanced features of the RTMP streaming with transcoding.
     */
    var LiveStreamAdvancedFeature = /** @class */ (function () {
        function LiveStreamAdvancedFeature(featureName, opened) {
            this.featureName = featureName;
            this.opened = opened;
        }
        /**
         * The advanced feature for high-quality video with a lower bitrate.
         */
        LiveStreamAdvancedFeature.LBHQ = 'lbhq';
        /**
         * The advanced feature for the optimized video encoder.
         */
        LiveStreamAdvancedFeature.VEO = 'veo';
        return LiveStreamAdvancedFeature;
    }());
    AgoraRtcEngine.LiveStreamAdvancedFeature = LiveStreamAdvancedFeature;
    /**
     * A struct for managing CDN live audio/video transcoding settings.
     */
    var LiveTranscoding = /** @class */ (function () {
        function LiveTranscoding(width, height, videoBitrate, videoFramerate, lowLatency, videoGop, videoCodecProfile, backgroundColor, userCount, transcodingUsers, transcodingExtraInfo, metadata, watermark, backgroundImage, audioSampleRate, audioBitrate, audioChannels, audioCodecProfile, advancedFeatures, advancedFeatureCount) {
            if (width === void 0) { width = 360; }
            if (height === void 0) { height = 640; }
            if (videoBitrate === void 0) { videoBitrate = 400; }
            if (videoFramerate === void 0) { videoFramerate = 15; }
            if (lowLatency === void 0) { lowLatency = false; }
            if (videoGop === void 0) { videoGop = 30; }
            if (videoCodecProfile === void 0) { videoCodecProfile = VIDEO_CODEC_PROFILE_TYPE.VIDEO_CODEC_PROFILE_HIGH; }
            if (backgroundColor === void 0) { backgroundColor = 0x000000; }
            if (userCount === void 0) { userCount = 0; }
            if (audioSampleRate === void 0) { audioSampleRate = AUDIO_SAMPLE_RATE_TYPE.AUDIO_SAMPLE_RATE_48000; }
            if (audioBitrate === void 0) { audioBitrate = 48; }
            if (audioChannels === void 0) { audioChannels = 1; }
            if (audioCodecProfile === void 0) { audioCodecProfile = AUDIO_CODEC_PROFILE_TYPE.AUDIO_CODEC_PROFILE_LC_AAC; }
            if (advancedFeatureCount === void 0) { advancedFeatureCount = 0; }
            this.width = width;
            this.height = height;
            this.videoBitrate = videoBitrate;
            this.videoFramerate = videoFramerate;
            this.lowLatency = lowLatency;
            this.videoGop = videoGop;
            this.videoCodecProfile = videoCodecProfile;
            this.backgroundColor = backgroundColor;
            this.userCount = userCount;
            this.transcodingUsers = transcodingUsers;
            this.transcodingExtraInfo = transcodingExtraInfo;
            this.metadata = metadata;
            this.watermark = watermark;
            this.backgroundImage = backgroundImage;
            this.audioSampleRate = audioSampleRate;
            this.audioBitrate = audioBitrate;
            this.audioChannels = audioChannels;
            this.audioCodecProfile = audioCodecProfile;
            this.advancedFeatures = advancedFeatures;
            this.advancedFeatureCount = advancedFeatureCount;
        }
        return LiveTranscoding;
    }());
    AgoraRtcEngine.LiveTranscoding = LiveTranscoding;
    /**
     * Camera capturer configuration.
     */
    var CameraCapturerConfiguration = /** @class */ (function () {
        function CameraCapturerConfiguration(preference, cameraDirection) {
            this.preference = preference;
            this.cameraDirection = cameraDirection;
        }
        return CameraCapturerConfiguration;
    }());
    AgoraRtcEngine.CameraCapturerConfiguration = CameraCapturerConfiguration;
    /**
     * Configuration of the injected media stream.
     */
    var InjectStreamConfig = /** @class */ (function () {
        function InjectStreamConfig(width, height, videoGop, videoFramerate, videoBitrate, audioSampleRate, audioBitrate, audioChannels) {
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (videoGop === void 0) { videoGop = 30; }
            if (videoFramerate === void 0) { videoFramerate = 15; }
            if (videoBitrate === void 0) { videoBitrate = 400; }
            if (audioSampleRate === void 0) { audioSampleRate = AUDIO_SAMPLE_RATE_TYPE.AUDIO_SAMPLE_RATE_48000; }
            if (audioBitrate === void 0) { audioBitrate = 48; }
            if (audioChannels === void 0) { audioChannels = 1; }
            this.width = width;
            this.height = height;
            this.videoGop = videoGop;
            this.videoFramerate = videoFramerate;
            this.videoBitrate = videoBitrate;
            this.audioSampleRate = audioSampleRate;
            this.audioBitrate = audioBitrate;
            this.audioChannels = audioChannels;
        }
        return InjectStreamConfig;
    }());
    AgoraRtcEngine.InjectStreamConfig = InjectStreamConfig;
    /**
     * The definition of [ChannelMediaInfo]{@link agoraRtcEngine.ChannelMediaInfo}.
     */
    var ChannelMediaInfo = /** @class */ (function () {
        function ChannelMediaInfo(channelName, token, uid) {
            this.channelName = channelName;
            this.token = token;
            this.uid = uid;
        }
        return ChannelMediaInfo;
    }());
    AgoraRtcEngine.ChannelMediaInfo = ChannelMediaInfo;
    /**
     * The definition of [ChannelMediaRelayConfiguration]{@link agoraRtcEngine.ChannelMediaRelayConfiguration}.
     */
    var ChannelMediaRelayConfiguration = /** @class */ (function () {
        function ChannelMediaRelayConfiguration(srcInfo, destInfos, destCount) {
            this.srcInfo = srcInfo;
            this.destInfos = destInfos;
            this.destCount = destCount;
        }
        return ChannelMediaRelayConfiguration;
    }());
    AgoraRtcEngine.ChannelMediaRelayConfiguration = ChannelMediaRelayConfiguration;
    /**
     * @deprecated
     * Lifecycle of the CDN live video stream.
     */
    var RTMP_STREAM_LIFE_CYCLE_TYPE;
    (function (RTMP_STREAM_LIFE_CYCLE_TYPE) {
        /**
         * Bind to the channel lifecycle. If all hosts leave the channel, the CDN live streaming stops after 30 seconds.
         */
        RTMP_STREAM_LIFE_CYCLE_TYPE[RTMP_STREAM_LIFE_CYCLE_TYPE["RTMP_STREAM_LIFE_CYCLE_BIND2CHANNEL"] = 1] = "RTMP_STREAM_LIFE_CYCLE_BIND2CHANNEL";
        /**
         * Bind to the owner of the RTMP stream. If the owner leaves the channel, the CDN live streaming stops immediately.
         */
        RTMP_STREAM_LIFE_CYCLE_TYPE[RTMP_STREAM_LIFE_CYCLE_TYPE["RTMP_STREAM_LIFE_CYCLE_BIND2OWNER"] = 2] = "RTMP_STREAM_LIFE_CYCLE_BIND2OWNER";
    })(RTMP_STREAM_LIFE_CYCLE_TYPE = AgoraRtcEngine.RTMP_STREAM_LIFE_CYCLE_TYPE || (AgoraRtcEngine.RTMP_STREAM_LIFE_CYCLE_TYPE = {}));
    /**
     * Content hints for screen sharing.
     */
    var VideoContentHint;
    (function (VideoContentHint) {
        /**
         * (Default) No content hint.
         */
        VideoContentHint[VideoContentHint["CONTENT_HINT_NONE"] = 0] = "CONTENT_HINT_NONE";
        /**
         * Motion-intensive content. Choose this option if you prefer smoothness or when you are sharing a video clip, movie, or
         * video game.
         */
        VideoContentHint[VideoContentHint["CONTENT_HINT_MOTION"] = 1] = "CONTENT_HINT_MOTION";
        /**
         * Motionless content. Choose this option if you prefer sharpness or when you are sharing a picture, PowerPoint slide, or text.
         */
        VideoContentHint[VideoContentHint["CONTENT_HINT_DETAILS"] = 2] = "CONTENT_HINT_DETAILS";
    })(VideoContentHint = AgoraRtcEngine.VideoContentHint || (AgoraRtcEngine.VideoContentHint = {}));
    /**
     * The relative location of the region to the screen or window.
     */
    var Rectangle = /** @class */ (function () {
        function Rectangle(x, y, width, height) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }
        return Rectangle;
    }());
    AgoraRtcEngine.Rectangle = Rectangle;
    /**
     * @deprecated
     * Definition of the rectangular region.
     */
    var Rect = /** @class */ (function () {
        function Rect(top, left, bottom, right) {
            if (top === void 0) { top = 0; }
            if (left === void 0) { left = 0; }
            if (bottom === void 0) { bottom = 0; }
            if (right === void 0) { right = 0; }
            this.top = top;
            this.left = left;
            this.bottom = bottom;
            this.right = right;
        }
        return Rect;
    }());
    AgoraRtcEngine.Rect = Rect;
    /**
     * The options of the watermark image to be added.
     */
    var WatermarkOptions = /** @class */ (function () {
        function WatermarkOptions(visibleInPreview, positionInLandscapeMode, positionInPortraitMode) {
            if (visibleInPreview === void 0) { visibleInPreview = true; }
            if (positionInLandscapeMode === void 0) { positionInLandscapeMode = new Rectangle(); }
            if (positionInPortraitMode === void 0) { positionInPortraitMode = new Rectangle(); }
            this.visibleInPreview = visibleInPreview;
            this.positionInLandscapeMode = positionInLandscapeMode;
            this.positionInPortraitMode = positionInPortraitMode;
        }
        return WatermarkOptions;
    }());
    AgoraRtcEngine.WatermarkOptions = WatermarkOptions;
    /**
     * Screen sharing encoding parameters.
     */
    var ScreenCaptureParameters = /** @class */ (function () {
        function ScreenCaptureParameters(dimensions, frameRate, bitrate, captureMouseCursor, windowFocus, excludeWindowList, excludeWindowCount) {
            if (dimensions === void 0) { dimensions = new VideoDimensions(1920, 1080); }
            if (frameRate === void 0) { frameRate = 5; }
            if (bitrate === void 0) { bitrate = AgoraRtcEngine.STANDARD_BITRATE; }
            if (captureMouseCursor === void 0) { captureMouseCursor = true; }
            if (windowFocus === void 0) { windowFocus = false; }
            if (excludeWindowCount === void 0) { excludeWindowCount = 0; }
            this.dimensions = dimensions;
            this.frameRate = frameRate;
            this.bitrate = bitrate;
            this.captureMouseCursor = captureMouseCursor;
            this.windowFocus = windowFocus;
            this.excludeWindowList = excludeWindowList;
            this.excludeWindowCount = excludeWindowCount;
        }
        return ScreenCaptureParameters;
    }());
    AgoraRtcEngine.ScreenCaptureParameters = ScreenCaptureParameters;
    /**
     * @ignore
     * Video display settings of the `VideoCanvas` class.
     */
    var VideoCanvas = /** @class */ (function () {
        function VideoCanvas(view, renderMode, channelId, uid, priv, mirrorMode) {
            if (renderMode === void 0) { renderMode = RENDER_MODE_TYPE.RENDER_MODE_HIDDEN; }
            if (uid === void 0) { uid = 0; }
            if (mirrorMode === void 0) { mirrorMode = VIDEO_MIRROR_MODE_TYPE.VIDEO_MIRROR_MODE_AUTO; }
            this.view = view;
            this.renderMode = renderMode;
            this.channelId = channelId;
            this.uid = uid;
            this.priv = priv;
            this.mirrorMode = mirrorMode;
        }
        return VideoCanvas;
    }());
    AgoraRtcEngine.VideoCanvas = VideoCanvas;
    /**
     * The contrast level, used with the `lightening` parameter.
     */
    var LIGHTENING_CONTRAST_LEVEL;
    (function (LIGHTENING_CONTRAST_LEVEL) {
        /**
         * Low contrast level.
         */
        LIGHTENING_CONTRAST_LEVEL[LIGHTENING_CONTRAST_LEVEL["LIGHTENING_CONTRAST_LOW"] = 0] = "LIGHTENING_CONTRAST_LOW";
        /**
         * (Default) Normal contrast level.
         */
        LIGHTENING_CONTRAST_LEVEL[LIGHTENING_CONTRAST_LEVEL["LIGHTENING_CONTRAST_NORMAL"] = 1] = "LIGHTENING_CONTRAST_NORMAL";
        /**
         * High contrast level.
         */
        LIGHTENING_CONTRAST_LEVEL[LIGHTENING_CONTRAST_LEVEL["LIGHTENING_CONTRAST_HIGH"] = 2] = "LIGHTENING_CONTRAST_HIGH";
    })(LIGHTENING_CONTRAST_LEVEL = AgoraRtcEngine.LIGHTENING_CONTRAST_LEVEL || (AgoraRtcEngine.LIGHTENING_CONTRAST_LEVEL = {}));
    /**
     * Image enhancement options.
     */
    var BeautyOptions = /** @class */ (function () {
        function BeautyOptions(lighteningContrastLevel, lighteningLevel, smoothnessLevel, rednessLevel) {
            if (lighteningContrastLevel === void 0) { lighteningContrastLevel = LIGHTENING_CONTRAST_LEVEL.LIGHTENING_CONTRAST_NORMAL; }
            if (lighteningLevel === void 0) { lighteningLevel = 0; }
            if (smoothnessLevel === void 0) { smoothnessLevel = 0; }
            if (rednessLevel === void 0) { rednessLevel = 0; }
            this.lighteningContrastLevel = lighteningContrastLevel;
            this.lighteningLevel = lighteningLevel;
            this.smoothnessLevel = smoothnessLevel;
            this.rednessLevel = rednessLevel;
        }
        return BeautyOptions;
    }());
    AgoraRtcEngine.BeautyOptions = BeautyOptions;
    /**
     * Regions for connection.
     */
    var AREA_CODE;
    (function (AREA_CODE) {
        /**
         * Mainland China.
         */
        AREA_CODE[AREA_CODE["AREA_CODE_CN"] = 1] = "AREA_CODE_CN";
        /**
         * North America.
         */
        AREA_CODE[AREA_CODE["AREA_CODE_NA"] = 2] = "AREA_CODE_NA";
        /**
         * Europe.
         */
        AREA_CODE[AREA_CODE["AREA_CODE_EU"] = 4] = "AREA_CODE_EU";
        /**
         * Asia, excluding Mainland China.
         */
        AREA_CODE[AREA_CODE["AREA_CODE_AS"] = 8] = "AREA_CODE_AS";
        /**
         * Japan.
         */
        AREA_CODE[AREA_CODE["AREA_CODE_JP"] = 16] = "AREA_CODE_JP";
        /**
         * India.
         */
        AREA_CODE[AREA_CODE["AREA_CODE_IN"] = 32] = "AREA_CODE_IN";
        /**
         * (Default) Global.
         */
        AREA_CODE[AREA_CODE["AREA_CODE_GLOB"] = 4294967295] = "AREA_CODE_GLOB";
    })(AREA_CODE = AgoraRtcEngine.AREA_CODE || (AgoraRtcEngine.AREA_CODE = {}));
    /**
     * @ignore
     */
    var ENCRYPTION_CONFIG;
    (function (ENCRYPTION_CONFIG) {
        ENCRYPTION_CONFIG[ENCRYPTION_CONFIG["ENCRYPTION_FORCE_SETTING"] = 1] = "ENCRYPTION_FORCE_SETTING";
        ENCRYPTION_CONFIG[ENCRYPTION_CONFIG["ENCRYPTION_FORCE_DISABLE_PACKET"] = 2] = "ENCRYPTION_FORCE_DISABLE_PACKET";
    })(ENCRYPTION_CONFIG = AgoraRtcEngine.ENCRYPTION_CONFIG || (AgoraRtcEngine.ENCRYPTION_CONFIG = {}));
    /**
     * Definition of RtcEngineContext.
     */
    var RtcEngineContext = /** @class */ (function () {
        function RtcEngineContext(appId) {
            /**
             * The region for connection. This advanced feature applies to scenarios that have regional restrictions.
             *
             * For the regions that Agora supports, see #AREA_CODE. After specifying the region, the SDK connects to the Agora servers within that region.
             *
             * @note The SDK supports specify only one region.
             */
            this.areaCode = AREA_CODE.AREA_CODE_GLOB;
            this.appId = appId;
        }
        return RtcEngineContext;
    }());
    AgoraRtcEngine.RtcEngineContext = RtcEngineContext;
    /**
     * Metadata type of the observer.
     * @note We only support video metadata for now.
     */
    var METADATA_TYPE;
    (function (METADATA_TYPE) {
        /**
         * -1: the metadata type is unknown.
         */
        METADATA_TYPE[METADATA_TYPE["UNKNOWN_METADATA"] = -1] = "UNKNOWN_METADATA";
        /**
         * 0: the metadata type is video.
         */
        METADATA_TYPE[METADATA_TYPE["VIDEO_METADATA"] = 0] = "VIDEO_METADATA";
    })(METADATA_TYPE = AgoraRtcEngine.METADATA_TYPE || (AgoraRtcEngine.METADATA_TYPE = {}));
    /**
     * The defination of [Metadata]{@link agoraRtcEngine.Metadata}.
     */
    var Metadata = /** @class */ (function () {
        function Metadata(uid, size, buffer, timeStampMs) {
            this.uid = uid;
            this.size = size;
            this.buffer = buffer;
            this.timeStampMs = timeStampMs;
        }
        return Metadata;
    }());
    AgoraRtcEngine.Metadata = Metadata;
    /**
     * Encryption mode.
     */
    var ENCRYPTION_MODE;
    (function (ENCRYPTION_MODE) {
        /**
         * 1: (Default) 128-bit AES encryption, XTS mode.
         */
        ENCRYPTION_MODE[ENCRYPTION_MODE["AES_128_XTS"] = 1] = "AES_128_XTS";
        /**
         * 2: 128-bit AES encryption, ECB mode.
         */
        ENCRYPTION_MODE[ENCRYPTION_MODE["AES_128_ECB"] = 2] = "AES_128_ECB";
        /**
         * 3: 256-bit AES encryption, XTS mode.
         */
        ENCRYPTION_MODE[ENCRYPTION_MODE["AES_256_XTS"] = 3] = "AES_256_XTS";
        /**
         * 4: 128-bit SM4 encryption, ECB mode.
         */
        ENCRYPTION_MODE[ENCRYPTION_MODE["SM4_128_ECB"] = 4] = "SM4_128_ECB";
        /**
         * Enumerator boundary.
         */
        ENCRYPTION_MODE[ENCRYPTION_MODE["MODE_END"] = 5] = "MODE_END";
    })(ENCRYPTION_MODE = AgoraRtcEngine.ENCRYPTION_MODE || (AgoraRtcEngine.ENCRYPTION_MODE = {}));
    /**
     * Configurations of built-in encryption schemas.
     */
    var EncryptionConfig = /** @class */ (function () {
        function EncryptionConfig(encryptionMode, encryptionKey) {
            if (encryptionMode === void 0) { encryptionMode = ENCRYPTION_MODE.AES_128_XTS; }
            this.encryptionMode = encryptionMode;
            this.encryptionKey = encryptionKey;
        }
        return EncryptionConfig;
    }());
    AgoraRtcEngine.EncryptionConfig = EncryptionConfig;
})(AgoraRtcEngine || (AgoraRtcEngine = {}));
(function (AgoraRtcEngine) {
    /**
     * TODO
     *
     * @param context
     */
    function initialize(context) {
        return callNativeMethod(API_TYPE.INITIALIZE, context);
    }
    AgoraRtcEngine.initialize = initialize;
    /**
     * Releases all resources of the Agora engine.
     *
     * Use this method for apps in which users occasionally make voice or video calls. When users do not make calls, you can free up
     * resources for other operations. Once you call `release` to release the Agora engine, you cannot use any method or
     * callback in the SDK any more.
     *
     * If you want to use the real-time communication functions again, you must call [init]{@link agoraRtcEngine.init} to initialize a
     * new Agora engine.
     *
     * @note If you want to reinitialize the Agora engine after releasing the current one, ensure that you wait till the
     * `release` method completes executing.
     */
    function release() {
        callNativeMethod(API_TYPE.RELEASE);
    }
    AgoraRtcEngine.release = release;
    /**
     * Listens for the events during the Agora engine runtime.
     */
    function on(type, callback) {
        // @ts-ignore
        return window.agoraBridge.on("on" + type, callback);
    }
    AgoraRtcEngine.on = on;
    /**
     * Stops monitoring the events during the Agora engine runtime.
     */
    function off(type, callback) {
        // @ts-ignore
        window.agoraBridge.off("on" + type, callback);
    }
    AgoraRtcEngine.off = off;
    /**
     * Sets the channel profile of the Agora engine.
     *
     * The Agora engine differentiates channel profiles and applies optimization algorithms accordingly.
     * For example, it prioritizes smoothness and low latency for a video call, and prioritizes video quality for the live interactive
     * video streaming.
     *
     * @warning
     * - To ensure the quality of real-time communication, we recommend that all users in a channel use the same channel profile.
     * - Call this method before calling [joinChannel]{@link agoraRtcEngine.joinChannel} . You cannot set the channel profile once you have
     * joined the channel.
     * - The default audio route and video encoding bitrate are different in different channel profiles. For details, see
     * [setDefaultAudioRouteToSpeakerphone]{@link agoraRtcEngine.setDefaultAudioRouteToSpeakerphone} and
     * [setVideoEncoderConfiguration]{@link agoraRtcEngine.setVideoEncoderConfiguration}.
     *
     * @param profile The channel profile of the Agora engine. See [CHANNEL_PROFILE_TYPE]{@link agoraRtcEngine.CHANNEL_PROFILE_TYPE}.
     *
     * @return
     * - 0(`ERR_OK`): Success.
     * - < 0: Failure.
     *  - -2(`ERR_INVALID_ARGUMENT`): The parameter is invalid.
     *  - -7(`ERR_NOT_INITIALIZED`): The SDK is not initialized.
     */
    function setChannelProfile(profile) {
        return callNativeMethod(API_TYPE.SET_CHANNEL_PROFILE, { profile: profile });
    }
    AgoraRtcEngine.setChannelProfile = setChannelProfile;
    /**
     * TODO
     *
     * @param role
     * @param options
     */
    function setClientRole(role, options) {
        return callNativeMethod(API_TYPE.SET_CLIENT_ROLE, { role: role, options: options });
    }
    AgoraRtcEngine.setClientRole = setClientRole;
    /**
     * Joins a channel with the user ID.
     *
     * Users in the same channel can talk to each other, and multiple users in the same channel can start a group chat. Users with
     * different App IDs cannot call each other.
     *
     * You must call the [leaveChannel]{@link agoraRtcEngine.leaveChannel} method to exit the current call before entering another channel.
     *
     * A successful [joinChannel]{@link agoraRtcEngine.joinChannel} method call triggers the following callbacks:
     * - The local client: [onJoinChannelSuccess]{@link AgoraRtcEvents.onJoinChannelSuccess}
     * - The remote client: [onUserJoined]{@link AgoraRtcEvents.onUserJoined} , if the user joining the channel is in the `COMMUNICATION`
     * profile, or is a host in the `LIVE_BROADCASTING` profile.
     *
     * When the connection between the client and Agora server is interrupted due to poor network conditions, the SDK tries reconnecting
     * to the server. When the local client successfully rejoins the channel, the SDK triggers the
     * [onRejoinChannelSuccess]{@link AgoraRtcEvents.onRejoinChannelSuccess} callback on the local client.
     *
     * @note A channel does not accept duplicate uids, such as two users with the same `uid`. If you set `uid` as 0, the system
     * automatically assigns a `uid`. If you want to join a channel from different devices, ensure that each device has a different uid.
     *
     * @warning Ensure that the App ID used for creating the token is the same App ID used by the [init]{@link agoraRtcEngine.init} method for
     * initializing the Agora engine. Otherwise, the CDN live streaming may fail.
     *
     * @param token The token for authentication:
     * - In situations not requiring high security: You can use the temporary token generated at Console. For details, see
     * [Get a temporary token](https://docs.agoraRtcEngine.io/en/Agora%20Platform/token?platform=All%20Platforms#get-a-temporary-token).
     * - In situations requiring high security: Set it as the token generated at your server. For details, see
     * [Get a token](https://docs.agoraRtcEngine.io/en/Agora%20Platform/token?platform=All%20Platforms#generatetoken).
     * @param channelId The unique channel name for the Agora RTC session in the string format smaller than 64 bytes.
     * Supported characters:
     * - All lowercase English letters: a to z.
     * - All uppercase English letters: A to Z.
     * - All numeric characters: 0 to 9.
     * - The space character.
     * - Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".",
     * ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
     * @param info (Optional) The additional information about the channel. This parameter can be set to `null` or contain channel
     * related information. Other users in the channel will not receive this message.
     * @param uid (Optional) User ID. A 32-bit unsigned integer with a value ranging from 1 to 2<sup>32</sup>-1. The `uid` must be unique.
     * If a `uid` is not assigned (or set to `0`), the SDK assigns and returns a `uid` in the
     * [onJoinChannelSuccess]{@link AgoraRtcEvents.onJoinChannelSuccess} callback. Your application must record and maintain the returned
     * `uid` since the SDK does not do so.
     * @return
     * - 0(ERR_OK): Success.
     * - < 0: Failure.
     *   - -2(ERR_INVALID_ARGUMENT): The parameter is invalid.
     *   - -3(ERR_NOT_READY): The SDK fails to be initialized. You can try re-initializing the SDK.
     */
    function joinChannel(token, channelId, info, uid) {
        if (info === void 0) { info = ''; }
        if (uid === void 0) { uid = 0; }
        return callNativeMethod(API_TYPE.JOIN_CHANNEL, {
            token: token,
            channelId: channelId,
            info: info,
            uid: uid,
        });
    }
    AgoraRtcEngine.joinChannel = joinChannel;
    /**
     * Switches to a different channel.
     *
     * This method allows the audience of a `LIVE_BROADCASTING` channel to switch to a different channel.
     *
     * After the user successfully switches to another channel, the [onLeaveChannel]{@link AgoraRtcEvents.onLeaveChannel}
     * and [onJoinChannelSuccess]{@link AgoraRtcEvents.onJoinChannelSuccess} callbacks are triggered to indicate that the
     * user has left the original channel and joined a new one.
     *
     * @note This method applies to the audience role in a `LIVE_BROADCASTING` channel only.
     *
     * @param token The token for authentication:
     * - In situations not requiring high security: You can use the temporary token generated at Console. For details, see
     * [Get a temporary token](https://docs.agoraRtcEngine.io/en/Agora%20Platform/token?platform=All%20Platforms#get-a-temporary-token).
     * - In situations requiring high security: Set it as the token generated at your server. For details, see
     * [Get a token](https://docs.agoraRtcEngine.io/en/Agora%20Platform/token?platform=All%20Platforms#generatetoken).
     * @param channelId The unique channel name for the Agora RTC session in the string format smaller than 64 bytes.
     * Supported characters:
     * - All lowercase English letters: a to z.
     * - All uppercase English letters: A to Z.
     * - All numeric characters: 0 to 9.
     * - The space character.
     * - Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".",
     * ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
     *
     * @return
     * - 0(ERR_OK): Success.
     * - < 0: Failure.
     *  - -1(ERR_FAILED): A general error occurs (no specified reason).
     *  - -2(ERR_INVALID_ARGUMENT): The parameter is invalid.
     *  - -5(ERR_REFUSED): The request is rejected, probably because the user is not an audience.
     *  - -7(ERR_NOT_INITIALIZED): The SDK is not initialized.
     *  - -102(ERR_INVALID_CHANNEL_NAME): The channel name is invalid.
     *  - -113(ERR_NOT_IN_CHANNEL): The user is not in the channel.
     */
    function switchChannel(token, channelId) {
        return callNativeMethod(API_TYPE.SWITCH_CHANNEL, { token: token, channelId: channelId });
    }
    AgoraRtcEngine.switchChannel = switchChannel;
    /**
     * Allows a user to leave a channel, such as hanging up or exiting a call.
     *
     * After joining a channel, the user must call the `leaveChannel` method to end the call before joining another channel.
     *
     * This method returns `0` if the user leaves the channel and releases all resources related to the call.
     *
     * This method call is asynchronous, and the user has not left the channel when the method call returns. Once the user leaves the
     * channel, the SDK triggers the [onLeaveChannel]{@link AgoraRtcEvents.onLeaveChannel} callback. A successful
     * [leaveChannel]{@link agoraRtcEngine.leaveChannel} method call triggers the following callbacks:
     * - The local client: [onLeaveChannel]{@link AgoraRtcEvents.onLeaveChannel}.
     * - The remote client: [onUserOffline]{@link AgoraRtcEvents.onUserOffline}, if the user leaving the channel is in the
     * `COMMUNICATION` channel, or is a host in the `LIVE_BROADCASTING` profile.
     *
     * **Note**
     *
     * - If you call the [release]{@link agoraRtcEngine.release} method immediately after the `leaveChannel` method, the `leaveChannel` process
     * interrupts, and the [onLeaveChannel]{@link AgoraRtcEvents.onLeaveChannel} callback is not triggered.
     * - If you call the `leaveChannel` method during a CDN live streaming, the SDK triggers the
     * [removePublishStreamUrl]{@link agoraRtcEngine.removePublishStreamUrl} method.
     *
     * @return - 0(ERR_OK): Success.
     * - < 0: Failure.
     *   - -1(ERR_FAILED): A general error occurs (no specified reason).
     *   - -2(ERR_INVALID_ARGUMENT): The parameter is invalid.
     *   - -7(ERR_NOT_INITIALIZED): The SDK is not initialized.
     */
    function leaveChannel() {
        return callNativeMethod(API_TYPE.LEAVE_CHANNEL);
    }
    AgoraRtcEngine.leaveChannel = leaveChannel;
    /**
     * Gets a new token when the current token expires after a period of time.
     *
     * The `token` expires after a period of time once the token schema is enabled when:
     * - The SDK triggers the [onTokenPrivilegeWillExpire]{@link AgoraRtcEvents.onTokenPrivilegeWillExpire} callback, or
     * - The [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged} reports `CONNECTION_CHANGED_TOKEN_EXPIRED(9)`.
     *
     * The application should call this method to get the new `token`. Failure to do so will result in the SDK disconnecting from the
     * server.
     *
     * @param token The new token.
     *
     * @return
     * - 0(ERR_OK): Success.
     * - < 0: Failure.
     *   - -1(ERR_FAILED): A general error occurs (no specified reason).
     *   - -2(ERR_INVALID_ARGUMENT): The parameter is invalid.
     *   - -7(ERR_NOT_INITIALIZED): The SDK is not initialized.
     */
    function renewToken(token) {
        return callNativeMethod(API_TYPE.RE_NEW_TOKEN, { token: token });
    }
    AgoraRtcEngine.renewToken = renewToken;
    /**
     * Registers a user account.
     *
     * Once registered, the user account can be used to identify the local user when the user joins the channel. After the user
     * successfully registers a user account, the SDK triggers the
     * [onLocalUserRegistered]{@link AgoraRtcEvents.onLocalUserRegistered} callback on the local client, reporting the user ID and
     * user account of the local user.
     *
     * To join a channel with a user account, you can choose either of the following:
     *
     * - Call the `registerLocalUserAccount` method to create a user account, and then the
     * [joinChannelWithUserAccount]{@link agoraRtcEngine.joinChannelWithUserAccount} method to join the channel.
     * - Call the `joinChannelWithUserAccount` method to join the channel.
     *
     * The difference between the two is that for the former, the time elapsed between calling the `joinChannelWithUserAccount` method
     * and joining the channel is shorter than the latter.
     *
     * **Note**
     *
     * - Ensure that you set the `userAccount` parameter. Otherwise, this method does not take effect.
     * - Ensure that the value of the `userAccount` parameter is unique in the channel.
     * - To ensure smooth communication, use the same parameter type to identify the user. For example, if a user joins the channel
     * with a user ID, then ensure all the other users use the user ID too. The same applies to the user account. If a user joins
     * the channel with the Agora Web SDK, ensure that the uid of the user is set to the same parameter type.
     *
     * @param appId The App ID of your project.
     * @param userAccount The user account. The maximum length of this parameter is 255 bytes. Ensure that you set this parameter
     * and do not set it as `null`. Supported character scopes are:
     * - All lowercase English letters: a to z.
     * - All uppercase English letters: A to Z.
     * - All numeric characters: 0 to 9.
     * - The space character.
     * - Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".",
     * ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function registerLocalUserAccount(appId, userAccount) {
        return callNativeMethod(API_TYPE.REGISTER_LOCAL_USER_ACCOUNT, {
            appId: appId,
            userAccount: userAccount,
        });
    }
    AgoraRtcEngine.registerLocalUserAccount = registerLocalUserAccount;
    /**
     * Joins the channel with a user account.
     *
     * After the user successfully joins the channel, the SDK triggers the following callbacks:
     *
     * - The local client: [onLocalUserRegistered]{@link AgoraRtcEvents.onLocalUserRegistered} and
     * [onJoinChannelSuccess]{@link AgoraRtcEvents.onJoinChannelSuccess}.
     * - The remote client: [onUserJoined]{@link AgoraRtcEvents.onUserJoined} and
     * [onUserInfoUpdated]{@link AgoraRtcEvents.onUserInfoUpdated}, if the user joining the channel is in the `COMMUNICATION` profile, or
     * is a host in the `LIVE_BROADCASTING` profile.
     *
     * **Note**
     *
     * - To ensure smooth communication, use the same parameter type to identify the user. For example, if a user joins the channel
     * with a user ID, then ensure all the other users use the user ID too. The same applies to the user account.
     * - If a user joins the
     * channel with the Agora Web SDK, ensure that the uid of the user is set to the same parameter type.
     *
     * @param token The token for authentication:
     * - In situations not requiring high security: You can use the temporary token generated at Console. For details, see
     * [Get a temporary token](https://docs.agoraRtcEngine.io/en/Agora%20Platform/token?platform=All%20Platforms#get-a-temporary-token).
     * - In situations requiring high security: Set it as the token generated at your server. For details, see
     * [Get a token](https://docs.agoraRtcEngine.io/en/Agora%20Platform/token?platform=All%20Platforms#generatetoken).
     * @param channelId The channel name. The maximum length of this parameter is 64 bytes. Supported character scopes are:
     * - All lowercase English letters: a to z.
     * - All uppercase English letters: A to Z.
     * - All numeric characters: 0 to 9.
     * - The space character.
     * - Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=",
     * ".", ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
     * @param userAccount The user account. The maximum length of this parameter is 255 bytes. Ensure that you set this parameter
     * and do not set it as `null`. Supported character scopes are:
     * - All lowercase English letters: a to z.
     * - All uppercase English letters: A to Z.
     * - All numeric characters: 0 to 9.
     * - The space character.
     * - Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=",
     * ".", ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     *   - -2(`ERR_INVALID_ARGUMENT`)
     *   - -3(`ERR_NOT_READY`)
     *   - -5(`ERR_REFUSED`)
     */
    function joinChannelWithUserAccount(token, channelId, userAccount) {
        return callNativeMethod(API_TYPE.JOIN_CHANNEL_WITH_USER_ACCOUNT, {
            token: token,
            channelId: channelId,
            userAccount: userAccount,
        });
    }
    AgoraRtcEngine.joinChannelWithUserAccount = joinChannelWithUserAccount;
    /**
     * Gets the user information by passing in the user account.
     *
     * After a remote user joins the channel, the SDK gets the user ID and user account of the remote user, caches them
     * in [UserInfo]{@link agoraRtcEngine.UserInfo}, and triggers the
     * [onUserInfoUpdated]{@link AgoraRtcEvents.onUserInfoUpdated}  callback on the local client.
     *
     * After receiving the [onUserInfoUpdated]{@link AgoraRtcEvents.onUserInfoUpdated} callback, you can call this method
     * to get the user ID of the remote user from the `UserInfo` interface by passing in the user account.
     *
     * @param userAccount The user account of the user. Ensure that you set this parameter.
     *
     * @return A [UserInfo]{@link agoraRtcEngine.UserInfo} interface that identifies the user.
     */
    function getUserInfoByUserAccount(userAccount) {
        return callNativeMethod(API_TYPE.GET_USER_INFO_BY_USER_ACCOUNT, {
            userAccount: userAccount,
        });
    }
    AgoraRtcEngine.getUserInfoByUserAccount = getUserInfoByUserAccount;
    /**
     * Gets the user information by passing in the user ID.
     *
     * After a remote user joins the channel, the SDK gets the user ID and user account of the remote user,
     * caches [UserInfo]{@link agoraRtcEngine.UserInfo}, and triggers the
     * [onUserInfoUpdated]{@link AgoraRtcEvents.onUserInfoUpdated} callback on the local client.
     *
     * After receiving the [onUserInfoUpdated]{@link AgoraRtcEvents.onUserInfoUpdated} callback, you can call this method
     * to get the user account of the remote user from the `UserInfo` interface by passing in the user ID.
     *
     * @param uid The user ID of the remote user. Ensure that you set this parameter.
     *
     * @return A [UserInfo]{@link agoraRtcEngine.UserInfo} interface that identifies the user.
     */
    function getUserInfoByUid(uid) {
        return callNativeMethod(API_TYPE.GET_USER_INFO_BY_UID, { uid: uid });
    }
    AgoraRtcEngine.getUserInfoByUid = getUserInfoByUid;
    /**
     * Starts an audio call test.
     *
     * This method starts an audio call test to determine whether the audio devices (for example, headset and speaker)
     * and the network connection are working properly.
     *
     * In the audio call test, you record your voice. If the recording plays back within the set time interval, the
     * audio devices and the network connection are working properly.
     *
     * **Note**
     *
     * - Call this method before joining a channel.
     * - After calling this method, call the [stopEchoTest]{@link agoraRtcEngine.stopEchoTest} method to end the test.
     * Otherwise, the app cannot run the next echo test, or call the [joinChannel]{@link agoraRtcEngine.joinChannel} method.
     * - In the `LIVE_BROADCASTING` profile, only a host can call this method.
     *
     * @param intervalInSeconds The time interval (s) between when you speak and when the recording plays back.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function startEchoTest(intervalInSeconds) {
        if (intervalInSeconds === undefined) {
            return callNativeMethod(API_TYPE.START_ECHO_TEST);
        }
        return callNativeMethod(API_TYPE.START_ECHO_TEST_2, { intervalInSeconds: intervalInSeconds });
    }
    AgoraRtcEngine.startEchoTest = startEchoTest;
    /**
     * Stops the audio call test.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function stopEchoTest() {
        return callNativeMethod(API_TYPE.STOP_ECHO_TEST);
    }
    AgoraRtcEngine.stopEchoTest = stopEchoTest;
    /**
     * Enables the video module.
     *
     * Call this method either before joining a channel or during a call. If this method is called before joining a
     * channel, the call starts in the video mode. If this method is called during an audio call, the audio mode
     * switches to the video mode. To disable the video module, call the [disableVideo]{@link agoraRtcEngine.disableVideo} method.
     *
     * A successful [enableVideo]{@link agoraRtcEngine.enableVideo} method call triggers the
     * [onUserEnableVideo]{@link AgoraRtcEvents.onUserEnableVideo}(true) callback on the remote client.
     *
     * **Note**
     *
     * - This method affects the internal engine and can be called after the [leaveChannel]{@link agoraRtcEngine.leaveChannel} method.
     * - This method resets the internal engine and takes some time to take effect. We recommend using the following
     * API methods to control the video engine modules separately:
     *   - [enableLocalVideo]{@link agoraRtcEngine.enableLocalVideo}: Whether to enable the camera to create the local video stream.
     *   - [muteLocalVideoStream]{@link agoraRtcEngine.muteLocalVideoStream}: Whether to publish the local video stream.
     *   - [muteRemoteVideoStream]{@link agoraRtcEngine.muteRemoteVideoStream}: Whether to subscribe to and play the remote video stream.
     *   - [muteAllRemoteVideoStreams]{@link agoraRtcEngine.muteAllRemoteVideoStreams}: Whether to subscribe to and play all remote video streams.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function enableVideo() {
        return callNativeMethod(API_TYPE.ENABLE_VIDEO);
    }
    AgoraRtcEngine.enableVideo = enableVideo;
    /**
     * Disables the video module.
     *
     * This method can be called before joining a channel or during a call. If this method is called before joining a
     * channel, the call starts in audio mode. If this method is called during a video call, the video mode switches
     * to the audio mode. To enable the video module, call the [enableVideo]{@link agoraRtcEngine.enableVideo} method.
     *
     * A successful [disableVideo]{@link agoraRtcEngine.disableVideo} method call triggers the
     * [onUserEnableVideo]{@link AgoraRtcEvents.onUserEnableVideo} (false) callback on the remote client.
     *
     * **Note**
     *
     * - This method affects the internal engine and can be called after the [leaveChannel]{@link agoraRtcEngine.leaveChannel} method.
     * - This method resets the internal engine and takes some time to take effect. We recommend using the following API
     * methods to control the video engine modules separately:
     *   - [enableLocalVideo]{@link agoraRtcEngine.enableLocalVideo} : Whether to enable the camera to create the local video stream.
     *   - [muteLocalVideoStream]{@link agoraRtcEngine.muteLocalVideoStream} : Whether to publish the local video stream.
     *   - [muteRemoteVideoStream]{@link agoraRtcEngine.muteRemoteVideoStream} : Whether to subscribe to and play the remote video stream.
     *   - [muteAllRemoteVideoStreams]{@link agoraRtcEngine.muteAllRemoteVideoStreams} : Whether to subscribe to and play all remote video streams.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function disableVideo() {
        return callNativeMethod(API_TYPE.DISABLE_VIDEO);
    }
    AgoraRtcEngine.disableVideo = disableVideo;
    /**
     * Sets the video profile.
     *
     * @deprecated This method is deprecated. Use the [setVideoEncoderConfiguration]{@link agoraRtcEngine.setVideoEncoderConfiguration}
     * method instead.
     *
     * Each video profile includes a set of parameters, such as the resolution, frame rate, and bitrate. If the camera
     * device does not support the specified resolution, the SDK automatically chooses a suitable camera resolution,
     * keeping the encoder resolution specified by the `setVideoProfile` method.
     *
     * **Note**
     *
     * - If you do not need to set the video profile after joining the channel, call this method before the
     * [enableVideo]{@link agoraRtcEngine.enableVideo} method to reduce the render time of the first video frame.
     * - Always set the video profile before calling the [joinChannel]{@link agoraRtcEngine.joinChannel} or
     * [startPreview]{@link agoraRtcEngine.startPreview} method.
     *
     * @param profile Sets the video profile. See [VIDEO_PROFILE_TYPE]{@link agoraRtcEngine.VIDEO_PROFILE_TYPE}.
     * @param swapWidthAndHeight Sets whether to swap the width and height of the video stream:
     * - true: Swap the width and height.
     * - false: (Default) Do not swap the width and height.
     * The width and height of the output video are consistent with the set video profile.
     *
     * @note Since the landscape or portrait mode of the output video can be decided directly by the video profile,
     * We recommend setting `swapWidthAndHeight` to `false` (default).
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setVideoProfile(profile, swapWidthAndHeight) {
        return callNativeMethod(API_TYPE.SET_VIDEO_PROFILE, {
            profile: profile,
            swapWidthAndHeight: swapWidthAndHeight,
        });
    }
    AgoraRtcEngine.setVideoProfile = setVideoProfile;
    /**
     * Sets the video encoder configuration.
     *
     * Each video encoder configuration corresponds to a set of video parameters, including the resolution, frame rate,
     * bitrate, and video orientation.
     *
     * The parameters specified in this method are the maximum values under ideal network conditions. If the video
     * engine cannot render the video using the specified parameters due to poor network conditions, the parameters
     * further down the list are considered until a successful configuration is found.
     *
     * @note If you do not need to set the video encoder configuration after joining the channel, you can call this
     * method before the [enableVideo]{@link agoraRtcEngine.enableVideo} method to reduce the render time of the first video frame.
     *
     * @param config Sets the local video encoder configuration. See
     * [VideoEncoderConfiguration]{@link agoraRtcEngine.VideoEncoderConfiguration}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setVideoEncoderConfiguration(config) {
        return callNativeMethod(API_TYPE.SET_VIDEO_ENCODER_CONFIGURATION, {
            config: config,
        });
    }
    AgoraRtcEngine.setVideoEncoderConfiguration = setVideoEncoderConfiguration;
    /**
     * Sets the camera capture configuration.
     *
     * For a video call or the live interactive video streaming, generally the SDK controls the camera output
     * parameters. When the default camera capturer settings do not meet special requirements or cause performance
     * problems, we recommend using this method to set the camera capturer configuration:
     * - If the resolution or frame rate of the captured raw video data are higher than those set by
     * [setVideoEncoderConfiguration]{@link agoraRtcEngine.setVideoEncoderConfiguration}, processing video frames requires
     * extra CPU and RAM usage and degrades performance. We recommend setting `config` as
     * `CAPTURER_OUTPUT_PREFERENCE_PERFORMANCE(1)` to avoid such problems.
     * - If you do not need local video preview or are willing to sacrifice preview quality, we recommend setting
     * `config` as `CAPTURER_OUTPUT_PREFERENCE_PERFORMANCE(1)` to optimize CPU and RAM usage.
     * - If you want better quality for the local video preview, we recommend setting config as
     * `CAPTURER_OUTPUT_PREFERENCE_PREVIEW(2)`.
     *
     * @note Call this method before enabling the local camera. That said, you can call this method before calling
     * [joinChannel]{@link agoraRtcEngine.joinChannel}, [enableVideo]{@link agoraRtcEngine.enableVideo}, or
     * [enableLocalVideo]{@link agoraRtcEngine.enableLocalVideo}, depending on which method you use to turn on your local camera.
     *
     * @param config Sets the camera capturer configuration. See
     * [CameraCapturerConfiguration]{@link agoraRtcEngine.CameraCapturerConfiguration}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setCameraCapturerConfiguration(config) {
        return callNativeMethod(API_TYPE.SET_CAMERA_CAPTURER_CONFIGURATION, {
            config: config,
        });
    }
    AgoraRtcEngine.setCameraCapturerConfiguration = setCameraCapturerConfiguration;
    // @ts-ignore
    /**
     * TODO
     *
     * @param canvas
     */
    function setupLocalVideo(canvas) {
        // @ts-ignore
        require('./yuv/yuv-canvas').attach(canvas, { webGL: true });
    }
    AgoraRtcEngine.setupLocalVideo = setupLocalVideo;
    /**
     * TODO
     *
     * @param canvas
     * @param uid
     */
    function setupRemoteVideo(canvas, uid) {
        // @ts-ignore
        require('./yuv/yuv-canvas').attach(canvas, { webGL: true, uid: uid });
    }
    AgoraRtcEngine.setupRemoteVideo = setupRemoteVideo;
    /**
     * Starts the local video preview before joining the channel.
     *
     * Before calling this method, you must call the [enableVideo]{@link agoraRtcEngine.enableVideo} method to enable video.
     *
     * @note Once the `startPreview` method is called to start the local video preview, if you leave the channel by
     * calling the [leaveChannel]{@link agoraRtcEngine.leaveChannel} method, the local video preview remains until you call
     * the [stopPreview]{@link agoraRtcEngine.stopPreview} method to disable it.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function startPreview() {
        return callNativeMethod(API_TYPE.START_PREVIEW);
    }
    AgoraRtcEngine.startPreview = startPreview;
    /**
     * Prioritizes a remote user's stream.
     *
     * Use this method with the [setRemoteSubscribeFallbackOption]{@link agoraRtcEngine.setRemoteSubscribeFallbackOption} method.
     * If the fallback function is enabled for a subscribed stream, the SDK ensures the high-priority user gets the
     * best possible stream quality.
     *
     * @note The Agora SDK supports setting `userPriority` as `PRIORITY_HIGH` for one user only.
     *
     * @param uid The ID of the remote user.
     * @param userPriority Sets the priority of the remote user. See [PRIORITY_TYPE]{@link agoraRtcEngine.PRIORITY_TYPE}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setRemoteUserPriority(uid, userPriority) {
        return callNativeMethod(API_TYPE.SET_REMOTE_USER_PRIORITY, {
            uid: uid,
            userPriority: userPriority,
        });
    }
    AgoraRtcEngine.setRemoteUserPriority = setRemoteUserPriority;
    /**
     * Stops the local video preview and disables video.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function stopPreview() {
        return callNativeMethod(API_TYPE.STOP_PREVIEW);
    }
    AgoraRtcEngine.stopPreview = stopPreview;
    /**
     * Enables the audio module.
     *
     * The audio mode is enabled by default.
     *
     * **Note**
     *
     * - This method affects the internal engine and can be called after the [leaveChannel]{@link agoraRtcEngine.leaveChannel}
     * method. You can call this method either before or after joining a channel.
     * - This method resets the internal engine and takes some time to take effect. We recommend using the following
     * API methods to control the audio engine modules separately:
     *   - [enableLocalAudio]{@link agoraRtcEngine.enableLocalAudio}: Whether to enable the microphone to create the local audio stream.
     *   - [muteLocalAudioStream]{@link agoraRtcEngine.muteLocalAudioStream}: Whether to publish the local audio stream.
     *   - [muteRemoteAudioStream]{@link agoraRtcEngine.muteRemoteAudioStream}: Whether to subscribe to and play the remote audio stream.
     *   - [muteAllRemoteAudioStreams]{@link agoraRtcEngine.muteAllRemoteAudioStreams}: Whether to subscribe to and play all remote audio streams.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function enableAudio() {
        return callNativeMethod(API_TYPE.ENABLE_AUDIO);
    }
    AgoraRtcEngine.enableAudio = enableAudio;
    /**
     * Disables/Re-enables the local audio function.
     *
     * The audio function is enabled by default. This method disables or re-enables the local audio function, that is,
     * to stop or restart local audio capturing.
     *
     * This method does not affect receiving or playing the remote audio streams,and `enableLocalAudio(false)` is
     * applicable to scenarios where the user wants to receive remote audio streams without sending any audio stream to
     * other users in the channel.
     *
     * Once the local audio function is disabled or re-enabled, the SDK triggers the
     * [onLocalAudioStateChanged]{@link AgoraRtcEvents.onLocalAudioStateChanged} callback, which reports
     * `LOCAL_AUDIO_STREAM_STATE_STOPPED(0)` or `LOCAL_AUDIO_STREAM_STATE_RECORDING(1)`.
     *
     * **Note**
     *
     * This method is different from the [muteLocalAudioStream]{@link agoraRtcEngine.muteLocalAudioStream} method:
     *   - `enableLocalAudio: Disables/Re-enables the local audio capturing and processing. If you disable or re-enable
     * local audio recording using the `enableLocalAudio` method, the local user may hear a pause in the remote audio
     * playback.
     *   - [muteLocalAudioStream]{@link agoraRtcEngine.muteLocalAudioStream}: Sends/Stops sending the local audio streams.
     *
     * @param enabled Sets whether to disable/re-enable the local audio function:
     * - true: (Default) Re-enable the local audio function, that is, to start the local audio capturing device
     * (for example, the microphone).
     * - false: Disable the local audio function, that is, to stop local audio capturing.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function enableLocalAudio(enabled) {
        return callNativeMethod(API_TYPE.ENABLE_LOCAL_AUDIO, { enabled: enabled });
    }
    AgoraRtcEngine.enableLocalAudio = enableLocalAudio;
    /**
     * Disables the audio module.
     *
     * **Note**
     *
     * - This method affects the internal engine and can be called after the [leaveChannel]{@link agoraRtcEngine.leaveChannel}
     * method. You can call this method either before or after joining a channel.
     * - This method resets the internal engine and takes some time to take effect. We recommend using the
     * [enableLocalAudio]{@link agoraRtcEngine.enableLocalAudio} and [muteLocalAudioStream]{@link agoraRtcEngine.muteLocalAudioStream}
     * methods to capture, process, and send the local audio streams.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function disableAudio() {
        return callNativeMethod(API_TYPE.DISABLE_AUDIO);
    }
    AgoraRtcEngine.disableAudio = disableAudio;
    /**
     * Sets the audio parameters and application scenarios.
     *
     * **Note**
     *
     * - The `setAudioProfile` method must be called before the [joinChannel]{@link agoraRtcEngine.joinChannel} method.
     * - In the `COMMUNICATION` and `LIVE_BROADCASTING` profiles, the bitrate may be different from your settings due
     * to network self-adaptation.
     * - In scenarios requiring high-quality audio, for example, a music teaching scenario, we recommend setting
     * `profile` as `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` and `scenario` as `AUDIO_SCENARIO_GAME_STREAMING(3)`.
     *
     * @param  profile Sets the sample rate, bitrate, encoding mode, and the number of channels. See
     * [AUDIO_PROFILE_TYPE]{@link agoraRtcEngine.AUDIO_PROFILE_TYPE}.
     * @param  scenario Sets the audio application scenario. See [AUDIO_SCENARIO_TYPE]{@link agoraRtcEngine.AUDIO_SCENARIO_TYPE}.
     * Under different audio scenarios, the device uses different volume tracks, i.e. either the in-call volume or
     * the media volume. For details, see
     * [What is the difference between the in-call volume and the media volume?](https://docs.agoraRtcEngine.io/en/faq/system_volume).
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setAudioProfile(profile, scenario) {
        return callNativeMethod(API_TYPE.SET_AUDIO_PROFILE, { profile: profile, scenario: scenario });
    }
    AgoraRtcEngine.setAudioProfile = setAudioProfile;
    /**
     * Stops/Resumes sending the local audio stream.
     *
     * A successful `muteLocalAudioStream` method call triggers the [onUserMuteAudio]{@link AgoraRtcEvents.onUserMuteAudio}
     * callback on the remote client.
     *
     * **Note**
     *
     * - When `mute` is set as `true`, this method does not disable the microphone, which does not affect any ongoing recording.
     * - If you call [setChannelProfile]{@link agoraRtcEngine.setChannelProfile} after this method, the SDK resets whether or not to mute
     * the local audio according to the channel profile and user role. Therefore, we recommend calling this method after the
     * `setChannelProfile` method.
     *
     * @param mute Sets whether to send or stop sending the local audio stream:
     * - true: Stops sending the local audio stream.
     * - false: (Default) Sends the local audio stream.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function muteLocalAudioStream(mute) {
        return callNativeMethod(API_TYPE.MUTE_LOCAL_AUDIO_STREAM, { mute: mute });
    }
    AgoraRtcEngine.muteLocalAudioStream = muteLocalAudioStream;
    /**
     * Stops/Resumes receiving all remote users' audio streams.
     *
     * @param mute Sets whether to receive or stop receiving all remote users' audio streams.
     * - true: Stops receiving all remote users' audio streams.
     * - false: (Default) Receives all remote users' audio streams.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function muteAllRemoteAudioStreams(mute) {
        return callNativeMethod(API_TYPE.MUTE_ALL_REMOTE_AUDIO_STREAMS, { mute: mute });
    }
    AgoraRtcEngine.muteAllRemoteAudioStreams = muteAllRemoteAudioStreams;
    /**
     * Stops/Resumes receiving all remote users' audio streams by default.
     *
     * You can call this method either before or after joining a channel. If you call `setDefaultMuteAllRemoteAudioStreams (true)`
     * after joining a channel, the remote audio streams of all subsequent users are not received.
     *
     * @note If you want to resume receiving the audio stream, call [muteRemoteAudioStream(false)]{@link agoraRtcEngine.muteRemoteAudioStream},
     * and specify the ID of the remote user whose audio stream you want to receive. To receive the audio streams of multiple remote
     * users, call `muteRemoteAudioStream(false)` as many times. Calling `setDefaultMuteAllRemoteAudioStreams (false)` resumes
     * receiving the audio streams of subsequent users only.
     *
     * @param mute Sets whether to receive/stop receiving all remote users' audio streams by default:
     * - true:  Stops receiving all remote users' audio streams by default.
     * - false: (Default) Receives all remote users' audio streams by default.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setDefaultMuteAllRemoteAudioStreams(mute) {
        return callNativeMethod(API_TYPE.SET_DEFAULT_MUTE_ALL_REMOTE_AUDIO_STREAMS, { mute: mute });
    }
    AgoraRtcEngine.setDefaultMuteAllRemoteAudioStreams = setDefaultMuteAllRemoteAudioStreams;
    /**
     * Adjusts the playback volume of a specified remote user.
     *
     * You can call this method as many times as necessary to adjust the playback volume of different remote users, or to
     * repeatedly adjust the playback volume of the same remote user.
     *
     * **Note**
     *
     * - Call this method after joining a channel.
     * - The playback volume here refers to the mixed volume of a specified remote user.
     * - This method can only adjust the playback volume of one specified remote user at a time. To adjust the playback volume of
     * different remote users, call the method as many times, once for each remote user.
     *
     * @param uid The ID of the remote user.
     * @param volume The playback volume of the specified remote user. The value ranges from 0 to 100:
     * - 0: Mute.
     * - 100: Original volume.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function adjustUserPlaybackSignalVolume(uid, volume) {
        return callNativeMethod(API_TYPE.ADJUST_USER_PLAYBACK_SIGNAL_VOLUME, {
            uid: uid,
            volume: volume,
        });
    }
    AgoraRtcEngine.adjustUserPlaybackSignalVolume = adjustUserPlaybackSignalVolume;
    /**
     * Stops/Resumes receiving a specified remote user's audio stream.
     *
     * @note If you called the [muteAllRemoteAudioStreams]{@link agoraRtcEngine.muteAllRemoteAudioStreams} method and set `mute`
     * as `true` to stop receiving all remote users' audio streams, call the `muteAllRemoteAudioStreams` method and set
     * `mute` as `false` before calling this method. The `muteAllRemoteAudioStreams` method sets all remote audio
     * streams, while the `muteAllRemoteAudioStreams` method sets a specified remote audio stream.
     *
     * @param userId User ID of the specified remote user sending the audio.
     * @param mute Sets whether to receive/stop receiving a specified remote user's audio stream:
     * - true: Stops receiving the specified remote user's audio stream.
     * - false: (Default) Receives the specified remote user's audio stream.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function muteRemoteAudioStream(userId, mute) {
        return callNativeMethod(API_TYPE.MUTE_REMOTE_AUDIO_STREAM, {
            userId: userId,
            mute: mute,
        });
    }
    AgoraRtcEngine.muteRemoteAudioStream = muteRemoteAudioStream;
    /**
     * Stops/Resumes sending the local video stream.
     *
     * A successful `muteLocalVideoStream` method call triggers the
     * [onUserMuteVideo]{@link AgoraRtcEvents.onUserMuteVideo} callback on the remote client.
     *
     * **Note**
     *
     * - When set to `true`, this method does not disable the camera which does not affect the retrieval of the local
     * video streams. This method executes faster than the [enableLocalVideo]{@link agoraRtcEngine.enableLocalVideo} method
     * which controls the sending of the local video stream.
     * - If you call [setChannelProfile]{@link agoraRtcEngine.setChannelProfile} after this method, the SDK resets whether or
     * not to mute the local video according to the channel profile and user role. Therefore, we recommend calling
     * this method after the `setChannelProfile` method.
     *
     * @param mute Sets whether to send/stop sending the local video stream:
     * - true: Stop sending the local video stream.
     * - false: (Default) Send the local video stream.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function muteLocalVideoStream(mute) {
        return callNativeMethod(API_TYPE.MUTE_LOCAL_VIDEO_STREAM, { mute: mute });
    }
    AgoraRtcEngine.muteLocalVideoStream = muteLocalVideoStream;
    /**
     * Enables/Disables the local video capture.
     *
     * This method disables or re-enables the local video capturer, and does not affect receiving the remote video stream.
     *
     * After you call the [enableVideo]{@link agoraRtcEngine.enableVideo} method, the local video capturer is enabled by default.
     * You can call `enableLocalVideo(false)` to disable the local video capturer. If you want to re-enable it, call
     * `[enableLocalVideo(true)`.
     *
     * After the local video capturer is successfully disabled or re-enabled, the SDK triggers the
     * [onUserEnableLocalVideo]{@link AgoraRtcEvents.onUserEnableLocalVideo} callback on the remote client.
     *
     * @note This method affects the internal engine and can be called after the [leaveChannel]{@link agoraRtcEngine.leaveChannel} method.
     *
     * @param enabled Sets whether to disable/re-enable the local video, including the capturer, renderer, and sender:
     * - true: (Default) Re-enable the local video.
     * - false: Disable the local video. Once the local video is disabled, the remote users can no longer receive the
     * video stream of this user, while this user can still receive the video streams of the other remote users.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function enableLocalVideo(enabled) {
        return callNativeMethod(API_TYPE.ENABLE_LOCAL_VIDEO, { enabled: enabled });
    }
    AgoraRtcEngine.enableLocalVideo = enableLocalVideo;
    /**
     * Stops/Resumes receiving all video stream from a specified remote user.
     *
     * @param  mute Sets whether to receive/stop receiving all remote users' video streams:
     * - true: Stop receiving all remote users' video streams.
     * - false: (Default) Receive all remote users' video streams.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function muteAllRemoteVideoStreams(mute) {
        return callNativeMethod(API_TYPE.MUTE_ALL_REMOTE_VIDEO_STREAMS, { mute: mute });
    }
    AgoraRtcEngine.muteAllRemoteVideoStreams = muteAllRemoteVideoStreams;
    /**
     * Stops/Resumes receiving all remote users' video streams by default.
     *
     * You can call this method either before or after joining a channel. If you call `setDefaultMuteAllRemoteVideoStreams (true)`
     * after joining a channel, the remote video streams of all subsequent users are not received.
     *
     * @note If you want to resume receiving the video stream, call [muteRemoteVideoStream(false)]{@link agoraRtcEngine.muteRemoteVideoStream},
     * and specify the ID of the remote user whose video stream you want to receive. To receive the video streams of multiple
     * remote users, call `muteRemoteVideoStream(false)` as many times. Calling `setDefaultMuteAllRemoteVideoStreams(false)`
     * resumes receiving the video streams of subsequent users only.
     *
     * @param mute Sets whether to receive/stop receiving all remote users' video streams by default:
     * - true: Stop receiving all remote users' video streams by default.
     * - false: (Default) Receive all remote users' video streams by default.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setDefaultMuteAllRemoteVideoStreams(mute) {
        return callNativeMethod(API_TYPE.SET_DEFAULT_MUTE_ALL_REMOTE_VIDEO_STREAMS, { mute: mute });
    }
    AgoraRtcEngine.setDefaultMuteAllRemoteVideoStreams = setDefaultMuteAllRemoteVideoStreams;
    /**
     * Stops/Resumes receiving the video stream from a specified remote user.
     *
     * @note If you called the [muteAllRemoteVideoStreams]{@link agoraRtcEngine.muteAllRemoteVideoStreams} method and set `mute`
     * as `true` to stop receiving all remote video streams, call the `muteAllRemoteVideoStreams` method and set `mute`
     * as `false` before calling this method.
     *
     * @param userId User ID of the specified remote user.
     * @param mute Sets whether to stop/resume receiving the video stream from a specified remote user:
     * - true: Stop receiving the specified remote user's video stream.
     * - false: (Default) Receive the specified remote user's video stream.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function muteRemoteVideoStream(userId, mute) {
        return callNativeMethod(API_TYPE.MUTE_REMOTE_VIDEO_STREAM, {
            userId: userId,
            mute: mute,
        });
    }
    AgoraRtcEngine.muteRemoteVideoStream = muteRemoteVideoStream;
    /**
     * Sets the stream type of the remote video.
     *
     * Under limited network conditions, if the publisher has not disabled the dual-stream mode using `enableDualStreamMode(false)`,
     * the receiver can choose to receive either the high-quality video stream (the high resolution, and high bitrate video stream) or
     * the low-video stream (the low resolution, and low bitrate video stream).
     *
     * By default, users receive the high-quality video stream. Call this method if you want to switch to the low-video stream.
     * This method allows the app to adjust the corresponding video stream type based on the size of the video window to
     * reduce the bandwidth and resources.
     *
     * The aspect ratio of the low-video stream is the same as the high-quality video stream. Once the resolution of the high-quality
     * video stream is set, the system automatically sets the resolution, frame rate, and bitrate of the low-video stream.
     *
     * The method result returns in the [onApiCallExecuted]{@link AgoraRtcEvents.onApiCallExecuted} callback.
     *
     * @param userId ID of the remote user sending the video stream.
     * @param streamType  Sets the video-stream type. See [REMOTE_VIDEO_STREAM_TYPE]{@link agoraRtcEngine.REMOTE_VIDEO_STREAM_TYPE}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setRemoteVideoStreamType(userId, streamType) {
        return callNativeMethod(API_TYPE.SET_REMOTE_VIDEO_STREAM_TYPE, {
            userId: userId,
            streamType: streamType,
        });
    }
    AgoraRtcEngine.setRemoteVideoStreamType = setRemoteVideoStreamType;
    /**
     * Sets the default stream type of remote videos.
     *
     * Under limited network conditions, if the publisher has not disabled the dual-stream mode using `enableDualStreamMode(false)`,
     * the receiver can choose to receive either the high-quality video stream (the high resolution, and high bitrate video stream) or
     * the low-video stream (the low resolution, and low bitrate video stream).
     *
     * By default, users receive the high-quality video stream. Call this method if you want to switch to the low-video stream.
     *
     * This method allows the app to adjust the corresponding video stream type based on the size of the video window to
     * reduce the bandwidth and resources. The aspect ratio of the low-video stream is the same as the high-quality video stream.
     * Once the resolution of the high-quality video stream is set, the system automatically sets the resolution, frame rate,
     * and bitrate of the low-video stream.
     *
     * The method result returns in the [onApiCallExecuted]{@link AgoraRtcEvents.onApiCallExecuted} callback.
     *
     * @param streamType Sets the default video-stream type. See [REMOTE_VIDEO_STREAM_TYPE]{@link agoraRtcEngine.REMOTE_VIDEO_STREAM_TYPE}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setRemoteDefaultVideoStreamType(streamType) {
        return callNativeMethod(API_TYPE.SET_REMOTE_DEFAULT_VIDEO_STREAM_TYPE, {
            streamType: streamType,
        });
    }
    AgoraRtcEngine.setRemoteDefaultVideoStreamType = setRemoteDefaultVideoStreamType;
    /**
     * Enables the [onAudioVolumeIndication]{@link AgoraRtcEvents.onAudioVolumeIndication} callback at a set time interval
     * to report on which users are speaking and the speakers' volume.
     *
     * Once this method is enabled, the SDK returns the volume indication in the
     * [onAudioVolumeIndication]{@link AgoraRtcEvents.onAudioVolumeIndication} callback at the set time interval, whether
     * or not any user is speaking in the channel.
     *
     * @param interval Sets the time interval between two consecutive volume indications:
     * - &le; 0: Disables the volume indication.
     * - &gt; 0: Time interval (ms) between two consecutive volume indications. We recommend setting `interval` &gt; 200 ms.
     * Do not set `interval` &lt; 10 ms, or the `onAudioVolumeIndication` callback will not be triggered.
     * @param smooth  Smoothing factor sets the sensitivity of the audio volume indicator. The value ranges between
     * 0 and 10. The greater the value, the more sensitive the indicator. The recommended value is 3.
     * @param report_vad - true: Enable the voice activity detection of the local user. Once it is enabled, the `vad`
     * parameter of the `onAudioVolumeIndication` callback reports the voice activity status of the local user.
     * - false: (Default) Disable the voice activity detection of the local user. Once it is disabled, the `vad`
     * parameter of the `onAudioVolumeIndication` callback does not report the voice activity status of the local user,
     * except for the scenario where the engine automatically detects the voice activity of the local user.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function enableAudioVolumeIndication(interval, smooth, report_vad) {
        return callNativeMethod(API_TYPE.ENABLE_AUDIO_VOLUME_INDICATION, {
            interval: interval,
            smooth: smooth,
            report_vad: report_vad,
        });
    }
    AgoraRtcEngine.enableAudioVolumeIndication = enableAudioVolumeIndication;
    /**
     * Starts an audio recording on the client.
     *
     * The SDK allows recording during a call. After successfully calling this method, you can record the audio of all
     * the users in the channel and get an audio recording file.
     *
     * Supported formats of the recording file are as follows:
     * - .wav: Large file size with high fidelity.
     * - .aac: Small file size with low fidelity.
     *
     * **Note**
     *
     * - Ensure that the directory you use to save the recording file exists and is writable.
     * - This method is usually called after the `joinChannel` method. The recording automatically stops when you call
     * the `leaveChannel` method.
     * - For better recording effects, set quality as
     * [AUDIO_RECORDING_QUALITY_MEDIUM]{@link agoraRtcEngine.AUDIO_RECORDING_QUALITY_TYPE.AUDIO_RECORDING_QUALITY_MEDIUM} or
     * [AUDIO_RECORDING_QUALITY_HIGH]{@link agoraRtcEngine.AUDIO_RECORDING_QUALITY_TYPE.AUDIO_RECORDING_QUALITY_HIGH} when
     * `sampleRate` is 44.1 kHz or 48 kHz.
     *
     * @param filePath The absolute file path of the recording file. The string of the file name is in UTF-8, such as
     * /dir1/dir2/dir3/audio.aac.
     * @param quality Sets the audio recording quality. See
     * [AUDIO_RECORDING_QUALITY_TYPE]{@link agoraRtcEngine.AUDIO_RECORDING_QUALITY_TYPE}.
     * @param sampleRate Sample rate (Hz) of the recording file. Supported values are as follows:
     * - 16000
     * - (Default) 32000
     * - 44100
     * - 48000
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function startAudioRecording(filePath, quality, sampleRate) {
        if (sampleRate === undefined) {
            return callNativeMethod(API_TYPE.START_AUDIO_RECORDING, {
                filePath: filePath,
                quality: quality,
            });
        }
        return callNativeMethod(API_TYPE.START_AUDIO_RECORDING2, {
            filePath: filePath,
            sampleRate: sampleRate,
            quality: quality,
        });
    }
    AgoraRtcEngine.startAudioRecording = startAudioRecording;
    /**
     * Stops an audio recording on the client.
     *
     * You can call this method before calling the [leaveChannel]{@link agoraRtcEngine.leaveChannel} method else, the
     * recording automatically stops when the `leaveChannel` method is called.
     *
     * @return
     * - 0: Success
     * - < 0: Failure.
     */
    function stopAudioRecording() {
        return callNativeMethod(API_TYPE.STOP_AUDIO_RECORDING);
    }
    AgoraRtcEngine.stopAudioRecording = stopAudioRecording;
    /**
     * Starts playing and mixing the music file.
     *
     * This method mixes the specified local audio file with the audio stream from the microphone, or replaces the
     * microphone's audio stream with the specified local audio file. You can choose whether the other user can hear
     * the local audio playback and specify the number of playback loops. This method also supports online music
     * playback.
     *
     * When the audio mixing file playback finishes after calling this method, the SDK triggers the
     * [onAudioMixingFinished]{@link AgoraRtcEvents.onAudioMixingFinished} callback.
     *
     * A successful `startAudioMixing` method call triggers the
     * [onAudioMixingStateChanged]{@link AgoraRtcEvents.onAudioMixingStateChanged}(PLAY) callback on the local client.
     *
     * When the audio mixing file playback finishes, the SDK triggers the `onAudioMixingStateChanged(STOPPED)`
     * callback on the local client.
     *
     * **Note**
     *
     * - Call this method after joining a channel, otherwise issues may occur.
     * - If the local audio mixing file does not exist, or if the SDK does not support the file format or cannot
     * access the music file URL, the SDK returns `WARN_AUDIO_MIXING_OPEN_ERROR(-701)`.
     * - If you want to play an online music file, ensure that the time interval between calling this method is more
     * than 100 ms, or the `AUDIO_MIXING_ERROR_TOO_FREQUENT_CALL(702)` error code occurs.
     *
     * @param filePath The absolute path (including the suffixes of the filename) of the local or online audio file to
     * mix, for example, c:\music\audio.mp4. Supported audio formats: 3GP, ASF, ADTS, AVI, MP3, MP4, MPEG-4, SAMI, and
     * WAVE. For more information, see [Supported Media Formats in Media Foundation](https://docs.microsoft.com/en-us/windows/desktop/medfound/supported-media-formats-in-media-foundation).
     * @param loopback Sets which user can hear the audio mixing:
     * - true: Only the local user can hear the audio mixing.
     * - false: Both users can hear the audio mixing.
     * @param replace Sets the audio mixing content:
     * - true: Only publish the specified audio file. The audio stream from the microphone is not published.
     * - false: The local audio file is mixed with the audio stream from the microphone.
     * @param cycle Sets the number of playback loops:
     * - Positive integer: Number of playback loops.
     * - `-1`: Infinite playback loops.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function startAudioMixing(filePath, loopback, replace, cycle) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.START_AUDIO_MIXING, {
            filePath: filePath,
            loopback: loopback,
            replace: replace,
            cycle: cycle,
        });
    }
    AgoraRtcEngine.startAudioMixing = startAudioMixing;
    /**
     * Stops playing and mixing the music file.
     *
     * Call this method when you are in a channel.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function stopAudioMixing() {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.STOP_AUDIO_MIXING);
    }
    AgoraRtcEngine.stopAudioMixing = stopAudioMixing;
    /**
     * Pauses playing and mixing the music file.
     *
     * Call this method when you are in a channel.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function pauseAudioMixing() {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.PAUSE_AUDIO_MIXING);
    }
    AgoraRtcEngine.pauseAudioMixing = pauseAudioMixing;
    /**
     * Resumes playing and mixing the music file.
     *
     * Call this method when you are in a channel.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function resumeAudioMixing() {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.RESUME_AUDIO_MIXING);
    }
    AgoraRtcEngine.resumeAudioMixing = resumeAudioMixing;
    /**
     * Sets the high-quality audio preferences.
     *
     * @deprecated This callback is deprecated.
     *
     * Call this method and set all parameters before joining a channel.
     * Do not call this method again after joining a channel.
     *
     * @param fullband Sets whether to enable/disable full-band codec (48-kHz sample rate). Not compatible with SDK
     * versions before v1.7.4:
     * - true: Enable full-band codec.
     * - false: Disable full-band codec.
     * @param  stereo Sets whether to enable/disable stereo codec. Not compatible with SDK versions before v1.7.4:
     * - true: Enable stereo codec.
     * - false: Disable stereo codec.
     * @param fullBitrate Sets whether to enable/disable high-bitrate mode. Recommended in voice-only mode:
     * - true: Enable high-bitrate mode.
     * - false: Disable high-bitrate mode.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setHighQualityAudioParameters(fullband, stereo, fullBitrate) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_HIGH_QUALITY_AUDIO_PARAMETERS, {
            fullband: fullband,
            stereo: stereo,
            fullBitrate: fullBitrate,
        });
    }
    AgoraRtcEngine.setHighQualityAudioParameters = setHighQualityAudioParameters;
    /**
     * Adjusts the volume during audio mixing.
     *
     * Call this method when you are in a channel.
     *
     * @note Calling this method does not affect the volume of audio effect file playback invoked by the
     * [playEffect]{@link agoraRtcEngine.playEffect} method.
     *
     * @param volume Audio mixing volume. The value ranges between 0 and 100 (default).
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function adjustAudioMixingVolume(volume) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.ADJUST_AUDIO_MIXING_VOLUME, { volume: volume });
    }
    AgoraRtcEngine.adjustAudioMixingVolume = adjustAudioMixingVolume;
    /**
     * Adjusts the audio mixing volume for local playback.
     *
     * @note Call this method when you are in a channel.
     *
     * @param volume Audio mixing volume for local playback. The value ranges between 0 and 100 (default).
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function adjustAudioMixingPlayoutVolume(volume) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.ADJUST_AUDIO_MIXING_PLAYOUT_VOLUME, { volume: volume });
    }
    AgoraRtcEngine.adjustAudioMixingPlayoutVolume = adjustAudioMixingPlayoutVolume;
    /**
     * Retrieves the audio mixing volume for local playback.
     *
     * This method helps troubleshoot audio volume related issues.
     *
     * @note Call this method when you are in a channel.
     *
     * @return
     * - &ge; 0: The audio mixing volume, if this method call succeeds. The value range is [0,100].
     * - < 0: Failure.
     */
    function getAudioMixingPlayoutVolume() {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.GET_AUDIO_MIXING_PLAYOUT_VOLUME);
    }
    AgoraRtcEngine.getAudioMixingPlayoutVolume = getAudioMixingPlayoutVolume;
    /**
     * Adjusts the audio mixing volume for publishing (for remote users).
     *
     * @note Call this method when you are in a channel.
     *
     * @param volume Audio mixing volume for publishing. The value ranges between 0 and 100 (default).
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function adjustAudioMixingPublishVolume(volume) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.ADJUST_AUDIO_MIXING_PUBLISH_VOLUME, { volume: volume });
    }
    AgoraRtcEngine.adjustAudioMixingPublishVolume = adjustAudioMixingPublishVolume;
    /**
     * Retrieves the audio mixing volume for publishing.
     *
     * This method helps troubleshoot audio volume related issues.
     *
     * @note Call this method when you are in a channel.
     *
     * @return
     * - &ge; 0: The audio mixing volume for publishing, if this method call succeeds. The value range is [0,100].
     * - < 0: Failure.
     */
    function getAudioMixingPublishVolume() {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.GET_AUDIO_MIXING_PUBLISH_VOLUME);
    }
    AgoraRtcEngine.getAudioMixingPublishVolume = getAudioMixingPublishVolume;
    /**
     * Retrieves the duration (ms) of the music file.
     *
     * Call this method when you are in a channel.
     *
     * @return
     * - &ge; 0: The audio mixing duration, if this method call succeeds.
     * - < 0: Failure.
     */
    function getAudioMixingDuration() {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.GET_AUDIO_MIXING_DURATION);
    }
    AgoraRtcEngine.getAudioMixingDuration = getAudioMixingDuration;
    /**
     * Retrieves the playback position (ms) of the music file.
     *
     * Call this method when you are in a channel.
     *
     * @return
     * - &ge; 0: The current playback position of the audio mixing, if this method call succeeds.
     * - < 0: Failure.
     */
    function getAudioMixingCurrentPosition() {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.GET_AUDIO_MIXING_CURRENT_POSITION);
    }
    AgoraRtcEngine.getAudioMixingCurrentPosition = getAudioMixingCurrentPosition;
    /**
     * Sets the playback position of the music file to a different starting position (the default plays from the beginning).
     *
     * @param pos The playback starting position (ms) of the music file.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setAudioMixingPosition(pos) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_AUDIO_MIXING_POSITION, { pos: pos });
    }
    AgoraRtcEngine.setAudioMixingPosition = setAudioMixingPosition;
    /**
     * Sets the pitch of the local music file.
     *
     * When a local music file is mixed with a local human voice, call this method to set the pitch of the local music file only.
     *
     * @note Call this method after calling [startAudioMixing]{@link agoraRtcEngine.startAudioMixing}.
     *
     * @param pitch Sets the pitch of the local music file by chromatic scale. The default value is 0,
     * which means keeping the original pitch. The value ranges from -12 to 12, and the pitch value between
     * consecutive values is a chromatic value. The greater the absolute value of this parameter, the
     * higher or lower the pitch of the local music file.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setAudioMixingPitch(pitch) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_AUDIO_MIXING_PITCH, { pitch: pitch });
    }
    AgoraRtcEngine.setAudioMixingPitch = setAudioMixingPitch;
    /**
     * Retrieves the volume of the audio effects.
     *
     * The value ranges between 0.0 and 100.0.
     *
     * @return
     * - &ge; 0: Volume of the audio effects, if this method call succeeds.
     * - < 0: Failure.
     */
    function getEffectsVolume() {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.GET_EFFECTS_VOLUME);
    }
    AgoraRtcEngine.getEffectsVolume = getEffectsVolume;
    /**
     * Sets the volume of the audio effects.
     *
     * @param volume Sets the volume of the audio effects. The value ranges between 0 and 100 (default).
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setEffectsVolume(volume) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_EFFECTS_VOLUME, { volume: volume });
    }
    AgoraRtcEngine.setEffectsVolume = setEffectsVolume;
    /**
     * Sets the volume of a specified audio effect.
     *
     * @param soundId ID of the audio effect. Each audio effect has a unique ID.
     * @param volume Sets the volume of the specified audio effect. The value ranges between 0 and 100 (default).
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setVolumeOfEffect(soundId, volume) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_VOLUME_OF_EFFECT, { soundId: soundId, volume: volume });
    }
    AgoraRtcEngine.setVolumeOfEffect = setVolumeOfEffect;
    /**
     * Enables/Disables face detection for the local user.
     *
     * Once face detection is enabled, the SDK triggers the
     * [onFacePositionChanged]{@link AgoraRtcEvents.onFacePositionChanged} callback to report the face information of the
     * local user, which includes the following aspects:
     * - The width and height of the local video.
     * - The position of the human face in the local video.
     * - The distance between the human face and the device screen.
     *
     * @param enabled Determines whether to enable the face detection function for the local user:
     * - true: Enable face detection.
     * - false: (Default) Disable face detection.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function enableFaceDetection(enabled) {
        return callNativeMethod(API_TYPE.ENABLE_FACE_DETECTION, { enabled: enabled });
    }
    AgoraRtcEngine.enableFaceDetection = enableFaceDetection;
    /**
     * Plays a specified local or online audio effect file.
     *
     * This method allows you to set the loop count, pitch, pan, and gain of the audio effect file, as well as whether
     * the remote user can hear the audio effect.
     *
     * To play multiple audio effect files simultaneously, call this method multiple times with different soundIds and
     * filePaths. We recommend playing no more than three audio effect files at the same time.
     *
     * @param soundId ID of the specified audio effect. Each audio effect has a unique ID.
     *
     * @note If the audio effect is preloaded into the memory through the [preloadEffect]{@link agoraRtcEngine.preloadEffect}
     * method, the value of `soundID` must be the same as that in the `preloadEffect` method.
     * @param filePath Specifies the absolute path (including the suffixes of the filename) to the local audio effect
     * file or the URL of the online audio effect file, for example, c:/music/audio.mp4. Supported audio formats: mp3,
     * mp4, m4a, aac, 3gp, mkv and wav.
     * @param loopCount Sets the number of times the audio effect loops:
     * - 0: Play the audio effect once.
     * - 1: Play the audio effect twice.
     * - -1: Play the audio effect in an indefinite loop until the [stopEffect]{@link agoraRtcEngine.stopEffect} or
     * [stopAllEffects]{@link agoraRtcEngine.stopAllEffects} method is called.
     * @param pitch Sets the pitch of the audio effect. The value ranges between 0.5 and 2. The default value is 1
     * (no change to the pitch). The lower the value, the lower the pitch.
     * @param pan Sets the spatial position of the audio effect. The value ranges between -1.0 and 1.0:
     * - 0.0: The audio effect displays ahead.
     * - 1.0: The audio effect displays to the right.
     * - -1.0: The audio effect displays to the left.
     * @param gain  Sets the volume of the audio effect. The value ranges between 0 and 100 (default). The lower the
     * value, the lower the volume of the audio effect.
     * @param publish Sets whether or not to publish the specified audio effect to the remote stream:
     * - true: The locally played audio effect is published to the Agora Cloud and the remote users can hear it.
     * - false: The locally played audio effect is not published to the Agora Cloud and the remote users cannot hear it.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function playEffect(soundId, filePath, loopCount, pitch, pan, gain, publish) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.PLAY_EFFECT, {
            soundId: soundId,
            filePath: filePath,
            loopCount: loopCount,
            pitch: pitch,
            pan: pan,
            gain: gain,
            publish: publish,
        });
    }
    AgoraRtcEngine.playEffect = playEffect;
    /**
     * Stops playing a specified audio effect.
     *
     * @param soundId ID of the audio effect to stop playing. Each audio effect has a unique ID.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function stopEffect(soundId) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.STOP_EFFECT, {
            soundId: soundId,
        });
    }
    AgoraRtcEngine.stopEffect = stopEffect;
    /**
     * Stops playing all audio effects.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function stopAllEffects() {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.STOP_ALL_EFFECTS);
    }
    AgoraRtcEngine.stopAllEffects = stopAllEffects;
    /**
     * Preloads a specified audio effect file into the memory.
     *
     * To ensure smooth communication, limit the size of the audio effect file. We recommend using this method to
     * preload the audio effect before calling the [joinChannel]{@link agoraRtcEngine.joinChannel} method.
     * Supported audio formats: mp3, aac, m4a, 3gp, and wav.
     *
     * @note This method does not support online audio effect files.
     *
     * @param soundId ID of the audio effect. Each audio effect has a unique ID.
     * @param filePath The absolute path of the audio effect file.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function preloadEffect(soundId, filePath) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.PRE_LOAD_EFFECT, {
            soundId: soundId,
            filePath: filePath,
        });
    }
    AgoraRtcEngine.preloadEffect = preloadEffect;
    /**
     * Releases a specified preloaded audio effect from the memory.
     *
     * @param soundId ID of the audio effect. Each audio effect has a unique ID.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function unloadEffect(soundId) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.UN_LOAD_EFFECT, {
            soundId: soundId,
        });
    }
    AgoraRtcEngine.unloadEffect = unloadEffect;
    /**
     * Pauses a specified audio effect.
     *
     * @param soundId ID of the audio effect. Each audio effect has a unique ID.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function pauseEffect(soundId) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.PAUSE_EFFECT, {
            soundId: soundId,
        });
    }
    AgoraRtcEngine.pauseEffect = pauseEffect;
    /**
     * Pauses all audio effects.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function pauseAllEffects() {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.PAUSE_ALL_EFFECTS);
    }
    AgoraRtcEngine.pauseAllEffects = pauseAllEffects;
    /**
     * Resumes playing a specified audio effect.
     *
     * @param soundId ID of the audio effect. Each audio effect has a unique ID.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function resumeEffect(soundId) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.RESUME_EFFECT, {
            soundId: soundId,
        });
    }
    AgoraRtcEngine.resumeEffect = resumeEffect;
    /**
     * Resumes playing all audio effects.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function resumeAllEffects() {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.RESUME_ALL_EFFECTS);
    }
    AgoraRtcEngine.resumeAllEffects = resumeAllEffects;
    /**
     * Enables/Disables stereo panning for remote users.
     *
     * Ensure that you call this method before [joinChannel]{@link agoraRtcEngine.joinChannel} to enable stereo panning for
     * remote users so that the local user can track the position of a remote user by calling
     * [setRemoteVoicePosition]{@link agoraRtcEngine.setRemoteVoicePosition}.
     *
     * @param enabled Sets whether or not to enable stereo panning for remote users:
     * - true: enables stereo panning.
     * - false: disables stereo panning.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function enableSoundPositionIndication(enabled) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.ENABLE_SOUND_POSITION_INDICATION, { enabled: enabled });
    }
    AgoraRtcEngine.enableSoundPositionIndication = enableSoundPositionIndication;
    /**
     * Sets the sound position and gain of a remote user.
     *
     * When the local user calls this method to set the sound position of a remote user, the sound difference between
     * the left and right channels allows the local user to track the real-time position of the remote user, creating
     * a real sense of space. This method applies to massively multiplayer online games, such as Battle Royale games.
     *
     * **Note**
     *
     * - For this method to work, enable stereo panning for remote users by calling the
     * [enableSoundPositionIndication]{@link agoraRtcEngine.enableSoundPositionIndication} method before joining a channel.
     * - This method requires hardware support. For the best sound positioning, we recommend using a stereo speaker.
     *
     * @param uid The ID of the remote user.
     * @param pan The sound position of the remote user. The value ranges from -1.0 to 1.0:
     * - 0.0: the remote sound comes from the front.
     * - -1.0: the remote sound comes from the left.
     * - 1.0: the remote sound comes from the right.
     * @param gain Gain of the remote user. The value ranges from 0.0 to 100.0. The default value is 100.0
     * (the original gain of the remote user). The smaller the value, the less the gain.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setRemoteVoicePosition(uid, pan, gain) {
        return callNativeMethod(API_TYPE.SET_REMOTE_VOICE_POSITIONN, {
            uid: uid,
            pan: pan,
            gain: gain,
        });
    }
    AgoraRtcEngine.setRemoteVoicePosition = setRemoteVoicePosition;
    /**
     * Changes the voice pitch of the local speaker.
     *
     * @param pitch Sets the voice pitch. The value ranges between 0.5 and 2.0. The lower the value, the lower the
     * voice pitch. The default value is 1.0 (no change to the local voice pitch).
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setLocalVoicePitch(pitch) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_LOCAL_VOICE_CHANGER, { pitch: pitch });
    }
    AgoraRtcEngine.setLocalVoicePitch = setLocalVoicePitch;
    /**
     * Sets the local voice equalization effect.
     *
     * @param bandFrequency Sets the band frequency. The value ranges between 0 and 9, representing the respective
     * 10-band center frequencies of the voice effects, including 31, 62, 125, 250, 500, 1k, 2k, 4k, 8k, and 16k Hz. See
     * [AUDIO_EQUALIZATION_BAND_FREQUENCY]{@link agoraRtcEngine.AUDIO_EQUALIZATION_BAND_FREQUENCY}.
     * @param bandGain Sets the gain of each band in dB. The value ranges between -15 and 15.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setLocalVoiceEqualization(bandFrequency, bandGain) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_LOCAL_VOICE_EQUALIZATION, {
            bandFrequency: bandFrequency,
            bandGain: bandGain,
        });
    }
    AgoraRtcEngine.setLocalVoiceEqualization = setLocalVoiceEqualization;
    /**
     * Sets the local voice reverberation.
     *
     * You can also use [setLocalVoiceReverbPreset]{@link agoraRtcEngine.setLocalVoiceReverbPreset} to use the preset reverberation effect,
     * such as pop music, R&B or rock music effects.
     *
     * @param reverbKey Sets the reverberation key. See [AUDIO_REVERB_TYPE]{@link agoraRtcEngine.AUDIO_REVERB_TYPE}.
     * @param value Sets the value of the reverberation key.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setLocalVoiceReverb(reverbKey, value) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_LOCAL_VOICE_REVERB, { reverbKey: reverbKey, value: value });
    }
    AgoraRtcEngine.setLocalVoiceReverb = setLocalVoiceReverb;
    /**
     * Sets the local voice changer option.
     *
     * This method can be used to set the local voice effect for users in a `COMMUNICATION` channel or hosts in a
     * `LIVE_BROADCASTING` channel.
     *
     * Voice changer options include the following voice effects:
     * - `VOICE_CHANGER_XXX`: Changes the local voice to an old man, a little boy, or the Hulk. Applies to the voice
     * talk scenario.
     * - `VOICE_BEAUTY_XXX`: Beautifies the local voice by making it sound more vigorous, resounding, or adding spacial
     * resonance. Applies to the voice talk and singing scenario.
     * - `GENERAL_VOICE_BEAUTY_XXX`: Adds gender-based beautification effect to the local voice. Applies to the voice
     * talk scenario.
     *   - For a male-sounding voice: Adds magnetism to the voice.
     *   - For a female-sounding voice: Adds freshness or vitality to the voice.
     *
     * **Note**
     *
     * - To achieve better voice effect quality, Agora recommends setting the profile parameter in
     * [setAudioProfile]{@link agoraRtcEngine.setAudioProfile} as `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` or
     * `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)`.
     * - This method works best with the human voice, and Agora does not recommend using it for audio containing music
     * and a human voice.
     * - Do not use this method with [setLocalVoiceReverbPreset]{@link agoraRtcEngine.setLocalVoiceReverbPreset}, because the
     * method called later overrides the one called earlier.
     *
     * @param voiceChanger Sets the local voice changer option. The default value is `VOICE_CHANGER_OFF`, which means
     * the original voice. See details in [VOICE_CHANGER_PRESET]{@link agoraRtcEngine.VOICE_CHANGER_PRESET}.
     * Gender-based beatification effect works best only when assigned a proper gender:
     * - For a male-sounding voice: `GENERAL_BEAUTY_VOICE_MALE_MAGNETIC`.
     * - For a female-sounding voice: `GENERAL_BEAUTY_VOICE_FEMALE_FRESH` or `GENERAL_BEAUTY_VOICE_FEMALE_VITALITY`.
     *
     * Failure to do so can lead to voice distortion.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure. Check if the enumeration is properly set.
     */
    function setLocalVoiceChanger(voiceChanger) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_LOCAL_VOICE_CHANGER, { voiceChanger: voiceChanger });
    }
    AgoraRtcEngine.setLocalVoiceChanger = setLocalVoiceChanger;
    /**
     * Sets the local voice reverberation option, including the virtual stereo.
     *
     * This method sets the local voice reverberation for users in a `COMMUNICATION` channel or hosts in a `LIVE_BROADCASTING` channel.
     * After successfully calling this method, all users in the channel can hear the voice with reverberation.
     *
     * **Note**
     *
     * - When calling this method with enumerations that begin with `AUDIO_REVERB_FX`, ensure that you set profile in
     * [setAudioProfile]{@link agoraRtcEngine.setAudioProfile} as `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` or
     * `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)`; otherwise, this methods cannot set the corresponding voice
     * reverberation option.
     * - When calling this method with `AUDIO_VIRTUAL_STEREO`, Agora recommends setting the `profile` parameter in
     * `setAudioProfile` as `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)`.
     * - This method works best with the human voice, and Agora does not recommend using it for audio containing music
     * and a human voice.
     * - Do not use this method with [setLocalVoiceChanger]{@link agoraRtcEngine.setLocalVoiceChanger}, because the method
     * called later overrides the one called earlier.
     *
     * @param reverbPreset The local voice reverberation option. The default value is `AUDIO_REVERB_OFF`,
     * which means the original voice.  See [AUDIO_REVERB_PRESET]{@link agoraRtcEngine.AUDIO_REVERB_PRESET}.
     * To achieve better voice effects, Agora recommends the enumeration whose name begins with `AUDIO_REVERB_FX`.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setLocalVoiceReverbPreset(reverbPreset) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_LOCAL_VOICE_REVERB_PRESET, { reverbPreset: reverbPreset });
    }
    AgoraRtcEngine.setLocalVoiceReverbPreset = setLocalVoiceReverbPreset;
    /**
     * TODO
     *
     * @param preset
     */
    function setVoiceBeautifierPreset(preset) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_VOICE_BEAUTIFIER_PRESET, { preset: preset });
    }
    AgoraRtcEngine.setVoiceBeautifierPreset = setVoiceBeautifierPreset;
    /**
     * TODO
     *
     * @param preset
     */
    function setAudioEffectPreset(preset) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_AUDIO_EFFECT_PRESET, { preset: preset });
    }
    AgoraRtcEngine.setAudioEffectPreset = setAudioEffectPreset;
    /**
     * TODO
     *
     * @param preset
     * @param param1
     * @param param2
     */
    function setAudioEffectParameters(preset, param1, param2) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_AUDIO_EFFECT_PARAMETERS, { preset: preset, param1: param1, param2: param2 });
    }
    AgoraRtcEngine.setAudioEffectParameters = setAudioEffectParameters;
    /**
     * Sets the log files that the SDK outputs.
     *
     * By default, the SDK outputs five log files, `agorasdk.log`, `agorasdk_1.log`, `agorasdk_2.log`, `agorasdk_3.log`,
     * `agorasdk_4.log`, each with a default size of 1024 KB.
     *
     * These log files are encoded in UTF-8. The SDK writes the latest logs in `agorasdk.log`. When `agorasdk.log` is
     * full, the SDK deletes the log file with the earliest modification time among the other four, renames
     * `agorasdk.log` to the name of the deleted log file, and create a new `agorasdk.log` to record latest logs.
     *
     * @note Ensure that you call this method immediately after calling [init]{@link agoraRtcEngine.init}, otherwise the output
     * logs may not be complete.
     *
     * @param filePath The absolute path of log files. The default file path is as follows:
     * - Android: `/storage/emulated/0/Android/data/<package name>/files/agorasdk.log`
     * - iOS: `App Sandbox/Library/caches/agorasdk.log`
     *
     * Ensure that the directory for the log files exists and is writable. You can use this parameter to rename the log files.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setLogFile(filePath) {
        return callNativeMethod(API_TYPE.SET_LOG_FILE, { filePath: filePath });
    }
    AgoraRtcEngine.setLogFile = setLogFile;
    /**
     * Sets the output log level of the SDK.
     *
     * You can use one or a combination of the log filter levels. The log level follows the sequence of `OFF`,
     * `CRITICAL`, `ERROR`, `WARNING`, `INFO`, and `DEBUG`. Choose a level to see the logs preceding that level.
     *
     * If you set the log level to `WARNING`, you see the logs within levels `CRITICAL`, `ERROR`, and `WARNING`.
     *
     * @param filter Sets the log filter level. See [LOG_FILTER_TYPE]{@link agoraRtcEngine.LOG_FILTER_TYPE}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setLogFilter(filter) {
        return callNativeMethod(API_TYPE.SET_LOG_FILTER, { filter: filter });
    }
    AgoraRtcEngine.setLogFilter = setLogFilter;
    /**
     * Sets the size of a log file that the SDK outputs.
     *
     * By default, the SDK outputs five log files, `agorasdk.log`, `agorasdk_1.log`, `agorasdk_2.log`, `agorasdk_3.log`,
     * `agorasdk_4.log`, each with a default size of 1024 KB.
     *
     * These log files are encoded in UTF-8. The SDK writes the latest logs in `agorasdk.log`. When `agorasdk.log` is
     * full, the SDK deletes the log file with the earliest modification time among the other four, renames
     * `agorasdk.log` to the name of the deleted log file, and create a new `agorasdk.log` to record latest logs.
     *
     * @param fileSizeInKBytes The size (KB) of a log file. The default value is 1024 KB. If you set `fileSizeInKByte`
     * to 1024 KB, the SDK outputs at most 5 MB log files; if you set it to less than 1024 KB, the maximum size of a
     * log file is still 1024 KB.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setLogFileSize(fileSizeInKBytes) {
        return callNativeMethod(API_TYPE.SET_LOG_FILE_SIZE, { fileSizeInKBytes: fileSizeInKBytes });
    }
    AgoraRtcEngine.setLogFileSize = setLogFileSize;
    /**
     * @ignore
     * Updates the display mode of the local video view.
     *
     * After initializing the local video view, you can call this method to update its rendering and mirror modes. It
     * affects only the video view that the local user sees, not the published local video stream.
     *
     * **Note**
     *
     * - Ensure that you have called the [setupLocalVideo]{@link agoraRtcEngine.setupLocalVideo} method to initialize the local
     * video view before calling this method.
     * - During a call, you can call this method as many times as necessary to update the display mode of the local
     * video view.
     *
     * @param renderMode The rendering mode of the local video view. See [RENDER_MODE_TYPE]{@link agoraRtcEngine.RENDER_MODE_TYPE}.
     * @param mirrorMode The mirror mode of the local video view. See [VIDEO_MIRROR_MODE_TYPE]{@link agoraRtcEngine.VIDEO_MIRROR_MODE_TYPE}.
     *
     * **Note**
     *
     * If you use a front camera, the SDK enables the mirror mode by default; if you use a rear camera, the SDK
     * disables the mirror mode by default.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setLocalRenderMode(renderMode, mirrorMode) {
        if (mirrorMode === undefined) {
            return callNativeMethod(API_TYPE.SET_LOCAL_RENDER_MODE, { renderMode: renderMode });
        }
        return callNativeMethod(API_TYPE.SET_LOCAL_RENDER_MODE_2, {
            renderMode: renderMode,
            mirrorMode: mirrorMode,
        });
    }
    AgoraRtcEngine.setLocalRenderMode = setLocalRenderMode;
    /**
     * @ignore
     * Updates the display mode of the video view of a remote user.
     *
     * After initializing the video view of a remote user, you can call this method to update its rendering and mirror
     * modes. This method affects only the video view that the local user sees.
     *
     * **Note**
     *
     * - Ensure that you have called the [setupRemoteVideo]{@link agoraRtcEngine.setupRemoteVideo} method to initialize the
     * remote video view before calling this method.
     * - During a call, you can call this method as many times as necessary to update the display mode of the video
     * view of a remote user.
     *
     * @param userId The ID of the remote user.
     * @param renderMode The rendering mode of the remote video view. See [RENDER_MODE_TYPE]{@link agoraRtcEngine.RENDER_MODE_TYPE}.
     * @param mirrorMode The mirror mode of the remote video view. See [VIDEO_MIRROR_MODE_TYPE]{@link agoraRtcEngine.VIDEO_MIRROR_MODE_TYPE}.
     *
     * **Note**
     *
     * The SDK disables the mirror mode by default.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setRemoteRenderMode(userId, renderMode, mirrorMode) {
        if (mirrorMode === undefined) {
            return callNativeMethod(API_TYPE.SET_REMOTE_RENDER_MODE, {
                userId: userId,
                renderMode: renderMode,
            });
        }
        return callNativeMethod(API_TYPE.SET_REMOTE_RENDER_MODE_2, {
            userId: userId,
            renderMode: renderMode,
            mirrorMode: mirrorMode,
        });
    }
    AgoraRtcEngine.setRemoteRenderMode = setRemoteRenderMode;
    /**
     * @ignore
     * Sets the local video mirror mode.
     *
     * @deprecated This method is deprecated, use the [setupLocalVideo]{@link agoraRtcEngine.setupLocalVideo} or
     * [setLocalRenderMode]{@link agoraRtcEngine.setLocalRenderMode} method instead.
     *
     * You must call this method before calling the [startPreview]{@link agoraRtcEngine.startPreview} method, otherwise the
     * mirror mode will not work.
     *
     * **Warning**
     * - Call this method after calling the `setupLocalVideo` method to initialize the local video view.
     * - During a call, you can call this method as many times as necessary to update the mirror mode of the local video view.
     *
     * @param mirrorMode Sets the local video mirror mode. See [VIDEO_MIRROR_MODE_TYPE]{@link agoraRtcEngine.VIDEO_MIRROR_MODE_TYPE}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setLocalVideoMirrorMode(mirrorMode) {
        return callNativeMethod(API_TYPE.SET_LOCAL_VIDEO_MIRROR_MODE, {
            mirrorMode: mirrorMode,
        });
    }
    AgoraRtcEngine.setLocalVideoMirrorMode = setLocalVideoMirrorMode;
    /**
     * Sets the stream mode to the single-stream (default) or dual-stream mode. (`LIVE_BROADCASTING` only.)
     *
     * If the dual-stream mode is enabled, the receiver can choose to receive the high stream (high-resolution and
     * high-bitrate video stream), or the low stream (low-resolution and low-bitrate video stream).
     *
     * @param enabled Sets the stream mode:
     * - true: Dual-stream mode.
     * - false: Single-stream mode.
     */
    function enableDualStreamMode(enabled) {
        return callNativeMethod(API_TYPE.ENABLE_DUAL_STREAM_MODE, { enabled: enabled });
    }
    AgoraRtcEngine.enableDualStreamMode = enableDualStreamMode;
    /**
     * @ignore
     * Sets the external audio source. Please call this method before [joinChannel]{@link agoraRtcEngine.joinChannel}.
     *
     * @param enabled Sets whether to enable/disable the external audio source:
     * - true: Enables the external audio source.
     * - false: (Default) Disables the external audio source.
     * @param sampleRate Sets the sample rate (Hz) of the external audio source, which can be set as 8000, 16000,
     * 32000, 44100, or 48000 Hz.
     * @param channels Sets the number of audio channels of the external audio source:
     * - 1: Mono.
     * - 2: Stereo.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setExternalAudioSource(enabled, sampleRate, channels) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_EXTERNAL_AUDIO_SOURCE, {
            enabled: enabled,
            sampleRate: sampleRate,
            channels: channels,
        });
    }
    AgoraRtcEngine.setExternalAudioSource = setExternalAudioSource;
    /**
     * @ignore
     * Sets the external audio sink.
     *
     * This method applies to scenarios where you want to use external audio
     * data for playback. After enabling the external audio sink, you can call
     * the [pullAudioFrame]{@link agoraRtcEngine.pullAudioFrame} method to pull the
     * remote audio data, process it, and play it with the audio effects that you want.
     *
     * @note Once you enable the external audio sink, the app will not retrieve any
     * audio data from the
     * [onPlaybackAudioFrame]{@link AgoraRtcEvents.onPlaybackAudioFrame} callback.
     *
     * @param enabled
     * - true: Enables the external audio sink.
     * - false: (Default) Disables the external audio sink.
     * @param sampleRate Sets the sample rate (Hz) of the external audio sink,
     * which can be set as 16000, 32000, 44100 or 48000.
     * @param channels Sets the number of audio channels of the external
     * audio sink:
     * - 1: Mono.
     * - 2: Stereo.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setExternalAudioSink(enabled, sampleRate, channels) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_EXTERNAL_AUDIO_SINK, {
            enabled: enabled,
            sampleRate: sampleRate,
            channels: channels,
        });
    }
    AgoraRtcEngine.setExternalAudioSink = setExternalAudioSink;
    /**
     * @ignore
     * Sets the audio recording format for the [onRecordAudioFrame]{@link AgoraRtcEvents.onRecordAudioFrame} callback.
     *
     * @param sampleRate Sets the sample rate (`samplesPerSec`) returned in the onRecordAudioFrame* callback, which can be set as 8000, 16000, 32000, 44100, or 48000 Hz.
     * @param channel Sets the number of audio channels (`channels`) returned in the *onRecordAudioFrame* callback:
     * - 1: Mono
     * - 2: Stereo
     * @param mode Sets the use mode (see [RAW_AUDIO_FRAME_OP_MODE_TYPE)]{@link agoraRtcEngine.RAW_AUDIO_FRAME_OP_MODE_TYPE)} of the *onRecordAudioFrame* callback.
     * @param samplesPerCall Sets the number of samples returned in the *onRecordAudioFrame* callback. `samplesPerCall` is usually set as 1024 for RTMP streaming.
     * @note The SDK triggers the `onRecordAudioFrame` callback according to the sample interval. Ensure that the sample interval ≥ 0.01 (s). And, Sample interval (sec) = `samplePerCall`/(`sampleRate` × `channel`).
     * @return
     *     - 0: Success.
     * - < 0: Failure.
     */
    function setRecordingAudioFrameParameters(sampleRate, channel, mode, samplesPerCall) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_RECORDING_AUDIO_FRAME_PARAMETERS, {
            sampleRate: sampleRate,
            channel: channel,
            mode: mode,
            samplesPerCall: samplesPerCall,
        });
    }
    AgoraRtcEngine.setRecordingAudioFrameParameters = setRecordingAudioFrameParameters;
    /**
     * @ignore
     * Sets the audio playback format for the [onPlaybackAudioFrame]{@link agoraRtcEngine.onPlaybackAudioFrame} callback.
     *
     * @param sampleRate Sets the sample rate (`samplesPerSec`) returned in the *onPlaybackAudioFrame* callback,
     * which can be set as 8000, 16000, 32000, 44100, or 48000 Hz.
     * @param channel Sets the number of channels (`channels`) returned in the *onPlaybackAudioFrame* callback:
     * - 1: Mono
     * - 2: Stereo
     * @param mode Sets the use mode (see [RAW_AUDIO_FRAME_OP_MODE_TYPE)]{@link agoraRtcEngine.RAW_AUDIO_FRAME_OP_MODE_TYPE)} of the
     * `onPlaybackAudioFrame` callback.
     * @param samplesPerCall Sets the number of samples returned in the `onPlaybackAudioFrame` callback. `samplesPerCall`
     * is usually set as 1024 for RTMP streaming.
     * @note The SDK triggers the `onPlaybackAudioFrame` callback according to the sample interval. Ensure that the sample
     * interval ≥ 0.01 (s). And, Sample interval (sec) = `samplePerCall`/(`sampleRate` × `channel`).
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setPlaybackAudioFrameParameters(sampleRate, channel, mode, samplesPerCall) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_PLAYBACK_AUDIO_FRAME_PARAMETERS, {
            sampleRate: sampleRate,
            channel: channel,
            mode: mode,
            samplesPerCall: samplesPerCall,
        });
    }
    AgoraRtcEngine.setPlaybackAudioFrameParameters = setPlaybackAudioFrameParameters;
    /**
     * @ignore
     * Sets the mixed audio format for the [onMixedAudioFrame]{@link agoraRtcEngine.onMixedAudioFrame} callback.
     *
     * @param sampleRate Sets the sample rate (`samplesPerSec`) returned in the `onMixedAudioFrame` callback, which can be set as
     * 8000, 16000, 32000, 44100, or 48000 Hz.
     * @param samplesPerCall Sets the number of samples (`samples`) returned in the *onMixedAudioFrame* callback. `samplesPerCall`
     * is usually set as 1024 for RTMP streaming.
     * @note The SDK triggers the `onMixedAudioFrame` callback according to the sample interval. Ensure that the sample
     * interval ≥ 0.01 (s). And, Sample interval (sec) = `samplePerCall`/(`sampleRate` × `channels`).
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setMixedAudioFrameParameters(sampleRate, samplesPerCall) {
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_MIXED_AUDIO_FRAME_PARAMETERS, {
            sampleRate: sampleRate,
            samplesPerCall: samplesPerCall,
        });
    }
    AgoraRtcEngine.setMixedAudioFrameParameters = setMixedAudioFrameParameters;
    /**
     * Adjusts the recording volume.
     *
     * @param volume Recording volume. To avoid echoes and improve call quality,
     * Agora recommends setting the value of volume between 0 and 100. If you
     * need to set the value higher than 100, contact support@agoraRtcEngine.io first.
     * - 0: Mute.
     * - 100: Original volume.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function adjustRecordingSignalVolume(volume) {
        return callNativeMethod(API_TYPE.ADJUST_RECORDING_SIGNAL_VOLUME, {
            volume: volume,
        });
    }
    AgoraRtcEngine.adjustRecordingSignalVolume = adjustRecordingSignalVolume;
    /**
     * Adjusts the playback volume of all remote users.
     *
     * **Note**
     *
     * - This method adjusts the playback volume that is the mixed volume of all remote users.
     * - (Since v3.1.2) To mute the local audio playback, call both the `adjustPlaybackSignalVolume` and
     * [adjustAudioMixingVolume]{@link agoraRtcEngine.adjustAudioMixingVolume} methods and set the volume as `0`.
     *
     * @param volume The playback volume of all remote users. To avoid echoes and
     * improve call quality, Agora recommends setting the value of volume between
     * 0 and 100. If you need to set the value higher than 100, contact
     * support@agoraRtcEngine.io first.
     * - 0: Mute.
     * - 100: Original volume.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function adjustPlaybackSignalVolume(volume) {
        return callNativeMethod(API_TYPE.ADJUST_PLAYBACK_SIGNAL_VOLUME, { volume: volume });
    }
    AgoraRtcEngine.adjustPlaybackSignalVolume = adjustPlaybackSignalVolume;
    /**
     * Enables interoperability with the Agora Web SDK.
     *
     * @deprecated This method is deprecated. As of v3.1.2, the Native SDK automatically enables interoperability with
     * the Web SDK, so you no longer need to call this method.
     *
     * **Note**
     *
     * - This method applies only to the `LIVE_BROADCASTING` profile. In the `COMMUNICATION` profile, interoperability
     * with the Agora Web SDK is enabled by default.
     * - If the channel has Web SDK users, ensure that you call this method, or the video of the Native user will be a
     * black screen for the Web user.
     *
     * @param enabled Sets whether to enable/disable interoperability with the Agora Web SDK:
     * - true: Enable.
     * - false: (Default) Disable.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function enableWebSdkInteroperability(enabled) {
        return callNativeMethod(API_TYPE.ENABLE_WEB_SDK_INTEROPER_ABILITY, {
            enabled: enabled,
        });
    }
    AgoraRtcEngine.enableWebSdkInteroperability = enableWebSdkInteroperability;
    /**
     * @ignore
     * Sets the preferences for the high-quality video. (`LIVE_BROADCASTING` only).
     *
     * @deprecated This method is deprecated. Agora recommends using the `degradationPrefer` parameter of
     * [VideoEncoderConfiguration]{@link agoraRtcEngine.VideoEncoderConfiguration}.
     *
     * @param preferFrameRateOverImageQuality Sets the video quality preference:
     * - true: Frame rate over image quality.
     * - false: (Default) Image quality over frame rate.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setVideoQualityParameters(preferFrameRateOverImageQuality) {
        return callNativeMethod(API_TYPE.SET_VIDEO_QUALITY_PARAMETERS, {
            preferFrameRateOverImageQuality: preferFrameRateOverImageQuality,
        });
    }
    AgoraRtcEngine.setVideoQualityParameters = setVideoQualityParameters;
    /**
     * Sets the fallback option for the published video stream based on the network conditions.
     *
     * If `option` is set as
     * [STREAM_FALLBACK_OPTION_AUDIO_ONLY]{@link agoraRtcEngine.STREAM_FALLBACK_OPTIONS.STREAM_FALLBACK_OPTION_AUDIO_ONLY}(2),
     * the SDK will:
     * - Disable the upstream video but enable audio only when the network conditions deteriorate and cannot support
     * both video and audio.
     * - Re-enable the video when the network conditions improve.
     *
     * When the published video stream falls back to audio only or when the audio-only stream switches back to the video,
     * the SDK triggers the [onLocalPublishFallbackToAudioOnly]{@link AgoraRtcEvents.onLocalPublishFallbackToAudioOnly} callback.
     *
     * @note Agora does not recommend using this method for CDN live streaming, because the remote CDN live user will
     * have a noticeable lag when the published video stream falls back to audio only.
     *
     * @param option Sets the fallback option for the published video stream. See
     * [STREAM_FALLBACK_OPTIONS]{@link agoraRtcEngine.STREAM_FALLBACK_OPTIONS}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setLocalPublishFallbackOption(option) {
        return callNativeMethod(API_TYPE.SET_LOCAL_PUBLISH_FALLBACK_OPTION, {
            option: option,
        });
    }
    AgoraRtcEngine.setLocalPublishFallbackOption = setLocalPublishFallbackOption;
    /**
     * Sets the fallback option for the remotely subscribed video stream based on the network conditions.
     *
     * The default setting for `option` is
     * [STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW]{@link agoraRtcEngine.STREAM_FALLBACK_OPTIONS.STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW}(1),
     * where the remotely subscribed video stream falls back to the low-stream video (low resolution and low bitrate) under poor
     * downlink network conditions.
     *
     * If `option` is set as
     * [STREAM_FALLBACK_OPTION_AUDIO_ONLY]{@link agoraRtcEngine.STREAM_FALLBACK_OPTIONS.STREAM_FALLBACK_OPTION_AUDIO_ONLY} (2), the
     * SDK automatically switches the video from a high-stream to a low-stream, or disables the video when the downlink network
     * conditions cannot support both audio and video to guarantee the quality of the audio. The SDK monitors the network quality
     * and restores the video stream when the network conditions improve.
     *
     * When the remotely subscribed video stream falls back to audio only or when the audio-only stream switches back to the video
     * stream, the SDK triggers the [onRemoteSubscribeFallbackToAudioOnly]{@link AgoraRtcEvents.onRemoteSubscribeFallbackToAudioOnly}
     * callback.
     *
     * @param  option  Sets the fallback option for the remotely subscribed video stream. See
     * [STREAM_FALLBACK_OPTIONS]{@link agoraRtcEngine.STREAM_FALLBACK_OPTIONS}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setRemoteSubscribeFallbackOption(option) {
        return callNativeMethod(API_TYPE.SET_REMOTE_SUBSCRIBE_FALLBACK_OPTION, {
            option: option,
        });
    }
    AgoraRtcEngine.setRemoteSubscribeFallbackOption = setRemoteSubscribeFallbackOption;
    /**
     * Switches between front and rear cameras.
     *
     * @param direction Sets the camera to be used. See [CAMERA_DIRECTION]{@link agoraRtcEngine.CAMERA_DIRECTION}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function switchCamera(direction) {
        if (direction === undefined) {
            return callNativeMethod(API_TYPE.SWITCH_CAMERA);
        }
        return callNativeMethod(API_TYPE.SWITCH_CAMERA_2, { direction: direction });
    }
    AgoraRtcEngine.switchCamera = switchCamera;
    /**
     * Sets the default audio playback route.
     *
     * This method sets whether the received audio is routed to the earpiece or speakerphone by default before joining a channel.
     *
     * If a user does not call this method, the audio is routed to the earpiece by default. If you need to change the default
     * audio route after joining a channel, call the [setEnableSpeakerphone]{@link agoraRtcEngine.setEnableSpeakerphone} method.
     *
     * The default setting for each profile:
     * - `COMMUNICATION`: In a voice call, the default audio route is the earpiece. In a video call, the default audio
     * route is the speakerphone. If a user who is in the `COMMUNICATION` profile calls the
     * [disableVideo]{@link agoraRtcEngine.disableVideo} method or if the user calls the
     * [muteLocalVideoStream]{@link agoraRtcEngine.muteLocalVideoStream} and
     * [muteAllRemoteVideoStreams]{@link agoraRtcEngine.muteAllRemoteVideoStreams} methods, the default audio route switches
     * back to the earpiece automatically.
     * - `LIVE_BROADCASTING`: Speakerphone.
     *
     * **Note**
     *
     * - This method is applicable only to the `COMMUNICATION` profile.
     * - For iOS, this method only works in a voice call.
     * - Call this method before calling the [joinChannel]{@link agoraRtcEngine.joinChannel} method.
     *
     * @param defaultToSpeaker Sets the default audio route:
     * - true: Route the audio to the speakerphone. If the playback device connects to the earpiece or Bluetooth, the
     * audio cannot be routed to the speakerphone.
     * - false: (Default) Route the audio to the earpiece. If a headset is plugged in, the audio is routed to the headset.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setDefaultAudioRouteToSpeakerphone(defaultToSpeaker) {
        return callNativeMethod(API_TYPE.SET_DEFAULT_AUDIO_ROUTE_SPEAKER_PHONE, {
            defaultToSpeaker: defaultToSpeaker,
        });
    }
    AgoraRtcEngine.setDefaultAudioRouteToSpeakerphone = setDefaultAudioRouteToSpeakerphone;
    /**
     * Enables/Disables the audio playback route to the speakerphone.
     *
     * This method sets whether the audio is routed to the speakerphone or earpiece.
     *
     * See the default audio route explanation in the
     * [setDefaultAudioRouteToSpeakerphone]{@link agoraRtcEngine.setDefaultAudioRouteToSpeakerphone} method and check whether it
     * is necessary to call this method.
     *
     * **Note**
     *
     * - Ensure that you have successfully called the [joinChannel]{@link agoraRtcEngine.joinChannel} method before calling this method.
     * - After calling this method, the SDK returns the [onAudioRouteChanged]{@link AgoraRtcEvents.onAudioRouteChanged}
     * callback to indicate the changes.
     * - This method does not take effect if a headset is used.
     *
     * @param speakerOn Sets whether to route the audio to the speakerphone or earpiece:
     * - true: Route the audio to the speakerphone. If the playback device connects to the earpiece or Bluetooth, the
     * audio cannot be routed to the speakerphone.
     * - false: Route the audio to the earpiece. If a headset is plugged in, the audio is routed to the headset.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setEnableSpeakerphone(speakerOn) {
        return callNativeMethod(API_TYPE.SET_ENABLE_SPEAKER_PHONE, { speakerOn: speakerOn });
    }
    AgoraRtcEngine.setEnableSpeakerphone = setEnableSpeakerphone;
    /**
     * Enables in-ear monitoring.
     *
     * @param enabled Determines whether to enable in-ear monitoring.
     * - true: Enable.
     * - false: (Default) Disable.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function enableInEarMonitoring(enabled) {
        return callNativeMethod(API_TYPE.ENABLE_IN_EAR_MONITORING, { enabled: enabled });
    }
    AgoraRtcEngine.enableInEarMonitoring = enableInEarMonitoring;
    /**
     * Sets the volume of the in-ear monitor.
     *
     * @param volume Sets the volume of the in-ear monitor. The value ranges between 0 and 100 (default).
     *
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setInEarMonitoringVolume(volume) {
        return callNativeMethod(API_TYPE.SET_IN_EAR_MONITORING_VOLUME, { volume: volume });
    }
    AgoraRtcEngine.setInEarMonitoringVolume = setInEarMonitoringVolume;
    /**
     * Checks whether the speakerphone is enabled.
     *
     * @return
     * - true: The speakerphone is enabled, and the audio plays from the speakerphone.
     * - false: The speakerphone is not enabled, and the audio plays from devices other than the speakerphone. For example, the headset or earpiece.
     */
    function isSpeakerphoneEnabled() {
        return callNativeMethod(API_TYPE.IS_SPEAKER_PHONE_ENABLED);
    }
    AgoraRtcEngine.isSpeakerphoneEnabled = isSpeakerphoneEnabled;
    /**
     * TODO
     *
     * @param restriction
     */
    function setAudioSessionOperationRestriction(restriction) {
        return callNativeMethod(API_TYPE.SET_AUDIO_SESSION_OPERATION_RESTRICTION, {
            restriction: restriction,
        });
    }
    AgoraRtcEngine.setAudioSessionOperationRestriction = setAudioSessionOperationRestriction;
    /**
     * TODO
     *
     * @param enabled
     * @param deviceName
     */
    function enableLoopbackRecording(enabled, deviceName) {
        return callNativeMethod(API_TYPE.ENABLE_LOOP_BACK_RECORDING, {
            enabled: enabled,
            deviceName: deviceName,
        });
    }
    AgoraRtcEngine.enableLoopbackRecording = enableLoopbackRecording;
    /**
     * TODO
     *
     * @param displayId
     * @param regionRect
     * @param captureParams
     */
    function startScreenCaptureByDisplayId(displayId, regionRect, captureParams) {
        return callNativeMethod(API_TYPE.START_SCREEN_CAPTURE_BY_DISPLAY_ID, {
            displayId: displayId,
            regionRect: regionRect,
            captureParams: captureParams,
        });
    }
    AgoraRtcEngine.startScreenCaptureByDisplayId = startScreenCaptureByDisplayId;
    /**
     * TODO
     *
     * @param screenRect
     * @param regionRect
     * @param captureParams
     */
    function startScreenCaptureByScreenRect(screenRect, regionRect, captureParams) {
        return callNativeMethod(API_TYPE.START_SCREEN_CAPTURE_BY_DISPLAY_ID, {
            screenRect: screenRect,
            regionRect: regionRect,
            captureParams: captureParams,
        });
    }
    AgoraRtcEngine.startScreenCaptureByScreenRect = startScreenCaptureByScreenRect;
    /**
     * TODO
     *
     * @param windowId
     * @param regionRect
     * @param captureParams
     */
    function startScreenCaptureByWindowId(windowId, regionRect, captureParams) {
        return callNativeMethod(API_TYPE.START_SCREEN_CAPTURE_BY_DISPLAY_ID, {
            windowId: windowId,
            regionRect: regionRect,
            captureParams: captureParams,
        });
    }
    AgoraRtcEngine.startScreenCaptureByWindowId = startScreenCaptureByWindowId;
    /**
     * TODO
     *
     * @param contentHint
     */
    function setScreenCaptureContentHint(contentHint) {
        return callNativeMethod(API_TYPE.SET_SCREEN_CAPTURE_CONTENT_HINT, {
            contentHint: contentHint,
        });
    }
    AgoraRtcEngine.setScreenCaptureContentHint = setScreenCaptureContentHint;
    /**
     * TODO
     *
     * @param captureParams
     */
    function updateScreenCaptureParameters(captureParams) {
        return callNativeMethod(API_TYPE.UPDATE_SCREEN_CAPTURE_PARAMETERS, {
            captureParams: captureParams,
        });
    }
    AgoraRtcEngine.updateScreenCaptureParameters = updateScreenCaptureParameters;
    /**
     * TODO
     *
     * @param regionRect
     */
    function updateScreenCaptureRegion(regionRect) {
        return callNativeMethod(API_TYPE.UPDATE_SCREEN_CAPTURE_REGION, {
            regionRect: regionRect,
        });
    }
    AgoraRtcEngine.updateScreenCaptureRegion = updateScreenCaptureRegion;
    /**
     * TODO
     */
    function stopScreenCapture() {
        return callNativeMethod(API_TYPE.STOP_SCREEN_CAPTURE);
    }
    AgoraRtcEngine.stopScreenCapture = stopScreenCapture;
    /**
     * Retrieves the current call ID.
     *
     * When a user joins a channel on a client, a `callId` is generated to identify the call from the client. Feedback
     * methods, such as [rate]{@link agoraRtcEngine.rate} and [complain]{@link agoraRtcEngine.complain} , must be called after the call
     * ends to submit feedback to the SDK.
     *
     * The `rate` and `complain` methods require the `callId` parameter retrieved from the `getCallId` method during a
     * call. `callId` is passed as an argument into the `rate` and `complain` methods after the call ends.
     *
     * @return The current call ID.
     */
    function getCallId() {
        return callNativeMethod(API_TYPE.GET_CALL_ID);
    }
    AgoraRtcEngine.getCallId = getCallId;
    /**
     * Allows a user to rate a call after the call ends.
     *
     * @param callId The ID of the call, retrieved from the [getCallId]{@link agoraRtcEngine.getCallId} method.
     * @param rating  Rating of the call. The value is between 1 (lowest score) and 5 (highest score). If you set a
     * value out of this range, the `ERR_INVALID_ARGUMENT(-2)` error returns.
     * @param description (Optional) The description of the rating, with a string length of less than 800 bytes.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function rate(callId, rating, description) {
        return callNativeMethod(API_TYPE.RATE, { callId: callId, rating: rating, description: description });
    }
    AgoraRtcEngine.rate = rate;
    /**
     * Allows a user to complain about the call quality after a call ends.
     *
     * @param callId The ID of the call, retrieved from the [getCallId]{@link agoraRtcEngine.getCallId} method.
     * @param description (Optional) The description of the complaint, with a string length of less than 800 bytes.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function complain(callId, description) {
        return callNativeMethod(API_TYPE.COMPLAIN, { callId: callId, description: description });
    }
    AgoraRtcEngine.complain = complain;
    /**
     * Retrieves the SDK version number.
     *
     * @return The version of the current SDK in the string format. For example, `"3.1.2"`.
     */
    function getVersion() {
        return callNativeMethod(API_TYPE.GET_VERSION);
    }
    AgoraRtcEngine.getVersion = getVersion;
    /**
     * Enables the network connection quality test.
     *
     * This method tests the quality of the users' network connections and is disabled by default.
     *
     * Before a user joins a channel or before an audience switches to a host, call this method to check the uplink network quality.
     *
     * This method consumes additional network traffic, and hence may affect communication quality.
     *
     * Call the [disableLastmileTest]{@link agoraRtcEngine.disableLastmileTest} method to disable this test after receiving
     * the [onLastmileQuality]{@link AgoraRtcEvents.onLastmileQuality} callback, and before joining a channel.
     *
     * **Note**
     *
     * - Do not call any other methods before receiving the `onLastmileQuality` callback. Otherwise, the callback may
     * be interrupted by other methods, and hence may not be triggered.
     * - A host should not call this method after joining a channel (when in a call).
     * - If you call this method to test the last-mile quality, the SDK consumes the bandwidth of a video stream, whose
     * bitrate corresponds to the bitrate you set in the
     * [setVideoEncoderConfiguration]{@link agoraRtcEngine.setVideoEncoderConfiguration} method. After you join the channel,
     * whether you have called the `disableLastmileTest` method or not, the SDK automatically stops consuming the bandwidth.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function enableLastmileTest() {
        return callNativeMethod(API_TYPE.ENABLE_LAST_MILE_TEST);
    }
    AgoraRtcEngine.enableLastmileTest = enableLastmileTest;
    /**
     * Disables the network connection quality test.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function disableLastmileTest() {
        return callNativeMethod(API_TYPE.DISABLE_LAST_MILE_TEST);
    }
    AgoraRtcEngine.disableLastmileTest = disableLastmileTest;
    /**
     * Starts the last-mile network probe test.
     *
     * This method starts the last-mile network probe test before joining a channel to get the uplink and downlink last-mile network
     * statistics, including the bandwidth, packet loss, jitter, and round-trip time (RTT).
     *
     * Call this method to check the uplink network quality before users join a channel or before an audience switches to a host.
     *
     * Once this method is enabled, the SDK returns the following callbacks:
     * - [onLastmileQuality]{@link AgoraRtcEvents.onLastmileQuality}: the SDK triggers this callback within two seconds
     * depending on the network conditions. This callback rates the network conditions and is more closely linked to the user experience.
     * - [onLastmileProbeResult]{@link AgoraRtcEvents.onLastmileProbeResult}: the SDK triggers this callback within 30 seconds depending
     * on the network conditions. This callback returns the real-time statistics of the network conditions and is more objective.
     *
     * **Note**
     *
     * - This method consumes extra network traffic and may affect communication quality. We do not recommend calling this method
     * together with [enableLastmileTest]{@link agoraRtcEngine.enableLastmileTest}.
     * - Do not call other methods before receiving the `onLastmileQuality` and `onLastmileProbeResult` callbacks. Otherwise,
     * the callbacks may be interrupted.
     * - In the `LIVE_BROADCASTING` profile, a host should not call this method after joining a channel.
     *
     * @param config Sets the configurations of the last-mile network probe test. See
     * [LastmileProbeConfig]{@link agoraRtcEngine.LastmileProbeConfig}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function startLastmileProbeTest(config) {
        return callNativeMethod(API_TYPE.START_LAST_MILE_PROBE_TEST, { config: config });
    }
    AgoraRtcEngine.startLastmileProbeTest = startLastmileProbeTest;
    /**
     * Stops the last-mile network probe test.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function stopLastmileProbeTest() {
        return callNativeMethod(API_TYPE.STOP_LAST_MILE_PROBE_TEST);
    }
    AgoraRtcEngine.stopLastmileProbeTest = stopLastmileProbeTest;
    /**
     * Retrieves the warning or error description.
     *
     * @param code Warning code or error code returned in the [onWarning]{@link AgoraRtcEvents.onWarning} or
     * [onError]{@link AgoraRtcEvents.onError} callback.
     *
     * @return See [WARN_CODE_TYPE]{@link agoraRtcEngine.WARN_CODE_TYPE} or [ERROR_CODE_TYPE]{@link agoraRtcEngine.ERROR_CODE_TYPE}.
     */
    function getErrorDescription(code) {
        return callNativeMethod(API_TYPE.GET_ERROR_DESCRIPTION, { code: code });
    }
    AgoraRtcEngine.getErrorDescription = getErrorDescription;
    /**
     * Enables built-in encryption with an encryption password before users join a channel.
     *
     * @deprecated This method is deprecated from v3.1.2. Use the [enableEncryption]{@link agoraRtcEngine.enableEncryption} instead.
     *
     * All users in a channel must use the same encryption password. The encryption password is automatically cleared
     * once a user leaves the channel.
     *
     * If an encryption password is not specified, the encryption functionality will be disabled.
     *
     * **Note**
     *
     * - Do not use this method for CDN live streaming.
     * - For optimal transmission, ensure that the encrypted data size does not exceed the original data size + 16
     * bytes. 16 bytes is the maximum padding size for AES encryption.
     *
     * @param secret The encryption password.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setEncryptionSecret(secret) {
        return callNativeMethod(API_TYPE.SET_ENCRYPTION_SECTRT, { secret: secret });
    }
    AgoraRtcEngine.setEncryptionSecret = setEncryptionSecret;
    /**
     * Sets the built-in encryption mode.
     *
     * @deprecated This method is deprecated from v3.1.2. Use the [enableEncryption]{@link agoraRtcEngine.enableEncryption} instead.
     *
     * The Agora SDK supports built-in encryption, which is set to the `aes-128-xts` mode by default. Call this method
     * to use other encryption modes.
     * All users in the same channel must use the same encryption mode and password.
     *
     * Refer to the information related to the AES encryption algorithm on the differences between the encryption modes.
     *
     * @note Call the [setEncryptionSecret]{@link agoraRtcEngine.setEncryptionSecret} method to enable the built-in encryption
     * function before calling this method.
     *
     * @param encryptionMode The set encryption mode:
     * - "aes-128-xts": (Default) 128-bit AES encryption, XTS mode.
     * - "aes-128-ecb": 128-bit AES encryption, ECB mode.
     * - "aes-256-xts": 256-bit AES encryption, XTS mode.
     * - "": When encryptionMode is set as `null`, the encryption mode is set as "aes-128-xts" by default.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setEncryptionMode(encryptionMode) {
        return callNativeMethod(API_TYPE.SET_ENCRYPTION_MODE, { encryptionMode: encryptionMode });
    }
    AgoraRtcEngine.setEncryptionMode = setEncryptionMode;
    /**
     * Enables/Disables the built-in encryption.
     *
     * In scenarios requiring high security, Agora recommends calling this method to enable the built-in encryption
     * before joining a channel.
     *
     * All users in the same channel must use the same encryption mode and encryption key. Once all users leave the
     * channel, the encryption key of this channel is automatically cleared.
     *
     * **Note**
     *
     * - If you enable the built-in encryption, you cannot use the RTMP streaming function.
     * - Agora supports four encryption modes. If you choose an encryption mode (excepting `SM4_128_ECB` mode), you
     * need to add an external encryption library when integrating the Android or iOS SDK.
     *
     * @param enabled Whether to enable the built-in encryption:
     * - true: Enable the built-in encryption.
     * - false: Disable the built-in encryption.
     * @param config Configurations of built-in encryption schemas. See [EncryptionConfig]{@link agoraRtcEngine.EncryptionConfig}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     *  - -2(ERR_INVALID_ARGUMENT): An invalid parameter is used. Set the parameter with a valid value.
     *  - -4(ERR_NOT_SUPPORTED): The encryption mode is incorrect or the SDK fails to load the external encryption
     * library. Check the enumeration or reload the external encryption library.
     *  - -7(ERR_NOT_INITIALIZED): The SDK is not initialized. Initialize the Agora engine before calling this method.
     */
    function enableEncryption(enabled, config) {
        return callNativeMethod(API_TYPE.ENABLE_ENCRYPTION, { enabled: enabled, config: config });
    }
    AgoraRtcEngine.enableEncryption = enableEncryption;
    /**
     * Registers a packet observer.
     *
     * The Agora SDK allows your application to register a packet observer to receive callbacks for voice or video packet transmission.
     *
     * **Note**
     *
     * - The size of the packet sent to the network after processing should not exceed 1200 bytes, otherwise, the packet may fail to
     * be sent.
     * - Ensure that both receivers and senders call this method, otherwise, you may meet undefined behaviors such as no voice and
     * black screen.
     * - When you use CDN live streaming, recording or storage functions, Agora doesn't recommend calling this method.
     *
     * @param observer The registered packet observer.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function registerPacketObserver(observer) {
        return callNativeMethod(API_TYPE.REGISTER_PACKET_OBSERVER, { observer: observer });
    }
    AgoraRtcEngine.registerPacketObserver = registerPacketObserver;
    /**
     * Creates a data stream.
     *
     * Each user can create up to five data streams during the lifecycle of the Agora engine.
     *
     * @note Set both the `reliable` and `ordered` parameters to `true` or `false`. Do not set one as `true` and the other as `false`.
     *
     * @param streamId The ID of the created data stream.
     * @param reliable Sets whether or not the recipients are guaranteed to receive the data stream from the sender within five seconds:
     * - true: The recipients receive the data stream from the sender within five seconds. If the recipient does not receive the
     * data stream within five seconds, an error is reported to the application.
     * - false: There is no guarantee that the recipients receive the data stream within five seconds and no error message is
     * reported for any delay or missing data stream.
     * @param ordered Sets whether or not the recipients receive the data stream in the sent order:
     * - true: The recipients receive the data stream in the sent order.
     * - false: The recipients do not receive the data stream in the sent order.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function createDataStream(streamId, reliable, ordered) {
        return callNativeMethod(API_TYPE.CREATE_DATA_STREAM, {
            streamId: streamId,
            reliable: reliable,
            ordered: ordered,
        });
    }
    AgoraRtcEngine.createDataStream = createDataStream;
    /**
     * Sends data stream messages to all users in a channel.
     *
     * The SDK has the following restrictions on this method:
     * - Up to 30 packets can be sent per second in a channel with each packet having a maximum size of 1 kB.
     * - Each client can send up to 6 kB of data per second.
     * - Each user can have up to five data streams simultaneously.
     *
     * A successful `sendStreamMessage` method call triggers the [onStreamMessage]{@link AgoraRtcEvents.onStreamMessage}
     * callback on the remote client, from which the remote user gets the stream message. A failed `sendStreamMessage`
     * method call triggers the [onStreamMessageError]{@link AgoraRtcEvents.onStreamMessageError} callback on the remote client.
     *
     * @note This method applies only to the `COMMUNICATION` profile or to the hosts in the `LIVE_BROADCASTING` profile.
     * If an audience in the `LIVE_BROADCASTING` profile calls this method, the audience may be switched to a host.
     *
     * @param streamId ID of the sent data stream, returned in the [createDataStream]{@link agoraRtcEngine.createDataStream} method.
     * @param data The sent data.
     * @param length Length of the sent data.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function sendStreamMessage(streamId, data, length) {
        return callNativeMethod(API_TYPE.SEND_STREAM_MESSAGE, { streamId: streamId, length: length }, data);
    }
    AgoraRtcEngine.sendStreamMessage = sendStreamMessage;
    /**
     * Publishes the local stream to a specified CDN live RTMP address. (CDN live only.)
     *
     * The SDK returns the result of this method call in the [onStreamPublished]{@link AgoraRtcEvents.onStreamPublished} callback.
     *
     * The `addPublishStreamUrl` method call triggers the [onRtmpStreamingStateChanged]{@link AgoraRtcEvents.onRtmpStreamingStateChanged}
     * callback on the local client to report the state of adding a local stream to the CDN.
     *
     * **Note**
     *
     * - Ensure that the user joins the channel before calling this method.
     * - Ensure that you enable the RTMP Converter service before using this function.
     * - This method adds only one stream RTMP URL address each time it is called.
     * - This method applies to `LIVE_BROADCASTING` only.
     *
     * @param url The CDN streaming URL in the RTMP format. The maximum length of this parameter is 1024 bytes. The RTMP URL address
     * must not contain special characters, such as Chinese language characters.
     * @param transcodingEnabled Sets whether transcoding is enabled/disabled:
     * - true: Enable transcoding. To [transcode](https://docs.agoraRtcEngine.io/en/Agora%20Platform/terms?platform=All%20Platforms#transcoding)
     * the audio or video streams when publishing them to CDN live, often used for combining the audio and video streams of multiple
     * hosts in CDN live. If you set this parameter as `true`, ensure that you call the
     * [setLiveTranscoding]{@link agoraRtcEngine.setLiveTranscoding} method before this method.
     * - false: Disable transcoding.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     *   - -2(ERR_INVALID_ARGUMENT): The RTMP URL address is `null` or has a string length of 0.
     *   - -7(ERR_NOT_INITIALIZED): You have not initialized the Agora engine when publishing the stream.
     */
    function addPublishStreamUrl(url, transcodingEnabled) {
        return callNativeMethod(API_TYPE.ADD_PUBLISH_STREAM_URL, {
            url: url,
            transcodingEnabled: transcodingEnabled,
        });
    }
    AgoraRtcEngine.addPublishStreamUrl = addPublishStreamUrl;
    /**
     * Removes an RTMP stream from the CDN. (CDN live only.)
     *
     * This method removes the RTMP URL address (added by the [addPublishStreamUrl]{@link agoraRtcEngine.addPublishStreamUrl}
     * method) from a CDN live stream. The SDK returns the result of this method call in the
     * [onStreamUnpublished]{@link AgoraRtcEvents.onStreamUnpublished} callback.
     *
     * The `removePublishStreamUrl` method call triggers the
     * [onRtmpStreamingStateChanged]{@link AgoraRtcEvents.onRtmpStreamingStateChanged} callback on the local client to report the
     * state of removing an RTMP stream from the CDN.
     *
     * **Note**
     *
     * - This method removes only one RTMP URL address each time it is called.
     * - The RTMP URL address must not contain special characters, such as Chinese language characters.
     * - This method applies to `LIVE_BROADCASTING` only.
     *
     * @param url The RTMP URL address to be removed. The maximum length of this parameter is 1024 bytes.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function removePublishStreamUrl(url) {
        return callNativeMethod(API_TYPE.REMOVE_PUBLISH_STREAM_URL, { url: url });
    }
    AgoraRtcEngine.removePublishStreamUrl = removePublishStreamUrl;
    /**
     * Sets the video layout and audio settings for CDN live. (CDN live only.)
     *
     * The SDK triggers the [onTranscodingUpdated]{@link AgoraRtcEvents.onTranscodingUpdated} callback when you call the
     * `setLiveTranscoding` method to update the transcoding setting.
     *
     * **Note**
     *
     * - This method applies to `LIVE_BROADCASTING` only.
     * - Ensure that you enable the RTMP Converter service before using this function.
     * - If you call the `setLiveTranscoding` method to update the transcoding setting for the first time, the SDK does
     * not trigger the `onTranscodingUpdated` callback.
     *
     * @param transcoding Sets the CDN live audio/video transcoding settings. See [LiveTranscoding]{@link agoraRtcEngine.LiveTranscoding}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setLiveTranscoding(transcoding) {
        return callNativeMethod(API_TYPE.SET_LIVE_TRANSCODING, { transcoding: transcoding });
    }
    AgoraRtcEngine.setLiveTranscoding = setLiveTranscoding;
    /**
     * Adds a watermark image to the local video.
     *
     * This method adds a PNG watermark image to the local video in the live streaming. Once the watermark image is added, all
     * the audience in the channel (CDN audience included), and the recording device can see and capture it. Agora supports
     * adding only one watermark image onto the local video, and the newly watermark image replaces the previous one.
     *
     * The watermark position depends on the settings in the [setVideoEncoderConfiguration]{@link agoraRtcEngine.setVideoEncoderConfiguration}
     * method:
     * - If the orientation mode of the encoding video is
     * [ORIENTATION_MODE_FIXED_LANDSCAPE]{@link agoraRtcEngine.ORIENTATION_MODE.ORIENTATION_MODE_FIXED_LANDSCAPE} or the landscape mode in
     * [ORIENTATION_MODE_ADAPTIVE]{@link agoraRtcEngine.ORIENTATION_MODE.ORIENTATION_MODE_ADAPTIVE}, the watermark uses the landscape orientation.
     * - If the orientation mode of the encoding video is
     * [ORIENTATION_MODE_FIXED_PORTRAIT]{@link agoraRtcEngine.ORIENTATION_MODE.ORIENTATION_MODE_FIXED_PORTRAIT} or the portrait mode in
     * [ORIENTATION_MODE_ADAPTIVE]{@link agoraRtcEngine.ORIENTATION_MODE.ORIENTATION_MODE_ADAPTIVE}, the watermark uses the portrait orientation.
     * - When setting the watermark position, the region must be less than the dimensions set in the `setVideoEncoderConfiguration`
     * method. Otherwise, the watermark image will be cropped.
     *
     * **Note**
     *
     * - Ensure that you have called the [enableVideo]{@link agoraRtcEngine.enableVideo} method to enable the video module before calling this
     * method.
     * - If you only want to add a watermark image to the local video for the audience in the CDN live streaming channel to see and
     * capture, you can call this method or the [setLiveTranscoding]{@link agoraRtcEngine.setLiveTranscoding} method.
     * - This method supports adding a watermark image in the PNG file format only. Supported pixel formats of the PNG image are RGBA,
     * RGB, Palette, Gray, and Alpha_gray.
     * - If the dimensions of the PNG image differ from your settings in this method, the image will be cropped or zoomed to conform
     * to your settings.
     * - If you have enabled the local video preview by calling the [startPreview]{@link agoraRtcEngine.startPreview} method, you can use the
     * `visibleInPreview` member in the `WatermarkOptions` class to set whether or not the watermark is visible in preview.
     * - If you have enabled the mirror mode for the local video, the watermark on the local video is also mirrored. To avoid mirroring
     * the watermark, Agora recommends that you do not use the mirror and watermark functions for the local video at the same time.
     * You can implement the watermark function in your application layer.
     *
     * @param watermarkUrl The local file path of the watermark image to be added. This method supports adding a watermark image
     * from the local absolute or relative file path.
     * @param options The watermark's options to be added. See [WatermarkOptions]{@link agoraRtcEngine.WatermarkOptions}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function addVideoWatermark(watermarkUrl, options) {
        return callNativeMethod(API_TYPE.ADD_VIDEO_WATER_MARK_2, {
            watermarkUrl: watermarkUrl,
            options: options,
        });
    }
    AgoraRtcEngine.addVideoWatermark = addVideoWatermark;
    /**
     * Removes the watermark image from the video stream added by the
     * [addVideoWatermark]{@link agoraRtcEngine.addVideoWatermark} method.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function clearVideoWatermarks() {
        return callNativeMethod(API_TYPE.CLEAR_VIDEO_WATER_MARKS);
    }
    AgoraRtcEngine.clearVideoWatermarks = clearVideoWatermarks;
    /**
     * Enables/Disables image enhancement and sets the options.
     *
     * **Note**
     *
     * - Call this method after calling the [enableVideo]{@link agoraRtcEngine.enableVideo} method.
     * - Currently this method does not apply for macOS.
     *
     * @param enabled Sets whether or not to enable image enhancement:
     * - true: enables image enhancement.
     * - false: disables image enhancement.
     * @param options Sets the image enhancement option. See BeautyOptions.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setBeautyEffectOptions(enabled, options) {
        return callNativeMethod(API_TYPE.SET_BEAUTY_EFFECT_OPTIONS, {
            enabled: enabled,
            options: options,
        });
    }
    AgoraRtcEngine.setBeautyEffectOptions = setBeautyEffectOptions;
    /**
     * Adds a voice or video stream URL address to the live streaming.
     *
     * The [onStreamPublished]{@link AgoraRtcEvents.onStreamPublished} callback returns the inject status. If this method
     * call is successful, the server pulls the voice or video stream and injects it into a live channel. This is
     * applicable to scenarios where all audience members in the channel can watch a live show and interact with each other.
     *
     * The `addInjectStreamUrl` method call triggers the following callbacks:
     * - The local client:
     *   - [onStreamInjectedStatus]{@link AgoraRtcEvents.onStreamInjectedStatus}, with the state of the injecting the online stream.
     *   - [onUserJoined]{@link AgoraRtcEvents.onUserJoined}(uid: 666), if the method call is successful and the online media stream
     * is injected into the channel.
     * - The remote client: [onUserJoined]{@link AgoraRtcEvents.onUserJoined}(uid: 666), if the method call is successful and the
     * online media stream is injected into the channel.
     *
     * **Note**
     *
     * - Ensure that you enable the RTMP Converter service before using this function.
     * - This method applies to the SDK of v3.1.2 and later.
     * - This method applies to the `LIVE_BROADCASTING` profile only.
     * - You can inject only one media stream into the channel at the same time.
     *
     * @param url The URL address to be added to the ongoing streaming. Valid protocols are RTMP, HLS, and HTTP-FLV.
     * - Supported audio codec type: AAC.
     * - Supported video codec type: H264 (AVC).
     * @param config [InjectStreamConfig]{@link agoraRtcEngine.InjectStreamConfig} contains the configuration of
     * the added voice or video stream.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     *   - -2(`ERR_INVALID_ARGUMENT`): The injected URL does not exist. Call this method again to inject the stream and
     * ensure that the URL is valid.
     *   - -3(`ERR_NOT_READY`): The user is not in the channel.
     *   - -4(`ERR_NOT_SUPPORTED`): The channel profile is not `LIVE_BROADCASTING`. Call the
     * [setChannelProfile]{@link agoraRtcEngine.setChannelProfile} method and set the channel profile to `LIVE_BROADCASTING`
     * before calling this method.
     *   - -7(ERR_NOT_INITIALIZED): The SDK is not initialized. Ensure that the Agora engine is initialized before
     * calling this method.
     */
    function addInjectStreamUrl(url, config) {
        return callNativeMethod(API_TYPE.ADD_INJECT_STREAM_URL, { url: url, config: config });
    }
    AgoraRtcEngine.addInjectStreamUrl = addInjectStreamUrl;
    /**
     * Starts to relay media streams across channels.
     *
     * After a successful method call, the SDK triggers the
     * [onChannelMediaRelayStateChanged]{@link AgoraRtcEvents.onChannelMediaRelayStateChanged} and
     * [onChannelMediaRelayEvent]{@link AgoraRtcEvents.onChannelMediaRelayEvent} callbacks, and these callbacks return the
     * state and events of the media stream relay.
     * - If the `onChannelMediaRelayStateChanged` callback returns
     * [RELAY_STATE_RUNNING]{@link agoraRtcEngine.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_RUNNING}(2) and
     * [RELAY_OK]{@link agoraRtcEngine.CHANNEL_MEDIA_RELAY_ERROR.RELAY_OK}(0), and the `onChannelMediaRelayEvent` callback returns
     * [RELAY_EVENT_PACKET_SENT_TO_DEST_CHANNEL]{@link agoraRtcEngine.CHANNEL_MEDIA_RELAY_EVENT.RELAY_EVENT_PACKET_SENT_TO_DEST_CHANNEL}(4),
     * the host starts sending data to the destination channel.
     * - If the `onChannelMediaRelayStateChanged` callback returns
     * [RELAY_STATE_FAILURE]{@link agoraRtcEngine.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_FAILURE}(3), an exception occurs during
     * the media stream relay.
     *
     * **Note**
     *
     * - Call this method after the [joinChannel]{@link agoraRtcEngine.joinChannel} method.
     * - This method takes effect only when you are a host in a `LIVE_BROADCASTING` channel.
     * - After a successful method call, if you want to call this method again, ensure that you call the
     * [stopChannelMediaRelay]{@link agoraRtcEngine.stopChannelMediaRelay} method to quit the current relay.
     * - Contact sales-us@agoraRtcEngine.io before implementing this function.
     * - We do not support string user accounts in this API.
     *
     * @param configuration The configuration of the media stream relay:
     * [ChannelMediaRelayConfiguration]{@link agoraRtcEngine.ChannelMediaRelayConfiguration}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function startChannelMediaRelay(configuration) {
        return callNativeMethod(API_TYPE.START_CHANNEL_MEDIA_RELAY, {
            configuration: configuration,
        });
    }
    AgoraRtcEngine.startChannelMediaRelay = startChannelMediaRelay;
    /**
     * Updates the channels for media stream relay.
     *
     * After a successful [startChannelMediaRelay]{@link agoraRtcEngine.startChannelMediaRelay} method call, if you want to
     * relay the media  stream to more channels, or leave the current relay channel, you can call the
     * [updateChannelMediaRelay]{@link agoraRtcEngine.updateChannelMediaRelay} method.
     *
     * After a successful method call, the SDK triggers the
     * [onChannelMediaRelayEvent]{@link AgoraRtcEvents.onChannelMediaRelayEvent} callback with the
     * [RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL]{@link agoraRtcEngine.CHANNEL_MEDIA_RELAY_EVENT.RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL}(7)
     * state code.
     *
     * @note Call this method after the `startChannelMediaRelay` method to update the destination channel.
     *
     * @param configuration The media stream relay configuration:
     * [ChannelMediaRelayConfiguration]{@link agoraRtcEngine.ChannelMediaRelayConfiguration}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function updateChannelMediaRelay(configuration) {
        return callNativeMethod(API_TYPE.UPDATE_CHANNEL_MEDIA_RELAY, {
            configuration: configuration,
        });
    }
    AgoraRtcEngine.updateChannelMediaRelay = updateChannelMediaRelay;
    /**
     * Stops the media stream relay.
     *
     * Once the relay stops, the host quits all the destination channels.
     *
     * After a successful method call, the SDK triggers the
     * [onChannelMediaRelayStateChanged]{@link AgoraRtcEvents.onChannelMediaRelayStateChanged} callback. If the callback returns
     * [RELAY_STATE_IDLE]{@link agoraRtcEngine.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_IDLE}(0) and
     * [RELAY_OK]{@link agoraRtcEngine.CHANNEL_MEDIA_RELAY_ERROR.RELAY_OK}(0), the host successfully stops the relay.
     *
     * @note If the method call fails, the SDK triggers the `onChannelMediaRelayStateChanged` callback with the
     * [RELAY_ERROR_SERVER_NO_RESPONSE]{@link agoraRtcEngine.CHANNEL_MEDIA_RELAY_ERROR.RELAY_ERROR_SERVER_NO_RESPONSE}(2) or
     * [RELAY_ERROR_SERVER_CONNECTION_LOST]{@link agoraRtcEngine.CHANNEL_MEDIA_RELAY_ERROR.RELAY_ERROR_SERVER_CONNECTION_LOST}(8) state code.
     * You can leave the channel by calling the [leaveChannel]{@link agoraRtcEngine.leaveChannel} method, and the media stream relay
     * automatically stops.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function stopChannelMediaRelay() {
        return callNativeMethod(API_TYPE.STOP_CHANNEL_MEDIA_RELAY);
    }
    AgoraRtcEngine.stopChannelMediaRelay = stopChannelMediaRelay;
    /**
     * Removes the voice or video stream URL address from the live streaming.
     *
     * This method removes the URL address (added by the [addInjectStreamUrl]{@link agoraRtcEngine.addInjectStreamUrl} method) from the
     * live streaming.
     *
     * @note If this method is called successfully, the SDK triggers the [onUserOffline]{@link AgoraRtcEvents.onUserOffline} callback
     * and returns a stream `uid` of `666`.
     *
     * @param url The URL address of the injected stream to be removed.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function removeInjectStreamUrl(url) {
        return callNativeMethod(API_TYPE.REMOVE_INJECT_STREAM_URL, { url: url });
    }
    AgoraRtcEngine.removeInjectStreamUrl = removeInjectStreamUrl;
    /**
     * Agora supports reporting and analyzing customized messages.
     *
     * This function is in the beta stage with a free trial. The ability provided in its beta test version is reporting a maximum of
     * 10 message pieces within 6 seconds, with each message piece not exceeding 256 bytes.
     *
     * To try out this function, contact [support@agoraRtcEngine.io](mailto:support@agoraRtcEngine.io) and discuss the format of customized messages
     * with us.
     */
    function sendCustomReportMessage(id, category, event, label, value) {
        return callNativeMethod(API_TYPE.SEND_CUSTOM_REPORT_MESSAGE, {
            id: id,
            category: category,
            event: event,
            label: label,
            value: value,
        });
    }
    AgoraRtcEngine.sendCustomReportMessage = sendCustomReportMessage;
    /**
     * Gets the current connection state of the SDK.
     *
     * @return See [CONNECTION_STATE_TYPE]{@link agoraRtcEngine.CONNECTION_STATE_TYPE}.
     */
    function getConnectionState() {
        return callNativeMethod(API_TYPE.GET_CONNECTION_STATE);
    }
    AgoraRtcEngine.getConnectionState = getConnectionState;
    /**
     * TODO
     *
     * @param userId
     * @param enable
     */
    function enableRemoteSuperResolution(userId, enable) {
        return callNativeMethod(API_TYPE.ENABLE_REMOTE_SUPER_RESOLUTION, {
            userId: userId,
            enable: enable,
        });
    }
    AgoraRtcEngine.enableRemoteSuperResolution = enableRemoteSuperResolution;
    /**
     * Sends the metadata.
     *
     * **Note**
     *
     * - Call this method after [registerMediaMetadataObserver]{@link agoraRtcEngine.registerMediaMetadataObserver}.
     * - Ensure that the size of the metadata does not exceed the value set in the
     * [setMaxMetadataSize]{@link agoraRtcEngine.setMaxMetadataSize} callback.
     *
     * @param uid ID of the user who sends the metadata.
     * @param size The size of the sent metadata.
     * @param buffer The sent metadata.
     * @param timeStampMs The timestamp (ms) of the metadata.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function sendMetadata(_a) {
        var uid = _a.uid, size = _a.size, buffer = _a.buffer, timeStampMs = _a.timeStampMs;
        return callNativeMethod(API_TYPE.SEND_METADATA, { uid: uid, size: size, timeStampMs: timeStampMs }, buffer);
    }
    AgoraRtcEngine.sendMetadata = sendMetadata;
    /**
     * Sets the maximum size of the [Metadata]{@link agoraRtcEngine.Metadata}.
     *
     * The metadata includes the following parameters:
     * - `uid`: ID of the user who sends the metadata.
     * - `size`: The size of the sent or received metadata.
     * - `buffer`: The sent or received metadata.
     * - `timeStampMs`: The timestamp (ms) of the metadata.
     *
     * @note Call this method after [registerMediaMetadataObserver]{@link agoraRtcEngine.registerMediaMetadataObserver}.
     *
     * @param size The maximum size of the buffer of the metadata that you want to use. The highest value is 1024 bytes.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setMaxMetadataSize(size) {
        return callNativeMethod(API_TYPE.SET_MAX_META_SIZE, { size: size });
    }
    AgoraRtcEngine.setMaxMetadataSize = setMaxMetadataSize;
    /**
     * Registers the metadata observer.
     *
     * You need to specify the metadata type in this method.
     *
     * This method enables you to add synchronized metadata in the video stream for more diversified live interactive
     * streaming, such as sending shopping links, digital coupons, and online quizzes.
     *
     * **Note**
     *
     * - Call this method before the [joinChannel]{@link agoraRtcEngine.joinChannel} method.
     * - This method applies to the `LIVE_BROADCASTING` channel profile.
     *
     * @param type See [METADATA_TYPE]{@link agoraRtcEngine.METADATA_TYPE}. The SDK supports `VIDEO_METADATA(0)` only for now.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function registerMediaMetadataObserver(type) {
        return callNativeMethod(API_TYPE.REGISTER_MEDIA_META_DATA_OBSERVER, {
            type: type,
        });
    }
    AgoraRtcEngine.registerMediaMetadataObserver = registerMediaMetadataObserver;
    /**
     * Provides technical preview functionalities or special customizations by configuring the SDK with JSON options.
     *
     * The JSON options are not public by default. Agora is working on making commonly used JSON options public in a standard way.
     *
     * @param parameters Sets the parameter as a JSON string in the specified format.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    function setParameters(parameters) {
        return callNativeMethod(API_TYPE.SET_PARAMETERS, { parameters: parameters });
    }
    AgoraRtcEngine.setParameters = setParameters;
})(AgoraRtcEngine || (AgoraRtcEngine = {}));
(function (AgoraRtcEngine) {
    AgoraRtcEngine.audioDeviceManager = {
        enumeratePlaybackDevices: function () {
            var count = callNativeMethodPlayback(API_TYPE_DEVICE_MANAGER.GET_COUNT);
            return __spreadArrays(Array(count)).map(function (_, index) {
                var device = callNativeMethodPlayback(API_TYPE_DEVICE_MANAGER.GET_DEVICE, {
                    index: index,
                });
                return device;
            });
        },
        enumerateRecordingDevices: function () {
            var count = callNativeMethodRecording(API_TYPE_DEVICE_MANAGER.GET_COUNT);
            return __spreadArrays(Array(count)).map(function (_, index) {
                var device = callNativeMethodRecording(API_TYPE_DEVICE_MANAGER.GET_DEVICE, {
                    index: index,
                });
                return device;
            });
        },
        getPlaybackDevice: function () {
            return callNativeMethodPlayback(API_TYPE_DEVICE_MANAGER.GET_CURRENT_DEVICE);
        },
        getPlaybackDeviceInfo: function () {
            return callNativeMethodPlayback(API_TYPE_DEVICE_MANAGER.GET_CURRENT_DEVICE_INFO);
        },
        getPlaybackDeviceMute: function () {
            return callNativeMethodPlayback(API_TYPE_DEVICE_MANAGER.GET_DEVICE_MUTE);
        },
        getPlaybackDeviceVolume: function () {
            return callNativeMethodPlayback(API_TYPE_DEVICE_MANAGER.GET_DEVICE_VOLUME);
        },
        getRecordingDevice: function () {
            return callNativeMethodRecording(API_TYPE_DEVICE_MANAGER.GET_CURRENT_DEVICE);
        },
        getRecordingDeviceInfo: function () {
            return callNativeMethodRecording(API_TYPE_DEVICE_MANAGER.GET_CURRENT_DEVICE_INFO);
        },
        getRecordingDeviceMute: function () {
            return callNativeMethodRecording(API_TYPE_DEVICE_MANAGER.GET_DEVICE_MUTE);
        },
        getRecordingDeviceVolume: function () {
            return callNativeMethodRecording(API_TYPE_DEVICE_MANAGER.GET_DEVICE_VOLUME);
        },
        release: function () {
            // TODO
        },
        setPlaybackDevice: function (deviceId) {
            return callNativeMethodPlayback(API_TYPE_DEVICE_MANAGER.SET_DEVICE, {
                deviceId: deviceId,
            });
        },
        setPlaybackDeviceMute: function (mute) {
            return callNativeMethodPlayback(API_TYPE_DEVICE_MANAGER.SET_DEVICE_MUTE, {
                mute: mute,
            });
        },
        setPlaybackDeviceVolume: function (volume) {
            return callNativeMethodPlayback(API_TYPE_DEVICE_MANAGER.SET_DEVICE_VOLUME, { volume: volume });
        },
        setRecordingDevice: function (deviceId) {
            return callNativeMethodRecording(API_TYPE_DEVICE_MANAGER.SET_DEVICE, {
                deviceId: deviceId,
            });
        },
        setRecordingDeviceMute: function (mute) {
            return callNativeMethodRecording(API_TYPE_DEVICE_MANAGER.SET_DEVICE_MUTE, { mute: mute });
        },
        setRecordingDeviceVolume: function (volume) {
            return callNativeMethodRecording(API_TYPE_DEVICE_MANAGER.SET_DEVICE_VOLUME, { volume: volume });
        },
        startAudioDeviceLoopbackTest: function (indicationInterval) {
            return callNativeMethodPlayback(API_TYPE_DEVICE_MANAGER.START_AUDIO_DEVICE_LOOP_BACK_TEST, { indicationInterval: indicationInterval });
            // TODO return callNativeMethodRecording(API_TYPE_DEVICE_MANAGER.START_AUDIO_DEVICE_LOOP_BACK_TEST, {indicationInterval});
        },
        startPlaybackDeviceTest: function (testAudioFilePath) {
            return callNativeMethodPlayback(API_TYPE_DEVICE_MANAGER.START_DEVICE_TEST, { testAudioFilePath: testAudioFilePath });
        },
        startRecordingDeviceTest: function (indicationInterval) {
            return callNativeMethodRecording(API_TYPE_DEVICE_MANAGER.START_DEVICE_TEST, { indicationInterval: indicationInterval });
        },
        stopAudioDeviceLoopbackTest: function () {
            return callNativeMethodPlayback(API_TYPE_DEVICE_MANAGER.STOP_AUDIO_DEVICE_LOOP_BACK_TEST);
            // TODO return callNativeMethodRecording(API_TYPE_DEVICE_MANAGER.STOP_AUDIO_DEVICE_LOOP_BACK_TEST);
        },
        stopPlaybackDeviceTest: function () {
            return callNativeMethodPlayback(API_TYPE_DEVICE_MANAGER.STOP_DEVICE_TEST);
        },
        stopRecordingDeviceTest: function () {
            return callNativeMethodRecording(API_TYPE_DEVICE_MANAGER.STOP_DEVICE_TEST);
        },
    };
    AgoraRtcEngine.videoDeviceManager = {
        enumerateVideoDevices: function () {
            var count = callNativeMethodVideo(API_TYPE_DEVICE_MANAGER.GET_COUNT);
            return __spreadArrays(Array(count)).map(function (_, index) {
                var device = callNativeMethodVideo(API_TYPE_DEVICE_MANAGER.GET_DEVICE, {
                    index: index,
                });
                return device;
            });
        },
        getDevice: function () {
            return callNativeMethodVideo(API_TYPE_DEVICE_MANAGER.GET_CURRENT_DEVICE);
        },
        release: function () {
            // TODO
        },
        setDevice: function (deviceId) {
            return callNativeMethodVideo(API_TYPE_DEVICE_MANAGER.SET_DEVICE, {
                deviceId: deviceId,
            });
        },
        startDeviceTest: function (hwnd) {
            return callNativeMethodVideo(API_TYPE_DEVICE_MANAGER.START_DEVICE_TEST, {
                hwnd: hwnd,
            });
        },
        stopDeviceTest: function () {
            return callNativeMethodVideo(API_TYPE_DEVICE_MANAGER.STOP_DEVICE_TEST);
        },
    };
})(AgoraRtcEngine || (AgoraRtcEngine = {}));
