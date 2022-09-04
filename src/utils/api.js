const OPEN_API = {
    Taipei: {
        url: 'https://www.travel.taipei/open-api/zh-tw/Attractions/All',
        data: ['data'],
        params: {
            title: 'name',
            info: 'introduction',
            time: 'open_time',
            img: 'images'
        }
    },
    New_Taipei: {
        url: 'https://data.ntpc.gov.tw/api/datasets/B3A30A19-4B89-4DA2-8D99-18200DC5DFDE/json',
        data: [],
        params: {
            title: 'Name',
            info: 'Description',
            time: 'Opentime',
            img: ''
        }
    },
    Tainan: {
        url: 'https://www.twtainan.net/data/attractions_zh-tw.json',
        data: [],
        params: {
            title: 'name',
            info: 'summary',
            time: 'open_time',
            img: ''
        }
    },
    kaohsiung: {
        url: 'https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c',
        data: ['data', 'XML_Head', 'Infos', 'Info'],
        params: {
            title: 'Name',
            info: 'Description',
            time: 'Opentime',
            img: 'Picture1'
        }
    },
}

export default OPEN_API;