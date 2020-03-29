import React from 'react'
import PropTypes from 'prop-types'
import { List, Typography } from 'antd'

const { Item } = List
const { Text } = Typography

export default function Todo(props) {
    return (
        <Item >
            <Text>{}</Text>
        </Item>
    )
}

Todo.propTypes = {
    
}