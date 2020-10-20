
/*
  各資源所有量。画面に表示する。
 */ 
var money = 500; // 金銭 
var crop = 0; // 作物
var wood = 0; // 木材
var soil = 0; // 土壌
var livestock = 0; // 畜産
var fish = 0; // 水産
var coal = 0; // 石炭
var iron = 0; // 鉄
var oil = 0; // 石油
var copper = 0; // 銅
var silver = 0; // 銀
var gold = 0 // 金


// 資源の増減（収支）
var incomeMoney = 0;
var incomeCrop = 0;
var incomeWood = 0;
var incomeSoil = 0;
var incomeLivestock = 0;
var incomeFish = 0;
var incomeCoal = 0;
var incomeIron = 0;
var incomeOil = 0;
var incomeCopper = 0;
var incomeSilver = 0;
var incomeGold = 0;



var capacityLevel = 0; // 倉庫のレベル

/*
  各施設保有数（倉庫はレベル）。
  画面に表示する。
 */ 
var house = 0; // 住宅
var store = 0; // 商店
var field = 0; // 畑
var riceField = 0; // 田
var plantation = 0; // 植林場
var soilPlace = 0; // 採土場 
var port = 0; // 漁港 
var coalMine = 0; // 炭坑
var quarry = 0; // 鉄鉱場 
var oilField = 0; // 油田

/* 
  各資源基本購入費用
 */
var baseCostOfWareHouse = 100;
var baseCostOfHouse = 100;
var baseCostOfStore = 500;
var baseCostOfField = 100;
var baseCostOfRiceField = 700;
var baseCostOfSoilPlace = 500;
var baseCostOfPlantation = 1000;
var baseCostOfSoilPlace = 1000;
var baseCostOfPort = 10000;
var baseCostOfCoalMine = 5000;
var baseCostOfQuarry = 7000;
var baseCostOfOilField = 30000;
var baseCostOfCopperMine = 50000;
var baseCostOfSilverMine = 100000;
var baseCostOfGoldMine = 500000;


/*
   倉庫に保管できる各資源の基礎容量
 */
// Math.pow( 1.2, document.getElementById("warehouseLevel") );

var baseCapacityOfCrop = 1000;
var baseCapacityOfWood = 500;
var baseCapacityOfSoil = 500;
var baseCapacityOfLiveStock = 100;
var baseCapacityOfFish = 100;
var baseCapacityOfIron = 100;
var baseCapacityOfOil = 100;
var baseCapacityOfBronze = 10;
var baseCapacityOfSilver = 10;
var baseCapacityOfGold = 10;

/*
  資源増加処理
 */
function increase() {
	// 倉庫の容量を満たすまで資源が増加する。
	
	money += incomeMoney; //金銭
	crop += incomeCrop; // 作物
	
	/*
	wood += incomeWood; // 木材
	soil += incomeSoil; // 土壌
	livestock += incomeLivestock; // 畜産
	fish += incomeFish; // 水産
	coal += incomeCoal; // 石炭
	iron += incomeIron; // 鉄
	oil += incomeOil; // 石油
	copper += incomeCopper; // 銅
	silver += incomeSilver; // 銀
	gold += incomeGold; // 金
	
	*/
	showResourses();
	
}

/*
  各資源量表示処理
 */
 function showResourses() {
 	document.getElementById("ownMoney").innerHTML = money; // 金銭
 	document.getElementById("ownCrop").innerHTML = crop; // 作物
 	
 	/*
 	document.getElementById("ownWood").innerHTML = wood; // 木材
 	document.getElementById("ownSoil").innerHTML = soil; // 土壌
 	document.getElementById("ownCoal").innerHTML = coal; // 石炭
 	document.getElementById("ownIron").innerHTML = iron; // 鉄
 	document.getElementById("ownCopper").innerHTML = copper; // 銅
 	document.getElementById("ownSilver").innerHTML = silver; // 銀
 	document.getElementById("ownGold").innerHTML = gold; // 金
 	
 	*/
 }
 

/*
  資源増加処理呼び出し
  1秒ごとに、資源増加処理を呼び出すようにする。
 */
