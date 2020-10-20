<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>マネークリッカー</title>
<script src="<%=request.getContextPath() %>/js/moneyClick.js"></script>
</head>
<body>
	<h1>マネークリッカー</h1>
	<table>
		<tr>
			<td>
				<button id="getMoney" onclick="getCashToClick()">お金をゲット！</button>
			</td>
		</tr>
		<tr>
			<td>
				<h2>所持金：</h2>
			</td>
			<td>
				<h2 id="ownCash">0円</h2>
			</td>
		</tr>
		<tr>
			<td>
				<h3>累計自動収入：</h3>
			</td>
			<td>
				<h3 id="totalIncome">0円/秒</h3>
			</td>
		</tr>
	</table>
	<h2>施設リスト</h2>
	<table>
		<tr>
			<th>施設</th><th>所持数</th><th>単体収入（円/秒）</th>
			<th>合計収入（円/秒）</th><th>購入費用（円）</th>
		</tr>
		<%-- カーソル（オートクリッカー） --%>
			<tr>
			<%-- 施設名 --%>
			<td>
				<h3>オートクリッカー</h3>
			</td>
			<%-- 所持数 --%>
			<td>
				<h3 id="ownAutoClicker">0</h3>
			</td>
			<%-- 単体での収入 --%>
			<td>
				<h3>0.5円/秒</h3>
			</td>
			<%-- 現在の合計収入 --%>
			<td>
				<h3 id="incomeOfAutoClicker">0円/秒</h3>
			</td>
			<%-- 購入費用（所持数により変化） --%>
			<td>
				<h3 id="costOfAutoClicker">15円</h3>
			</td>
			<%-- 購入ボタン --%>
			<td>
				<button id="buyAutoClicker" onclick="buyAutoClicker()" disabled>購入</button>
			</td>
			<%-- 売却ボタン --%>
			<td>
				<button id="sellAutoClicker" onclick="sellAutoClicker()" disabled>売却</button>
			</td>
		</tr>
		<%-- ミニ銀行 --%>
		<tr>
			<%-- 施設名 --%>
			<td>
				<h3>ミニ銀行</h3>
			</td>
			<%-- 所持数 --%>
			<td>
				<h3 id="ownMiniBank">0</h3>
			</td>
			<%-- 単体での収入 --%>
			<td>
				<h3>5円/秒</h3>
			</td>
			<%-- 現在の合計収入 --%>
			<td>
				<h3 id="incomeOfMiniBank">0円/秒</h3>
			</td>
			<%-- 購入費用（所持数により変化） --%>
			<td>
				<h3 id="costOfMiniBank">100円</h3>
			</td>
			<%-- 購入ボタン --%>
			<td>
				<button id="buyMiniBank"  onclick="buyMiniBank()" disabled>購入</button>
			</td>
			<%-- 売却ボタン --%>
			<td>
				<button id="sellMiniBank" onclick="sellMiniBank()" disabled>売却</button>
			</td>
		</tr>
		<%-- 地方銀行 --%>
		<tr>
			<%-- 施設名 --%>
			<td>
				<h3>地方銀行</h3>
			</td>
			<%-- 所持数 --%>
			<td>
				<h3 id="ownLocalBank">0</h3>
			</td>
			<%-- 単体収入 --%>
			<td>
				<h3>50円/秒</h3>
			</td>
			<%-- 現在の合計収入 --%>
			<td>
				<h3 id="incomeOfLocalBank">0円/秒</h3>
			</td>
			<%-- 購入費用（所持数により変化） --%>
			<td>
				<h3 id="costOfLocalBank">800円</h3>
			</td>
			<%-- 購入ボタン --%>
			<td>
				<button id="buyLocalBank" onclick="buyLocalBank()" disabled>購入</button>
			</td>
			<%-- 売却ボタン --%>
			<td>
				<button id="sellLocalBank" onclick="sellLocalBank()" disabled>売却</button>
			</td>
		</tr>
		<%-- メガバンク --%>
		<tr>
			<%-- 施設名 --%>
			<td>
				<h3>メガバンク</h3>
			</td>
			<%-- 所持数 --%>
			<td>
				<h3 id="ownMegaBank">0</h3>
			</td>
			<%-- 単体収入 --%>
			<td>
				<h3>500円/秒</h3>
			</td>
			<%-- 現在の合計収入 --%>
			<td>
				<h3 id="incomeOfMegaBank">0円/秒</h3>
			</td>
			<%-- 購入費用（所持数により変化） --%>
			<td>
				<h3 id="costOfMegaBank">5500円</h3>
			</td>
			<%-- 購入ボタン --%>
			<td>
				<button id="buyMegaBank" onclick="buyMegaBank()" disabled>購入</button>
			</td>
			<%-- 売却ボタン --%>
			<td>
				<button id="sellMegaBank" onclick="sellMegaBank()" disabled>売却</button>
			</td>
		</tr>
	</table>
</body>
</html>