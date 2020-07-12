import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CDataTable, CBadge, CCard, CCardHeader, CCardBody, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CWidgetIcon } from '@coreui/react'
import usersData from '../../users/UsersData'
import { CChartBar } from '@coreui/react-chartjs/lib'
import CIcon from '@coreui/icons-react'
import { apiURL } from  '../../../config'

const fields = ['order#', 'item name','date', 'order total', 'shipping address', 'quantity', 'discount amount']

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}

const Orders = () => {

    const [order_details, setOrder_details] = useState([]);

    function fetchOrderDetails() {
        fetch(
            `${apiURL}/order_details`,
            {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }
        )
            .then(res => res.json())
            .then(order_details => {
                console.log(order_details)
                const records = order_details.map(row => ({
                    'order#': row[1],
                    'item name': row[31],
                    'date': row[3],
                    'order total': row[26],
                    'shipping address': row[15],
                    'quantity': row[32],
                    'discount amount': row[35]

                }))
                console.log(records)
                setOrder_details(records)
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchOrderDetails()
    }, [])
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Orders
                </div>
                <div className="card-body">
                    <CCard>
                        <CCardHeader>
                            Order Details
                        </CCardHeader>
                        <CCardBody>
                            <CDataTable
                                items={order_details}
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
                        </CCardBody>
                    </CCard>
                </div>
            </div>
        </>
    )
}

export default Orders
