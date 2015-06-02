<!DOCTYPE html>
<!--HTML5 doctype-->
<html>

<head>
    <title>标题</title>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <META HTTP-EQUIV="Pragma" CONTENT="no-cache">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <link rel="stylesheet" type="text/css" href="css/icons.css?23" />
     <link rel="stylesheet" type="text/css" href="css/af.ui.css?23" />
   
    
    <link rel="stylesheet" type="text/css" href="css/index.css?23" />
</head>

<body>
<div id="afui" class="bb">
<!-- 蒙版 -->
<div id="addressMask">

</div>
<!-- 新增地址提示 -->
<div id="addressTip">
    <p>使用你的地址信息</p>
    <div><a class="addressTipNot">否</a><a class="addressTipTrue">是</a></div>
</div>
<!-- 购物提示 -->
<div id="addcarTip">
    <p>成功加入购物车！</p>
    <div><a class="addcarTipNot">继续逛逛</a><a class="addcarTipTrue">去结算</a></div>
</div>

<!--支付宝阻止跳转提示-->
<div class="stopToali" id="alipayNotips">
    <img src="img/stopToalipay.png" style="width: 100%;">
</div>

<div id="content">

<div title='标题' id="main" class="panel" selected="true">
    <header>
        <div style="display:none"><img src="img/fenlei.png" class="fenlei" onclick="af.ui.toggleSideMenu()" /></div>
        <img class="logo" src="img/top-logo.png" width="74"/><span><img src="img/top-slong.png" width="155" style="margin-top: 12px;" /></span>
        <img onclick="af.ui.toggleAsideMenu()" class="search" width="24" src="img/top-search.png" />
        <div id="classPaxu" class="classPaxu">
            <p onclick="$product.getSaledByOld(0,1)"><span>人气最高</span><img src="img/paixu1.jpg" /></p>
            <p onclick="$product.getSaledByOld(1,0)"><span>价格最低</span><img src="img/paixu2.jpg" /></p>
            <p onclick="$product.getSaledByOld(1,1)"><span>价格最高</span><img src="img/paixu3.jpg" /></p>
            <p onclick="$product.getSaledByOld(2,1)"><span>销量最高</span><img src="img/paixu4.jpg" /></p>
        </div>
    </header>
    <div class="panel-out">
        <div id="banner_animate" Awidth="360" Aheight="135" class="autoW autoH" style="overflow:hidden;margin:0 0.25% 0; margin-left:1px; text-align:center;">
        </div>
    </div>
    <div class="panel-out" id="main-body">
        <!--<img onclick="inform()" src="img/TZ2-1.jpg" style="width: 100%; margin-top:4px;">-->
        <div  onclick="inform()" id="runinform_div"><div id="runinform_div_1"><div id="runinform_div_2"><span id="runinform"></span></div></div></div>
        <div class="index-menu" style=" margin-top:-4px;"><!-- style=" margin-top:-4px;"-->
            <div class="index-menu-div" onclick="$product.getSaled(1,1,1)"><img src="img/index-menu-1.png" />进口母婴</div><!--onclick="af.ui.toggleSideMenu()"-->
            <div class="index-menu-div" onclick="$product.getSaled(2,1,1)"><img src="img/index-menu-2.png" />进口食品</div><!--onclick="$product.getSaled(1,1,1)"-->
            <div class="index-menu-div" onclick="$product.getSaled(3,1,1)"><img src="img/index-menu-3.png" />进口美妆</div>
            <div class="index-menu-div" ><img src="img/index-menu-4.png" />明日上线</div>
        </div>
        <div id="index-xian" class="times-shop">
            <font><img src="img/hot_logo.png" style="vertical-align: middle;" width="10" /><span style="margin-left:4px; display:inline-block;font-weight: bold;color: #000;">限时抢购</span></font>
            <div id="index-xian-banner" class="times-banner">
                <!-- <img src="img/times1.jpg" /> -->
            </div>
        </div>
        <div class="times-shop">
            <font><img src="img/hot_logo.png" style="vertical-align: middle;" width="10" /><span style="margin-left:4px; display:inline-block;font-weight: bold;color: #000;">热门推荐</span></font>
            <ul id="times-hot">
            </ul>
        </div>
    </div>
</div>

<div title="公告通知" id="notice" class="panel">
    <header>
        <img class="logo" src="img/top-logo.png" width="74"/><span><img src="img/top-slong.png" width="155" style="margin-top: 12px;" /></span>
        <img onclick="af.ui.toggleAsideMenu()" class="search" width="24" src="img/top-search.png" />
    </header>
    <div id="notice_wrap">
        <!--<h1 id="notice_h1">公告</h1>
        <span>尊敬的用户朋友们：</span>
        <p class="notice_wrap_p1">感谢朋友们一路的支持与陪伴感谢朋友们一路的支持与陪伴感谢朋友们一路的支持与陪伴感谢朋友们一路的支持与陪伴感谢朋友们一路的支持与陪伴感谢朋友们一路的支持与陪伴感谢朋友们一路的支持与陪伴感谢朋友们一路的支持与陪伴感谢朋友们一路的支持与陪伴感谢朋友们一路的支持与陪伴感谢朋友们一路的支持与陪伴感谢朋友们一路的支持与陪伴感谢朋友们一路的支持与陪伴感谢朋友们一路的支持与陪伴感谢朋友们一路的支持与陪伴。</p>
        <p class="notice_wrap_p1">谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢！</p>
        <img src="img/banner2.jpg" alt="">
        <p class="notice_wrap_p2">公司</p>
        <p class="notice_wrap_p2">2015年4月22日</p>-->
    </div>
    
