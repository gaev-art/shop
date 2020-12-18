import {combineReducers, configureStore} from '@reduxjs/toolkit'
import thunk, {ThunkDispatch} from 'redux-thunk'
import {authReducer} from './authReducer'
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'
import {Action} from 'redux'


const rootReducer = combineReducers({
  auth: authReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

export type AppStateType = ReturnType<typeof rootReducer>
// export type AppDispatch = typeof store.dispatch
export type TypedDispatch = ThunkDispatch<AppStateType, unknown, Action>

export interface TypedUseDispatchHook<TState> {
  (): TState
}

export const useAppDispatch: TypedUseDispatchHook<TypedDispatch> = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector

