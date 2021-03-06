import http from './interface'
const apiList = {
	savePwd:(data)=> {
		return http.request({
			url: 'systemAdmin/savePwd',
			method: 'POST',
			data
		})
	},
	
	getSystemList:(data)=> {
		return http.request({
			url: 'Pool/getSystemList',
			method: 'GET',
			data
		})
	},
	getShopInfo:(data)=> {
		return http.request({
			url: 'Pool/getShopInfo',
			method: 'GET',
			data
		})
	},
	getRechargeList:(data)=> {
		return http.request({
			url: 'Pool/getRechargeList',
			method: 'GET',
			data
		})
	},
	getWithdrawList:(data)=> {
		return http.request({
			url: 'Pool/getWithdrawList',
			method: 'GET',
			data
		})
	},
	getTimeArea:(data)=> {
		return http.request({
			url: 'Pool/getTimeArea',
			method: 'GET',
			data
		})
	},
	tongji:(data)=> {
		return http.request({
			url: 'Pool/index',
			method: 'GET',
			data
		})
	},
	getBillList:(data)=> {
		return http.request({
			url: 'user/getBillList',
			method: 'GET',
			data
		})
	},
	registerList:(data)=> {
		return http.request({
			url: 'user/registerList',
			method: 'GET',
			data
		})
	},
	betList:(data)=> {
		return http.request({
			url: 'user/betList',
			method: 'GET',
			data
		})
	},
	
	getFootGames:(data)=> {
		return http.request({
			url: 'index/footGames',
			method: 'GET',
			data
		})
	},
	
	setDashen:(data)=> {
		return http.request({
			url: 'user/setDashen',
			method: 'POST',
			data
		})
	},
	setMoni:(data)=> {
		return http.request({
			url: 'user/setMoni',
			method: 'POST',
			data
		})
	},
	setDashenOrder:(data)=> {
		return http.request({
			url: 'user/setDashenOrder',
			method: 'POST',
			data
		})
	},
	setYjRate:(data)=> {
		return http.request({
			url: 'user/setYjRate',
			method: 'POST',
			data
		})
	},
	setSeller:(data)=> {
		return http.request({
			url: 'user/setSeller',
			method: 'POST',
			data
		})
	},
	
	changeMoney:(data)=> {
		return http.request({
			url: 'user/changeMoney',
			method: 'POST',
			data
		})
	},
	cancel:(data)=> {
		return http.request({
			url: 'order/cancel',
			method: 'POST',
			data
		})
	},
	printTick:(data)=> {
		return http.request({
			url: 'order/printTick',
			method: 'POST',
			data
		})
	},
	
	getBasketGames:(data)=> {
		return http.request({
			url: 'index/basketGames',
			method: 'GET',
			data
		})
	},
	
	getUserInfo:(data)=> {
		return http.request({
			url: 'user/userinfo',
			method: 'GET',
			data
		})
	},
	getOrderList:(data)=> {
		return http.request({
			url: 'order/orderList',
			method: 'GET',
			data
		})
	},
	sendAward:(data)=> {
		return http.request({
			url: 'order/sendAward',
			method: 'POST',
			data
		})
	},
	refuseWithdraw:(data)=> {
		return http.request({
			url: 'Pool/refuseWithdraw',
			method: 'POST',
			data
		})
	},
	
	passWithdraw:(data)=> {
		return http.request({
			url: 'Pool/passWithdraw',
			method: 'POST',
			data
		})
	},
	getWithdrawApplyList:(data)=> {
		return http.request({
			url: 'Pool/getWithdrawApplyList',
			method: 'POST',
			data
		})
	},
	getOrderRecord:(data)=> {
		return http.request({
			url: 'user/orderRecord',
			method: 'GET',
			data
		})
	},
	getUserList:(data)=> {
		return http.request({
			url: 'user/userList',
			method: 'GET',
			data
		})
	},
	searchUser:(data)=> {
		return http.request({
			url: 'user/searchUser',
			method: 'GET',
			data
		})
	},
	doorder_:(data)=> {
		return http.request({
			url: 'order/doOrder',
			method: 'POST',
			data
		})
	},
	
	// ???????????????
	getAuth: (data) => {
		return http.request({
			url: 'index.php/index/index/auth',
			method: 'POST',
			data
		})
	},
	
	// ???????????????
	getCode: (data) => {
		return http.request({
			url: 'index.php/index/index/get_code',
			method: 'POST',
			data
		})
	},
	// ??????
	register:(data) => {
		return http.request({
			url: 'index.php/index/index/register',
			method: 'POST',
			data
		})
	},
	// ??????
	login:(data) => {
		return http.request({
			url: 'index.php/index/index/login',
			method: 'POST',
			data
		})
	},
	// ????????????
	forgetPsd:(data) => {
		return http.request({
			url: 'index.php/index/index/forget_psd',
			method: 'POST',
			data
		})
	},
	// ????????????
	editPsd:(data) => {
		return http.request({
			url: 'index.php/index/user/edit_psd',
			method: 'POST',
			data
		})
	},
	// ??????????????????
	set_paypsd:(data) => {
		return http.request({
			url: 'index.php/index/user/set_paypsd',
			method: 'POST',
			data
		})
	},
	// ??????????????????
	edit_paypsd:(data) => {
		return http.request({
			url: 'index.php/index/user/edit_paypsd',
			method: 'POST',
			data
		})
	},
	// ??????????????????
	forget_paypsd:(data) => {
		return http.request({
			url: 'index.php/index/user/forget_paypsd',
			method: 'POST',
			data
		})
	},
	// ??????
	getIndex:() => {
		return http.request({
			url: 'index.php/index/index/index',
			method: 'POST',
			// data
		})
	},
	// ????????????
	getGroup:() => {
		return http.request({
			url: 'index.php/index/index/group',
			method: 'POST',
			// data
		})
	},
	getCommonGroup:() => {
		return http.request({
			url: 'index.php/index/index/common_group',
			method: 'POST',
			// data
		})
	},
	// ??????
	getCate:() => {
		return http.request({
			url: 'index.php/index/goods/index',
			method: 'POST',
			// data
		})
	},
	// ??????????????????
	getClassGoods:(data) => {
		return http.request({
			url: 'index.php/index/goods/class_goods',
			method: 'POST',
			data
		})
	},
	// ?????????????????????
	getScreenGoods:(data) => {
		return http.request({
			url: 'index.php/index/goods/screen_goods',
			method: 'POST',
			data
		})
	},
	// ????????????
	goodsInfo:(data) => {
		return http.request({
			url: 'index.php/index/goods/goods_info',
			method: 'POST',
			data
		})
	},
	// ??????/????????????
	toCollect:(data) => {
		return http.request({
			url: 'index.php/index/goods/collect',
			method: 'POST',
			data
		})
	},
	// ????????????
	userInfo:(data) => {
		return http.request({
			url: 'index.php/index/user/index',
			method: 'POST',
			data
		})
	},
	// ????????????
	getAddress:(data) => {
		return http.request({
			url: 'index.php/index/user/address',
			method: 'POST',
			data
		})
	},
	// ??????????????????
	addressInfo:(data) => {
		return http.request({
			url: 'index.php/index/user/address_info',
			method: 'POST',
			data
		})
	},
	
	// ??????????????????
	defaultaddressInfo:(data) => {
		return http.request({
			url: 'index.php/index/user/default_address_info',
			method: 'POST',
			data
		})
	},
	// ????????????
	addAddress:(data) => {
		return http.request({
			url: 'index.php/index/user/address_add',
			method: 'POST',
			data
		})
	},
	// ????????????
	editAddress:(data) => {
		return http.request({
			url: 'index.php/index/user/address_edit',
			method: 'POST',
			data
		})
	},
	// ????????????
	delAddress:(data) => {
		return http.request({
			url: 'index.php/index/user/address_del',
			method: 'POST',
			data
		})
	},
	// ?????????????????????
	inviteCode:(data) => {
		return http.request({
			url: 'index.php/index/user/invite_user',
			method: 'POST',
			data
		})
	},
	// ????????????
	makeImg:(data) => {
		return http.request({
			url: 'index.php/index/user/make_img',
			method: 'POST',
			data
		})
	},
	// ????????????
	team:(data) => {
		return http.request({
			url: 'index.php/index/user/team',
			method: 'POST',
			data
		})
	},
	
	team:(data) => {
		return http.request({
			url: 'index.php/index/user/team',
			method: 'POST',
			data
		})
	},
	getwxinfo:(data) => {
		return http.request({
			url: 'index.php/index/user/getwxinfo',
			method: 'POST',
			data
		})
	},
	
	// ????????????
	getUpgrade:(data) => {
		return http.request({
			url: 'index.php/index/user/getUpgrade',
			method: 'POST',
			data
		})
	},
	// ????????????
	doUpgrade:(data) => {
		return http.request({
			url: 'index.php/index/user/doUpgrade',
			method: 'POST',
			data
		})
	},
	// ????????????/??????
	myCollect:(data) => {
		return http.request({
			url: 'index.php/index/user/my_collect',
			method: 'POST',
			data
		})
	},
	// ????????????/??????
	delCollect:(data) => {
		return http.request({
			url: 'index.php/index/user/del_collect',
			method: 'POST',
			data
		})
	},
	// ????????????
	question:(data) => {
		return http.request({
			url: 'index.php/index/user/question',
			method: 'POST',
			data
		})
	},
	// ????????????
	f_type:() => {
		return http.request({
			url: 'index.php/index/user/f_type',
			method: 'POST',
			// data
		})
	},
	
	
	// ????????????
	feedback:(data) => {
		return http.request({
			url: 'index.php/index/user/feedback',
			method: 'POST',
			data
		})
	},
	// ????????????
	f_list:(data) => {
		return http.request({
			url: 'index.php/index/user/f_list',
			method: 'POST',
			data
		})
	},
	// ?????????????????????
	cartInfo:(data) => {
		return http.request({
			url: 'index.php/index/cart/index',
			method: 'POST',
			data
		})
	},
	// ???????????????
	addCart:(data) => {
		return http.request({
			url: 'index.php/index/cart/add_cart',
			method: 'POST',
			data
		})
	},
	// ???????????????
	editCart:(data) => {
		return http.request({
			url: 'index.php/index/cart/edit_cart',
			method: 'POST',
			data
		})
	},
	// ???????????????
	delCart:(data) => {
		return http.request({
			url: 'index.php/index/cart/del_cart',
			method: 'POST',
			data
		})
	},
	// ???????????????
	submitCart:(data) => {
		return http.request({
			url: 'index.php/index/main/cart_submit',
			method: 'POST',
			data
		})
	},
	// ????????????-????????????
	submitGoods:(data) => {
		return http.request({
			url: 'index.php/index/main/goods_submit',
			method: 'POST',
			data
		})
	},
	// ??????????????????????????????
	skuInfo:(data) => {
		return http.request({
			url: 'index.php/index/goods/sku_info',
			method: 'POST',
			data
		})
	},
	// ????????????
	creatOrder:(data) => {
		return http.request({
			url: 'index.php/index/main/order',
			method: 'POST',
			data
		})
	},
	// ??????
	payment:(data) => {
		return http.request({
			url: 'index.php/index/main/pay',
			method: 'POST',
			data
		})
	},
	// ????????????
	jfShop:(data) => {
		return http.request({
			url: 'index.php/index/goods/jf_shop',
			method: 'POST',
			data
		})
	},
	
	// ????????????
	wallet:(data) => {
		return http.request({
			url: 'index.php/index/user/wallet',
			method: 'POST',
			data
		})
	},
	// ??????/????????????
	walletMx:(data) => {
		return http.request({
			url: 'index.php/index/user/mingxi',
			method: 'POST',
			data
		})
	},
	//????????????
	rechargeSet:(data) => {
		return http.request({
			url: 'index.php/index/user/recharge_set',
			method: 'POST',
			data
		})
	},
	//????????????
	recharge:(data) => {
		return http.request({
			url: 'index.php/index/user/recharge',
			method: 'POST',
			data
		})
	},
	//????????????
	tixian:(data) => {
		return http.request({
			url: 'index.php/index/user/tixian',
			method: 'POST',
			data
		})
	},
	// ????????????
	orderList:(data) => {
		return http.request({
			url: 'index.php/index/user/order_list',
			method: 'POST',
			data
		})
	},
	// ????????????
	orderInfo:(data) => {
		return http.request({
			url: 'index.php/index/user/order_info',
			method: 'POST',
			data
		})
	},
	//????????????
	logistics:(data) => {
		return http.request({
			url: 'index.php/index/user/logistics',
			method: 'POST',
			data
		})
	},
	//????????????
	delOrder:(data) => {
		return http.request({
			url: 'index.php/index/user/order_del',
			method: 'POST',
			data
		})
	},
	//????????????
	confirmOrder:(data) => {
		return http.request({
			url: 'index.php/index/user/order_confirm',
			method: 'POST',
			data
		})
	},
	//??????
	tihuo:(data) => {
		return http.request({
			url: 'index.php/index/user/tihuo',
			method: 'POST',
			data
		})
	},
	//????????????
	chargeIntegral:(data) => {
		return http.request({
			url: 'index.php/index/user/chargeIntegral',
			method: 'POST',
			data
		})
	},
	
	//????????????
	chooseSku:(data) => {
		return http.request({
			url: 'index.php/index/goods/sku_info',
			method: 'POST',
			data
		})
	},
	//????????????
	nowGroup:(data) => {
		return http.request({
			url: 'index.php/index/main/now_group',
			method: 'POST',
			data
		})
	},
	//????????????
	historyGroup:(data) => {
		return http.request({
			url: 'index.php/index/main/history_group',
			method: 'POST',
			data
		})
	},
	//????????????
	groupDetail:(data) => {
		return http.request({
			url: 'index.php/index/main/group_detail',
			method: 'POST',
			data
		})
	},
	//???????????????
	couponList:(data) => {
		return http.request({
			url: 'index.php/index/user/coupon_list',
			method: 'POST',
			data
		})
	},
	//???????????????
	getCoupon:(data) => {
		return http.request({
			url: 'index.php/index/main/coupon',
			method: 'POST',
			data
		})
	},
	//???????????????
	takeCoupon:(data) => {
		return http.request({
			url: 'index.php/index/goods/lq_coupon',
			method: 'POST',
			data
		})
	},
	//???????????????????????????
	countPrice:(data) => {
		return http.request({
			url: 'index.php/index/main/count_price',
			method: 'POST',
			data
		})
	},
	//??????
	pingJia:(data) => {
		return http.request({
			url: 'index.php/index/user/ping',
			method: 'POST',
			data
		})
	},
	//????????????
	getComment:(data) => {
		return http.request({
			url: 'index.php/index/goods/comment',
			method: 'POST',
			data
		})
	},
	// ????????????
	refund:(data) => {
		return http.request({
			url: 'index.php/index/user/refund',
			method: 'POST',
			data
		})
	},
	//????????????
	changeInfo:(data) => {
		return http.request({
			url: 'index.php/index/user/edit_info',
			method: 'POST',
			data
		})
	},
	//????????????
	about:(data) => {
		return http.request({
			url: 'index.php/index/user/about',
			method: 'POST',
			data
		})
	},
	// ????????????
	upload:(data) => {
		return http.request({
			url: 'index.php/index/home/up_img',
			method: 'POST',
			data
		})
	},
	// ??????????????????
	kefu:(data) => {
		return http.request({
			url: 'index.php/index/user/kefu',
			method: 'POST',
			data
		})
	},
	// ????????????
	no_order:(data) => {
		return http.request({
			url: 'index.php/index/user/no_order',
			method: 'POST',
			data
		})
	},
	// ??????
	hexiao:(data) => {
		return http.request({
			url: 'index.php/index/user/hexiao',
			method: 'POST',
			data
		})
	},
	// ????????????
	store:() => {
		return http.request({
			url: 'index.php/index/main/store',
			method: 'POST',
			// data
		})
	},
	//??????
	doorder:(data) => {
		return http.request({
			
			
			url: 'index.php/index/main/order',
			method: 'POST',
			data
		})
	},
	// ??????????????????
	u_out:(data) => {
		return http.request({
			url: 'index.php/index/user/u_out',
			method: 'POST',
			data
		})
	},
}
export default apiList