
import React from 'react';
import { app_alert, app_confirm } from "../dist/index.es.js"

function App() {

  return (
    <>
      <button onClick={async () => {
			app_alert({
				title: '',
				content: '選項內容不可為空！且至少要有兩個選項！',
			});


      }}>
        Click me
      </button>
    </>
  )
}

export default App
