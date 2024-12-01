// Copyright 2022 Kyle King
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const httpRequest = new XMLHttpRequest()
const url = "superheroes.php"

function makeHttpRequest(query){
    if(!httpRequest){
        alert("Error | Unable to create XMLHttpRequest object")
        return false;
    }

    httpRequest.onreadystatechange = () =>{
        if( httpRequest.readyState === XMLHttpRequest.DONE){
            if( httpRequest.status === 200 ) {
                // Do something
                document.getElementById("search-result").innerHTML = httpRequest.responseText
            } else {
                alert(`XMLHttpRequest returned ${httpRequest.status}`)
            }
        }
    }
    httpRequest.open('GET',`superheroes.php?query=${query}`,true)
    httpRequest.send()
}

window.onload = () => {
    document.getElementById('submit').onclick = (e) => {
        let query = document.getElementById('search-index').value
        makeHttpRequest(query)
    }
}
window