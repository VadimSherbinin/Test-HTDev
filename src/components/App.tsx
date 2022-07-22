import { Routes, Route } from 'react-router-dom'
import { CreateWrittenPage } from '../page/CreateWrittenPage'
import { MainPage } from '../page/MainPage'
import { WrittinsPage } from '../page/WrittinsPage'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create-writings" element={<CreateWrittenPage />} />
        <Route path="/writings" element={<WrittinsPage />} />
      </Routes>
    </div>
  )
}