window.onload = function() {
	// 1000ミリ秒（1秒）毎に「increase()」を呼び出す
	setInterval("increase()", 1000);
}

/*
  倉庫容量のレベルアップ
 */
function capacityLevelup() {
	capacityLevel++;
}


/*
  住宅の購入
 */
function buyHouse() {
	// 住宅の購入費用を取得する。
	var costOfHouse = Math.ceil( baseCostOfHouse * Math.pow( 1.2 , house ) );
	
	// 購入費用を払える金銭があれば、購入できる。
	if (money >= costOfHouse) {
		// alert("住宅を買います！");
		house++;
		incomeMoney += 10;
		
		/*
		  住宅の購入費用を更新する。
		  1戸買うごとに、必要な金銭は1.2倍になる。
		  100×( 1.2 ^ (保有している住宅の数) )
		 */
		costOfHouse = Math.ceil( 100 * Math.pow( 1.2 , house ) );
		// alert("住宅を買いました！");
		
		document.getElementById("ownHouse").innerHTML = house;
		document.getElementById("incomeMoney").innerHTML = incomeMoney + "(/s)";
		document.getElementById("costOfHouse").innerHTML = "金銭" + costOfHouse;
		
	} else {
		alert("金銭が足りません！\n購入費用：" + costOfHouse + "、\n所持金：" + money);
	}
	
}

/*
  住宅の売却
 */
function sellHouse() {
	if ( house > 0 ) {
		alert("住宅を売ります！");
		house--;
		incomeMoney -= 10;
		alert("住宅を売りました！");
		
		document.getElementById("ownHouse").innerHTML = house;
		document.getElementById("incomeMoney").innerHTML = incomeMoney + "(/s)";
		document.getElementById("costOfHouse").innerHTML = "金銭" + costOfHouse;
	} else {
		alert("売れる住宅がありません！");
	}
}

/*
  商店の購入
 */
function buyStore() {
	// 住宅の購入費用を取得する。
	var costOfHouse = Math.ceil( baseCostOfHouse * Math.pow( 1.2 , house ) );
	
	
	store++;
	incomeMoney += 50;
	incomeCrop -= 10;
	document.getElementById("ownStore").innerHTML = store;
	document.getElementById("incomeMoney").innerHTML = incomeMoney + "(/s)";
	document.getElementById("incomeCrop").innerHTML = incomeCrop + "(/s)";
}

/*
  商店の売却
 */
function sellStore() {
	if ( store > 0 ) {
		store--;
		incomeMoney -= 50;
		incomeCrop += 10;
		document.getElementById("ownStore").innerHTML = store;
		document.getElementById("incomeMoney").innerHTML = incomeMoney + "(/s)";
		document.getElementById("incomeCrop").innerHTML = incomeCrop + "(/s)";
	} else {
		alert("売れる商店がありません！");
	}
}

/*
  畑の購入
 */
function buyField() {
	field++;
	incomeCrop += 10;
	document.getElementById("ownField").innerHTML = field;
	document.getElementById("incomeCrop").innerHTML = incomeCrop + "(/s)";
}

/*
  畑の売却
 */
function sellField() {
	if ( field > 0 ) {
		field--;
		incomeCrop -= 10;
		document.getElementById("ownField").innerHTML = field;
		document.getElementById("incomeCrop").innerHTML = incomeCrop + "(/s)";
	} else {
		alert("売れる畑がありません！");
	}
}

/*
  田の購入
 */
function buyRiceField() {
	riceField++;
	incomeCrop += 40;
	document.getElementById("ownRiceField").innerHTML = riceField;
	document.getElementById("incomeCrop").innerHTML = incomeCrop + "(/s)";
}

/*
  田の売却
 */
function sellRiceField() {
	if ( riceField > 0 ) {
		riceField--;
		incomeCrop -= 10;
		document.getElementById("ownRiceField").innerHTML = riceField;
		document.getElementById("incomeCrop").innerHTML = incomeCrop + "(/s)";
	} else {
		alert("売れる田がありません！");
	}
}
