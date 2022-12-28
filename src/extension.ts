// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import FontsCharacter from './fontcharacterModel';

import FontConverter from './fontconverter';

// import * as fonts from "../assets/fonts.json";
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
 export async function activate(context: vscode.ExtensionContext) {
	
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "parphraser" is now active!');
	let font=[
		{
			"id": 67,
			"name": "Old Italic Text",
			"font": {"0":"Ꝋ","1":"ᛑ","2":"ᘖ","3":"ᙣ","4":"ᔦ","5":"ᔕ","6":"ᑳ","7":"ᒣ","8":"ზ","9":"ᖗ","a":"𐌀","b":"𐌁","c":"𐌂","d":"𐌃","e":"𐌄","f":"𐌅","g":"Ᏽ","h":"𐋅","i":"𐌉","j":"Ꮭ","k":"𐌊","l":"𐌋","m":"𐌌","n":"𐌍","o":"Ꝋ","p":"𐌐","q":"𐌒","r":"𐌓","s":"𐌔","t":"𐌕","u":"𐌵","v":"ᕓ","w":"Ꮤ","x":"𐋄","y":"𐌙","z":"Ɀ","A":"𐌀","B":"𐌁","C":"𐌂","D":"𐌃","E":"𐌄","F":"𐌅","G":"Ꮭ","H":"𐋅","I":"𐌉","K":"𐌊","L":"𐌋","M":"𐌌","N":"𐌍","O":"Ꝋ","P":"𐌐","Q":"𐌒","R":"𐌓","S":"𐌔","T":"𐌕","U":"𐌵","V":"ᕓ","W":"Ꮤ","X":"𐋄","Y":"𐌙","Z":"Ɀ"},
			"category":"all, cool",
			"created_at": "2022-10-31T06:07:14.000000Z",
			"updated_at": "2022-10-31T06:07:14.000000Z"
		},
		{
			"id": 68,
			"name": "Parenthesis",
			"font": {"0":"0","1":"⑴","2":"⑵","3":"⑶","4":"⑷","5":"⑸","6":"⑹","7":"⑺","8":"⑻","9":"⑼","a":"⒜","b":"⒝","c":"⒞","d":"⒟","e":"⒠","f":"⒡","g":"⒢","h":"⒣","i":"⒤","j":"⒥","k":"⒦","l":"⒧","m":"⒨","n":"⒩","o":"⒪","p":"⒫","q":"⒬","r":"⒭","s":"⒮","t":"⒯","u":"⒰","v":"⒱","w":"⒲","x":"⒳","y":"⒴","z":"⒵","A":"⒜","B":"⒝","C":"⒞","D":"⒟","E":"⒠","F":"⒡","G":"⒥","H":"⒣","I":"⒤","K":"⒦","L":"⒧","M":"⒨","N":"⒩","O":"⒪","P":"⒫","Q":"⒬","R":"⒭","S":"⒮","T":"⒯","U":"⒰","V":"⒱","W":"⒲","X":"⒳","Y":"⒴","Z":"⒵"},
			"category":"all, cool",
			"created_at": "2022-10-31T06:07:14.000000Z",
			"updated_at": "2022-10-31T06:07:14.000000Z"
		},
		{
			"id": 69,
			"name": "FullWidth",
			"font": {"0":"０","1":"１","2":"２","3":"３","4":"４","5":"５","6":"６","7":"７","8":"８","9":"９","a":"ａ","b":"ｂ","c":"ｃ","d":"ｄ","e":"ｅ","f":"ｆ","g":"ｇ","h":"ｈ","i":"ｉ","j":"ｊ","k":"ｋ","l":"ｌ","m":"ｍ","n":"ｎ","o":"ｏ","p":"ｐ","q":"ｑ","r":"ｒ","s":"ｓ","t":"ｔ","u":"ｕ","v":"ｖ","w":"ｗ","x":"ｘ","y":"ｙ","z":"ｚ","A":"Ａ","B":"Ｂ","C":"Ｃ","D":"Ｄ","E":"Ｅ","F":"Ｆ","G":"Ｊ","H":"Ｈ","I":"Ｉ","K":"Ｋ","L":"Ｌ","M":"Ｍ","N":"Ｎ","O":"Ｏ","P":"Ｐ","Q":"Ｑ","R":"Ｒ","S":"Ｓ","T":"Ｔ","U":"Ｕ","V":"Ｖ","W":"Ｗ","X":"Ｘ","Y":"Ｙ","Z":"Ｚ"},
			"category":"all, cool",
			"created_at": "2022-10-31T06:07:14.000000Z",
			"updated_at": "2022-10-31T06:07:14.000000Z"
		},
		{
			"id": 70,
			"name": "Russian",
			"font": {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"а","b":"б","c":"c","d":"д","e":"ё","f":"f","g":"g","h":"н","i":"ї","j":"j","k":"к","l":"г","m":"ѫ","n":"п","o":"ѳ","p":"p","q":"ф","r":"я","s":"$","t":"т","u":"ц","v":"ѵ","w":"щ","x":"ж","y":"ч","z":"з","A":"А","B":"Б","C":"C","D":"Д","E":"Є","F":"F","G":"J","H":"H","I":"Ї","K":"К","L":"Г","M":"Ѫ","N":"Й","O":"Ѳ","P":"P","Q":"Ф","R":"Я","S":"$","T":"T","U":"Ц","V":"Ѵ","W":"Ш","X":"Ж","Y":"Ч","Z":"З"},
			"category":"all, cool",
			"created_at": "2022-10-31T06:07:14.000000Z",
			"updated_at": "2022-10-31T06:07:14.000000Z"
		},
		{
			"id": 71,
			"name": "Japanese",
			"font": {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"卂","b":"乃","c":"匚","d":"ᗪ","e":"乇","f":"千","g":"Ꮆ","h":"卄","i":"丨","j":"ﾌ","k":"Ҝ","l":"ㄥ","m":"爪","n":"几","o":"ㄖ","p":"卩","q":"Ɋ","r":"尺","s":"丂","t":"ㄒ","u":"ㄩ","v":"ᐯ","w":"山","x":"乂","y":"ㄚ","z":"乙","A":"卂","B":"乃","C":"匚","D":"ᗪ","E":"乇","F":"千","G":"ﾌ","H":"卄","I":"丨","K":"Ҝ","L":"ㄥ","M":"爪","N":"几","O":"ㄖ","P":"卩","Q":"Ɋ","R":"尺","S":"丂","T":"ㄒ","U":"ㄩ","V":"ᐯ","W":"山","X":"乂","Y":"ㄚ","Z":"乙"},
			"category":"all, cool",
			"created_at": "2022-10-31T06:07:14.000000Z",
			"updated_at": "2022-10-31T06:07:14.000000Z"
		},
		{
			"id": 72,
			"name": "Arabic",
			"font": {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ค","b":"๒","c":"ς","d":"๔","e":"є","f":"Ŧ","g":"ﻮ","h":"ђ","i":"เ","j":"ן","k":"к","l":"l","m":"๓","n":"ภ","o":"๏","p":"ק","q":"ợ","r":"г","s":"ร","t":"t","u":"ย","v":"ש","w":"ฬ","x":"ץ","y":"א","z":"z","A":"ค","B":"๒","C":"ς","D":"๔","E":"є","F":"Ŧ","G":"ן","H":"ђ","I":"เ","K":"к","L":"l","M":"๓","N":"ภ","O":"๏","P":"ק","Q":"ợ","R":"г","S":"ร","T":"t","U":"ย","V":"ש","W":"ฬ","X":"ץ","Y":"א","Z":"z"},
			"category":"all, cool",
			"created_at": "2022-10-31T06:07:14.000000Z",
			"updated_at": "2022-10-31T06:07:14.000000Z"
		},
		{
			"id": 73,
			"name": "RockDots",
			"font": {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ä","b":"ḅ","c":"ċ","d":"ḋ","e":"ë","f":"ḟ","g":"ġ","h":"ḧ","i":"ï","j":"j","k":"ḳ","l":"ḷ","m":"ṁ","n":"ṅ","o":"ö","p":"ṗ","q":"q","r":"ṛ","s":"ṡ","t":"ẗ","u":"ü","v":"ṿ","w":"ẅ","x":"ẍ","y":"ÿ","z":"ż","A":"Ä","B":"Ḅ","C":"Ċ","D":"Ḋ","E":"Ё","F":"Ḟ","G":"J","H":"Ḧ","I":"Ї","K":"Ḳ","L":"Ḷ","M":"Ṁ","N":"Ṅ","O":"Ö","P":"Ṗ","Q":"Q","R":"Ṛ","S":"Ṡ","T":"Ṫ","U":"Ü","V":"Ṿ","W":"Ẅ","X":"Ẍ","Y":"Ÿ","Z":"Ż"},
			"category":"all, cool",
			"created_at": "2022-10-31T06:07:14.000000Z",
			"updated_at": "2022-10-31T06:07:14.000000Z"
		},
		{
			"id": 74,
			"name": "Inverted",
			"font": {"0":"0","1":"Ɩ","2":"ᘔ","3":"Ɛ","4":"߈","5":"9","6":"5","7":"ㄥ","8":"8","9":"6","a":"ɐ","b":"q","c":"ɔ","d":"p","e":"ǝ","f":"ɟ","g":"ƃ","h":"ɥ","i":"ı","j":"ɾ","k":"ʞ","l":"ן","m":"ɯ","n":"u","o":"o","p":"d","q":"b","r":"ɹ","s":"s","t":"ʇ","u":"n","v":"ʌ","w":"ʍ","x":"x","y":"ʎ","z":"z","A":"∀","B":"ᗺ","C":"Ɔ","D":"ᗡ","E":"Ǝ","F":"Ⅎ","G":"ſ","H":"H","I":"I","K":"ꓘ","L":"˥","M":"W","N":"N","O":"O","P":"Ԁ","Q":"ტ","R":"ᴚ","S":"S","T":"⊥","U":"∩","V":"Λ","W":"M","X":"X","Y":"⅄","Z":"Z"},
			"category":"all, cool",
			"created_at": "2022-10-31T06:07:14.000000Z",
			"updated_at": "2022-10-31T06:07:14.000000Z"
		},
		{
			"id": 75,
			"name": "Mix1",
			"font": {"0":"０","1":"➀","2":"❷","3":"➂","4":"４","5":"❺","6":"６","7":"❼","8":"➇","9":"❾","a":"𝐚","b":"๒","c":"Ć","d":"𝓭","e":"𝑒","f":"ⓕ","g":"𝕘","h":"𝓱","i":"Ɨ","j":"Ｊ","k":"Ⓚ","l":"ᒪ","m":"м","n":"𝐍","o":"Ø","p":"卩","q":"q","r":"я","s":"丂","t":"𝐓","u":"ย","v":"ｖ","w":"𝔀","x":"x","y":"𝔂","z":"𝓩","A":"𝐀","B":"β","C":"ⓒ","D":"𝓭","E":"𝑒","F":"ⓕ","G":"ן","H":"ⓗ","I":"Ꭵ","K":"ᵏ","L":"𝕃","M":"ｍ","N":"ⓝ","O":"𝓸","P":"Ƥ","Q":"ℚ","R":"ⓡ","S":"𝓼","T":"Ｔ","U":"𝓾","V":"v","W":"𝓌","X":"ⓧ","Y":"ץ","Z":"Ż"},
			"category":"all, cool, glitch",
			"created_at": "2022-10-31T06:07:14.000000Z",
			"updated_at": "2022-10-31T06:07:14.000000Z"
		},
		{
			"id": 76,
			"name": "Mix2",
			"font": {"0":"０","1":"❶","2":"２","3":"３","4":"４","5":"５","6":"６","7":"７","8":"➇","9":"❾","a":"𝐚","b":"ᵇ","c":"¢","d":"ᗪ","e":"ｅ","f":"ғ","g":"g","h":"ⓗ","i":"𝕀","j":"ｊ","k":"Ҝ","l":"ᒪ","m":"м","n":"ภ","o":"𝑜","p":"ρ","q":"𝓺","r":"я","s":"ᔕ","t":"丅","u":"𝓊","v":"𝐯","w":"Ŵ","x":"ⓧ","y":"Ⓨ","z":"ℤ","A":"ａ","B":"ｂ","C":"𝔠","D":"ᵈ","E":"έ","F":"𝔽","G":"Ⓙ","H":"ⓗ","I":"𝓘","K":"Ќ","L":"l","M":"𝓂","N":"ή","O":"𝐎","P":"𝓟","Q":"𝕢","R":"𝔯","S":"𝐒","T":"𝕥","U":"𝓊","V":"ν","W":"ᗯ","X":"Ⓧ","Y":"у","Z":"Ż"},
			"category":"all, cool, glitch",
			"created_at": "2022-10-31T06:07:14.000000Z",
			"updated_at": "2022-10-31T06:07:14.000000Z"
		},
		{
			"id": 77,
			"name": "Mix3",
			"font": {"0":"０","1":"１","2":"❷","3":"３","4":"❹","5":"➄","6":"６","7":"７","8":"➇","9":"❾","a":"α","b":"𝕓","c":"匚","d":"Đ","e":"ⓔ","f":"𝐟","g":"Ꮆ","h":"ｈ","i":"𝒾","j":"ʲ","k":"к","l":"ⓛ","m":"Μ","n":"ℕ","o":"ㄖ","p":"ᑭ","q":"ᵠ","r":"ℝ","s":"丂","t":"𝐭","u":"ᵘ","v":"𝓋","w":"ώ","x":"χ","y":"𝕐","z":"𝔃","A":"ᗩ","B":"𝐁","C":"Ｃ","D":"𝒹","E":"𝒆","F":"𝔣","G":"ڶ","H":"𝒽","I":"𝒾","K":"ķ","L":"𝔩","M":"ᗰ","N":"𝓃","O":"𝓸","P":"𝐏","Q":"Ω","R":"ｒ","S":"ｓ","T":"ｔ","U":"υ","V":"𝓥","W":"ώ","X":"Ж","Y":"Ƴ","Z":"z"},
			"category":"all, cool, glitch",
			"created_at": "2022-10-31T06:07:14.000000Z",
			"updated_at": "2022-10-31T06:07:14.000000Z"
		},
		{
			"id": 78,
			"name": "Handwrite",
			"font": {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"𝒶","b":"𝒷","c":"𝒸","d":"𝒹","e":"𝑒","f":"𝒻","g":"𝑔","h":"𝒽","i":"𝒾","j":"𝒿","k":"𝓀","l":"𝓁","m":"𝓂","n":"𝓃","o":"𝑜","p":"𝓅","q":"𝓆","r":"𝓇","s":"𝓈","t":"𝓉","u":"𝓊","v":"𝓋","w":"𝓌","x":"𝓍","y":"𝓎","z":"𝓏","A":"𝒜","B":"𝐵","C":"𝒞","D":"𝒟","E":"𝐸","F":"𝐹","G":"𝒥","H":"𝐻","I":"𝐼","K":"𝒦","L":"𝐿","M":"𝑀","N":"𝒩","O":"𝒪","P":"𝒫","Q":"𝒬","R":"𝑅","S":"𝒮","T":"𝒯","U":"𝒰","V":"𝒱","W":"𝒲","X":"𝒳","Y":"𝒴","Z":"𝒵"},
			"category":"all, cool, cursive, italic",
			"created_at": "2022-10-31T06:07:14.000000Z",
			"updated_at": "2022-10-31T06:07:14.000000Z"
		},
		{
			"id": 79,
			"name": "Bubbles",
			"font": {"0":"⓪","1":"①","2":"②","3":"③","4":"④","5":"⑤","6":"⑥","7":"⑦","8":"⑧","9":"⑨","a":"ⓐ","b":"ⓑ","c":"ⓒ","d":"ⓓ","e":"ⓔ","f":"ⓕ","g":"ⓖ","h":"ⓗ","i":"ⓘ","j":"ⓙ","k":"ⓚ","l":"ⓛ","m":"ⓜ","n":"ⓝ","o":"ⓞ","p":"ⓟ","q":"ⓠ","r":"ⓡ","s":"ⓢ","t":"ⓣ","u":"ⓤ","v":"ⓥ","w":"ⓦ","x":"ⓧ","y":"ⓨ","z":"ⓩ","A":"Ⓐ","B":"Ⓑ","C":"Ⓒ","D":"Ⓓ","E":"Ⓔ","F":"Ⓕ","G":"Ⓙ","H":"Ⓗ","I":"Ⓘ","K":"Ⓚ","L":"Ⓛ","M":"Ⓜ","N":"Ⓝ","O":"Ⓞ","P":"Ⓟ","Q":"Ⓠ","R":"Ⓡ","S":"Ⓢ","T":"Ⓣ","U":"Ⓤ","V":"Ⓥ","W":"Ⓦ","X":"Ⓧ","Y":"Ⓨ","Z":"Ⓩ"},
			"category":"all, small",
			"created_at": "2022-10-31T06:07:14.000000Z",
			"updated_at": "2022-10-31T06:07:14.000000Z"
		},
		{
			"id": 80,
			"name": "BubbleBlack",
			"font": {"0":"⓿","1":"➊","2":"➋","3":"➌","4":"➍","5":"➎","6":"➏","7":"➐","8":"➑","9":"➒","a":"🅐","b":"🅑","c":"🅒","d":"🅓","e":"🅔","f":"🅕","g":"🅖","h":"🅗","i":"🅘","j":"🅙","k":"🅚","l":"🅛","m":"🅜","n":"🅝","o":"🅞","p":"🅟","q":"🅠","r":"🅡","s":"🅢","t":"🅣","u":"🅤","v":"🅥","w":"🅦","x":"🅧","y":"🅨","z":"🅩","A":"🅐","B":"🅑","C":"🅒","D":"🅓","E":"🅔","F":"🅕","G":"🅙","H":"🅗","I":"🅘","K":"🅚","L":"🅛","M":"🅜","N":"🅝","O":"🅞","P":"🅟","Q":"🅠","R":"🅡","S":"🅢","T":"🅣","U":"🅤","V":"🅥","W":"🅦","X":"🅧","Y":"🅨","Z":"🅩"},
			"category":"all, small, bold",
			"created_at": "2022-10-31T06:09:28.000000Z",
			"updated_at": "2022-10-31T06:09:28.000000Z"
		},
		{
			"id": 81,
			"name": "SuperScript",
			"font": {"0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","a":"ᵃ","b":"ᵇ","c":"ᶜ","d":"ᵈ","e":"ᵉ","f":"ᶠ","g":"ᵍ","h":"ʰ","i":"ⁱ","j":"ʲ","k":"ᵏ","l":"ˡ","m":"ᵐ","n":"ⁿ","o":"ᵒ","p":"ᵖ","q":"q","r":"ʳ","s":"ˢ","t":"ᵗ","u":"ᵘ","v":"ᵛ","w":"ʷ","x":"ˣ","y":"ʸ","z":"ᶻ","A":"ᴬ","B":"ᴮ","C":"ᶜ","D":"ᴰ","E":"ᴱ","F":"ᶠ","G":"ᴶ","H":"ᴴ","I":"ᴵ","K":"ᴷ","L":"ᴸ","M":"ᴹ","N":"ᴺ","O":"ᴼ","P":"ᴾ","Q":"Q","R":"ᴿ","S":"ˢ","T":"ᵀ","U":"ᵁ","V":"ⱽ","W":"ᵂ","X":"ˣ","Y":"ʸ","Z":"ᶻ"},
			"category":"all, small",
			"created_at": "2022-10-31T06:09:28.000000Z",
			"updated_at": "2022-10-31T06:09:28.000000Z"
		},
		{
			"id": 82,
			"name": "MathSans",
			"font": {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"𝖺","b":"𝖻","c":"𝖼","d":"𝖽","e":"𝖾","f":"𝖿","g":"𝗀","h":"𝗁","i":"𝗂","j":"𝗃","k":"𝗄","l":"𝗅","m":"𝗆","n":"𝗇","o":"𝗈","p":"𝗉","q":"𝗊","r":"𝗋","s":"𝗌","t":"𝗍","u":"𝗎","v":"𝗏","w":"𝗐","x":"𝗑","y":"𝗒","z":"𝗓","A":"𝖠","B":"𝖡","C":"𝖢","D":"𝖣","E":"𝖤","F":"𝖥","G":"𝖩","H":"𝖧","I":"𝖨","K":"𝖪","L":"𝖫","M":"𝖬","N":"𝖭","O":"𝖮","P":"𝖯","Q":"𝖰","R":"𝖱","S":"𝖲","T":"𝖳","U":"𝖴","V":"𝖵","W":"𝖶","X":"𝖷","Y":"𝖸","Z":"𝖹"},
			"category":"all, small",
			"created_at": "2022-10-31T06:09:28.000000Z",
			"updated_at": "2022-10-31T06:09:28.000000Z"
		}
		
	];

// let itemdata :any=[];
// for (let i in fonts.fontList){
// itemdata.add({
// 	label:fonts.fontList[i].name ,
// 	description: fonts.fontList[i].category,
// 	detail: "$(files) Test2 Detail with icon",
// });
// }




let items: vscode.QuickPickItem[] =  font.map((item): any => Object.assign(item,   {
	label: item.name,
	description: item.category,
	detail: item.font[0]+item.font.a+item.font.A,
  }));




	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('fontkeren.ApplyFont', async() => {

		// vscode.window.showInformationMessage("Error getting data");
		try{
			const editor = vscode.window.activeTextEditor;
let selection = editor?.selection;
			// vscode.window.showInformationMessage(hightText!);
		let pickeditem=	await vscode.window.showQuickPick(items);
		let hightText = editor?.document.getText(selection);
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		// let data=res.data;
	let selecteditem=font.find(item => item.name === pickeditem?.label); 
	let foncharacterobject=new FontsCharacter(
		selecteditem!.font[0],
		selecteditem!.font[1],
		selecteditem!.font[2],
		selecteditem!.font[3],
		selecteditem!.font[4],
		selecteditem!.font[5],
		selecteditem!.font[6],
		selecteditem!.font[7],
		selecteditem!.font[8],
		selecteditem!.font[9],
		selecteditem!.font.a,
		selecteditem!.font.b,
		selecteditem!.font.c,
		selecteditem!.font.d,
		selecteditem!.font.e,
		selecteditem!.font.f,
		selecteditem!.font.g,
		selecteditem!.font.h,
		selecteditem!.font.i,
		selecteditem!.font.j,
		selecteditem!.font.k,
		selecteditem!.font.l,
		selecteditem!.font.m,
		selecteditem!.font.n,
		selecteditem!.font.o,
		selecteditem!.font.p,
		selecteditem!.font.q,
		selecteditem!.font.r,
		selecteditem!.font.s,
		selecteditem!.font.t,
		selecteditem!.font.u,
		selecteditem!.font.v,
		selecteditem!.font.w,
		selecteditem!.font.x,
		selecteditem!.font.y,
		selecteditem!.font.z,
		selecteditem!.font.A,
		selecteditem!.font.B,
		selecteditem!.font.C,
		selecteditem!.font.D,
		selecteditem!.font.E,
		selecteditem!.font.F,
		selecteditem!.font.G,
		selecteditem!.font.H,
		selecteditem!.font.I,
		selecteditem!.font.j,
		selecteditem!.font.K,
		selecteditem!.font.L,
		selecteditem!.font.M,
		selecteditem!.font.N,
		selecteditem!.font.O,
		selecteditem!.font.P,
		selecteditem!.font.Q,
		selecteditem!.font.R,
		selecteditem!.font.S,
		selecteditem!.font.T,
		selecteditem!.font.U,
		selecteditem!.font.V,
		selecteditem!.font.W,
		selecteditem!.font.X,
		selecteditem!.font.Y,
		selecteditem!.font.Z,



		
	);



		editor?.edit(editBuilder => {
			editBuilder.replace(editor?.selection, FontConverter.convertText(hightText!,foncharacterobject) );
		  });
		
		// vscode.window.showInformationMessage(selecteditem?.font.L);
		// vscode.window.showInformationMessage(selecteditem?.font.L);
		}catch(e){
			vscode.window.showInformationMessage("Error getting data");
		}
		// vscode.commands.executeCommand("fontkeren.ApplyFont",()=>{
		// 	vscode.window.showInformationMessage(hightText!);
		// });
	}); 
	// vscode.commands.registerCommand('fontkeren.sidebar', () => {
    //     // Create and show a new webview panel
    //     const panel = vscode.window.createWebviewPanel(
    //         'sidebar', // Identifies the type of the webview. Used internally
    //         'My Sidebar', // Title of the panel displayed to the user
    //         vscode.ViewColumn.Two, // Editor column to show the new webview panel in.
    //         {
    //             enableScripts: true,
    //             retainContextWhenHidden: true
    //         }
    //     );

        // And set its HTML content
    //     panel.webview.html = getWebviewContent();
    // });
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}


// function getWebviewContent() {
//     // Get the selected text
//     const editor = vscode.window.activeTextEditor;
//     const selection = editor?.selection;
//     const text = editor?.document.getText(selection);

//     return `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Font Keren</title>
//     </head>
//     <body>
//         <h1>Fetched Text</h1>
//         <p>Selected text: ${text}</p>
//     </body>
//     </html>`;
// }