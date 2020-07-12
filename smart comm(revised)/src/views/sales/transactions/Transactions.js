import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CDataTable, CBadge, CCard, CCardHeader, CCardBody, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CWidgetIcon } from '@coreui/react'
import usersData from '../../users/UsersData'
import { CChartBar } from '@coreui/react-chartjs/lib'
import CIcon from '@coreui/icons-react'
import { apiURL } from  '../../../config'

const fields = ['date', 'order-id', 'location', 'amount']

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}

const Transactions = () => {

    const [transaction_details, setTransaction_details] = useState([]);

    function fetchTransactionDetails() {
        fetch(
            `${apiURL}/transaction_details`,
            {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }
        )
            .then(res => res.json())
            .then(transaction_details => {
                console.log(transaction_details)
                const records = transaction_details.map(row => ({
                    'date': row[3],
                    'order-id': row[1],
                    'location': row[15],
                    'amount': row[26]
                    

                }))
                console.log(records)
                setTransaction_details(records)
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchTransactionDetails()
    }, [])

    return (
        <>
            <div className="card">
                <div className="card-header">
                    Transactions
                </div>
                <div className="card-body">
                    <CCard>
                        <CCardHeader>
                            Transaction Details
                        </CCardHeader>
                        <CCardBody>
                            <CDataTable
                                items={transaction_details}
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

export default Transactions
