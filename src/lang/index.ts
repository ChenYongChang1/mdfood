import { createI18n } from 'vue-i18n'
import en from './modules/en'
import cn from './modules/zh-cn'

interface DeepMap {
	[k: string]: DeepMap | string
}

function formatDictKey(map: DeepMap, newMap: DeepMap = {}) {
	for (const i in map) {
		const isObject = typeof map[i] === 'object'
		const newKey = i.replace(/ /g, '').replace(/\./g, '').replace(/,/g, '_')
		newMap[newKey] = isObject ? {} : map[i] || ''
		if (isObject) {
			formatDictKey(map[i] as DeepMap, newMap[newKey] as DeepMap)
		}
	}
	return newMap
}

//引入的不同语言文件
const messages = {
	en: formatDictKey(en),
	'zh-cn': formatDictKey(cn),
}
console.log(messages, 'messages')

//这个类型可以自己配置，毕竟每个人做的都不一样
const i18n: any = createI18n({
	legacy: false, // 使用 Composition API 模式，则需要将其设置为false
	globalInjection: true, //全局生效$t
	locale: localStorage.getItem('lang') || 'zh-cn', // 默认cn翻译
	messages, //ES6解构
})

export default i18n
