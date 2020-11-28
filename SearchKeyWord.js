export default function SearchKeyword({$app, searchData}){
    const $target = document.createElement('input')
    $target.className = 'search-keyword'
    $app.appendChild($target);

    this.$target = $target
    this.searchData = searchData
    
    function fetchData() {
        const url = `https://jjalbot.com/api/jjals?text=${$target.value}`
        return fetch(url).then((response) =>
           response.json()
        )
    }
    
    async function logData() {
        const data = await fetchData();
        searchData(data)
    }

    function initEvent(){
        let timer
        $target.addEventListener('keyup', function(e) {
            if(timer) {
                clearTimeout(timer)    
            }
            timer = setTimeout(function(){
                logData()
            }, 300)
        })
    }

    initEvent()


}