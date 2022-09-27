export default {
	data() {
		return {
			
            // siteUri: 'http://staginapi.duare.net/api/',
            // siteUri: 'http://scorebee-api.test/api/',
            siteUri: 'http://mobileapi.scorebee.com/api/',
            // siteUri: 'http://127.0.0.1:8000/api/',
            // siteUri: 'http://padelmobile.localhost/api/tv/',
            // imageUrl : 'https://backoffice.forehand.se'
			// http://staginapi.duare.net/api/match/getInningsLiveScore/7000
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