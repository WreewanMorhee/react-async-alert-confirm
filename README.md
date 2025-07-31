## React Async Alert Confirm

React Async Alert Confirm is a plugin for ReactJS project to use alert dialog and confirm dialog in async way.
Seperate logic for handling yes or no only ! No any callback needed !
Only React and pure CSS, super light and super fast !
If you don't like call back, and want the good ux and dx component, this is a good thing for you !

## How to install

1. go to your terminal and type the following:

```bash
npm i react-async-alert-confirm
```

## How to use:

1. set portal root in your .html, due to this plugin make use of react portal

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React Project</title>
  </head>
  <body>
    <div id="root"></div>

    <div id="confirm-and-alert"></div>
    /* Add this to be your portal root, default Id uses "confirm-and-alert", you
    could also rename it */
  </body>
</html>
```

2. In your component, import alert or confirm function and use it.

```js
import { app_alert } from "react-async-alert-confirm";

const DemoComp = () => {
  const clickToAlert = async () => {
    /* All the Parameters are optional, no required */

    await app_alert({
      title: "Your Alert Title",
      content: "I Am an Alert Content",
      confirm_text: "Okay",
      node_name:
        "confirm-and-alert" /* If you changed Id of portal root, remember to specify here */,
    });

    console.warn("after alert");
    /* This will be executed after you click okay btn on Alert Dialog ! */
  };

  return (
    <>
      <button onClick={clickToAlert}>Click Me</button>
    </>
  );
};
```

```js
import { app_confirm } from "react-async-alert-confirm";

const DemoComp = () => {
  const clickToConfirm = async () => {
    /* All the Parameters are optional, no required */

    const is_confirm = await app_confirm({
      title: "Your Confirm Title",
      content: "I Am a Confirm Content",
      cancel_text: "Cancel",
      confirm_text: "Confirm",
      node_name:
        "confirm-and-alert" /* If you changed Id of portal root, remember to specify here */,
    });

    console.warn(is_confirm, "after confirm");
    /* This will be executed after you click okay btn on Confirm Dialog ! */
    /* is_confirm will be true if user click confirm btn, will be false if user click cancel btn */
  };

  return (
    <>
      <button onClick={clickToConfirm}>Click Me</button>
    </>
  );
};
```

### No Any Callback Function Needed.

### Seperate Alert/Confirm Dialog and Your Other Business/Display Logic Very Clearly.

### Write It in Async/Await Way

### Only React and Pure CSS, Super Fast! And Also Enhance UX and Interaction!

<br /><br />

## Thank You for Your Use

It's welcome to report me any issue or bug, thanks a lot!

## Author

[WreewanMorhee](https://github.com/WreewanMorhee)
