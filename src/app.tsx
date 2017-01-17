import * as React from "react"
import * as ReactDOM from "react-dom"
import { Greeting } from "./components/greeting";
import "cg-style/co-ui-reset.less";
import "cg-style/co-ui-default.less";

ReactDOM.render(<Greeting />, document.getElementById("content"));
