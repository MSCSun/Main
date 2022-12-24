var dom = document.getElementById('histogram');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {
xAxis: {
type: 'category',
data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
},
yAxis: {
type: 'value'
},
series: [
{
  data: [
    120,
    {
      value: 200,
      itemStyle: {
        color: '#a90000'
      }
    },
    150,
    80,
    70,
    110,
    130
  ],
  type: 'bar'
}
]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);