import {
  ComponentName,
  ComponentSchema,
  IButtonComponent,
  IPictureComponent,
  IVideoComponent
} from '../../types/lowCodeCompo.type'
import { PicComponent, pictureSchema } from './ImageComponent'
import { BtnComponent, buttonSchema } from './ButtonComponent'
import { VideoCompo, videoSchema } from './VideoComponent'

export const defaultStyle = {
  position: 'absolute',
  top: '100px',
  left: '100px',
  width: '100px',
  height: '40px',
  zIndex: 1,
  textAlign: 'center',
  color: '#000000',
  backgroundColor: '#ffffff',
  fontSize: '14px'
}

// 点击icon图标后调用该方法获取相应组件的数据
export const getComponentSchema = (name: ComponentName): ComponentSchema => {
  const id = new Date().getTime().toString()
  switch (name) {
    case ComponentName.PictureComponent: {
      return pictureSchema(id, defaultStyle)
    }
    case ComponentName.ButtonComponent: {
      return buttonSchema(id)
    }
    case ComponentName.VideoComponent: {
      return videoSchema(id)
    }
    default: {
      return buttonSchema(id)
    }
  }
}

// 根据schema获取渲染组件
export const getComponent = (schema: ComponentSchema | undefined): JSX.Element => {
  const name = schema?.name
  switch (name) {
    case ComponentName.PictureComponent: {
      const picSchema = schema as IPictureComponent
      return <PicComponent schema={picSchema}></PicComponent>
    }
    case ComponentName.ButtonComponent: {
      const btnSchema = schema as IButtonComponent
      return <BtnComponent schema={btnSchema}></BtnComponent>
    }
    case ComponentName.VideoComponent: {
      const videoSchema = schema as IVideoComponent
      return <VideoCompo schema={videoSchema}></VideoCompo>
    }
    default:
      return <></>
  }
}
