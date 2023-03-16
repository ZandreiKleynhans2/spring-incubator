import React from 'react'
import {Typography} from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'> h1 Heading</Typography>
        <Typography variant='h2'> h2 Heading</Typography>
        <Typography variant='h3'> h3 Heading</Typography>
        <Typography variant='h4' gutterBottom> h4 Heading</Typography>
        <Typography variant='h5'> h5 Heading</Typography>
        <Typography variant='h6'> h6 Heading</Typography>

        <Typography variant='subtitle1' > Subtitle 1</Typography>
        <Typography variant='subtitle2'> Subtitle 2</Typography>

        <Typography variant='body1'>This is body 1</Typography>
        <Typography variant='body2'>This is body 2</Typography>
    </div>
  )
}