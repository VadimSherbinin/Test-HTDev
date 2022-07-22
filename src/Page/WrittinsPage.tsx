import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination';
import { useAppSelector } from '../hook'
import { IWritting } from '../types'
import { CardWrite } from '../components/shared/CardWrite/CardWrite'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react';

export const WrittinsPage = () => {
  const writtins = useAppSelector((state) => state.writtings.writtins)
  const [filteredWritings, setFilteredWritings ] = useState<IWritting[]>()
  const [page, setPage] = useState(1);

  const size = 6
  const offSet = page * size
  const totalpages = Math.ceil(writtins.length / size)
  
  const filteredWrittins = () => {
    return writtins?.slice(offSet - size, offSet)
  };

  useEffect(() => {
    setFilteredWritings(filteredWrittins())
  }, [writtins, page])

  console.log(filteredWritings);
  
  const count = useAppSelector((state) => state.writtings.writtins.length)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    console.log(value);
    
  };

  return (
    // <Grid>
    <Box style={{ padding: '40px 0' }}>
      <Typography fontSize={34} style={{ marginBottom: 20 }}>
        {writtins.length > 0 ? 'Записи' : 'Записей нет'}
      </Typography>

      <Box style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {filteredWritings &&
          filteredWritings.map((writtin: IWritting, index) => {
            return (
              <CardWrite
                key={`writtins.sign-${index}`}
                text={writtin.text}
                sign={writtin.sign}
                date={writtin.date.datetime}
                index={index + offSet - size}
              />
            )
          })}
        {/* <Pagination /> */}
        {/* </Grid> */}
      </Box>
      <Pagination count={totalpages} page={page} siblingCount={1} onChange={handleChange}  />
    </Box>
  )
}
