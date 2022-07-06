import { combineReducers, legacy_createStore } from 'redux';
// import { sendMessageBlockReducer } from '../components/Dialogs/SendMessageBlock/SendMessageBlockReducer';
// import { usersListReducer } from '../components/Dialogs/UsersList/UsersListReducer';
// import { findUsersReducer } from '../components/FindUsers/FindUsersReducer';
// import { createPostReducer } from '../components/Profile/UserInfo/CreatePost/CreatePostReducer';

const rootReducer = combineReducers({
	// postData: createPostReducer,
	// usersDialogsList: usersListReducer,
	// messages: sendMessageBlockReducer,
	// foundUsersList: findUsersReducer,
});

// Автоматическая типизация state в store (всего приложения)
export type AppRootStateType = ReturnType<typeof rootReducer>;
export const store = legacy_createStore(rootReducer);

//@ts-ignore
window.store = store