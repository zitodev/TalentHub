const loginBtn = document.getElementById("loginBtn");

async function checkUser() {
  try {
    const response = await fetch(
      "https://talenthub-v85u.onrender.com/api/auth/check",

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
    "https://talenthub-v85u.onrender.com/api/auth/logout",

    {
      method: "POST",

      credentials: "include",
    },
  );

  loginBtn.innerHTML = "Login";

  window.location.href = "login.html";
}

checkUser();
