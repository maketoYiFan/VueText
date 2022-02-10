const os = require("os");
const io = require("socket.io").listen("1111");
var diskinfo = require('diskinfo');
//当前盘符
var current_disk = __dirname.substr(0, 2).toLowerCase();
const osUtils = require("os-utils");
let apiStatus = require('./apiTest')
var currCPU = 0;
var interval = -1;
let data = {
  IP: getIP(),
  apiStatus: 0,
  memory: 0,
  cpuUsage: 0,
  disk: 0
}


//连接事件
io.sockets.on('connection', socket=> {
  socket.emit("connected", "连接成功")
  console.log("连接成功")

  socket.on("disconnect",()=>{
    console.log("disconnect")
  })

  socket.on('endConnection', function (data) {
    console.log("endConnection")
    console.log(data)
    socket.emit("unConnection", "服务器端已停止")
    clearInterval(interval)
    interval = -1;
  })
})

//获取IP地址
function getIP() {
  const interfaces = os.networkInterfaces();
  // console.log('interfaces:', interfaces)
  for (let devName in interfaces) {
    const iface = interfaces[devName];
    // console.log('iface:', iface)
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      // console.log('alias:', alias)
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal && alias.netmask === '255.255.255.0') {
        return alias.address;
      }
    }
  }
}

//获得所有磁盘空间
diskinfo.getDrives(function (err, aDrives) {
  //遍历所有磁盘信息
  for (var i = 0; i < aDrives.length; i++) {
    //只获取当前磁盘信息
    if (aDrives[i].mounted.toLowerCase() == current_disk) {

      //盘符号
      var mounted = 'mounted ' + aDrives[i].mounted;
      //总量
      var total = 'total ' + (aDrives[i].blocks / 1024 / 1024 / 1024).toFixed(0) + "gb";
      //已使用
      var used = 'used ' + (aDrives[i].used / 1024 / 1024 / 1024).toFixed(0) + "gb";
      //可用
      var available = 'available ' + (aDrives[i].available / 1024 / 1024 / 1024).toFixed(0) + "gb";
      //使用率
      var capacity = 'capacity ' + aDrives[i].capacity;

      data.disk = aDrives[i].mounted + (aDrives[i].used / 1024 / 1024 / 1024).toFixed(0) + "gb" + '|' + (aDrives[i].blocks / 1024 / 1024 / 1024).toFixed(0) + "gb"
      // console.log(mounted + "\r\n" + total + "\r\n" + used + "\r\n" + available + "\r\n" + capacity);
    }
  }
})

//收集内存、cpu状态
function start(){
  
  (function updateCPU() {
    setTimeout(function () {
      osUtils.cpuUsage(function (value) {
        currCPU = value;
  
        updateCPU();
      });
    }, 0);
  })()

  if (interval < 0) {
    //每隔1s取系统数据
    interval = setInterval(function () {
      var freeMem = os.freemem()/1024/1024/1024;
      var totalMem = os.totalmem()/1024/1024/1024;
      data.apiStatus = apiStatus.apiStatus,
      data.memory = (totalMem - freeMem).toFixed(2) + "G"  + "|" + totalMem.toFixed(2) + "G",
      data.cpuUsage = ( currCPU * 100.0 ).toFixed(2) + "%", 

      io.sockets.emit("systemUpdate",data)
      console.log(data)
    }, 1000);
  }
}

// 直接运行 
start() 




