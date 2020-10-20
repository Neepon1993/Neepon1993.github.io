<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>町育成</title>
<script src="<%=request.getContextPath() %>/js/machiIkusei.js"></script>
</head>
<body>
	<h1>資源</h1>
	
	<table>
		<tr>
			<th>
				<h2>倉庫レベル：</h2>
			</th>
			<th>
				<h2 id="capacityLevel">0</h2>
			</th>
			<th>
				<button id="capacityLevelup" onclick="capacityLevelup()">
					レベルアップ
				</button>
			</th>
		</tr>
	</table>
	
	<table>
		<tr>
			<th>
				<h2>所持金</h2>
			</th>
			<th>
				<h2>収入（毎秒）</h2>
			</th>
		</tr>
		<tr>
			<td>
				<p id="ownMoney">1000</p>
			</td>
			<td>
				<p id="incomeMoney">0(/s)</p>
			</td>
		</tr>
	</table>
	<br>
	
	<table>
		<tr>
			<th>
				<p>資源</p>
			</th>
			<th>
				<p>所有量</p>
			</th>
			<th>
				<p>最大所有可能量</p>
			</th>
			<th>
				<p>収入（毎秒）</p>
			</th>
		</tr>
		<tr>
			<td>
				<p>作物：</p>
			</td>
			<td>
				<p id="ownCrop">0</p>
			</td>
			<td>
				<p id="maxCrop">0</p>
			</td>
			<td>
				<p id="incomeCrop">0(/s)</p>
			</td>
		</tr>
		<tr>
			<td>
				<p>木材：</p>
			</td>
			<td>
				<p id="ownWood">0</p>
			</td>
			<td>
				<p id="maxWood">0</p>
			</td>
			<td>
				<p id="incomeWood">0(/s)</p>
			</td>
		</tr>
		<tr>
			<td>
				<p>石炭：</p>
			</td>
			<td>
				<p id="ownCoal">0</p>
			</td>
			<td>
				<p id="maxCoal">0</p>
			</td>
			<td>
				<p id="incomeCoal">0(/s)</p>
			</td>
		</tr>
		<tr>
			<td>
				<p>鉄：</p>
			</td>
			<td>
				<p id="ownIron">0</p>
			</td>
			<td>
				<p id="maxIron">0</p>
			</td>
			<td>
				<p id="incomeIron">0(/s)</p>
			</td>
		</tr>
		<tr>
			<td>
				<p>石油：</p>
			</td>
			<td>
				<p id="ownOil">0</p>
			</td>
			<td>
				<p id="maxOil">0</p>
			</td>
			<td>
				<p id="incomeOil">0(/s)</p>
			</td>
		</tr>
	</table>
	
	<h1>施設</h1>
	
	<table>
		<tr>
			<th>
				<p>施設名</p>
			</th>
			<th>
				<p>保有数</p>
			</th>
			<th>
				<p>価格</p>
			</th>
			<th>
				<p id="effect">効果</p>
			</th>
		</tr>
		<tr>
			<td>
				<p>住宅</p>
			</td>
			<td>
				<p id="ownHouse">0</p>
			</td>
			<td>
				<p id="costOfHouse">
					金銭100
				</p>
			</td>
			<td>
				<p id="effectOfHouse">
					住宅1つにつき、金銭の収入が+10される。
				</p>
			</td>
			<td>
				<button id="buyHouse" onclick="buyHouse()">購入</button>
			</td>
			<td>
				<button id="sellHouse" onclick="sellHouse()">売却</button>
			</td>
		</tr>
		<tr>
			<td>
				<p>商店</p>
			</td>
			<td>
				<p id="ownStore">0</p>
			</td>
			<td>
				<p id="costOfStore">
					金銭1000
					木材10
				</p>
			</td>
			<td>
				<p id="effectOfStore">
					商店1つにつき、金銭の収入が+30されるが、<br>
					作物の収入が-5される。<br>
					作物の資源が枯渇すると、 <br>
					作物の収入が1以上になるまで本施設は解体される。
				</p>
			</td>
			<td>
				<button id="buyStore" onclick="buyStore()">購入</button>
			</td>
			<td>
				<button id="sellStore" onclick="sellStore()">売却</button>
			</td>
		</tr>
		<tr>
			<td>
				<p>畑</p>
			</td>
			<td>
				<p id="ownField">0</p>
			</td>
			<td>
				<p id="costOfField">
					金銭100
				</p>
			</td>
			<td>
				<p id="effectOfField">
					畑1つにつき、作物の収入が+10される。
				</p>
			</td>
			<td>
				<button id="buyField" onclick="buyField()">購入</button>
			</td>
			<td>
				<button id="sellField" onclick="sellField()">売却</button>
			</td>
		</tr>
		<tr>
			<td>
				<p>田</p>
			</td>
			<td>
				<p id="ownRiceField">0</p>
			</td>
			<td>
				<p id="costOfRiceField">
					金銭1000
					土壌10
				</p>
			</td>
			<td>
				<p id="effectOfRiceField">
					田1つにつき、作物の収入が+50される。
				</p>
			</td>
			<td>
				<button id="buyRiceField" onclick="buyRiceField()">購入</button>
			</td>
			<td>
				<button id="sellRiceField" onclick="sellRiceField()">売却</button>
			</td>
		</tr>
	</table>
</body>
</html>
