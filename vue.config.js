module.exports = {
	devServer: {
	        port: 8080,
	        https: true,
	        // key: fs.readFileSync(`${httpsURL}/key.key`),
	        // cert: fs.readFileSync(`${httpsURL}/key.crt`),
	        // ca: fs.readFileSync(`${httpsURL}/cert.pem`),
	        // proxy: {
	        //     "/api": {
	        //         target: "http://10.99.9.166:8070/api", //接口地址
	        //         ws: false,
	        //         changeOrigin: true, //是否跨域
	        //     }
	        // },
	        disableHostCheck: true,
	    },
};
