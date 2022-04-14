// 全局引用的话就要去掉下面这个按需引用的配置
// module.exports = {
//   plugins: [
//     ['import', {
//       libraryName: 'vant',
//       libraryDirectory: 'es',
//       style: true
//     }, 'vant']
//   ]
// };
// module.exports = {
//   plugins: [
//     [
//       'import',
//       {
//         libraryName: 'vant',
//         libraryDirectory: 'es',
//         // 指定样式路径
//         style: (name) => `${name}/style/less`,
//       },
//       'vant',
//     ],
//   ],
// };
