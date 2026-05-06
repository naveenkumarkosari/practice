import { Provider, useDispatch, useSelector } from "react-redux"
import { configureStore, createSlice } from '@reduxjs/toolkit'

const countSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
  }
})

const store = configureStore({
  reducer: {
    count: countSlice.reducer
  }
})
export function RecoilExample() {
  return (<Provider store={store}>
    <Increase />
    <Decrease />
    <Value />
  </Provider>
  )
}

function Increase() {
  const dispatch = useDispatch()
  return <>
    <button onClick={() => dispatch(countSlice.actions.increment())}>Increase</button>
  </>
}
function Decrease() {
  const dispatch = useDispatch()
  return <>
    <button onClick={() => dispatch(countSlice.actions.decrement())}>Decrease</button>
  </>
}

function Value() {
  const val = useSelector(state => state.count.value)
  return <><h3>{val}</h3></>
}
