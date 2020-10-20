var cash = 0; // 所持金。画面に表示する。
var clickCash = 1; // クリックで得られるお金。特定の条件で倍々になっていく。

/* 
  施設所有系
  時間毎に得られる各収入
 */
var ownAutoClicker = 0; // オートクリッカーの所有数
var ownMiniBank = 0; // ミニ銀行の所有数
var ownLocalBank = 0; // ミニ銀行の所有数
var ownMegaBank = 0; // ミニ銀行の所有数


/* 
  収入系
  時間毎に得られる各施設の累計自動収入
 */
var totalIncome = 0; // 総収入
var incomeOfAutoClicker = 0; // オートクリッカーの累計収入
var incomeOfMiniBank = 0; // ミニ銀行の累計収入
var incomeOfLocalBank = 0; // 地方銀行の累計収入
var incomeOfMegaBank = 0; // メガバンクの累計収入

/*
  各施設1つあたりの自動収入
 */
var oneAutoClickerIncome = 0.5; // オートクリッカー1つあたりの収入
var oneMiniBankIncome = 5; // ミニ銀行1つあたりの収入
var oneLocalBankIncome = 50; // 地方銀行1つあたりの収入
var oneMegaBankIncome = 500; // メガバンク1つあたりの収入
 
 
/*
  各施設基本価格
 */
const basePriceOfAutoClicker = 15; // オートクリッカー
const basePriceOfMiniBank = 100; // ミニ銀行
const basePriceOfLocalBank = 800; // 地方銀行
const basePriceOfMegaBank = 5500; // メガバンク

/*
  『お金をゲット！』ボタン押下時の処理
  1クリックごとにclickCashの値分のお金を獲得できる。
 */
function getCashToClick() {
	cash += clickCash;
	showOwnCash();
}

/*
  所持金および累計収入上書き表示処理
  所持金を画面上に表示する。
  所持金の量に応じて各購入ボタンの有効無効も決める。
 */
function showOwnCash() {
	// 所持金の値は、整数で表示する。
	var showCash = Math.floor(cash); 
	document.getElementById("ownCash").innerHTML = showCash + "円"; // WEB画面に上書き
	
	// 各購入ボタンの有効無効処理
	buyButtonAble( "buyAutoClicker", getCost( basePriceOfAutoClicker, ownAutoClicker ) ); //オートクリッカー
	buyButtonAble( "buyMiniBank", getCost( basePriceOfMiniBank, ownMiniBank ) ); // ミニ銀行
	buyButtonAble( "buyLocalBank", getCost( basePriceOfLocalBank, ownLocalBank ) ); // 地方銀行
	buyButtonAble( "buyMegaBank", getCost( basePriceOfMegaBank, ownMegaBank ) ); // メガバンク
	
	totalIncome = incomeOfAutoClicker + incomeOfMiniBank + 
	incomeOfLocalBank + incomeOfMegaBank;
	
	// 累計収入の上書き
	document.getElementById("totalIncome").innerHTML = totalIncome + "円/秒"; // WEB画面に上書き
	
}

/*
  収入自動増加処理
  1秒ごとに、自動収入分の増加処理を実施する。
 */
window.onload = function(){
  //1000ミリ秒（1秒）毎に関数「autoIncome()」を呼び出す
  setInterval("autoIncome()", 1000);
}

function autoIncome()
{
	cash += totalIncome;
	showOwnCash();
}

/*
  各施設購入・売却価格取得処理
 */
function getCost(basePrice, ownObject) {
	var costOfObject =  Math.round(basePrice * Math.pow(1.2, ownObject) );
	
	return costOfObject;
	
}

/* 
  各購入ボタン操作有効無効処理
  所持金の残量によって購入ボタンを有効化・無効化する。
  この処理は所持金表示処理から呼び出される。
  第一引数：HTMLのID
  第二引数：施設の購入費用
 */
function buyButtonAble(buttonID, cost) {
	if (cash >= cost) {
		document.getElementById(buttonID).disabled = "";
	} else {
		document.getElementById(buttonID).disabled = "disabled";
	}
}

/* 
  売却ボタン有効無効処理
  引数の各施設の所有に応じてボタンを有効化・無効化する。
  第一引数：HTMLのID
  第二引数：施設の所持数
 */
function sellButtonAble(buttonID, ownObject) {
	// 対象の施設が無くなった（所持数が0になった）場合、売却ボタンを無効化する
	if ( ownObject <= 0 ) {
		document.getElementById(buttonID).disabled = "disabled";
	} else {
		document.getElementById(buttonID).disabled = "";
	}
}

