---
title: How to Create a Screen Recording React Hook
date: '2022-04-03'
description: Create a tidy React hook for screen recording
tags:
    - react
---

## Introduction

I recently added screen recording to a project I'm working on and got to explore the [Media Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API) for the first time, while packaging it up in a nice React hook to use in the top level App component. In this post, I want to layout the steps I took and create a sample for other people to use.

In the end, we'll have a sample application that allows you to start a recording with screen and microphone capture. The app will allow you to create a recording and immeditaley view the recording in an HTML video element. If you'd like to skip ahead, just click here: [Link to the end]()


## Hook Skeleton

First, I will create the structure and general API of the hook I'll be creating, without all the details of creating the media streams for video and audio recording.

For this hook, I want to expose 3 things: an `isRecording` boolean, the `recordingObjectUrl`, and a `toggleIsRecording` function. This way, the component using the hook will be able to start/stop a recording, know if a recording is in progress, and display a finished recording in a video element. Here's what that initial hook looks like. (I'm using Typescript by the way)

~~~javascript
export interface ScreenRecordingState {
  isRecording: boolean;
  recordingObjectUrl: string;
}

export function useScreenRecording(): [ScreenRecordingState, () => void] {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingObjectUrl, setRecordingObjectUrl] = useState<string>(null);

  const toggleIsRecording = () => {
    setIsRecording(!isRecording);
  };

  return [{ isRecording, recordingObjectUrl }, toggleIsRecording];
}
~~~
