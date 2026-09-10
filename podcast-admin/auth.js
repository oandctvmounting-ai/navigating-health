/*
 * ============================================================
 *  auth.js — simple shared-password gate + "stay logged in"
 *  On success we store a session token in localStorage so Cindy
 *  doesn't have to re-enter the password every visit.
 * ============================================================
 */

function isLoggedIn() {
  return localStorage.getItem(SESSION_KEY) === "authenticated";
}

function login(password) {
  if (password === ADMIN_PASSWORD) {
    localStorage.setItem(SESSION_KEY, "authenticated");
    return true;
  }
  return false;
}

function logout() {
  localStorage.removeItem(SESSION_KEY);
  window.location.href = "login.html";
}