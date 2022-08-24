// iterate IconList
import { ComponentName } from '../types/lowCodeCompo.type'
import { IPluginListIcon } from '../types/pluginList.type'

const ImageComponentIcon: IPluginListIcon = {
  icon: <i style={{ display: 'block' }} className={'fa fa-picture-o'} />,
  text: '图片',
  compKey: ComponentName.PictureComponent
}

const ButtonComponentIcon: IPluginListIcon = {
  icon: <i style={{ display: 'block' }} className={'fa fa-hand-pointer-o'} />,
  text: '按钮',
  compKey: ComponentName.ButtonComponent
}

const VideoComponentIcon: IPluginListIcon = {
  icon: <i style={{ display: 'block' }} className={'fa fa-video-camera'} />,
  text: '视频',
  compKey: ComponentName.VideoComponent
}

// 左侧组件列表
export const PLUGIN_LIST: IPluginListIcon[] = [ImageComponentIcon, ButtonComponentIcon, VideoComponentIcon]
