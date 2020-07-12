import React, { useState, useEffect } from 'react'
import { apiURL } from  '../../../config'
import classNames from 'classnames'
import { CRow, CCol, CDataTable, CBadge, CCard, CCardHeader, CCardBody, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CWidgetIcon } from '@coreui/react'
import usersData from '../../users/UsersData'
import { CChartBar } from '@coreui/react-chartjs/lib'
import CIcon from '@coreui/icons-react'

const fields = ['email', 'first-name', 'last-name', 'city']

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
    const [customer_list, setCustomer_list] = useState([]);

    function fetchCustomerList() {
        fetch(
            `${apiURL}/customer_list`,
            {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }
        )
            .then(res => res.json())
            .then(customer_list => {
                console.log(customer_list)
                const records = customer_list.map(row => ({
                    'email': row[1],
                    'first-name': row[0],
                    'last-name': row[2],
                    'city': row[3]
                    

                }))
                console.log(records)
                setCustomer_list(records)
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchCustomerList()
    }, [])

    return (
        <>
            <div className="card">
                <div className="card-header">
                    Customer List
                </div>
                <div className="card-body">
                    <CDataTable
                        items={customer_list}
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
                </div>
            </div>
        </>
    )
}

export default List