</div>

<div title="登录" id="memberlogin" class="panel">
    <header>
        <div id="memberloginHeader">
            <div class="memberlogin1"><a class="floor1">登录</a></div>
            <div class="memberlogin2"><a class="floor1">注册</a></div>
        </div>
    </header>
    <form id="memberloginRegister">
        <label for="frm11">手机号码</label><input id="frm11" type="text" placeholder="11位手机号码">
        <label for="frm12">短信校验码</label><input id="frm12" type="text" placeholder="手机收到的校验码">
        <button id="regYMbtn" type="button">获取校验码</button>
        <label for="frm13">密码</label><input id="frm13" type="password" maxlength="16" placeholder="6-16位字母和数字">
    </form>

    <form id="memberlogin2" >
        <label for="frm14">账号</label><input id="frm14" type="text" placeholder="邮箱/手机号/会员号">
        <label for="frm15">密码</label><input id="frm15" type="password" placeholder="6-16位字母和数字">
    </form>
    <a id="memberloginBtn" onclick="login()" href="">立即登录</a>
    <a id="memberRegister" href="">注册</a>
    <p id="memberpw"><a href="#resetLogin_1Password" onclick="createCode('code1')">忘记密码？</a></p>
    <p class="hyzx_p1"></p>
    <p class="hyzx_p2">或使用合作账号登录</p>
    <div id="authorLogin" class="clear">
        <div>
            <img src="img/sinaLogo.jpg" alt="">
            <p><span>微博</span>登录</p>
        </div>
        <div>
            <img src="img/QQ.jpg" alt="">
            <p><span>QQ</span>登录</p>
        </div>
        <div>
            <img src="img/rr.jpg" alt="">
            <p><span>人人网</span>登录</p>
        </div>
        <div>
            <img src="img/zfb.jpg" alt="">
            <p><span>支付宝</span>登录</p>
        </div>
    </div>
</div>

<!-- <div title="登录" id="memberlogin" class="panel">
    <header>
        <div style="display:none"><img src="img/fenlei.png" class="fenlei" onclick="af.ui.toggleSideMenu()" /></div>
        <img class="logo" src="img/logo.png" width="74"/><span><img src="img/top-tle-last.png" width="155" /></span>
        <img onclick="af.ui.toggleAsideMenu()" class="search" width="24" src="img/search.png" />
    </header>
    <div class="paypagebox">
        <div class="jifen">
            <span>会员登陆</span>
        </div>
        <div class="order">
            会员卡号：<input type="text" id="Password2" value="ZSP-" style="width:200px;color:black;">
        </div>
        <div class="paybox">
            登录密码：<input type="password" id="Password1" style="width:200px;color:black;">
        </div>
        <div class="paybut">
           <a class="floor1" onclick="login()">登录</a><a class="floor1" onclick="showPopup5()">注册</a><a class="floor2" onclick="showPopup3()">找回卡号</a><a class="floor2" onclick="showPopup4()">重置密码</a>
       </div>
   </div>
</div> -->

<!-- 重置登录密码get -->
<div title="重置登录密码" id="resetLogin_1Password" class="panel">
    <header>
        <p id="resetLogin_1Password2">重置登录密码</p>
    </header>
    <form id="resetLogin_1Password3">
        <p>手机号</p>
        <input id="resetLogin_1PasswordPhone" maxlength="11" type="text" >
        <p>验证码</p>
        <input id="Login_1Password2"  type="text" ><input class="Password2" type = "button" id="code1" onclick="createCode('code1')"/>
    </form>
    <a id="resetLogin_1PasswordBtn">获取短信校验码</a>
</div>

<!-- 重置支付密码get-->
<div title="重置支付密码" id="resetPay_1Password" class="panel">
    <header>
        <p id="resetPay_1Password2">重置支付密码</p>
    </header>
    <form id="resetPay_1Password3">
        <p>手机号</p>
        <input id="resetPay_1PasswordPhone" maxlength="11" type="text" >
        <p>验证码</p>
        <input id="Pay_1Password2" type="text" ><input class="Password2" type = "button" id="code2" onclick="createCode('code2')"/>
    </form>
    <a id="resetPay_1PasswordBtn">获取短信校验码</a>
</div>

<!-- 重置登录密码get_2 -->
<div title="重置登录密码" id="resetLogin_2Password" class="panel">
    <header>
        <p id="resetLogin_2Password2">重置登录密码</p>
    </header>
    <form id="resetLogin_2Password4">
        <p>短信验证码</p>
        <input id="Login_2phoneWord" type="text"  placeholder="手机收到的验证码" >
        <p>新的登录密码</p>
        <input id="newLogin_2Password" maxlength="16" type="password"   placeholder="6~16位字母或数字" >
    </form>
    <a id="resetLogin_2PasswordBtn" href="">确定</a>
