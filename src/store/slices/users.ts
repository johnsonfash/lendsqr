import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserData {
  id?: string
  createdAt?: string
  orgName?: string
  userName?: string
  email?: number,
  phoneNumber?: number
  lastActiveDate?: string
  profile?: {
    firstName?: string
    lastName?: string
    phoneNumber?: string
    avatar?: string
    gender?: string
    bvn?: string
    address?: string
    currency?: string
  }
  guarantor?: {
    firstName?: string,
    lastName?: string,
    phoneNumber?: string,
    gender?: string,
    address?: string
  }
  accountBalance?: string
  accountNumber?: string
  socials?: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
  education?: {
    level?: string
    employmentStatus?: string
    sector?: string
    duration?: string
    officeEmail?: string
    monthlyIncome?: [
      number,
      number
    ]
    loanRepayment?: number
  }
}

export interface UsersState {
  data?: UserData[] | null
  error?: boolean
  loading?: 'false' | 'true' | 'done'
  errorMessage?: string
}

const initialState: UsersState = {
  error: false,
  loading: 'false',
  errorMessage: '',
  data: null,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateUsers: (state: UsersState, action: PayloadAction<UsersState>) => {
      state.data = action.payload.data || null
      state.loading = action.payload.loading || 'false'
      state.error = action.payload.error || false
      state.errorMessage = action.payload.errorMessage || 'null'
    },
    addToUsers: (state: UsersState, action: PayloadAction<UsersState>) => {
      state.data = action.payload.data?.length ? state.data?.concat(...action.payload.data) : state.data
      state.loading = action.payload.loading || 'false'
      state.error = action.payload.error || false
      state.errorMessage = action.payload.errorMessage || ''
    }
  },
})

export const { addToUsers, updateUsers } = usersSlice.actions

export default usersSlice.reducer