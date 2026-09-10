/*
 * ============================================================
 *  auth.js — simple shared-password gate + "stay logged in"
 *  On success we store a session token in localStorage so Cindy
 *  doesn't have to re-enter the password every visit.
 * ============================================================
 */

function isLoggedIn() {
  try {
    return localStorage.getItem(SESSION_KEY) === "authenticated";
  } catch (e) {
    return false;
  }
}

function login(password) {
  if (password === ADMIN_PASSWORD) {
    try { localStorage.setItem(SESSION_KEY, "authenticated"); } catch (e) {}
    return true;
  }
  return false;
}

function logout() {
  try { localStorage.removeItem(SESSION_KEY); } catch (e) {}
  window.location.href = "login.html";
}