</div>

<!-- 重置支付密码get_2 -->
<div title="重置支付密码" id="resetPay_2Password" class="panel">
    <header>
        <p id="resetPay_2Password2">重置支付密码</p>
    </header>
    <form id="resetPay_2Password4">
        <p>短信验证码</p>
        <input id="Pay_2phoneWord" type="text"  placeholder="手机收到的验证码" >
        <p>新的支付密码</p>
        <input id="newPay_2Password" maxlength="16" type="password"   placeholder="6~16位字母或数字" >
    </form>
    <a id="resetPay_2PasswordBtn" href="">确定</a>
</div>

<!-- 会员中心 -->
<div title="会员中心" id="usercenter" class="panel">
    <header>
        <div style="display:none"><img src="img/fenlei.png" class="fenlei" onclick="af.ui.toggleSideMenu()" /></div>
        <img class="logo" src="img/top-logo.png" width="74"/><span><img src="img/top-slong.png" width="155" style="margin-top: 12px;" /></span>
        <img onclick="af.ui.toggleAsideMenu()" class="search" width="24" src="img/top-search.png" />
    </header>
    <div class="usertopout">
        <div class="usercentertopbg"></div>
    </div>
    <div class="panel-out">
        <img class="usercentertop" src="img/card.jpg" />
        <div class="usercentertxt"><span id="myCard"></span><br /><span id="userCenterScore">积分余额<a id="uScore"></a></span></div>
    </div>

    <div class="user-bd">
        <ul class="user-bd-list">
            <li id="toOrderList"><a class="icon home big">全部订单</a></li>
            <li id="shopflor"><a class="icon basket big">购物车<span id="user-shopcat" class='af-badge lr'></span></a></li>
            <li id="CNtoadd"><a class="icon user big">收货地址</a></li>
            <li id="CNtochm"><a class="icon message big">修改登录密码</a></li>
            <li id="CNtochp"><a class="icon message big">修改支付密码</a></li>
            <li><a class="icon settings big">个人设置</a></li>
            <li id="centerlogin"><a href="#memberlogin">会员登录</a></li>
            <li id="centerout" onclick="$user.end()"><a>退出当前用户</a></li>
        </ul>
    </div>
</div>

<!--- *************购物流之：购物车***********-->
<div title='购物车' id="shopcat" class="panel">
    <header>
        <div style="display:none"><img src="img/fenlei.png" class="fenlei" onclick="af.ui.toggleSideMenu()" /></div>
        <img class="logo" src="img/top-logo.png" width="74"/><span><img src="img/top-slong.png" width="155" style="margin-top: 12px;" /></span>
    </header>
    <!-- <div class="shopcat-top shoptop-bottom">
        购物车商品
    </div> -->
    <div id="shopcat-select" class="all-shop-bottom"><img src="img/choice.gif" class="all-shop" /><span>全选</span>
        <img src="img/shopcatDelect.gif" id="shopcatDelect" /></div>
    <!--<li>咖啡奶茶<p>￥9</p><div class="caozuo"><span class="icon add big"></span><span class="icontxt">44</span><span class="icon remove big"></span></div></li>-->
    <!-- <ul id="shopcat-bd" class="list">
</ul> -->
    <table  id="shopcat-bd" class="list">
        <!-- <tr>
            <td class="shopcat-choose"><img src="img/choice.gif" alt="" class="all-shop1"></td>
            <td class="shopcat-img"><img src="img/feng.png" alt="" class="all-shop2"></td>
            <td class="shopcat-content">
                <p class="shopcat-content-title">蓝山咖啡 250ml</p>
                <p class="shopcat-content-pay">￥23.99</p>
                <div class="shopcat-amount">
                    <div class="shopcat-amount-left">-</div>
                    <div class="shopcat-amount-center">1</div>
                    <div class="shopcat-amount-right">+</div>
                </div>
            </td>
        </tr> -->
    </table>

    <img src="img/noproduct.png" alt="" id="shopcar_nopro_img">

    <footer style="height:54px;">
        <div id="toaddressout" class="shopcat-alprice">
            <div id="shopping_topayBtn">
                总计  <span id="shopcat-alpri2">￥</span><span id="shopcat-alpri" class="shopcat-alpri">0.00</span><a id="toaddress" rel="" index="">去结算</a>
                <p id="shopcat-num">(共<span id="shopcatNum">0</span>件，不含运费)</p>
            </div>
            <div id="go-shopping" onclick="$.ui.goBack()">
                <a  href="">继续逛逛</a>
            </div>
        </div>
    </footer>