/* 
  各施設購入処理
  購入処理は、コード簡略化のため、後日まとめてこのメソッドで実装する。
 */
function buyObject(own, cost, incomeObject, oneObjectIncome) {
	// 購入費用を更新する（各施設購入・売却費用設定処理）
	var costOfObject = getCost();
	
	cash -= costOfAutoClicker; // 購入費用を支払う
	ownAutoClicker++; // 施設が1つ増える
	
	// オートクリッカーからの収入を更新する。
	incomeOfAutoClicker = ownAutoClicker * oneAutoClickerIncome; 
	
	// 売却ボタン有効無効処理を呼び出し、売却ボタンを有効化する。
	sellButtonAble("sellAutoClicker", ownAutoClicker);
	
	// 購入費用を更新する。
	costOfAutoClicker = getCostOfAutoClicker();
	
	// HTMLを更新する。
	document.getElementById("ownAutoClicker").innerHTML = ownAutoClicker; // 所持数を更新する。
	document.getElementById("costOfAutoClicker").innerHTML = costOfAutoClicker + "円"; // 購入費用を更新する。
	document.getElementById("incomeOfAutoClicker").innerHTML = incomeOfAutoClicker + "円/秒"; // ←自動収入の値を更新する。
	
	showOwnCash();
}

/* 
  オートクリッカー購入時の処理
  ①価格取得処理（getCostメソッド）を用いて、購入費用を取得する。
  ②cashから購入費用を差し引く。
  ③購入した施設が1つ増える。
  ④その施設の累計自動収入を更新する。
  ⑤売却ボタン有効無効処理を呼び出す。
  ⑥価格取得処理（getCostメソッド）を用いて、購入費用を更新する。
  ⑦HTML更新処理を呼び出す。
 */
function buyAutoClicker() {
	// 購入費用を取得する。
	var costOfAutoClicker = getCost(basePriceOfAutoClicker, ownAutoClicker);
	
	cash -= costOfAutoClicker; // 購入費用を支払う
	ownAutoClicker++; // 施設が1つ増える
	
	// オートクリッカーからの収入を更新する。
	incomeOfAutoClicker = ownAutoClicker * oneAutoClickerIncome; 
	
	// 売却ボタン有効無効処理を呼び出し、売却ボタンを有効化する。
	sellButtonAble("sellAutoClicker", ownAutoClicker);
	
	// 購入費用を更新する。
	costOfAutoClicker = getCost(basePriceOfAutoClicker, ownAutoClicker);
	
	// HTMLを更新する。（HTML更新処理を呼び出し）
	updateHTML("ownAutoClicker", ownAutoClicker, "costOfAutoClicker", 
		costOfAutoClicker, "incomeOfAutoClicker", incomeOfAutoClicker);
}

/* 
 * オートクリッカー売却時の処理
 */
 function sellAutoClicker() {
 	ownAutoClicker--; // 施設が1つ減る
 	
	// オートクリッカーからの収入を更新する。
	incomeOfAutoClicker = ownAutoClicker * oneAutoClickerIncome;
 	
 	// 売却価格は、売却費用設定処理から出た価格の半額
	cash += Math.round( getCost(basePriceOfAutoClicker, ownAutoClicker) / 2 );
 	
 	// 購入費用を更新する。
	costOfAutoClicker = getCost(basePriceOfAutoClicker, ownAutoClicker);
 	
 	// 売却ボタンの有効無効処理を呼び出す。
 	sellButtonAble("sellAutoClicker", ownAutoClicker);
 	
 	// HTMLを更新する。（HTML更新処理を呼び出し）
	updateHTML("ownAutoClicker", ownAutoClicker, "costOfAutoClicker", 
		costOfAutoClicker, "incomeOfAutoClicker", incomeOfAutoClicker);
 }

/* 
 * ミニ銀行購入処理
 */
