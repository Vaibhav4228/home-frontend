import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Corrected import
import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateListing from "./pages/CreateListing";
import ListingDetails from "./pages/ListingDetails";
import TripList from "./pages/TripList";
import WishList from "./pages/wishList.jsx"
import PropertyList from "./pages/PropertyList";
import SearchPage from "./pages/SearchPage.jsx"
import ReservationList from "./pages/ReservationList";
import CategoryPage from "./pages/CategoryPage";
function App() {
    return (
        <div className="App">
            <Router> 
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/CreateListing" element={<CreateListing />} />
                    <Route path="/properties/category/:category" element={<CategoryPage />} />
                    <Route path="/properties/:listingId" element={<ListingDetails />} />
                    <Route path="/properties/search/:search" element={<SearchPage />} />
                    <Route path="/:userId/trips" element={<TripList />} />
                    <Route path="/:userId/WishList" element={<WishList />} />
                    <Route path="/:userId/properties" element={<PropertyList />} />
                    <Route path="/:userId/reservations" element={<ReservationList />} />
                   
                    
                </Routes>
            </Router>
        </div>
    );
}

export default App;
