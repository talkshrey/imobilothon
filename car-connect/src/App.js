import LoginSide from "./pages/Login/Login";
import SignInSide from "./pages/Signup/Signup";
import Review from "./pages/Review/Review";
import { Route, Routes } from "react-router";
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Outlet, Navigate } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Details from "./pages/CarDetails/Details";
import Booking from "./pages/BookingPage/BookingPage"
import Book from "./pages/Book/Book";


function App() {

	const PrivateRoute = () => {
		const token = localStorage.getItem('token')
		return token ? <Outlet /> : <Navigate to="/login" />
	}

	const theme = createTheme({
		palette: {
			secondary: {
				main: '#E33E7F'
			}
		}
	});

	return (

		<MuiThemeProvider theme={theme}>
			<Router>
				<div className="App">
					<Routes>
						<Route exact path='/login' element={<LoginSide />} />
						<Route path='/signup' element={<SignInSide />} />


						<Route path='/' element={<PrivateRoute />} >
							<Route path='/' element={<Landing />} />
						</Route>

						<Route path='/review' element={<PrivateRoute />} >
							<Route path='/review' element={<Review />} />
						</Route>

						<Route path='/details' element={<PrivateRoute />} >
							<Route path='/details' element={<Details />} />
						</Route>

						<Route path='/booking' element={<PrivateRoute />} >
							<Route path='/booking' element={<Booking />} />
						</Route>

						<Route path='/booking/:id' element={<PrivateRoute />} >
							<Route path="/booking/:id" element={<Book />} />
						</Route>
					</Routes>
				</div>
			</Router>
		</MuiThemeProvider>
	);
}

export default App;
