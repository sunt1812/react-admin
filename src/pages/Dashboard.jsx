import React from 'react'
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom'
import CardStatus from '../components/card-status/CardStatus'
import Table from '../components/table/Table'
import { useGlobalContext } from '../context/context'
import latestOrders from '../pake-api/latest-orders-api'
import statusCardApi from '../pake-api/status-card-api'
import topCustomersApi from '../pake-api/topcustomers-api'

const chartOptions = {
    series: [{
        name: 'Online Customers',
        data: [40,70,20,90,36,80,30,91,60]
    }, {
        name: 'Store Customers',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}
const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}
const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
) 
const renderLatestOrdersHeader = (item, index) => (
    <th key={index}>{item}</th>
)

const renderLatestOrdersBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
			<span className={`badge badge-${orderStatus[item.status]}`}>
				{item.status}
			</span>
        </td>
    </tr>
) 
const Dashboard = () => {
	const { themeMode } = useGlobalContext()
  return (
	<div className="dashboard">
		<h2 className="dashboard__heading">Dashboard</h2>
		<div className="row">
			<div className="col-6">
				<div className="row">
					{statusCardApi.map((item,index) => (
						<div className="col-6" key={index}>
							<CardStatus {...item}/>
						</div>
					))}
				</div>
			</div>
			<div className="col-6">
				<div className="card full-height">
					<Chart 
					options={themeMode === 'theme-mode-dark' ? {
						...chartOptions.options,
						theme: { mode: 'dark'}
					} : {
						...chartOptions.options,
						theme: { mode: 'light'}
					}}
					series={chartOptions.series}
					type='line'
					height='100%'
					/>
				</div>
			</div>
			<div className="col-4">
				<div className="card">
					<div className="card__header">
						<h3>top customers</h3>
					</div>
					<div className="card__body">
						<Table 
						headerData={topCustomersApi.header}
						renderHeader={(item,index) =>renderCusomerHead(item,index)}
						bodyData={topCustomersApi.body}
						renderBody={(item,index) => renderCusomerBody(item,index)}
						/>
					</div>
					<div className="card__footer">
						<Link to='/'>view all</Link>
					</div>
				</div>
			</div>
			<div className="col-8">
				<div className="card">
					<div className="card__header">
						<h3>latest orders</h3>
					</div>
					<div className="card__body">
						<Table 
						headerData={latestOrders.header}
						renderHeader={(item,index) =>renderLatestOrdersHeader(item,index)}
						bodyData={latestOrders.body}
						renderBody={(item,index) => renderLatestOrdersBody (item,index)}
						/>
					</div>
					<div className="card__footer">
						<Link to='/'>view all</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Dashboard