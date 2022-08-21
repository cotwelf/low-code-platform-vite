import { API_URL } from '@//constants/env'
import { EditConfig } from '@//types'
import { IResponseMedias } from '@//types/strapiData.type'
import { Button, Message, Modal } from '@arco-design/web-react'
import axios from 'axios'
import { ChangeEvent, useEffect, useState } from 'react'

// 采用对话框编辑属性
export const AImageInput: React.FC<EditConfig> = ({ editConfig }) => {
  const [visible, setVisible] = useState(false)
  const [image, setImages] = useState<File | null>()
  const [picUrls, setPicUrls] = useState<IResponseMedias[] | null>([])
  const [selectedPic, setSelectedPic] = useState<IResponseMedias | undefined>()

  function uploadImage() {
    if (image) {
      const formData = new FormData()
      formData.append('files', image)
      axios.post(API_URL + '/api/upload', formData).then(
        () => {
          Message.success('上传成功')
          getImages()
        },
        () => {
          Message.error('上传失败')
        }
      )
    } else {
      Message.warning('请先选择一个图片')
    }
  }

  //   设置上传图片
  function onImageChange(e: ChangeEvent<HTMLInputElement>) {
    if (e?.target.files) {
      setImages(e.target.files[0])
    }
  }

  //   获取所有图片
  function getImages() {
    axios.get(API_URL + '/api/upload/files').then(
      (res) => {
        if (res.data) {
          const images = (res.data as IResponseMedias[]).filter((item) => /^image\/*/.test(item.mime))
          setPicUrls(images)
        }
      },
      (err) => {
        console.log(err)
      }
    )
  }

  //   更新图片
  function updateImage() {
    if (selectedPic?.name === undefined) {
      Message.warning('请先选择一个图片')
      return
    } else if (editConfig.callback) {
      editConfig.callback(API_URL + selectedPic?.formats.small.url)

      Message.success('修改成功')
      setVisible(false)
    }
  }

  useEffect(() => {
    getImages()
  }, [visible])

  return (
    <div className="edit-input-image">
      <Button onClick={() => setVisible(true)} type="primary">
        更改图片
      </Button>
      <Modal
        title="图片库"
        visible={visible}
        onOk={() => updateImage()}
        onCancel={() => setVisible(false)}
        autoFocus={false}
        focusLock={true}
      >
        {picUrls?.map((item, index) => {
          return (
            <img
              style={{ border: item.name === selectedPic?.name ? '3px solid lightblue' : '' }}
              className="input-img"
              key={'pic' + index}
              src={API_URL + item.formats.small.url}
              onClick={() => setSelectedPic(item)}
            />
          )
        })}
        <div>
          <input type="file" name="file" multiple accept="image/*" onChange={onImageChange}></input>
          <Button onClick={() => uploadImage()}>上传</Button>
        </div>
      </Modal>
    </div>
  )
}
