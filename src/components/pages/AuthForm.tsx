import React, { useState } from "react";
import { FirebaseError } from "firebase/app";
import { useAuth } from "../../contexts/AuthContext";
import { Box, Paper, styled, Typography ,TextField, Button} from "@mui/material";

const StyledContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  width: "50%",
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
}));

const StyledContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: '50%'
}));

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login, signup } = useAuth();

  const getErrorMessage = (error: FirebaseError) => {
    switch (error.code) {
      case "auth/email-already-in-use":
        return "This email is already registered. Please login instead.";
      case "auth/weak-password":
        return "Password should be at least 6 characters long.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/user-not-found":
        return "No account found with this email. Please sign up instead.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/too-many-requests":
        return "Too many failed attempts. Please try again later.";
      case "auth/network-request-failed":
        return "Network error. Please check your internet connection.";
      case "auth/invalid-credential":
        return "Invalid email or password. Please try again.";
      case "auth/operation-not-allowed":
        return "Email/password sign-in is not enabled. Please contact support.";
      default:
        console.error("Firebase Auth Error:", error.code, error.message);
        return `Authentication error: ${error.code}`;
    }
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password);
      }
    } catch (err) {
      console.error("Auth Error:", err);
      if (err instanceof FirebaseError) {
        setError(getErrorMessage(err));
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <StyledContainer>
      <StyledPaper>
        <StyledContentBox>
          <Typography variant="h1" fontWeight="bold">
            Rabinhood
          </Typography>
        </StyledContentBox>
        <Box>
          <form onSubmit={handleSubmit}>
            <div>{isLogin ? "Welcome Back" : "Create Account"}</div>
            <p>
              {isLogin
                ? "Sign in to access your account"
                : "Sign up to get started"}
            </p>
            {error && <div>{error}</div>}
            <TextField
              id="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
              size="small"
            />
            <TextField
            size="small"
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              minLength={6}
              required
              fullWidth
              margin="normal"
            />
            <Button
              type="submit"
              disabled={loading}
              variant="contained"
              fullWidth
              sx={{ mt: 2, mb: 2 }}
            >
              {loading ? "loading..." : isLogin ? "Sign In" : "Sign Up"}
            </Button>
            <Button
              variant="text"
              onClick={() => {
                setIsLogin((prev) => !prev);
                setError("");
                setEmail("");
                setPassword("");
              }}
              sx={{
                textTransform: 'none',
                fontSize: '0.875rem'
              }}
            >
              {isLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Sign In"}
            </Button>
          </form>
        </Box>
      </StyledPaper>
    </StyledContainer>
    // <div className="min-h-screen bg-gray-100">
    //   <div className="container mx-auto py-12 px-4">
    //     <div className="w-full max-w-md">
    //       <form
    //         onSubmit={handleSubmit}
    //         className="bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4"
    //       >
    //         <div className="text-center mb-8">
    //           <h2 className="text-3xl font-bold text-gray-800">
    //             {isLogin ? "Welcome Back" : "Create Account"}
    //           </h2>
    //           <p className="text-gray-600 mt-2">
    //             {isLogin
    //               ? "Sign in to access your account"
    //               : "Sign up to get started"}
    //           </p>
    //         </div>

    //         {error && (
    //           <div className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg border border-red-200">
    //             {error}
    //           </div>
    //         )}

    //         <div className="mb-4">
    //           <label
    //             className="block text-gray-700 text-sm font-bold mb-2"
    //             htmlFor="email"
    //           >
    //             Email
    //           </label>
    //           <input
    //             id="email"
    //             type="email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
    //             placeholder="you@example.com"
    //             required
    //           />
    //         </div>

    //         <div className="mb-6">
    //           <label
    //             className="block text-gray-700 text-sm font-bold mb-2"
    //             htmlFor="password"
    //           >
    //             Password
    //           </label>
    //           <input
    //             id="password"
    //             type="password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
    //             placeholder="••••••••"
    //             minLength={6}
    //             required
    //           />
    //         </div>

    //         <button
    //           type="submit"
    //           disabled={loading}
    //           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
    //         >
    //           {loading ? (
    //             <Loader2 className="animate-spin h-5 w-5" />
    //           ) : isLogin ? (
    //             <>
    //               <Login />
    //               Sign In
    //             </>
    //           ) : (
    //             <>
    //               <Person2 className="w-5 h-5 mr-2" />
    //               Sign Up
    //             </>
    //           )}
    //         </button>

    //         <div className="text-center mt-4">
    //           <button
    //             type="button"
    //             onClick={() => {
    //               setIsLogin(!isLogin);
    //               setError("");
    //               setEmail("");
    //               setPassword("");
    //             }}
    //             className="text-blue-500 hover:text-blue-600 text-sm font-medium"
    //           >
    //             {isLogin
    //               ? "Don't have an account? Sign Up"
    //               : "Already have an account? Sign In"}
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
}
