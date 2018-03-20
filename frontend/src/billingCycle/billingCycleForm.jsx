import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './billingCyclesActions'
import LabelAndInput from '../common/form/labelAndInput'
import CreditList from './creditList'


class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                     label='Nome' cols='12 4' placeholder='Informe o nome'/>
                    <Field name='month' component={LabelAndInput} readOnly={readOnly}
                     type='number' label='Mês' cols='12 4' placeholder='Informe o mês' />
                    <Field name='year' component={LabelAndInput} readOnly={readOnly}
                     type='number' label='Ano' cols='12 4' placeholder='Informe o ano'/>
                     <CreditList cols='12 6' readOnly={readOnly}/>

                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClasses}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount:false})(BillingCycleForm)

const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch )
export default connect(null, mapDispatchToProps)(BillingCycleForm)