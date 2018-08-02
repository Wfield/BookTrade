import React from 'react'
import { Image } from 'react-bootstrap'

const HomePage= ()=> (
	<div className='home'>
		<h2>豆瓣图书模拟交易</h2>
		<div className='home-img'>
			<Image src='/imgs/home.png' responsive />
		</div>
		<div className='home-footer'>
			<strong>告知：</strong>此网站使用<a href='https://book.douban.com/' target='_blank'>豆瓣图书</a>API获取指定图书ISBN号的书籍信息
		</div>
		<div className='footer'>
			create by <code>Wfield</code> 2018/8/2
		</div>
	</div>
)

export default HomePage