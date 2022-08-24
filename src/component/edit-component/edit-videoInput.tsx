// import { API_URL } from '@//constants/env'
import { API_URL } from '@//constants/env'
import { EditConfig } from '@//types'
import { IResponseMedias } from '@//types/strapiData.type'
import { Button, Message, Modal, Select } from '@arco-design/web-react'
import axios from 'axios'
import { ChangeEvent, useEffect, useState } from 'react'
const Option = Select.Option

// 采用对话框编辑属性
export const AVideoInput: React.FC<EditConfig> = ({ editConfig }) => {
  const [visible, setVisible] = useState(false)
  const [video, setVideo] = useState<File | null>()
  const [videoUrls, setVideoUrls] = useState<IResponseMedias[] | null>([])
  const [selectedUrl, setSelectedUrl] = useState<string | undefined>()
  //   const [selectedVideo, setSelectedVideo] = useState<IResponseMedias | undefined>()

  function uploadVideo() {
    if (video) {
      const formData = new FormData()
      formData.append('files', video)
      axios.post(API_URL + '/api/upload', formData).then(
        () => {
          Message.success('上传成功')
          getVideos()
        },
        () => {
          Message.error('上传失败')
        }
      )
    }
  }

  //   设置上传视频
  function onVideoChange(e: ChangeEvent<HTMLInputElement>) {
    if (e?.target.files) {
      setVideo(e.target.files[0])
    }
  }

  //   获取所有视频
  function getVideos() {
    axios.get(API_URL + '/api/upload/files').then(
      (res) => {
        if (res.data) {
          const videos = (res.data as IResponseMedias[]).filter((item) => /^video\/*/.test(item.mime))
          setVideoUrls(videos)
        }
      },
      (err) => {
        console.log(err)
      }
    )
  }

  // 更新视频库
  function updateVideo() {
    if (selectedUrl === undefined) {
      Message.warning('请先选择一个视频')
      return
    } else if (editConfig.callback) {
      editConfig.callback(selectedUrl)

      Message.success('修改成功')
      setVisible(false)
    }
  }

  useEffect(() => {
    getVideos()
  }, [visible])

  return (
    <div className="edit-input-image">
      <Button onClick={() => setVisible(true)} type="primary">
        更改视频
      </Button>
      <Modal
        title="视频库"
        visible={visible}
        onOk={() => updateVideo()}
        onCancel={() => setVisible(false)}
        autoFocus={false}
        focusLock={true}
      >
        <Select
          placeholder="请选择一个视频"
          style={{ width: 154 }}
          onChange={(value) => {
            setSelectedUrl(value as string)
          }}
        >
          {videoUrls?.map((item, index) => (
            <Option key={item.name + index} disabled={index === 3} value={API_URL + item.url}>
              {item.name}
            </Option>
          ))}
        </Select>
        <div>
          <input type="file" name="file" multiple accept="video/*" onChange={onVideoChange}></input>
          <Button onClick={() => uploadVideo()}>上传</Button>
        </div>
      </Modal>
    </div>
  )
}
