function shufflings(params) {
    return  params.sort(()=>Math.random()-.5);
}

console.log(shufflings(["ab"]))