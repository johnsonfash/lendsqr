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

export interface UserState {
  data?: UserData | null
  error?: boolean
  loading?: 'false' | 'true' | 'done'
  errorMessage?: string
}

const initialState: UserState = {
  error: false,
  loading: 'false',
  errorMessage: '',
  data: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateOneUser: (state: UserState, action: PayloadAction<UserState>) => {
      state.data = action.payload.data || null
      state.loading = action.payload.loading || 'false'
      state.error = action.payload.error || false
      state.errorMessage = action.payload.errorMessage || 'null'
    }
  },
})

export const { updateOneUser } = userSlice.actions

export default userSlice.reducer