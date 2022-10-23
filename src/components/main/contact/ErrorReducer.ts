import React from 'react'

export const errorStyleState = {
  name: false,
  email: false,
  message: false,
}

type ErrorStyleStateType = typeof errorStyleState

type ActionType = NameACType | EmailACType | MessageACType

export const ErrorReducer = (state: ErrorStyleStateType = errorStyleState, action: ActionType): ErrorStyleStateType => {
  switch (action.type) {
    case 'NAME': {
      return { ...state, name: action.payload.style }
    }
    case 'EMAIL': {
      return { ...state, email: action.payload.style }
    }
    case 'MESSAGE': {
      return { ...state, message: action.payload.style }
    }
    default:
      return state
  }
}

type NameACType = ReturnType<typeof nameAC>
export const nameAC = (style: boolean) => {
  return {
    type: 'NAME',
    payload: {
      style: style,
    },
  } as const
}

type EmailACType = ReturnType<typeof emailAC>
export const emailAC = (style: boolean) => {
  return {
    type: 'EMAIL',
    payload: {
      style: style,
    },
  } as const
}

type MessageACType = ReturnType<typeof messageAC>
export const messageAC = (style: boolean) => {
  return {
    type: 'MESSAGE',
    payload: {
      style: style,
    },
  } as const
}
