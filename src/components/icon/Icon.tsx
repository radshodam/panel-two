import React from 'react'
import styled from 'styled-components'

const StyledIcon = styled.span<{ size: number }>`
color: ${props => props.color};
size: ${props => props.size};

`

interface IconProps {
    iconTitle: string
    color: string
    size: number
}

const Icon: React.FC<IconProps> = ({ iconTitle, size, color }) => {
    return (
        <StyledIcon className={`icon-${iconTitle}`} color={color} size={size} />
    )
}

export default Icon
