import videojs from 'video.js'

// video.js所需要的基本属性

export const initialOptions: videojs.PlayerOptions = {
  controls: true,
  fluid: true,
  controlBar: {
    volumePanel: {
      inline: false
    }
  }
}
