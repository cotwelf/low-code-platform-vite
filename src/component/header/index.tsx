import { IPageInfo } from '@//types';
import { Button, Descriptions, Form, Input, Layout, Modal, Select } from '@arco-design/web-react';
import { IconEdit } from '@arco-design/web-react/icon';
import React, { useContext, useEffect, useState } from 'react'
import { context } from '../../App'
import './style.scss'

const Header = Layout.Header;
const FormItem = Form.Item;

const emptyNode = () => <span className='empty'>未设置</span>

export const LowCodeHeader = () => {
  const { pageInfo, setPageInfo } = useContext(context)
  const [ headerInfo, setHeaderInfo ] = useState<Array<{label: string, value: string | React.ReactNode}>>([])
  const [form] = Form.useForm()

  useEffect(() => {
    const tempHeaderInfo = [
      {
        label: '页面标题',
        value: pageInfo?.title || emptyNode(),
      },
      {
        label: '平台',
        value: pageInfo?.platform || emptyNode(),
      }
    ]
    setHeaderInfo(tempHeaderInfo)
  }, [pageInfo])

  const handleEdit = () => {
    if (!setPageInfo) {
      return
    }
    Modal.confirm({
      content: (
        <Form
          form={form}
          labelCol={{
            style: { flexBasis: 90 },
          }}
          wrapperCol={{
            style: { flexBasis: 'calc(100% - 90px)' },
          }}
        >
          <FormItem label='页面标题' field='title' rules={[{ required: true }]}>
            <Input placeholder='--请输入--' />
          </FormItem>
          <FormItem label='平台' required field='platform' rules={[{ required: true }]}>
            <Select placeholder='--请选择--' options={['PC', 'H5']} />
          </FormItem>
        </Form>
      ),
      okButtonProps: {
        status: 'danger',
      },
      onOk: async () => {
        await form.validate().then((res: IPageInfo) => {
          setPageInfo(res)
        })
      },
    });
  }
  return (
    <Header className='header'>
      <div className='page-info'>
        <Descriptions colon=' :' size='large' layout='inline-horizontal' data={headerInfo}  />
        <IconEdit className='edit' onClick={handleEdit} />
      </div>
      <div className='btn-group'>
        <Button type='primary'>保存</Button>
        <Button type='secondary'>发布</Button>
      </div>
    </Header>
  )
}
