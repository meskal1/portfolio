export const formInitState = {
  name: '',
  email: '',
  message: '',
}

export type FormInitStateType = typeof formInitState

type ActionType = OnChangeNameACType | OnChangeEmailACType | OnChangeMessageACType

export const formReducer = (
  state: FormInitStateType = formInitState,
  action: ActionType
): FormInitStateType => {
  switch (action.type) {
    case 'ON_CHANGE_NAME': {
      let validName = action.payload.nameValue
        .replace(/[^a-zA-Zа-яёА-ЯЁ -]/, '')
        .slice(0, 50)
        .trimStart()

      if (validName[validName.length - 1] === ' ' && validName[validName.length - 2] === ' ') {
        validName = validName.slice(0, -1)
      }

      return { ...state, name: validName }
    }
    case 'ON_CHANGE_EMAIL': {
      const validEmail = action.payload.emailValue
        .replace(/[а-яёА-ЯЁ]/, '')
        .slice(0, 200)
        .trimStart()

      return { ...state, email: validEmail }
    }
    case 'ON_CHANGE_MESSAGE': {
      let validMessage = action.payload.messageValue.slice(0, 3000).trimStart()

      if (
        validMessage[validMessage.length - 1] === ' ' &&
        validMessage[validMessage.length - 2] === ' '
      ) {
        validMessage = validMessage.slice(0, -1)
      }

      return { ...state, message: validMessage }
    }
    default:
      return state
  }
}

type OnChangeNameACType = ReturnType<typeof onChangeNameAC>
export const onChangeNameAC = (nameValue: string) => {
  return {
    type: 'ON_CHANGE_NAME',
    payload: {
      nameValue: nameValue,
    },
  } as const
}
type OnChangeEmailACType = ReturnType<typeof onChangeEmailAC>
export const onChangeEmailAC = (emailValue: string) => {
  return {
    type: 'ON_CHANGE_EMAIL',
    payload: {
      emailValue: emailValue,
    },
  } as const
}
type OnChangeMessageACType = ReturnType<typeof onChangeMessageAC>
export const onChangeMessageAC = (messageValue: string) => {
  return {
    type: 'ON_CHANGE_MESSAGE',
    payload: {
      messageValue: messageValue,
    },
  } as const
}
