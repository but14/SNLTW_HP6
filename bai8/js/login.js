document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.querySelector(".toggle-password");
  const passwordInput = document.getElementById("password");

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", function () {
      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      this.classList.toggle("fa-eye-slash");
    });
  }

  const loginForm = document.querySelector(".login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (!email || !password) {
        alert("Vui lòng điền đầy đủ email và mật khẩu");
        return;
      }

      console.log("Login attempt with:", { email, password });

      window.location.href = "index.html";
    });
  }

  const googleBtn = document.querySelector(".btn-social.google");
  const facebookBtn = document.querySelector(".btn-social.facebook");

  if (googleBtn) {
    googleBtn.addEventListener("click", function () {
      alert("Chức năng đăng nhập với Google đang được phát triển");
    });
  }

  if (facebookBtn) {
    facebookBtn.addEventListener("click", function () {
      alert("Chức năng đăng nhập với Facebook đang được phát triển");
    });
  }
});
