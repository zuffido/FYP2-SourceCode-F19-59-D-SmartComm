import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CDataTable, CBadge } from '@coreui/react'
import usersData from '../../users/UsersData'
import { apiURL } from '../../../config'


const fields = ['item#', 'product name', 'category','profit']

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}


const List = () => {
    const [product_list, setProduct_list] = useState(0);

    function fetchProductList() {
        fetch(
            `${apiURL}/get_product_list`,
            {
                method: "GET",
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                })
            }
        )
            .then(res => res.json())
            .then(product_list => {
                console.log(product_list)
                const records = product_list.map(row => ({
                    'item#': row[1],
                    'product name': row[32],
                    'category': row[29],
                    'profit': row[38]
                }))
                console.log(records)
                setProduct_list(records)
            })
            .catch(error => console.log(error));
    }
    useEffect(() => {
        fetchProductList()
    }, [])

    return (
        <>
            <div className="card">
                <div className="card-header">
                    Products List
                </div>
                <div className="card-body">
                    <CRow>
                        <CCol>
                            <CDataTable
                                items={product_list}
                                fields={fields}
                                hover
                                striped
                                bordered
                                size="sm"
                                itemsPerPage={10}
                                pagination
                                scopedSlots={{
                                    'status':
                                        (item) => (
                                            <td>
                                                <CBadge color={getBadge(item.status)}>
                                                    {item.status}
                                                </CBadge>
                                            </td>
                                        )
                                }}
                            />
                        </CCol>
                    </CRow>
                </div>
            </div>
        </>
    )
}

export default List
