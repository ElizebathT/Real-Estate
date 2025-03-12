import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/guest/Home";
import SignIn from "../pages/guest/SignIn";
import SignUp from "../pages/guest/SignUp";
import About from "../pages/guest/About";

import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFound from "../pages/NotFound";

import AdminProfile from "../pages/admin/AdminProfile";
import AdminHeader from "../components/AdminHeader";
import AdminDashboard from "../pages/admin/AdminDashboard";

import UserHome from "../pages/user/UserHome";
import UserProfile from "../pages/user/UserProfile";
import UserNavBar from "../components/UserNavBar";
import OwnerNavBar from "../components/OwnerNavBar";
import OwnerHome from "../pages/owner/OwnerHome";
import OwnerProfile from "../pages/owner/OwnerProfile";
import AddProperty from "../pages/owner/AddProperty";
import EditProperty from "../pages/owner/EditProperty";
import DeleteProperty from "../pages/owner/DeleteProperty";
import Notifications from "../pages/owner/Notifications";
import Team from "../pages/guest/Team";
import Services from "../pages/guest/Services";
import ContactPage from "../pages/guest/ContactPage";
import SignUpAgent from "../pages/guest/SignUpAgent";
import SignUpOwner from "../pages/guest/SignUpOwner";
import ViewProperty from "../pages/owner/ViewProperty";
import ViewMoreProperty from "../pages/owner/ViewMoreProperty";
import BuyAProperty from "../pages/user/BuyAProperty";
import RentAProperty from "../pages/user/RentAProperty";
import PropertyDetails from "../pages/user/PropertyDetails";
import RentPropertyDetails from "../pages/user/RentPropertyDetails";
import AgentHome from "../pages/agent/AgentHome";
import AgentHeader from "../components/AgentHeader";
import AddProperties from "../pages/agent/AddProperties";
import ViewProperties from "../pages/agent/ViewProperties";
import ViewMore from "../pages/agent/ViewMore";
import Edit from "../pages/agent/Edit";
import NotificationAgent from "../pages/agent/NotificationAgent";
import AgentProfile from "../pages/agent/AgentProfile";
import Chat from "../pages/user/chat";
import OwnerPayment from "../pages/owner/OwnerPayment";
import AgentPayment from "../pages/agent/AgentPayment";



function Layout() {
  const location = useLocation();
  
  const isAdminPage = location.pathname.startsWith("/admin") || location.pathname.startsWith("/dashboard");
  const isUserPage = location.pathname.startsWith("/user") || location.pathname.startsWith("/userprofile");
  const isOwnerPage = location.pathname.startsWith("/owner") || location.pathname.startsWith("/ownerprofile");
  const isAgentPage = location.pathname.startsWith("/agent");

  return (
    <>
      {isAdminPage ? <AdminHeader /> : isUserPage ? <UserNavBar /> : isOwnerPage ? <OwnerNavBar /> : isAgentPage ? <AgentHeader /> : <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signupagent" element={<SignUpAgent />} />
        <Route path="/signupowner" element={<SignUpOwner />} />
        
        <Route path="/*" element={<NotFound />} />

        {/* admin */}
        
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/profile" element={<AdminProfile />} />

        {/* user */}

        <Route path="/userhome" element={<UserHome />} />
        <Route path="/user/userprofile" element={<UserProfile />} />
        <Route path="/user/buyaproperty" element={<BuyAProperty />} />
        <Route path="/user/rentaproperty" element={<RentAProperty />} />
        <Route path="/user/buypropertydetails/:id" element={<PropertyDetails />} />
        <Route path="/user/rentpropertydetails/:id" element={<RentPropertyDetails />} />
        <Route path="/user/chat/:seller/:buyer" element={<Chat />} />

        {/* owner */}
        
        <Route path="/ownerhome" element={<OwnerHome />} />
        <Route path="/owner/ownerprofile" element={<OwnerProfile />} />
        <Route path="/owner/addproperty" element={<AddProperty />} />
        <Route path="/owner/editproperty" element={<EditProperty />} />
        <Route path="/owner/deleteproperty" element={<DeleteProperty />} />
        <Route path="/owner/notifications" element={<Notifications />} />
        <Route path="/owner/viewproperty" element={<ViewProperty />} />
        <Route path="/agent/viewmoreproperties/:id" element={<ViewMoreProperty />} />
        <Route path="/owner/ownerpayment" element={<OwnerPayment />} />

        {/* agent */}

        <Route path="/agenthome" element={<AgentHome />} />
      
        <Route path="/agent/addpropertyy" element={<AddProperties />} />
        <Route path="/agent/viewproperties" element={<ViewProperties />} />
        <Route path="/agent/viewmoreproperties" element={<ViewMore />} />
        <Route path="/agent/editproperties" element={<Edit />} />
        <Route path="/agent/notifications" element={<NotificationAgent />} />
        <Route path="/agent/agentprofile" element={<AgentProfile />} />
        <Route path="/agent/agentpayment" element={<AgentPayment />} />
      </Routes>
      
      {!(isAdminPage || isUserPage || isOwnerPage || isAgentPage) && <Footer />}
    </>
  );
}

export default function Index() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