function buyMiniBank() {
	
	// 購入費用を更新する（ミニ銀行購入・売却費用設定処理）
	var costOfMiniBank = getCost(basePriceOfMiniBank, ownMiniBank);
	
	cash -= costOfMiniBank; // 購入費用を支払う
	ownMiniBank++; // 施設が1つ増える
	incomeOfMiniBank = oneMiniBankIncome * ownMiniBank; // ミニ銀行からの収入が増える。
	
	// 売却ボタン有効無効処理を呼び出し、売却ボタンを有効化する。
	sellButtonAble("sellMiniBank", ownMiniBank);
	
	// 購入費用を変更する。
	costOfMiniBank =  getCost(basePriceOfMiniBank, ownMiniBank);
	
	// HTMLを更新する。（HTML更新処理を呼び出し）
	document.getElementById("ownMiniBank").innerHTML = ownMiniBank; // 所持数を更新する。
	document.getElementById("costOfMiniBank").innerHTML = costOfMiniBank + "円"; // 購入費用を更新する。
	document.getElementById("incomeOfMiniBank").innerHTML = incomeOfMiniBank + "円/秒";
	
	// HTMLを更新する。（HTML更新処理を呼び出し）
	updateHTML("ownMiniBank", ownMiniBank, "costOfMiniBank", 
		costOfMiniBank, "incomeOfMiniBank", incomeOfMiniBank);
}

/* 
 * ミニ銀行売却処理
 */
 function sellMiniBank() {
 	ownMiniBank--; // 施設が1つ減る
 	incomeOfMiniBank = oneMiniBankIncome * ownMiniBank; // ミニ銀行からの自動収入が減る
 	
 	// 売却価格は、売却費用設定処理から出た価格の半額
 	cash += Math.round( getCost(basePriceOfMiniBank, ownMiniBank) / 2 );
 	
 	// 購入費用を更新する。
	costOfMiniBank = getCost(basePriceOfMiniBank, ownMiniBank);
 	
 	// 売却ボタンの有効無効処理を呼び出す。
 	sellButtonAble("sellMiniBank", ownMiniBank);
 	
 	// HTMLを更新する。
 	/*
 	document.getElementById("ownMiniBank").innerHTML = ownMiniBank; // 所有数を更新する。
	document.getElementById("costOfMiniBank").innerHTML = costOfMiniBank + "円"; // 購入費用を更新する。
	document.getElementById("incomeOfMiniBank").innerHTML = incomeOfMiniBank + "円/秒";
	*/ 
	// HTMLを更新する。（HTML更新処理を呼び出し）
	updateHTML("ownMiniBank", ownMiniBank, "costOfMiniBank", 
		costOfMiniBank, "incomeOfMiniBank", incomeOfMiniBank);
}

/* 
 * 地方銀行購入処理
 */
function buyLocalBank() {
	
	// 購入費用を更新する（ミニ銀行購入・売却費用設定処理）
	var costOfLocalBank = getCost(basePriceOfLocalBank, ownLocalBank);
	
	cash -= costOfLocalBank; // 購入費用を支払う
	ownLocalBank++; // 施設が1つ増える
	incomeOfLocalBank = oneLocalBankIncome * ownLocalBank; // ミニ銀行からの収入が増える。
	
	// 売却ボタン有効無効処理を呼び出し、売却ボタンを有効化する。
	sellButtonAble("sellLocalBank", ownLocalBank);
	
	// 購入費用を変更する。
	costOfLocalBank =  getCost(basePriceOfLocalBank, ownLocalBank);
	
	// HTMLを更新する。（HTML更新処理を呼び出し）
	document.getElementById("ownLocalBank").innerHTML = ownLocalBank; // 所持数を更新する。
	document.getElementById("costOfLocalBank").innerHTML = costOfLocalBank + "円"; // 購入費用を更新する。
	document.getElementById("incomeOfLocalBank").innerHTML = incomeOfLocalBank + "円/秒";
	
	// HTMLを更新する。（HTML更新処理を呼び出し）
	updateHTML("ownLocalBank", ownLocalBank, "costOfLocalBank", 
		costOfLocalBank, "incomeOfLocalBank", incomeOfLocalBank);
}