</div>
<!--- *************购物流之：确认订单***********-->
<div class="panel" id="confirm-order">
    <header>
        <div style="display:none"><img src="img/fenlei.png" class="fenlei" onclick="af.ui.toggleSideMenu()" /></div>
        <img class="logo" src="img/top-logo.png" width="74"/><span><img src="img/top-slong.png" width="155" style="margin-top: 12px;" /></span>
        <img onclick="af.ui.toggleAsideMenu()" class="search" width="24" src="img/top-search.png" />
    </header>
    <div>
        <ul id="noAddress" class="list">
            <li><a onclick="toAddress()">暂无收货地址</a></li>
        </ul>
        <ul id="defaultAddress" class="list">
        </ul>
    </div>
    <div class="shoppingList">
        <ul>
            <li class="shoppingList-li1">购物清单</li>
            <li class="shoppingList-li3">￥<span>0.00</span></li>
            <li class="shoppingList-li2">共<span>0</span>件</li>
        </ul>
    </div>
    <table  id="shoppingList" >
        <!--<tr>
            <td class="shopcat-img"><img src="img/feng.png" alt="" class="all-shop2"></td>
            <td class="shopcat-content">
                <p class="shopcat-content-title">蓝山咖啡 250ml</p>
                <p class="shopcat-content-pay">￥23.99</p>
                <div class="shoppingList-num">
                    数量<span>1</span>
                </div>
            </td>
        </tr>-->
    </table>
    <ul id="shoppingListPay" class="clear">
        <li class="shoppingPayLi1">
            <!-- <input  type="checkbox" class="shoppingPayChecked" checked="checked"/> -->
            <img src="img/checkedtrue.png" class="shoppingPayChecked" alt="">
            可用<span id="integral">0</span>积分 <input class="shoppingPayNum" id="shoppingPayNum" type="text"/>抵用<span id="paymoney">0</span>元</li>
        <li  class="shoppingPayLi2">
            支付密码：<input class="shoppingPayNum" id="password10086" type="password"/>
            <a href="#resetPay_1Password" style="text-decoration: none; color:#000;"  onclick="createCode('code2')">忘记支付密码？</a>
        </li>
    </ul>
    <div class="shoppingListText">
        <input id="shoppingListText" type="text" placeholder="备注">
    </div>
    <div style="padding-bottom:10px;">
	    <div id="logdiv">
		    <p id="logistics">选择物流</p>
			<div class="logsel">
				<select id="logsel">
					<!--<option>***********圆通快递***********</option>
					<option>***********申通快递***********</option>-->
				</select>
		    </div>
	    </div>
	    <p id="shoppingListWay">支付方式</p>
	   <div class="shoppingListWay" id="weichatpay">
		    <img  class="weichatlogo" src="img/weichatlogo.jpg" alt="">
		    <p>微支付</p>
		    <span>推荐已开通微支付的用户使用</span>
		    <img id="weichatShoppingWay" class="shoppingListWayChoose" src="img/choice.gif" alt="" class="all-shop1 weipay">
	    </div>
	    <div class="shoppingListWay" id="alipay">
	        <img  class="weichatlogo" src="img/alipay.png" alt="">
	        <p>支付宝</p>
	        <span>推荐已开通支付宝的用户使用</span>
	        <img id="zfbShoppingWay" class="shoppingListWayChoose" src="img/choice1.gif" alt="" class="all-shop1">
	    </div>
    </div>
    <!--<p id="shoppingListMore"><a href="#payWay">更多支付方式</a> <img src="img/shoppingListMore.jpg" alt=""></p>-->
    <footer style="height:49px; background: #fff;">
        <div class="order_footer" style="bottom:4px">
            <div class="order_footer_div1" style="margin-top:3px;">
                <span>共<b>0</b>件</span>
                <span class="order_footer_span2">￥<b>0.00</b></span>
                <p style="margin:0px;">(含邮费￥<b id="youfei">0.00</b>)</p>
            </div>
            <div class="order_footer_div2" id="suborderBtn">
                <a onclick="toSendPay()">提交订单</a>
            </div>
        </div>
    </footer>
</div>

<!--- *************购物流之：支付方式***********-->
<div title='支付方式' id="payWay" class="panel">
    <header>
        <div style="display:none"><img src="img/fenlei.png" class="fenlei" onclick="af.ui.toggleSideMenu()" /></div>
        <img class="logo" src="img/top-logo.png" width="74"/><span><img src="img/top-slong.png" width="155" style="margin-top: 12px;" /></span>
        <img onclick="af.ui.toggleAsideMenu()" class="search" width="24" src="img/top-search.png" />
    </header>

    <ul id="payWayContent">
        <li> 支付方式</li>
        <li class="payWayLi">
            <img class="payWayPhoto" src="img/weichatlogo.jpg" alt="">
            <span class="payWayName">微支付</span>
            <p> 推荐已开通<span class="payWayName1">微支付</span>的用户使用</p>
            <img class="payWayChoose" src="img/choice.gif" alt="" class="all-shop1">
        </li>
        <li class="payWayLi">
            <img class="payWayPhoto" src="img/weichatlogo.jpg" alt="">
            <span class="payWayName">微支付</span>
            <p> 推荐已开通<span class="payWayName1">微支付</span>的用户使用</p>
            <img class="payWayChoose" src="img/choice.gif" alt="" class="all-shop1">
        </li>

    </ul>

    <footer>
        <div class="order_footer">
            <div class="order_footer_div1">
                <span>共<b>2</b>件</span>
                <span class="order_footer_span2">￥<b>2000.00</b></span>
            </div>
            <div class="order_footer_div2">
                <a href="">提交订单</a>
            </div>
        </div>
    </footer>

</div>

