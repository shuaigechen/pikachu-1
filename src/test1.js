//优化前代码
import string from './css.js'

let n = 1
demo.innerText = string.substr(0, n)
demo2.innerHTML = string.substr(0, n)

let time = 100

//声明函数x，是打印代码，后面直接调用函数
const run = () => {
    n += 1
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
    console.log(n + ':' + string.substr(0, n))
    demo.innerText = string.substr(0, n)
    demo2.innerHTML = string.substr(0, n)
    demo.scrollTop = demo.scrollHeight//让滚动条去最下面
}

//声明运行代码的函数，后面调用
const play = () => {
    return setInterval(run, time)
}

//声明停止代码的函数，后面调用
const pause = () => {
    window.clearInterval(id)
}

const slow = () => {
    pause()
    time = 300
    id = play()
}

const normal = () => {
    pause()
    time = 50
    id = play()
}

const fast = () => {
    pause()
    time = 0
    id = play()
}

//把play的结果返回id
let id = play()

btnPause.onclick = () => {
    pause()
}

btnPlay.onclick = () => {
    id = play()
}

btnSlow.onclick = slow
btnNormal.onclick = normal
btnFast.onclick = fast

