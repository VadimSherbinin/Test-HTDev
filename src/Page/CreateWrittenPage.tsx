import { TextareaAutosize, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../hook'
import { addWritin } from '../redux/writtinsReducer'
import { ITimeZone } from '../types'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Button from '@mui/material/Button'

export const CreateWrittenPage = () => {
  const dispatch = useAppDispatch()
  // хранение данных дял работы
  const [timeZoneList, setTimeZoneList] = useState<string[]>([])

  const handleChangeTimeZone = (e: SelectChangeEvent) => {
    // setAge(event.target.value as string)
    setTimeZone(e.target.value)
    getTimeZoneDate(e.target.value)
  }
  // для формирования сущности
  const [text, setText] = useState<string>('')
  const [sign, setSign] = useState<string>('')
  const [timeZone, setTimeZone] = useState<string>('')
  const [date, setDate] = useState<ITimeZone>()
  const [validMessage, setValidMessage] = useState('')

  useEffect(() => {
    fetch('https://worldtimeapi.org/api/timezone')
      .then((response) => response.json())
      .then((data) => setTimeZoneList(data))
  }, [])

  const getTimeZoneDate = async (timeZone: string) => {
    const respons = await fetch(
      `https://worldtimeapi.org/api/timezone/${timeZone}`
    )
    const result = await respons.json()
    console.log(result)
    setDate(result)
  }

  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (date && text && sign && timeZone) {
      dispatch(
        addWritin({
          text,
          sign,
          tz: timeZone,
          date,
        })
      )
      setValidMessage('')
      setText('')
    } else {
      setValidMessage('заполните корректно данные')
    }
  }

  return (
    <div>
      <form action="">
        <TextareaAutosize
          maxRows={10}
          aria-label="maximum height"
          placeholder="..."
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
          style={{ width: '100%', minHeight: '200px' }}
        />

        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <TextField
            type="text"
            name="sign"
            value={sign}
            onChange={(e) => setSign(e.currentTarget.value)}
            style={{ width: '49%' }}
          />
          <Box sx={{ width: '49%' }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">TimeZone</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={timeZone}
                label="Age"
                onChange={handleChangeTimeZone}
              >
                {timeZoneList &&
                  timeZoneList.map((i) => {
                    return (
                      <MenuItem key={i} value={i}>
                        {i}
                      </MenuItem>
                    )
                  })}
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box
          style={{
            marginTop: '20px',
          }}
        >
          <Button type="submit" variant="contained" onClick={(e) => submit(e)}>
            Создать
          </Button>
        </Box>
      </form>
      {validMessage && <h2>{validMessage}</h2>}
    </div>
  )
}
