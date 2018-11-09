import React from "react"

import { Table, Divider, Tag } from "antd"
import axios from "Mock/axios"

const columns = [{
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: "Age",
    dataIndex: "age",
    key: "age",
}, {
    title: "Address",
    dataIndex: "address",
    key: "address",
}, {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: tags => (
        <span>
            {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
    ),
}, {
    title: "Action",
    key: "action",
    render: (text, record) => (
        <span>
            <a href="javascript:;">Invite {record.name}</a>
            <Divider type="vertical" />
            <a href="javascript:;">Delete</a>
        </span>
    ),
}]

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {data: []}
    }

    async componentDidMount(){
        let response = await axios.get("/person")

        let data = response.data.map((item) => {
            item.key = item.id
            return item
        })
        this.setState({data: data})
    }
    render() {
        return <Table columns={columns} dataSource={this.state.data} />
    }
}