/* 
 * 地方銀行売却処理
 */
 function sellLocalBank() {
 	ownLocalBank--; // 施設が1つ減る
 	incomeOfLocalBank = oneLocalBankIncome * ownLocalBank; // ミニ銀行からの自動収入が減る
 	
 	// 売却価格は、売却費用設定処理から出た価格の半額
 	cash += Math.round( getCost(basePriceOfLocalBank, ownLocalBank) / 2 );
 	
 	// 購入費用を更新する。
	costOfLocalBank = getCost(basePriceOfLocalBank, ownLocalBank);
 	
 	// 売却ボタンの有効無効処理を呼び出す。
 	sellButtonAble("sellLocalBank", ownLocalBank);
 	
 	// HTMLを更新する。
 	/*
 	document.getElementById("ownLocalBank").innerHTML = ownLocalBank; // 所有数を更新する。
	document.getElementById("costOfLocalBank").innerHTML = costOfLocalBank + "円"; // 購入費用を更新する。
	document.getElementById("incomeOfLocalBank").innerHTML = incomeOfLocalBank + "円/秒";
	*/ 
	// HTMLを更新する。（HTML更新処理を呼び出し）
	updateHTML("ownLocalBank", ownLocalBank, "costOfLocalBank", 
		costOfLocalBank, "incomeOfLocalBank", incomeOfLocalBank);
}

/* 
 * メガバンク購入処理
 */
function buyMegaBank() {
	
	// 購入費用を更新する（ミニ銀行購入・売却費用設定処理）
	var costOfMegaBank = getCost(basePriceOfMegaBank, ownMegaBank);
	
	cash -= costOfMegaBank; // 購入費用を支払う
	ownMegaBank++; // 施設が1つ増える
	incomeOfMegaBank = oneMegaBankIncome * ownMegaBank; // ミニ銀行からの収入が増える。
	
	// 売却ボタン有効無効処理を呼び出し、売却ボタンを有効化する。
	sellButtonAble("sellMegaBank", ownMegaBank);
	
	// 購入費用を変更する。
	costOfMegaBank =  getCost(basePriceOfMegaBank, ownMegaBank);
	
	// HTMLを更新する。（HTML更新処理を呼び出し）
	document.getElementById("ownMegaBank").innerHTML = ownMegaBank; // 所持数を更新する。
	document.getElementById("costOfMegaBank").innerHTML = costOfMegaBank + "円"; // 購入費用を更新する。
	document.getElementById("incomeOfMegaBank").innerHTML = incomeOfMegaBank + "円/秒";
	
	// HTMLを更新する。（HTML更新処理を呼び出し）
	updateHTML("ownMegaBank", ownMegaBank, "costOfMegaBank", 
		costOfMegaBank, "incomeOfMegaBank", incomeOfMegaBank);
}

/* 
 * メガバンク売却処理
 */
 function sellMegaBank() {
 	ownMegaBank--; // 施設が1つ減る
 	incomeOfMegaBank = oneMegaBankIncome * ownMegaBank; // ミニ銀行からの自動収入が減る
 	
 	// 売却価格は、売却費用設定処理から出た価格の半額
 	cash += Math.round( getCost(basePriceOfMegaBank, ownMegaBank) / 2 );
 	
 	// 購入費用を更新する。
	costOfMegaBank = getCost(basePriceOfMegaBank, ownMegaBank);
 	
 	// 売却ボタンの有効無効処理を呼び出す。
 	sellButtonAble("sellMegaBank", ownMegaBank);
 	
 	// HTMLを更新する。
 	/*
 	document.getElementById("ownMegaBank").innerHTML = ownMegaBank; // 所有数を更新する。
	document.getElementById("costOfMegaBank").innerHTML = costOfMegaBank + "円"; // 購入費用を更新する。
	document.getElementById("incomeOfMegaBank").innerHTML = incomeOfMegaBank + "円/秒";
	*/ 
	// HTMLを更新する。（HTML更新処理を呼び出し）
	updateHTML("ownMegaBank", ownMegaBank, "costOfMegaBank", 
		costOfMegaBank, "incomeOfMegaBank", incomeOfMegaBank);
}

/* 
  HTML更新処理
  施設所持数HTMLの各ID名を引数とし、innerHTMLにより画面を更新する。
  所持金表示・上書き処理
  第一引数：施設所持数を示すHTMLのID
  第二引数：施設所持数
  第三引数：施設費用を示すHTMLのID
  第四引数：施設費用
  第五引数：施設の収入を示すHTMLのID
  第六引数：施設の自動収入
  
 */
function updateHTML(amountID, amount, costID, cost, incomeID, income) {
	document.getElementById(amountID).innerHTML = amount; // 施設所持数を更新する。
	document.getElementById(costID).innerHTML = cost + "円"; // 購入費用を更新する。
	document.getElementById(incomeID).innerHTML = income + "円/秒"; // 自動収入を更新する。
	showOwnCash();
}

function showOwnMiniBank(miniBank){
	document.getElementById("ownMiniBank").innerHTML = miniBank;
}

function showOwnLocalBank(){

}