<!--- *************购物流之：收货地址***********-->
<div title='收货地址' id="address" class="panel">
    <header>
        <div style="display:none"><img src="img/fenlei.png" class="fenlei" onclick="af.ui.toggleSideMenu()" /></div>
        <img class="logo" src="img/top-logo.png" width="74"/><span><img src="img/top-slong.png" width="155" style="margin-top: 12px;" /></span>
    </header>
    <!-- <div class="addaddressout" style="background:#fff;">
        <a onclick="showPopup6()">添加收货地址</a>
        <a onclick="$user.delAddress()">删除选中地址</a>
        选用微信收货地址
        <img src="img/address-next.gif" alt="" class="address-choose">
    </div> -->
    <div class="panel-out">
        <div id="no-address_img">
            <img src="img/no-address.jpg" width="100%" alt="">
        </div>
        <!-- <div id="address-list">

        </div> -->

        <div id="my_address">
            <ul id="my_address_ul">
                <!-- <li class="clear">
                    <div class="my_address_div1"><img src="img/choice.gif"></div>
                    <div class="my_address_div2">
                        <div><span>姓名</span><span class="span2_myaddress">123weqwe</span></div>
                        <div><span>电话</span><span class="span2_myaddress">12345678912</span></div>
                        <div><span>地址</span><span class="span2_myaddress">gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggsdafklhsdakjfklajsdfhkjsadhfkjasdfhsajfhaskjfh</span></div>
                    </div>
                    <div class="my_address_div3">
                        <div class="my_address_isdefault">默认地址</div>
                        <div>
                            <img src="img/address_pan.png">
                        </div>
                    </div>
                </li> -->
            </ul>
            <!-- <div class="addaddressout" style="background:#fff;margin-left: 0px; color:#aaaaaa;">
                选用微信收货地址
                <img src="img/address-next.gif" alt="" class="address-choose">
            </div> -->
        </div>
        <footer style="padding-top: 7px;background: #fff;">
            <!-- <div id="adrAlprice" class="shopcat-alprice">
                邮费:￥10元&nbsp;&nbsp;&nbsp;&nbsp;合计:￥<span id="Span1" class="shopcat-alpri">0.00</span>元<a id="topaypage" rel="">下一步</a>
            </div> -->

            <a id="addNewAddress" onclick="setup();">新增收货地址</a>
            <!--  <a id='A10' href="#main" class='A1 icon'><img src="img/menu-home.png" />首页</a>
             <a id='A5' class='A4 icon'><img src="img/menu-xian.png" />限时抢购</a>
             <a id='A12' class="A3 icon"><img src="img/menu-cat.png" />购物车<span class='af-badge lr'></span></a>
             <a id='A11' class="A2 icon"><img src="img/menu-user.png" />会员中心</a>   -->
            <!--<a id='A13' class="A4 icon"><img src="img/menu-card.png" />会员卡</a>    -->
        </footer>
    </div>
</div>

<!-- 新增收货地址 -->
<div id="new_shaddress" class="panel">
    <header>
        <div style="display:none"><img src="img/fenlei.png" class="fenlei" onclick="af.ui.toggleSideMenu()" /></div>
        <img class="logo" src="img/top-logo.png" width="74"/><span><img src="img/top-slong.png" width="155" style="margin-top: 12px;" /></span>
    </header>
    <div id="add-address">
        <div class="input-group">
            <form>
                <div class="address-left">
                    <div class="address-right">
                        <label for="frm1">姓名</label><input id="frm1" type="text" maxlength="12">
                    </div>
                </div>
                <div class="address-left">
                    <div class="address-right">
                        <label for="frm2">电话</label><input id="frm2" type="text" maxlength="15">
                    </div>
                </div>
                <div class="address-left">
                    <div class="address-select-right">
                        <label for="frm3">省份</label>
                        <!-- <input id="frm3" type="text"> -->
                        <select id="frm3">
                        </select>
                    </div>
                </div>
                <div class="address-left">
                    <div class="address-select-right">
                        <label for="frm4">城市</label>
                        <!-- <input id="frm4" type="text"> -->
                        <select id="frm4">
                        </select>
                    </div>
                </div>
                <div class="address-left">
                    <div class="address-select-right">
                        <label for="frm5">区县</label>
                        <!-- <input id="frm5" type="text"> -->
                        <select id="frm5">
                        </select>
                    </div>
                </div>

                <div class="address-left">
                    <div class="address-right">
                        <label for="frm6">详细地址</label><input id="frm6" type="text">
                    </div>
                </div>
                <div id="address-set">
                    <span>设为默认</span><span id="defaultstatus">0</span><img src="img/choice1.gif" alt="" class="address-img">
                </div>
            </form>
        </div>
    </div>

    <footer style="background: #e3e3e3;padding-top: 37px;">
        <div style="margin-top:-30px;padding-bottom: 2px;">
            <div id="frm7">
                <a>保存</a>
            </div>
            <div id="frm8" onclick="$.ui.goBack()">
                <a>取消</a>
            </div>
        </div>
    </footer>
</div>

