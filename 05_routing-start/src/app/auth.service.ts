//това е фейк сървиз, с който ще си симулираме логин и логаут
export class AuthService {
  loggedIn = false;
  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }
  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}
