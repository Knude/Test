
const React = require("react");
const QAPI = require("./qapi").default;

export const onRenderBody = (
    {
        setHeadComponents,
        setPostBodyComponents,
    }
) => {

  setHeadComponents([
    <style>{`
        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }
    `}</style>,
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto%20Sans%20JP:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900&display=swap" />,
  ]);

  setPostBodyComponents([
    
    <script
        key="QAPI"
        dangerouslySetInnerHTML={{
            __html: `window.QAPI = ${JSON.stringify(QAPI || {})}`
        }}
    />,
  ]);
}