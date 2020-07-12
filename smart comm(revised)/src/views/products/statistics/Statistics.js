import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CDataTable, CBadge, CCard, CCardHeader, CCardBody, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CWidgetIcon, CImg } from '@coreui/react'
import usersData from '../../users/UsersData'
import { CChartBar } from '@coreui/react-chartjs/lib'
import CIcon from '@coreui/icons-react'
import { apiURL } from '../../../config'

const fields = ['item#', 'product name', 'units sold', 'revenue']

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}



const Statistics = () => {
    const [total_discount, setTotal_discount] = useState(0);
    const [men_and_kids_sales_imageUrl, setMen_and_kids_sales_imageUrl] = useState("");
    const [kids_and_ladies_sales_imageUrl, setKids_and_ladies_sales_imageUrl] = useState("");
    const [ladies_and_men_sales_imageUrl, setLadies_and_men_sales_imageUrl] = useState("");
    const [top_customers, setTop_customers] = useState([]);
    const [last_month_revenue, setLast_month_revenue_customers] = useState(0);
    const [last_month_quant, setLast_month_units_sold] = useState(0);
    const [monthly_sales, setMonthly_sales] = useState([])
    const [kids_category, setKids_category] = useState("");
    const [kids_forecast, setKids_forecast] = useState("");
    const [ladies_category, setLadies_category] = useState("");
    const [ladies_forecast, setLadies_forecast] = useState("");
    const [men_category, setMen_category] = useState("");
    const [men_forecast, setMen_forecast] = useState("");

    function fetchMenForecast() {
        fetch(
            `${apiURL}/men_forecast`,
            {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }
        )
            .then(res => res.blob())
            .then(images => {
                let image = URL.createObjectURL(images)
                setMen_forecast(image)
            })
            .catch(error => console.log(error));
    }

    function fetchMenCategory() {
        fetch(
            `${apiURL}/men_category`,
            {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }
        )
            .then(res => res.blob())
            .then(images => {
                let image = URL.createObjectURL(images)
                setMen_category(image)
            })
            .catch(error => console.log(error));
    }

    function fetchLadiesForecast() {
        fetch(
            `${apiURL}/ladies_forecast`,
            {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }
        )
            .then(res => res.blob())
            .then(images => {
                let image = URL.createObjectURL(images)
                setLadies_forecast(image)
            })
            .catch(error => console.log(error));
    }

    function fetchLadiesCategory() {
        fetch(
            `${apiURL}/ladies_category`,
            {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }
        )
            .then(res => res.blob())
            .then(images => {
                let image = URL.createObjectURL(images)
                setLadies_category(image)
            })
            .catch(error => console.log(error));
    }

    function fetchKidsForecast() {
        fetch(
            `${apiURL}/kids_forecast`,
            {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }
        )
            .then(res => res.blob())
            .then(images => {
                let image = URL.createObjectURL(images)
                setKids_forecast(image)
            })
            .catch(error => console.log(error));
    }

    function fetchKidsCategory() {
        fetch(
            `${apiURL}/kids_category`,
            {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }
        )
            .then(res => res.blob())
            .then(images => {
                let image = URL.createObjectURL(images)
                setKids_category(image)
            })
            .catch(error => console.log(error));
    }

    function fetchMenAndKidsSales() {
        fetch(
            `${apiURL}/men_and_kids`,
            {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }
        )
            .then(res => res.blob())
            .then(images => {
                let image = URL.createObjectURL(images)
                setMen_and_kids_sales_imageUrl(image)
            })
            .catch(error => console.log(error));
    }

    function fetchLadiesAndMenSales() {
        fetch(
            `${apiURL}/ladies_and_men`,
            {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }
        )
            .then(res => res.blob())
            .then(images => {
                let image = URL.createObjectURL(images)
                setLadies_and_men_sales_imageUrl(image)
            })
            .catch(error => console.log(error));
    }

    function fetchSalesPerMonth() {
        fetch(
            `${apiURL}/monthly_total_sales`,
            {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }
        )
            .then(res => res.json())
            .then(monthly_sales => {
                const records = monthly_sales.map(row => row[1])
                setMonthly_sales(records)
            })
            .catch(error => console.log(error));
    }
    
    function fetchLastMonthQuantity() {
        fetch(
            `${apiURL}/last_month_quant`,
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
                setLast_month_units_sold(response)
            })
            .catch(error => console.log(error));
    }
    
    
    // const total_discount = 20000

    function fetchTotalDiscount() {
        fetch(
            `${apiURL}/get_total_discount`,
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
                setTotal_discount(response)
            })
            .catch(error => console.log(error));
    }

    

    function fetchLastMonthRevenue() {
        fetch(
            `${apiURL}/last_month_revenue`,
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
                setLast_month_revenue_customers(response)
            })
            .catch(error => console.log(error));
    }

    function fetchKidsAndLadiesSales() {
        fetch(
            `${apiURL}/kids_and_ladies`,
            {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }
        )
            .then(res => res.blob())
            .then(images => {
                let image = URL.createObjectURL(images)
                setKids_and_ladies_sales_imageUrl(image)
            })
            .catch(error => console.log(error));
    }

    function fetchTopCustomers() {
        fetch(
            `${apiURL}/get_customers`,
            {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }
        )
            .then(res => res.json())
            .then(top_customers => {
                console.log(top_customers)
                const records = top_customers.map(row => ({
                    'item#': row[0],
                    'product name': row[31],
                    'units sold': row[32],
                    'revenue': row[37]
                }))
                console.log(records)
                setTop_customers(records)
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchTotalDiscount()
        fetchKidsAndLadiesSales()
        fetchLadiesAndMenSales()
        fetchKidsCategory()
        fetchTopCustomers()
        fetchMenAndKidsSales()
        fetchKidsForecast()
        fetchLastMonthRevenue()
        fetchLadiesCategory()
        fetchLadiesForecast()
        fetchMenCategory()
        fetchMenForecast()
        fetchLastMonthQuantity()
        fetchSalesPerMonth()
    }, [])
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Statistics
                </div>
                <div className="card-body">
                    <CCard>
                        <CCardHeader>Last Month Valuation</CCardHeader>
                        <CCardBody>
                            <CRow>
                                <CCol xs="12" sm="6" lg="3">
                                    <CWidgetIcon text="units sold" header={ last_month_quant } color="primary" iconPadding={false}>
                                        <CIcon width={24} name="cil-settings" />
                                    </CWidgetIcon>
                                </CCol>
                                <CCol xs="12" sm="6" lg="3">
                                    <CWidgetIcon text="estimated profit" header="Rs. 5450.00" color="info" iconPadding={false}>
                                        <CIcon width={24} name="cil-laptop" />
                                    </CWidgetIcon>
                                </CCol>
                                <CCol xs="12" sm="6" lg="3">
                                    <CWidgetIcon text="revenue" header={`Rs. ${parseFloat(last_month_revenue).toFixed(2)}`} color="warning" iconPadding={false}>
                                        <CIcon width={24} name="cil-moon" />
                                    </CWidgetIcon>
                                </CCol>
                                <CCol xs="12" sm="6" lg="3">
                                    <CWidgetIcon text="total discount" header={`Rs. ${parseFloat(total_discount).toFixed(2)}`} color="danger" iconPadding={false}>
                                        <CIcon width={24} name="cil-bell" />
                                    </CWidgetIcon>
                                </CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>
                    <CRow>
                        <CCol>
                            <CCard>
                                <CCardHeader>
                                    Sales Per Month
                                </CCardHeader>
                                <CCardBody>
                                    <CChartBar
                                        type="bar"
                                        datasets={[
                                            {
                                                label: 'Sales Per Month',
                                                backgroundColor: '#f87979',
                                                data: monthly_sales
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
                                    Top Selling
                                </CCardHeader>
                                <CCardBody>
                                    <CDataTable
                                        items={top_customers}
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
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol>
                            <CCard>
                                <CCardHeader>
                                    Sales of Kids and Ladies
                                </CCardHeader>
                                <CCardBody>
                                    <CImg src={kids_and_ladies_sales_imageUrl} width={'100%'} />
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol>
                            <CCard>
                                <CCardHeader>
                                    Sales of Ladies and Men
                                </CCardHeader>
                                <CCardBody>
                                    <CImg src={ladies_and_men_sales_imageUrl} width={'100%'} />
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol>
                            <CCard>
                                <CCardHeader>
                                    Sales of Men and Kids
                                </CCardHeader>
                                <CCardBody>
                                    <CImg src={men_and_kids_sales_imageUrl} width={'100%'} />
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol>
                            <CCard>
                                <CCardHeader>
                                    Kids One Step Forward Forecast
                                </CCardHeader>
                                <CCardBody>
                                    <CImg src={kids_category} width={'100%'} />
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol>
                            <CCard>
                                <CCardHeader>
                                    Kids Forecast
                                </CCardHeader>
                                <CCardBody>
                                    <CImg src={kids_forecast} width={'100%'} />
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol>
                            <CCard>
                                <CCardHeader>
                                    Ladies One Step Forward Forecast
                                </CCardHeader>
                                <CCardBody>
                                    <CImg src={ladies_category} width={'100%'} />
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol>
                            <CCard>
                                <CCardHeader>
                                    Ladies Forecast
                                </CCardHeader>
                                <CCardBody>
                                    <CImg src={ladies_forecast} width={'100%'} />
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol>
                            <CCard>
                                <CCardHeader>
                                    Men One Step Forward Forecast
                                </CCardHeader>
                                <CCardBody>
                                    <CImg src={men_category} width={'100%'} />
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol>
                            <CCard>
                                <CCardHeader>
                                    Men Forecast
                                </CCardHeader>
                                <CCardBody>
                                    <CImg src={men_forecast} width={'100%'} />
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                </div>
            </div>
        </>
    )
}

export default Statistics
