/**
 * Displays a customizable toast notification.
 *
 * @param {Object} options - Configuration object for the toast.
 * @param {string} [options.message=""] - The message text to display inside the toast.
 * @param {string} [options.title=""] - Optional title for the toast notification.
 * @param {number} [options.delay=3000] - Duration (in milliseconds) before the toast disappears.
 * @param {"success" | "error" | "info" | "warning"} [options.type="info"] - Type of toast for styling or icon purposes.
 * @param {Function} [options.callBackFuntion] - Optional callback function executed after the toast is removed.
 * @returns {void}
 */
`use strict`;

class Toastmaster {
  constructor({
    title,
    message,
    delay,
    type,
    position = "bottomRight",
    overRideDefaultstyle,
    callBackFuntion,
  } = {}) {
    this.title = title;
    this.message = message;
    this.delay = delay;
    this.type = type;
    this.position = position;
    this.overRideDefaultstyle = overRideDefaultstyle;
    this.callBackFuntion = callBackFuntion;
    this.buttons = buttons;
  }

  showNotification() {
    let t = document.querySelector(".toast");
    if (t) {
      t.remove();
    }
    document.body.insertAdjacentHTML(
      "afterbegin",
      `  <div class="toast ${this.type} ${this.position}">
        <div class="toast_title">
            <span class="title">${this.title}</span>
            <span class="close" onclick="${this.closeNotification()}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
            </svg></span>
        </div>
        <div class="toast_msg">
            <span class="icon">${
              this.type === "success"
                ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-party-popper-icon lucide-party-popper"><path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/></svg>`
                : this.type === "error"
                ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-alert-icon lucide-shield-alert"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>`
                : this.type === "info"
                ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert-icon lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`
                : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-alert-icon lucide-shield-alert"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>`
            }</span>
            <span class="msg"> ${this.message}</span>
        </div>
    </div>`
    );

    setTimeout(() => {
      this.closeNotification();
    }, this.delay);
    const toast = document.querySelector(".toast");
    const close = toast.querySelector(".close");
    close.addEventListener("click", () => {
      this.closeNotification();
    });
  }

  closeNotification() {
    const toast = document.querySelector(".toast");
    if (!toast) return;
    toast.classList.add("hide");
    toast.addEventListener("transitionend", () => {
      toast.remove();
    });
  }
}
