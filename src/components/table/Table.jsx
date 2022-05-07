import React from 'react'
import './table.css'

const Table = (props) => {
    console.log(props)
  return (
    <div className="table-wrapper">
        <table>
            {
                props.headerData && props.renderHeader ? (
                    <thead>
                        <tr>
                            {
                                props.headerData.map((item, index) => props.renderHeader(item, index))
                            }
                        </tr>
                    </thead>
                ) : null
            }
            {
                props.bodyData && props.renderBody ? (
                    <tbody>
                        {
                            props.bodyData.map((item, index) => props.renderBody(item, index))
                        }
                    </tbody>
                ) : null
            }
        </table>
    </div>
  )
}

export default Table