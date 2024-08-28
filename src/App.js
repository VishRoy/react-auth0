import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { loginWithRedirect, user, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="App">
      <header className="App-header">
      <h2>
          Authentication using Auth0
        </h2>
      {isAuthenticated && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      
     <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
     Log Out
   </button></div>)}
        
        {!isAuthenticated && <button onClick={() => loginWithRedirect()}>Log In</button>}
       
      </header>
    </div>
  );
}

export default App;
