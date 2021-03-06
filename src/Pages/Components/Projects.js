import React from 'react'
import { Row, Col } from 'antd';
import { Badge } from 'antd';
import 'antd/dist/antd.min.css';
import './Projects.css'

function Projects() {
    return (
        <div className='project-master'>
            <div className='card-stack'>
                <Row gutter={[32, 32]}>
                    <Col className="gutter-row" span={12}>
                        <a href='/work/trana'><div className='trana-col' /></a>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <a href='/work/bharatsim'><div className='bharatsim-col' /></a>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Badge.Ribbon text="In Progress..."></Badge.Ribbon>
                        <a href='/work/fashiondeli'><div className='fashiondeli-col' /></a>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Badge.Ribbon text="In Progress..."></Badge.Ribbon>
                        <a href='/work/spacefindr'><div className='spacefindr-col' /></a>
                        </Col>
                </Row>
            </div>
        </div>
    )
}

export default Projects