<!-- 修改收货地址 -->
<div id="change_shaddress" class="panel">
    <header>
        <div style="display:none"><img src="img/fenlei.png" class="fenlei" onclick="af.ui.toggleSideMenu()" /></div>
        <img class="logo" src="img/top-logo.png" width="74"/><span><img src="img/top-slong.png" width="155" style="margin-top: 12px;" /></span>
    </header>
    <div id="change-address">
        <div class="input-group">
            <form>
                <div class="address-left">
                    <div class="address-right">
                        <label for="ch_frm1">姓名</label><input id="ch_frm1" type="text" maxlength="12">
                    </div>
                </div>
                <div class="address-left">
                    <div class="address-right">
                        <label for="ch_frm2">电话</label><input id="ch_frm2" type="text" maxlength="15">
                    </div>
                </div>
                <div class="address-left">
                    <div class="address-select-right">
                        <label for="ch_frm3">省份</label>
                        <!-- <input id="frm3" type="text"> -->
                        <select id="ch_frm3">
                        </select>
                    </div>
                </div>
                <div class="address-left">
                    <div class="address-select-right">
                        <label for="ch_frm4">城市</label>
                        <!-- <input id="frm4" type="text"> -->
                        <select id="ch_frm4">
                        </select>
                    </div>
                </div>
                <div class="address-left">
                    <div class="address-select-right">
                        <label for="ch_frm5">区县</label>
                        <!-- <input id="frm5" type="text"> -->
                        <select id="ch_frm5">
                        </select>
                    </div>
                </div>

                <div class="address-left">
                    <div class="address-right">
                        <label for="ch_frm6">详细地址</label><input id="ch_frm6" type="text">
                    </div>
                </div>
                <div id="ch_address-set">
                    <span>设为默认</span><span id="ch_defaultstatus">0</span><img src="img/choice1.gif" alt="" class="address-img">
                </div>

                <span id="ch_address_id"></span>
            </form>
        </div>
    </div>

    <footer style="background: #e3e3e3;padding-top: 37px;">
        <div style="margin-top:-30px;padding-bottom: 2px;">
            <div id="ch_frm7">
                <a>保存</a>
            </div>
            <div id="ch_frm8" onclick="$.ui.goBack()">
                <a>取消</a>
            </div>
        </div>
    </footer>
</div>

<!--- *************购物流之：支付***********-->
<div id="paypage" class="panel" title="在线支付">
    <div class="paypagebox">
        <div class="jifen">
            <span>剩余积分：</span><font id="mycore"></font><a id="paypricemsg"></a>
        </div>
        <div class="order">
            <span>订单总额：</span><font>￥<b id="payprice"></b></font>
        </div>

        <div class="paybox">
            <span>支付密码：</span>
            <input type="password" id="paypassed" name="one" style="width:200px;color:black;">
        </div>
        <div class="paybut">
            <a onclick="toSendPay()">确认支付</a>
        </div>
    </div>
</div>

<!--- *************购物流 END***********-->
<!--*****************商品****************-->
<div title="商品" id="productList" class="panel">
    <header>
        <img  onclick="af.ui.toggleSideMenu()"  class="allClassify" width="47" src="img/allClassify.png" />
        <div class="sortChoose">
            <div class="sortChoosediv_One" index="1">
                <span class="sortChooseOne"></span>
            </div>

            <div class="sortChoosediv_tow" index="0">
                <img class="sortChooseMore" src="img/moreColumn_cate.png">
            </div>
        </div>
        <img class="menu" id="header-menu" width="44" src="img/menu.png"/>
        <P class="sort">默认排序</P>
        <div id="classPaxu" class="classPaxu">
            <p onclick="$product.getSaledByOld(0,1,this)"><span>人气最高</span><img src="img/paixu1.jpg" /></p>
            <p onclick="$product.getSaledByOld(1,0,this)"><span>价格最低</span><img src="img/paixu2.jpg" /></p>
            <p onclick="$product.getSaledByOld(1,1,this)"><span>价格最高</span><img src="img/paixu3.jpg" /></p>
            <p onclick="$product.getSaledByOld(2,1,this)"><span>销量最高</span><img src="img/paixu4.jpg" /></p>
        </div>
    </header>

    <div class="panel-out">
        <ul id="productList-item">

        </ul>

        <ul id="productList-item_more" class="clear">
            <!-- <li class="moreColumn">
                <img class="moreColumnImg" src="img/no-tou.jpg">
                <img class="productCollect" src="img/collect2.png">
                <div class="moreColumnDiv">
                    <p>五羊雪糕</p>
                    <span class="moreColumnNew">￥5.00</span>
                    <span class="moreColumnOld">￥7.00</span>
                    <div class="item-icbox">
                        <img class="item-icon" src="img/shopcat-icon.png">
                    </div>
                </div>
            </li> -->
        </ul>
    </div>
</div>

