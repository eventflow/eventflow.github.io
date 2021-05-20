import React from 'react'
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'

const Logo = React.memo<SvgIconProps>(props => {
  return (
    <SvgIcon {...props} viewBox="0 0 32 32">
      <g fillRule="nonzero" fill="none">
        <path d="M16 0L0 2.06v27.969L16 32l16-1.971V2.06z" />
        <path fill="#F5F3EF" d="M1.81 3.65L16 5.399v24.778L1.81 28.43z" />
        <path fill="#CFCCC7" d="M30.19 3.65L16 5.399v24.778l14.19-1.747z" />
        <path
          fill="#280F3A"
          d="M1.81 3.65v.506L16 5.594l14.19-1.559V3.65L16 1.824z"
        />
        <path
          fill="#8D51EF"
          d="M16 10.354V5.399L1.81 3.65v24.78L16 30.177v-4.954l-7.095-.875v-4.956l7.095.874V15.31l-7.095-.874V9.48z"
        />
        <path
          fill="#FB6400"
          d="M16 5.399v4.955l7.095-.874v4.956L16 15.31v4.956l7.095-.874v9.912l7.095-.874V3.65z"
        />
      </g>
    </SvgIcon>
  )
})

export default Logo
