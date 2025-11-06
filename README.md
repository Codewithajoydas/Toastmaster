# Toastmaster – Lightweight & Customizable Toast Notifications

**Toastmaster** is a lightweight, dependency-free JavaScript library for creating elegant, animated toast notifications in your web applications.
It’s easy to use, customizable, and available via both **npm** and **CDN**.

---

## Installation

### Option 1: Using **npm**

```bash
npm install @codewithajoydas/toastmaster
```

Then import it into your project:

```js
import Toastmaster from "@codewithajoydas/toastmaster";
import "@codewithajoydas/toastmaster/dist/toaster.min.css";
```

---

### Option 2: Using **CDN**

Add the following lines inside your HTML `<head>` or before the closing `<body>` tag:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@codewithajoydas/toastmaster@2.3.5/dist/toaster.min.css">
<script src="https://cdn.jsdelivr.net/npm/@codewithajoydas/toastmaster@2.3.5/dist/toaster.min.js"></script>
```

---

## Usage Example

```html
<script src="https://cdn.jsdelivr.net/npm/@codewithajoydas/toastmaster@2.3.5/dist/toaster.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@codewithajoydas/toastmaster@2.3.5/dist/toaster.min.css">

<script>
  new Toastmaster({
    title: "Error", // text displayed in the toast header
    message: "Please enter your email", // main message body
    type: "error", // success | error | info | warning
    delay: 3000, // auto-close time in milliseconds
    position: "bottomRight", // topRight | topLeft | bottomRight | bottomLeft
    overRideDefaultstyle: false, // true = use your own CSS
    callBackFuntion: () => {
      console.log("Toast closed after timeout or manual close");
    }
  }).showNotification();
</script>

```

---

## Available Options

| Option                 | Type                                                       | Default         | Description                              |
| ---------------------- | ---------------------------------------------------------- | --------------- | ---------------------------------------- |
| `title`                | `string`                                                   | `""`            | Title of the toast notification          |
| `message`              | `string`                                                   | `""`            | Message text displayed inside the toast  |
| `delay`                | `number`                                                   | `3000`          | Duration before toast disappears (in ms) |
| `type`                 | `"success" \| "error" \| "info" \| "warning"`              | `"info"`        | Defines toast styling and icon           |
| `position`             | `"topRight" \| "bottomRight" \| "topLeft" \| "bottomLeft"` | `"bottomRight"` | Placement of toast on screen             |
| `overRideDefaultstyle` | `boolean`                                                  | `false`         | Allows custom CSS overrides              |
| `callBackFuntion`      | `function`                                                 | `null`          | Triggered after toast is removed         |

---

## Styling

You can fully customize Toastmaster’s look by overriding the default classes in your CSS:

```css
.toast.success {
  background-color: #27ae60;
  color: #fff;
}
.toast.error {
  background-color: #e74c3c;
}
```

---

## File Structure

```
toastmaster/
│
├── dist/
│   ├── toaster.min.js
│   └── toaster.min.css
├── src/
│   ├── toaster.js
│   └── toaster.css
├── package.json
└── README.md
```

---

##  Build & Development

If you want to modify and rebuild:

```bash
npm run build
```

This generates the minified files inside `/dist`.

---

##  Author

**Developed by [Ajoy Das](https://codewithajoydas.live)**

> Passionate about building elegant, minimal, and functional web tools.

---

##  License

**MIT License**
Feel free to use it in both personal and commercial projects.

