export const errorStyleModalState = {
  company: false,
  contact: false,
  button: false,
}

type ErrorStyleModalType = typeof errorStyleModalState

type ActionType = CompanyACType | ContactACType | ButtonACType

export const errorAboutReducer = (
  state: ErrorStyleModalType = errorStyleModalState,
  action: ActionType
): ErrorStyleModalType => {
  switch (action.type) {
    case 'COMPANY': {
      return { ...state, company: action.payload.style }
    }
    case 'CONTACT': {
      return { ...state, contact: action.payload.style }
    }
    case 'BUTTON': {
      return { ...state, button: action.payload.style }
    }
    default:
      return state
  }
}

type CompanyACType = ReturnType<typeof companyAC>
export const companyAC = (style: boolean) => {
  return {
    type: 'COMPANY',
    payload: {
      style: style,
    },
  } as const
}

type ContactACType = ReturnType<typeof contactAC>
export const contactAC = (style: boolean) => {
  return {
    type: 'CONTACT',
    payload: {
      style: style,
    },
  } as const
}

type ButtonACType = ReturnType<typeof buttonAC>
export const buttonAC = (style: boolean) => {
  return {
    type: 'BUTTON',
    payload: {
      style: style,
    },
  } as const
}
