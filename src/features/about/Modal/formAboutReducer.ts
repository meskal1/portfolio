export const formModalInitState = {
  company: '',
  contact: '',
}

export type FormModalInitStateType = typeof formModalInitState

type ActionType = OnChangeCompanyACType | OnChangeContactACType

export const formAboutReducer = (
  state: FormModalInitStateType = formModalInitState,
  action: ActionType
): FormModalInitStateType => {
  switch (action.type) {
    case 'ON_CHANGE_COMPANY': {
      let validCompany = action.payload.companyValue.slice(0, 100).trimStart()

      if (
        validCompany[validCompany.length - 1] === ' ' &&
        validCompany[validCompany.length - 2] === ' '
      ) {
        validCompany = validCompany.slice(0, -1)
      }

      return { ...state, company: validCompany }
    }
    case 'ON_CHANGE_CONTACT': {
      let validContact = action.payload.contactValue.slice(0, 1000).trimStart()

      if (
        validContact[validContact.length - 1] === ' ' &&
        validContact[validContact.length - 2] === ' '
      ) {
        validContact = validContact.slice(0, -1)
      }

      return { ...state, contact: validContact }
    }
    default:
      return state
  }
}

type OnChangeCompanyACType = ReturnType<typeof onChangeCompanyAC>
export const onChangeCompanyAC = (companyValue: string) => {
  return {
    type: 'ON_CHANGE_COMPANY',
    payload: {
      companyValue: companyValue,
    },
  } as const
}

type OnChangeContactACType = ReturnType<typeof onChangeContactAC>
export const onChangeContactAC = (contactValue: string) => {
  return {
    type: 'ON_CHANGE_CONTACT',
    payload: {
      contactValue: contactValue,
    },
  } as const
}
