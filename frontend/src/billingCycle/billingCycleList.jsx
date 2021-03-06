import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import IconButton from '../common/form/iconButton'


import { getList, showUpdate, showDelete } from './billingCyclesActions'

class BillingCycleList extends Component {

    componentWillMount() {
        this.props.getList()
        
    }
    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <IconButton style={'warning'} onClick={() => this.props.showUpdate(bc)} icon={'edit'} />
                    <IconButton style={'danger'} onClick={() => this.props.showDelete(bc)} icon={'trash-o'} />
                </td>



            </tr>
        ))
    }
    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mes</th>
                            <th>   Ano</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.billingCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)