import React, { } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CDataTable, CBadge, CCard, CCardHeader, CCardBody, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CWidgetIcon } from '@coreui/react'
import usersData from '../../users/UsersData'
import { CChartBar } from '@coreui/react-chartjs/lib'
import CIcon from '@coreui/icons-react'

const fields = ['start-date', 'serial-no', 'repeat', 'description', 'category', 'amount']

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}

const Expenses = () => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Expenses
                </div>
                <div className="card-body">
                    <CDataTable
                        items={usersData}
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

export default Expenses
