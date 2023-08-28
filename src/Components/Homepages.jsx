import React from 'react'
import millify from 'millify'
import { Row,Col ,Typography,Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptoQuery } from '../Services/CryptoApi'
const Title=Typography;

const Homepages = () => {
  // const {data,isFecthing}=useGetCryptoQuery()
  // console.log(data)
  return (
    <div>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row className='mt-5'>
        <Col span={12}><Statistic title="Total cryptocurrence" value={8}></Statistic></Col>
        <Col span={12}><Statistic title="Total Echanges" value={5}></Statistic></Col>
        <Col span={12}><Statistic title="Total cryptodetails" value={13}></Statistic></Col>
        <Col span={12}><Statistic title="Total Volume" value={3}></Statistic></Col>

      </Row>
    </div>
  )
}

export default Homepages