<div title="产品详情" id="productDetail" class="panel">
    <header>
        <div style="display:none"><img src="img/fenlei.png" class="fenlei" onclick="af.ui.toggleSideMenu()" /></div>
        <img class="logo" src="img/top-logo.png" width="74"/><span><img src="img/top-slong.png" width="155" style="margin-top: 12px;" /></span>
        <!-- <img onclick="af.ui.toggleAsideMenu()" class="search" width="24" src="img/search.png" />
        <img class="menu" id="header-menu" width="24" src="img/menu.png"/> -->
        <div id="classPaxu" class="classPaxu">
            <p onclick="$product.getSaledByOld(0,1)"><span>人气最高</span><img src="img/paixu1.jpg" /></p>
            <p onclick="$product.getSaledByOld(1,0)"><span>价格最低</span><img src="img/paixu2.jpg" /></p>
            <p onclick="$product.getSaledByOld(1,1)"><span>价格最高</span><img src="img/paixu3.jpg" /></p>
            <p onclick="$product.getSaledByOld(2,1)"><span>销量最高</span><img src="img/paixu4.jpg" /></p>
        </div>
    </header>
    <div id="banner_pro" class="panel-out productdetailimg toptip-server_lone">
        <div id="product_img">
            <img class="d1" id="DetailImg" src="" />
            <img class="d1" id="DetailImg_1" src="img/banner2.jpg" />
            <img class="d1" id="DetailImg_2" src="img/banner3.jpg" />
            <img class="d1" id="DetailImg_3" src="img/banner1.jpg" />
            <img class="d1" id="DetailImg_4" src="img/banner2.jpg" />
        </div>
        <div class="detail_mb"></div>
        <div id="banner_id" class="detail_mb_d2">
            <ul>

            </ul>
        </div>
    </div>

    <div class="detail">
        <span id="DetailName"></span>

        <div id="price_pro">
            <span class="span_fc span_1">￥<font id="DetailPrice" class="span_fc"></font></span>
            <span class="span_text span_1">￥<b id="DetailMarketPrice"></b></span>
        </div>

        <span class="span_2">已售<font id="sold_number">0</font>件</span>
        <div class="span_3">
            <div class="counttle clear">
                <span style="float:left;margin-top: 10px;">数量：</span>
                <div class="shopcat-amount_pro" style="float:left;">
                    <span class="shopcat-amount-left_pro" onclick="detailcountmin('shopcatCount')"><img style=" width:23px; margin-top: -2px; " src="img/less.png"></span>
                    <span class="shopcat-amount-center_pro" id="shopcatCount"></span>
                    <!-- <input type="text" class="shopcat-amount-center_pro" id="shopcatCount"> -->
                    <span class="shopcat-amount-right_pro" onclick="detailcountadd('shopcatCount')"><img style=" width:23px; margin-top: -2px; " src="img/plus.png" ></span>
                </div>
                <div class="counttle" style="margin-left: 5px; font-size: 14px; float:left;">库存<font id="RepertoryCount">0</font>件</div><img class="detail-collect" src="img/collect2.png">
            </div>
        </div>

        <div class="product_bannar">
            <ul>
                <li id="product_li_a" class="active_li2">商品详情</li>
                <!-- <li id="product_li_b">商品评价</li>
                <li id="product_li_c">商品咨询</li> -->
            </ul>
        </div>
        <div id="detail">
        </div>
        <!-- <div id="prod_assess" class="detail_class">暂无评论</div>

        <div id="prod_advisory" class="detail_class">暂无咨询</div>-->
    </div>

    <footer id="pdt_footer">
        <div id="toptip-server_div" style="display:none;">
            <img src="img/topnav.png">
        </div>
        <div id="toptip-server">
            <a href="tel:400-819-0313"><img class="toptip-server_lone" src="img/server.png"></a>
        </div>
        <!-- <div id="bannar_nav_tip">
            <span>联系我们</span>
            <span>会员中心</span>
            <span>首页</span>
        </div> -->
        <div class="buy_divbg">
                <span id="Detailcaozuo">
                    <!-- <a class="caozuo">加入购物车</a>
                    <a id="Buynow" class="caozuo">立即购买</a> -->
                </span>
            
        </div>
        <a id='A10_pro' href="#main" class='A1 productDetailFoot icon'><img src="img/menu-home.png" />首页</a>
        <a id='A5_pro' class='A4 productDetailFoot icon'><img src="img/footer_2.png" />闪购</a>
        <a id='A51_pro' onclick="getallproduct()" class='A5 productDetailFoot icon'><img src="img/footer_3.png"  />精选</a>
        <a id='A12_pro' class="A3 productDetailFoot icon" onclick = "clearhistory()"><img src="img/shopcat-icon.png" style="height:24px;" />购物车<span class='af-badge lr'></span></a>
        <a id='A11_pro' class="A2 productDetailFoot icon"><img src="img/menu-user.png" />会员中心</a>

    </footer>
</div>

<!--*****************商品 END****************-->
<div id="orderlist" class="panel">
    <header>
        <div style="display:none"><img src="img/fenlei.png" class="fenlei" onclick="af.ui.toggleSideMenu()" /></div>
        <img class="logo" src="img/top-logo.png" width="74"/><span><img src="img/top-slong.png" width="155" style="margin-top: 12px;" /></span>
        <img onclick="af.ui.toggleAsideMenu()" class="search" width="24" src="img/top-search.png" />
    </header>
    <div class="panel-out">
        <div id="order-list">

        </div>
    </div>
</div>


