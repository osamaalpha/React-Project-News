import React from "react";
import { Link } from "react-router-dom";

function SignInButton() {
  return (
    <div class="container">
      <div class="center">
        <Link to="/signIn">
          <button class="btn">
            <svg
              width="180px"
              height="300px"
              viewBox="0 0 180 60"
              class="border"
            >
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
            </svg>
            <span>Sign In</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SignInButton;
