import ReactCodeMirror from "@uiw/react-codemirror";
import React from "react";
import Split from "react-split";
import PreferenceNav from "./PreferenceNav/PreferenceNav";
import CodeMirror from "@uiw/react-codemirror"
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import {java} from "@codemirror/lang-java"


type PlaygroundProps={}

const Playground:React.FC<PlaygroundProps>= () =>{
    return( <div className="flex flex-col bg-dark-layer-1 relative">
            <PreferenceNav/>

            <Split className="h-[calc(100vh-94px)]" direction="vertical" sizes={[60,40]} minSize={60}>
                <div className="w-full overflow auto">
                <CodeMirror
                    value={
                        "import java.util.*;\n" +
                        "public class MyClass {\n" +
                        "    public static void main(String[] args) {\n" +
                        "        // Your Java code here\n" +
                        "    }\n" +
                        "}"
                    }
                    theme={vscodeDark}
                    extensions={[java()]}
                    style={{ fontSize: 16 }}
                    />
                </div>
                <div>testcases</div>
            </Split>

        </div>)

}
export default Playground;