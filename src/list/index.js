import React from "react"

import {Table, Divider, Tag} from "antd"
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
            <Divider type="vertical"/>
            <a href="javascript:;">Delete</a>
        </span>
    ),
}]

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            pagination: {
                total: 0,
                current: 1,
                showTotal: (total) => {
                    return `Total ${total} items`
                }
            }
        }

        this.pagination = this.state.pagination
        this.handleChange = this.handleChange.bind(this)
    }

    async fetchData() {
        let response = await axios.get("/person", {
            params: {
                _page: this.pagination.current,
                _limit: 10
            }
        })

        let data = response.data.map((item) => {
            item.key = item.id
            return item
        })
        let total = Number.parseInt(response.headers["x-total-count"])

        this.setState({
            data: data,
            pagination: {...this.pagination, total}
        })
    }

    componentDidMount() {
        this.fetchData()
    }

    handleChange(pagination) {
        let current = pagination.current
        this.pagination = {...this.state.pagination, current}

        this.fetchData()
    }

    render() {
        return <Table
            columns={columns}
            dataSource={this.state.data}
            pagination={this.state.pagination}
            onChange={this.handleChange}
        />
    }
}
