import React, { useEffect, useState } from 'react'
import Table from '../components/table/Table'
import customersApi from '../pake-api/customers-api'
import { paginate } from '../utils'
const customerTableHead = [
    '',
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location'
]

const renderHeader = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.total_spend}</td>
        <td>{item.location}</td>
    </tr>
)


const Customers = () => {

	const [data, setData] = useState([]);
	console.log(data)
	const [page, setPage] = useState(0);
	const [customerBody, setCustomerBody] = useState([])

	const prevPage = () => {
		setPage(oldPage => {
			let prevPage = oldPage - 1
			if(prevPage < 0) {
				prevPage = data.length -1
			}
			return prevPage
		})
	}
	
	const nextPage = () => {
		setPage(oldPage => {
			let nextPage = oldPage + 1
			if(nextPage > data.length -1) {
				nextPage = 0
			}
			return nextPage
		})
	}
	
	const handlePage = (index) => {
		setPage(index)
	}

	useEffect(() => {
		setData(paginate(customersApi))
	  }, []) 

	useEffect(() => {
		setCustomerBody(data[page])
	},[data,page])

  return (
	  
	<div>
		<h2 className="page-header">
			customers 
		</h2>
		<div className="row">
			<div className="col-12">
				<div className="card">
					<div className="card__body">
						<Table
							headerData={customerTableHead}
							renderHeader={(item, index) => renderHeader(item, index)}
							renderBody={(item, index) => renderBody(item, index)}
							bodyData={customerBody}
						/>
						<div className='btn-container'>
							<button className='prev-btn' onClick={prevPage}>
								prev
							</button>
							{data.map((_, index) => {
								return (
									<button
									key={index}
									className={`page-btn ${index === page ? 'active-btn' : null}`}
									onClick={() => handlePage(index)}
									>
									{index + 1}
									</button>
								)
							})}
							<button className='next-btn' onClick={nextPage}>
								next
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Customers