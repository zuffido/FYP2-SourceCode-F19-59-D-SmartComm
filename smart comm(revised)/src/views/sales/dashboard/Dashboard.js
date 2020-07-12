import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CDataTable, CBadge, CCard, CCardHeader, CCardBody, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CWidgetIcon, CWidgetProgress, CProgress } from '@coreui/react'
import usersData from '../../users/UsersData'
import { CChartBar } from '@coreui/react-chartjs/lib'
import CIcon from '@coreui/icons-react'
import { apiURL } from '../../../config'

const fields = ['order#', 'status', 'date', 'sub total', 'shipping method', 'payment method', 'coupon code', 'discount amount']

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}

const Dashboard = () => {
    const [monthly_revenue, setMonthly_revenue] = useState([])
    const [sales_revenue, setSales_revenue] = useState(0)
    const [sales_volume, setSales_volume] = useState(0)
    const [COGS, setCOGS] = useState(0)
    const [monthly_units, setMonthly_units] = useState([])

    function fetchUnitsPerMonth() {
        fetch(
            `${apiURL}/monthly_units`,
            {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }
        )
            .then(res => res.json())
            .then(monthly_units => {
                const records = monthly_units.map(row => row[1])
                setMonthly_units(records)
            })
            .catch(error => console.log(error));
    }

    function fetchVolumeSales() {
        fetch(
            `${apiURL}/sales_volume`,
            {
                method: "GET",
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                })
            }
        )
            .then(res => res.json())
            .then(response => {
                setSales_volume(response)
            })
            .catch(error => console.log(error));
    }

    function fetchCOGS() {
        fetch(
            `${apiURL}/COGS`,
            {
                method: "GET",
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                })
            }
        )
            .then(res => res.json())
            .then(response => {
                setCOGS(response)
            })
            .catch(error => console.log(error));
    }


    function fetchRevenueSales() {
        fetch(
            `${apiURL}/sales_revenue`,
            {
                method: "GET",
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                })
            }
        )
            .then(res => res.json())
            .then(response => {
                setSales_revenue(response)
            })
            .catch(error => console.log(error));
    }

    function fetchRevenuePerMonth() {
        fetch(
            `${apiURL}/monthly_revenue`,
            {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }
        )
            .then(res => res.json())
            .then(monthly_revenue => {
                const records = monthly_revenue.map(row => row[1])
                setMonthly_revenue(records)
            })
            .catch(error => console.log(error));
    }
    useEffect(() => {
        fetchRevenueSales()
        fetchRevenuePerMonth()
        fetchVolumeSales()
        fetchUnitsPerMonth()
        fetchCOGS()
    }, [])
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Statistics
                </div>
                <div className="card-body">
                    <CRow>
                        <CCol xs="12" sm="6" lg="3">
                            <CCard>
                                <CCardHeader>
                                    Sales Amount
                                </CCardHeader>
                                <CCardBody>
                                    <CWidgetIcon text="gross sales" header={`Rs. ${parseFloat(sales_revenue).toFixed(2)}`} color="primary">
                                        <CIcon width={24} name="cil-dollar" />
                                    </CWidgetIcon>
                                    <CWidgetProgress variant="inverse" value={40} header={`Rs. ${parseFloat(sales_revenue).toFixed(2)}`} text="Revenue" />
                                </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol xs="12" sm="6" lg="3">
                            <CCard>
                                <CCardHeader>
                                    Sales Volume
                                </CCardHeader>
                                <CCardBody>
                                    <CWidgetIcon text="orders" header= {sales_volume} color="info">
                                        <CIcon width={24} name="cil-dollar" />
                                    </CWidgetIcon>
                                    <CWidgetProgress variant="inverse" color="info" value={ sales_volume} header= {sales_volume} text="Units Sold" />
                                </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol xs="12" sm="6" lg="3">
                            <CCard>
                                <CCardHeader>
                                    COGS
                                </CCardHeader>
                                <CCardBody>
                                    <CWidgetIcon text="refunded" header={COGS} color="warning">
                                        <CIcon width={24} name="cil-dollar" />
                                    </CWidgetIcon>
                                    <CWidgetProgress variant="inverse" color="warning" value={COGS} header={COGS} text="COGS" />
                                </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol xs="12" sm="6" lg="3">
                            <CCard>
                                <CCardHeader>
                                    Net Profit
                                </CCardHeader>
                                <CCardBody>
                                    <CWidgetIcon text="Net Profit" header="Rs. 0.0" color="success">
                                        <CIcon width={24} name="cil-dollar" />
                                    </CWidgetIcon>
                                    <CWidgetProgress variant="inverse" color="success" value={0} header="Rs. 0.0" text="ROI" />
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol>
                            <CCard>
                                <CCardHeader>
                                    Revenue Per Month
                                </CCardHeader>
                                <CCardBody>
                                    <CChartBar
                                        type="bar"
                                        datasets={[
                                            {
                                                label: 'PKR',
                                                backgroundColor: '#60fcef',
                                                data: monthly_revenue
                                            }
                                        ]}
                                        labels="months"
                                        options={{
                                            tooltips: {
                                                enabled: true
                                            }
                                        }}
                                    />
                                </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol>
                            <CCard>
                                <CCardHeader>
                                    Units Sold Per Month
                                </CCardHeader>
                                <CCardBody>
                                    <CChartBar
                                        type="bar"
                                        datasets={[
                                            {
                                                label: 'Number of units',
                                                backgroundColor: '#fcd360',
                                                data: monthly_units
                                            }
                                        ]}
                                        labels="months"
                                        options={{
                                            tooltips: {
                                                enabled: true
                                            }
                                        }}
                                    />
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                </div>
            </div>
        </>
    )
}

export default Dashboard
