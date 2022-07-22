import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { FC } from 'react'
import './cardWrite.scss'

interface IProps {
  text: string
  sign: string
  date: string
  index: number
}

export const CardWrite: FC<IProps> = ({ text, sign, date, index }) => {
  return (
    <Box className="card-write">
      <div className="card-write__sign">{sign}</div>
      <div className="card-write__sign-number">Запись номер {index + 1}</div>
      <div className="card-write__date">{date}</div>
      <div className="card-write__desc">{text}</div>
    </Box>
  )
}
