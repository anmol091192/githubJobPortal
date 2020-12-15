import React from 'react'
import { Pagination } from 'react-bootstrap';

export default function JobPagination({ page, setPage }) {
    return (
        <Pagination>
            <Pagination.Prev />
            <Pagination.Item>{page - 1}</Pagination.Item>
        </Pagination>
    )
}
