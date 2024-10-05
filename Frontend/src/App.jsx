import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./Store/authUser.js";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import WatchPage from "./Pages/WatchPage";
import SearchPage from "./Pages/SearchPage";
import SearchHistoryPage from "./Pages/SearchHistoryPage";
import NotFoundPage from "./Pages/404";


function App() { 
  const { user, isCheckingAuth, authCheck } = useAuthStore();
  useEffect(() => {
		authCheck();
	}, [authCheck]);
  if (isCheckingAuth) {
		return (
			<div className='h-screen'>
				<div className='flex justify-center items-center bg-black h-full'>
					<Loader className='animate-spin text-red-600 size-10' />
				</div>
			</div>
		);
	}


  return (
      <>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={!user ? <Login />: <Navigate to={"/"} />}/>
      <Route path="/signup" element={!user ? <SignUp /> : <Navigate to={"/"} />}/>
      <Route path='/watch/:id' element={user ? <WatchPage /> : <Navigate to={"/login"} />} />
      <Route path='/search' element={user ? <SearchPage /> : <Navigate to={"/login"} />} />
      <Route path='/history' element={user ? <SearchHistoryPage /> : <Navigate to={"/login"} />} />
      <Route path='/*' element={<NotFoundPage />} />
    </Routes>
    <Footer />
    <Toaster />
  
  </>
  )
};

export default App
