import React from 'react'
import GenericList from './GenericList'

const Sent = () => <GenericList filter={{ filter: { status: 3 } }} ignoreMyself />

export default Sent