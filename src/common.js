export default {
	data() {
		return {
            siteUri: 'http://mobileapi.scorebee.com/api/',
            //siteUri: 'http://padelmobile.localhost/api/tv/',
            // imageUrl : 'https://backoffice.forehand.se'
		}
	},
	methods: {
		async callApi(method, url, dataObj) {
			try {

				let data = await axios({
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					},
					method: method,
					url: this.siteUri+url,
					data: dataObj
				})
				return data

			} catch (e) {

				return e.response
			}
		},


	}
}