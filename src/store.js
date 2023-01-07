import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./Page/ticket-list/ticketsSlice";
import loginReducer from "./Components/Login/loginSlice";
import userReducer from "./Page/Dashboard/userSlice";
import newTicketReducer from "./Components/add-ticket-form/addTicketSlicer";
import registrationReducer from "./Components/registration-form/userRegestrationSlice";
import passwordReducer from "./Components/Reset_Password/passwordSlice";

const store = configureStore({
	reducer: {
		tickets: ticketsReducer,
		login: loginReducer,
		user: userReducer,
		openTicket: newTicketReducer,
		registration: registrationReducer,
		password: passwordReducer,
	},
});

export default store;
