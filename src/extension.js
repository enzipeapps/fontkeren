"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
async function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "parphraser" is now active!');
    const editor = vscode.window.activeTextEditor;
    let selection = editor?.selection;
    let hightText = editor?.document.getText(selection);
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('fontkeren.ApplyFont', async () => {
        // vscode.window.showInformationMessage("Error getting data");
        try {
            // vscode.window.showInformationMessage(hightText!);
            // vscode.window.showQuickPick(items);
            // The code you place here will be executed every time your command is executed
            // Display a message box to the user
            // let data=res.data;
            // editor?.edit(editBuilder => {
            // 	editBuilder.replace(editor?.selection, data);
            //   });
            // vscode.window.showInformationMessage(data);
        }
        catch (e) {
            vscode.window.showInformationMessage("Error getting data");
        }
        // vscode.commands.executeCommand("fontkeren.ApplyFont",()=>{
        // 	vscode.window.showInformationMessage(hightText!);
        // });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map