<div id="orderDetail" class="panel">
    <header>
        <div style="display:none"><img src="img/fenlei.png" class="fenlei" onclick="af.ui.toggleSideMenu()" /></div>
        <img class="logo" src="img/top-logo.png" width="74"/><span><img src="img/top-slong.png" width="155" style="margin-top: 12px;" /></span>
        <img onclick="af.ui.toggleAsideMenu()" class="search" width="24" src="img/top-search.png" />
    </header>
    <div class="panel-out">
        <div id="order-detail">

        </div>
    </div>
    <footer>
        <div id="buy_divbg_2" class="buy_divbg_2">
            <!--<span id="Detailcaozuo_2">-->
                <!--<a class="caozuo_2">支付</a>-->
                <!--<a class="caozuo_2">取消</a>-->
            <!--</span>-->
        </div>
        <a class='A1 icon'><img src="img/menu-home.png" />首页</a>
        <a class='A4 icon'><img src="img/footer_2.png" />闪购</a>
        <a class='A5 icon'  onclick="getallproduct()"><img src="img/footer_3.png" />精选</a>
        <a class="A3 icon" onclick = "clearhistory()"><img src="img/shopcat-icon.png" style="height:24px;" />购物车<span class='af-badge lr'></span></a>
        <a class="A2 icon"><img src="img/menu-user.png" />会员中心</a>
    </footer>

</div>
<!--*****************订单 END****************-->
<div id="NewIndex" class="panel">
    <header><div style="display:none"><img src="img/fenlei.png" class="fenlei" onclick="af.ui.toggleSideMenu()" /></div><img class="logo" src="img/top-logo.png" width="74"/><span><img src="img/top-slong.png" width="155" style="margin-top: 12px;" /></span><img onclick="af.ui.toggleAsideMenu()" class="search" width="24" src="img/top-search.png" /></header>
    <div class="panel-out">
        <div id="newindex-list">

        </div>
    </div>
</div>
<!--*****************xml END****************-->
<nav>
    <!--<ul id="category" class="list">-->

    <!--</ul>-->
    <div class="left-category">
        <div class="self-title clear"><span style="display:inline-block; float:left;">全部分类</span><div class="allcate_tc"></div></div>
        <ul id="category" class="list">
            <li><a><b>酒类</b><br /><br /><span>烈酒</span><span>葡萄酒</span><span>啤酒</span></a></li>
        </ul>
    </div>
</nav>
</div>

<!--SideMenu-->
<div id="navbar">
    <a id='A1' class='A1 icon pressed'><img src="img/menu-home_after.png" />首页</a>
    <a id='A4' class='A4 icon'><img src="img/footer_2.png" />闪购</a>
    <a id='A5' class='A5 icon'  onclick="getallproduct()"><img src="img/footer_3.png" />精选</a>
    <a id='A3' class="A3 icon" onclick = "clearhistory()"><img src="img/shopcat-icon.png" style="height:24px;" />购物车<span class='af-badge lr'></span></a>
    <a id='A2' class="A2 icon"><img src="img/menu-user.png" />会员中心</a>
</div>

<aside id="all-aside">
    <div class="aside-title">
        <input type="search" id="searchtxt" style="border-radius:4px;" />
        <a onclick="searchpro()" class="searcha icon magnifier"></a>
    </div>
    <div class="aside-menu"><a>猜你喜欢</a>
        <a onclick="$product.search('葡萄酒')">葡萄酒</a>
        <a onclick="$product.search('巧克力')">巧克力</a>
        <a onclick="$product.search('曲奇')">曲奇</a>
        <a onclick="$product.search('香槟')">香槟</a>
        <a onclick="$product.search('蜂蜜')">蜂蜜</a>
    </div>


    <div class="aside-category">
        <div class="self-title clear"><span style="display:inline-block; float:left;">全部分类</span><div class="allcate_tc"></div></div>
        <ul id="aside-category" class="list">
            <li><a><b>酒类</b><br /><br /><span>烈酒</span><span>葡萄酒</span><span>啤酒</span></a></li>
        </ul>
    </div>
</aside>
</div>
</body>
 <script type="text/javascript" charset="utf-8" src="js/appframework.min.js"></script>
    <script type="text/javascript" charset="utf-8" src="js/appframework.ui.min.js"></script>
   
    <script type="text/javascript">
        if (!((window.DocumentTouch && document instanceof DocumentTouch) || 'ontouchstart' in window)) {
            var script = document.createElement("script");
            script.src = "plugins/af.desktopBrowsers.js";
            var tag = $("head").append(script);
            //$.os.desktop=true;
        }
    </script>
    <script type="text/javascript" src="js/addressChoose_r.js"></script>
    <script type="text/javascript" charset="utf-8" src="js/slideRight.js"></script>
    <!--<script type="text/javascript" charset="utf-8" src="./plugins/af.slidemenu.js"></script>-->
    <!--基础库-->
    <script type="text/javascript" src="js/takemy-base.js?23"></script>
    <!--加载入口-->
    <script type="text/javascript" src="js/takemy-main.js?23"></script>
    <!--获取数据-->
    <script type="text/javascript" src="js/takemy-data.js?23"></script>
    <!--验证-->
    <script type="text/javascript" src="js/takemy-commond.js?23"></script>
    <script type="text/javascript" src="js/zsp.js?23"></script>
    <!--<script type="text/javascript" src="js/productDetail_bannar.js?23"></script>-->
</html>

