// import React, {useState, useEffect} from 'react'
// import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from "./store/session";


function App() {
	const [loaded, setLoaded] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(authenticate());
			setLoaded(true);
		})();
	}, [dispatch]);

	if (!loaded) {
		return null;
	}

	return (
		<div>
			<BrowserRouter>
				{/* <NavBar /> */}
				<Routes>

					{/* <ProtectedRoute
						path='/'
						exact={true}
					>
						<HomePage />
					</ProtectedRoute> */}

					{/* <Route
						path='/adminLogin'
						exact={true}
					>
						<LoginForm />
					</Route> */}

					{/* <ProtectedRoute
						path='/upload-image'
						exact={true}
					>
						<UploadImage />
					</ProtectedRoute> */}

					{/* <Route
						path='/images/:imageId'
						exact={true}
					>
						<DisplayOneImage />
					</Route> */}

					{/* <Route
						path='/images/:imageId'
						exact={true}
					>
						<EditImageDetails />
					</Route> */}
				</Routes>
			</BrowserRouter>
			{/* <Footer /> */}
		</div>
	);
}

export default App;




// function App() {

//   const [data, setData] = useState([{}])
//   const [contacts, setContacts] = useState([])

//   useEffect(() => {
//     fetchContacts()
//   }, [])

//   const fetchContacts = async () => {
//     const response = await fetch('localhost:3000/contacts')
//     const data = await response.json()
//     setContacts(data.contacts)
//     console.log(data.contacts)
//   }

//   useEffect(() => {
//     fetch("/members").then(
//       res => res.json()
//     ).then(
//       data => {
//         setData(data)
//         console.log(data)
//       }
//     )
//   }, [])
//   return (
//     <div>
//       <h1>Members</h1>

//       {(typeof data.members === 'undefined') ? (
//         <p>...Loading</p>
//       ) : (
//         data.members.map((member, i) => (
//           (<p key={i}>{member}</p>
//           ))
//         )
//         )}
//     </div>
//   );
// }

// export default App;
