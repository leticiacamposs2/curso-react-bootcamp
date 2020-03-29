import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
    <p>
        Visualizar:
        {' '}
        <FilterLink filter="SHOW_ALL">
            Todos
    </FilterLink>
        {', '}
        <FilterLink filter="SHOW_ACTIVE">
            Ativos
    </FilterLink>
        {', '}
        <FilterLink filter="SHOW_COMPLETED">
            Finalizados
    </FilterLink>
    </p>
)

export default Footer