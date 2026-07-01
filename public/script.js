const loginBtn = document.getElementById("loginBtn");

async function checkUser() {
  try {
    const response = await fetch(
      "http://localhost:5000/api/auth/check",

      {
        credentials: "include",
      },
    );

    if (response.ok) {
      loginBtn.innerHTML = "Logout";

      loginBtn.onclick = logout;
    } else {
      loginBtn.innerHTML = "Login";

      loginBtn.onclick = () => {
        window.location.href = "login.html";
      };
    }
  } catch (error) {
    loginBtn.innerHTML = "Login";
  }
}

async function logout() {
  await fetch(
    "http://localhost:5000/api/auth/logout",

    {
      method: "POST",

      credentials: "include",
    },
  );

  loginBtn.innerHTML = "Login";

  window.location.href = "login.html";
}

checkUser();
